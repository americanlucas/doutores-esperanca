"use server";
import z from "zod";
import { CadastroFormSchema, FormState, LoginFormSchema } from "./validation";
import { db } from "@/db";
import { voluntarios } from "@/db/schema";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
enum Genero {
	masculino = "Masculino",
	feminino = "Feminino",
	outro = "Outro",
}

export async function Cadastro(state: FormState, formData: FormData) {
	const validacao = CadastroFormSchema.safeParse({
		nome: formData.get("nome") as string,
		genero: formData.get("genero") as string,
		email: formData.get("email") as string,
		telefone: formData.get("telefone") as string,
		cpf: formData.get("cpf") as string,
		senha: formData.get("senha") as string,
	});

	if (!validacao.success) {
		return {
			errors: z.flattenError(validacao.error).fieldErrors,
		};
	}

	const validado = validacao.data;
	const hashedPassword = bcrypt.hashSync(validado.senha, 10);

	await db.insert(voluntarios).values({
		nome: validado.nome,
		genero: validado.genero as Genero,
		email: validado.email,
		telefone: validado.telefone,
		cpf: validado.cpf,
		senha: hashedPassword,
		endereco: null,
		bairro: null,
		cargo: null,
		cep: null,
		data_nascimento: null,
	});

	redirect("/");
}

export async function Login(state: FormState, formData: FormData) {
	const validacao = LoginFormSchema.safeParse({
		email: formData.get("email") as string,
		senha: formData.get("senha") as string,
	});

	if (!validacao.success) {
		return {
			errors: z.flattenError(validacao.error).fieldErrors,
		};
	}

	const { email, senha } = validacao.data;

	// Buscar voluntário por email
	const usuario = await db
		.select()
		.from(voluntarios)
		.where(eq(voluntarios.email, email));

	// Validar se usuário existe
	if (!usuario || usuario.length === 0) {
		return {
			errors: {
				email: ["Email não encontrado"],
			},
		};
	}

	// Validar senha
	const validaSenha = bcrypt.compareSync(senha, usuario[0].senha);

	if (!validaSenha) {
		return {
			errors: {
				senha: ["Senha incorreta"],
			},
		};
	}

	// Login bem-sucedido
	redirect("/voluntario/inicio");
}
