// lib/voluntario-actions.ts
"use server";

import { db } from "@/db";
import { voluntarios } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { UpdateState } from "./actions";
import { UpdatePerfilSchema, UpdatePerfilState } from "./validation";
import { revalidatePath } from "next/cache";
import z from "zod";

/**
 * Busca dados completos do voluntário logado
 */
export async function getVoluntarioData() {
	const session = await auth();

	if (!session?.user?.id) {
		throw new Error("Usuário não autenticado");
	}

	const voluntario = await db
		.select()
		.from(voluntarios)
		.where(eq(voluntarios.id, parseInt(session.user.id)))
		.limit(1)
		.then((rows) => rows[0]);

	if (!voluntario) {
		throw new Error("Voluntário não encontrado");
	}

	// Não retorne a senha!
	const { senha, ...voluntarioSemSenha } = voluntario;

	return voluntarioSemSenha;
}

/**
 * Busca estatísticas do voluntário (inscrições, horas, etc)
 */
export async function getVoluntarioStats(voluntarioId: string) {
	// Exemplo: buscar do banco de dados
	// const inscricoes = await db.select().from(inscricoes).where(eq(inscricoes.voluntarioId, voluntarioId));

	// Por enquanto, retorna dados mockados
	return {
		totalInscricoes: 3,
		inscricoesRealizadas: 0,
		horasVoluntariado: 4,
		perfilCompleto: 80,
		proximasAtividades: [
			{
				id: "1",
				titulo: "Hospital Santa Lúcia Sul",
				modalidade: "Canto",
				turno: "Manhã",
				dia: "20",
				mes: "Jun",
				status: "Confirmada",
			},
			{
				id: "2",
				titulo: "Hospital Santa Lúcia Norte",
				modalidade: "Canto",
				turno: "Tarde",
				dia: "20",
				mes: "Jun",
				status: "Pendente",
			},
		],
	};
}

/**
 * Action para atualizar perfil via Formulário
 */
export async function UpdatePerfil(
	_prevState: UpdateState,
	formData: FormData,
): Promise<UpdateState> {
	const session = await auth();

	if (!session?.user?.id) {
		return {
			success: false,
			errors: { auth: ["Usuário não autenticado"] },
		};
	}

	const validacao = UpdatePerfilSchema.safeParse({
		nome: formData.get("nome") as string,
		telefone: formData.get("telefone") as string,
		cargo: formData.get("cargo") as string,
		endereco: formData.get("endereco") as string,
		bairro: formData.get("bairro") as string,
		cep: formData.get("cep") as string,
		dataNascimento: formData.get("dataNascimento") as string,
	});

	if (!validacao.success) {
		return {
			success: false,
			errors: z.flattenError(validacao.error).fieldErrors,
		};
	}

	const { nome, telefone, cargo, endereco, bairro, cep, dataNascimento } =
		validacao.data;

	try {
		await db
			.update(voluntarios)
			.set({
				nome,
				telefone,
				cargo: cargo as any, // Cast para o enum do Drizzle
				endereco,
				bairro,
				cep,
				data_nascimento: dataNascimento,
			})
			.where(eq(voluntarios.id, parseInt(session.user.id)));

		revalidatePath("/voluntario/perfil");
		revalidatePath("/voluntario/inicio");

		return { success: true, errors: {} };
	} catch (error) {
		console.error("Erro ao atualizar perfil:", error);
		return {
			success: false,
			errors: { database: ["Erro ao atualizar dados no banco."] },
		};
	}
}

/**
 * Calcula progresso do perfil
 */
export async function calcularProgressoPerfil(
	voluntarioId: string | undefined,
) {
	if (!voluntarioId) {
		return {
			dadosPessoais: 0,
			endereco: 0,
			anexos: 0,
			telefone: 0,
			geral: 0,
		};
	}

	const voluntario = await db
		.select()
		.from(voluntarios)
		.where(eq(voluntarios.id, parseInt(voluntarioId)))
		.limit(1)
		.then((rows) => rows[0]);

	if (!voluntario) {
		return {
			dadosPessoais: 0,
			endereco: 0,
			anexos: 0,
			telefone: 0,
			geral: 0,
		};
	}

	// Calcula progresso de cada seção
	const dadosPessoais =
		(voluntario.nome ? 25 : 0) +
		(voluntario.email ? 25 : 0) +
		(voluntario.cpf ? 25 : 0) +
		(voluntario.genero ? 25 : 0);

	const endereco =
		(voluntario.endereco ? 33 : 0) +
		(voluntario.bairro ? 33 : 0) +
		(voluntario.cep ? 34 : 0);

	const telefone = voluntario.telefone ? 100 : 0;

	// Anexos precisaria verificar em outra tabela
	const anexos = 40; // Exemplo: 40%

	const geral = Math.round(
		(dadosPessoais + endereco + anexos + telefone) / 4,
	);

	return {
		dadosPessoais,
		endereco,
		anexos,
		telefone,
		geral,
	};
}
