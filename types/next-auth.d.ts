import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			nome: string;
			cpf: string;
			telefone: string;
			genero: string;
			cargo?: string;
			endereco?: string;
			bairro?: string;
			cep?: string;
			dataNascimento?: string;
			criadoEm?: string;
		} & DefaultSession["user"];
	}

	interface User extends DefaultUser {
		nome: string;
		cpf: string;
		telefone: string;
		genero: string;
		cargo?: string;
		endereco?: string;
		bairro?: string;
		cep?: string;
		dataNascimento?: string;
		criadoEm?: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		nome: string;
		email: string;
		cpf: string;
		telefone: string;
		genero: string;
		cargo?: string;
		endereco?: string;
		bairro?: string;
		cep?: string;
		dataNascimento?: string;
		criadoEm?: string;
	}
}
