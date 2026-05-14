// lib/voluntario-actions.ts
"use server";

import { db } from "@/db";
import { voluntarios } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";

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
 * Atualiza dados do perfil do voluntário
 */
export async function updateVoluntarioPerfil(data: {
	nome?: string;
	telefone?: string;
	endereco?: string;
	bairro?: string;
	cep?: string;
	dataNascimento?: string;
}) {
	const session = await auth();
	
	if (!session?.user?.id) {
		throw new Error("Usuário não autenticado");
	}

	await db
		.update(voluntarios)
		.set({
			...data,
		})
		.where(eq(voluntarios.id, parseInt(session.user.id)));

	return { success: true };
}

/**
 * Calcula progresso do perfil
 */
export async function calcularProgressoPerfil(voluntarioId: string | undefined) {
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

	const geral = Math.round((dadosPessoais + endereco + anexos + telefone) / 4);

	return {
		dadosPessoais,
		endereco,
		anexos,
		telefone,
		geral,
	};
}