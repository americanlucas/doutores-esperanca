import z from "zod";

export type LoginState = {
	success?: boolean;
	errors: {
		email?: string[];
		senha?: string[];
	};
};

export const CadastroFormSchema = z.object({
	nome: z
		.string()
		.min(2, { error: "O nome precisa ter mais de dois caracteres." })
		.trim(),
	genero: z.string({ error: "Selecione uma opção válida." }),
	email: z.email({ error: "Insira um email válido." }).trim(),
	telefone: z
		.string()
		.min(10, { error: "O número deve conter DDD + 9 números" })
		.max(11, { error: "Não inclua caracteres especiais" })
		.trim(),
	cpf: z
		.string()
		.min(10, { error: "Insira um CPF válido" })
		.max(11, { error: "Não inclua caracteres especiais" })
		.trim(),
	senha: z
		.string()
		.min(8, { error: "A senha deve conter, no mínimo, 8 caracteres" })
		.regex(/[a-zA-Z]/, { error: "Deve conter, no mínimo, uma letra" })
		.regex(/[0-9]/, { error: "Deve conter, no mínimo, um número" })
		.regex(/[^a-zA-Z0-9]/, {
			error: "Deve conter, no mínimo, um caracter especial",
		})
		.trim(),
});

export const LoginFormSchema = z.object({
	email: z.email({ error: "Insira um email válido." }).trim(),
	senha: z
		.string({ error: "Senha é obrigatória" })
		.min(1, "Senha é obrigatória")
		.min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export const RecuperarSenhaFormSchema = z
	.object({
		email: z.email({ error: "Insira um email válido." }).trim(),
		cpf: z
			.string()
			.min(11, { error: "Insira um CPF válido" })
			.max(11, { error: "Não inclua caracteres especiais" })
			.trim(),
		senha: z
			.string()
			.min(8, { error: "A senha deve conter, no mínimo, 8 caracteres" })
			.regex(/[a-zA-Z]/, { error: "Deve conter, no mínimo, uma letra" })
			.regex(/[0-9]/, { error: "Deve conter, no mínimo, um número" })
			.regex(/[^a-zA-Z0-9]/, {
				error: "Deve conter, no mínimo, um caracter especial",
			})
			.trim(),
		confirmarSenha: z.string().trim(),
	})
	.refine((data) => data.senha === data.confirmarSenha, {
		error: "As senhas não coincidem.",
		path: ["confirmarSenha"],
	});
