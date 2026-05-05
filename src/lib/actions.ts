// lib/actions.ts
"use server";

import z from "zod";
import { CadastroFormSchema, LoginFormSchema, RecuperarSenhaFormSchema } from "./validation";
import { db } from "@/db";
import { voluntarios } from "@/db/schema";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";
import { eq } from "drizzle-orm";

enum Genero {
	masculino = "Masculino",
	feminino = "Feminino",
	outro = "Outro",
}

// Estado tipado para useActionState
export type LoginState = {
	success: boolean;
	errors: Record<string, string[]>;
};

export type CadastroState = {
	success: boolean;
	errors: Record<string, string[]>;
};

export type RecuperarSenhaState = {
	success: boolean;
	errors: Record<string, string[]>;
};

// Assinatura corrigida para useActionState
export async function Cadastro(
	_prevState: CadastroState,
	formData: FormData,
): Promise<CadastroState> {
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
			success: false,
			errors: z.flattenError(validacao.error).fieldErrors,
		};
	}

	const validado = validacao.data;
	const hashedPassword = await bcrypt.hash(validado.senha, 10); // await correto

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

// useActionState requer assinatura: (prevState, formData)
export async function Login(
	_prevState: LoginState,
	formData: FormData,
): Promise<LoginState> {
	const email = formData.get("email") as string;
	const senha = formData.get("senha") as string; // ← confirma que o input tem name="senha"

	// Validação local antes de chamar o NextAuth
	const validacao = LoginFormSchema.safeParse({ email, senha });

	if (!validacao.success) {
		return {
			success: false,
			errors: z.flattenError(validacao.error).fieldErrors,
		};
	}

	try {
		await signIn("credentials", {
			email,
			senha, // ← chave "senha" deve bater com credentials do provider
			redirect: false,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			return {
				success: false,
				errors: { email: ["Email ou senha inválidos."] },
			};
		}
		throw error;
	}

	redirect("/voluntario/inicio");
}

export async function Logout() {
	console.log("🔴 LOGOUT CHAMADO");
	await signOut({ redirectTo: "/" });
}

export async function RecuperarSenha(
	_prevState: RecuperarSenhaState,
	formData: FormData,
): Promise<RecuperarSenhaState> {
	const validacao = RecuperarSenhaFormSchema.safeParse({
		email: formData.get("email") as string,
		cpf: formData.get("cpf") as string,
		senha: formData.get("senha") as string,
		confirmarSenha: formData.get("confirmar-senha") as string,
	});

	if (!validacao.success) {
		return {
			success: false,
			errors: z.flattenError(validacao.error).fieldErrors,
		};
	}

	const { email, cpf, senha } = validacao.data;

	// Verifica se o voluntário existe com o email + CPF informados
	const voluntario = await db
		.select()
		.from(voluntarios)
		.where(eq(voluntarios.email, email))
		.limit(1)
		.then((rows) => rows[0]);

	if (!voluntario || voluntario.cpf !== cpf) {
		return {
			success: false,
			errors: { email: ["Email ou CPF não encontrados."] },
		};
	}

	const hashedPassword = await bcrypt.hash(senha, 10);

	await db
		.update(voluntarios)
		.set({ senha: hashedPassword })
		.where(eq(voluntarios.cpf, cpf));

	redirect("/");
}