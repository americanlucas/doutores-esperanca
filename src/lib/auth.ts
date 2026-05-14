import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/db";
import { voluntarios } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				senha: { label: "Senha", type: "password" },
			},
			async authorize(credentials, request) {
				if (!credentials?.email || !credentials?.senha) {
					return null;
				}

				const voluntario = await db
					.select()
					.from(voluntarios)
					.where(eq(voluntarios.email, credentials.email as string))
					.limit(1)
					.then((rows) => rows[0]);

				if (!voluntario) {
					return null;
				}

				const senhaValida = await bcrypt.compare(
					credentials.senha as string,
					voluntario.senha,
				);

				if (!senhaValida) {
					return null;
				}

				// Retorna todos os dados do usuário que você quer na sessão
				return {
					id: voluntario.id.toString(),
					nome: voluntario.nome,
					email: voluntario.email,
					cpf: voluntario.cpf,
					telefone: voluntario.telefone,
					genero: voluntario.genero ?? "Não Informado",
					cargo: voluntario.cargo ?? "Não Informado",
					endereco: voluntario.endereco ?? "Não Informado",
					bairro: voluntario.bairro ?? "Não Informado",
					cep: voluntario.cep ?? "Não Informado",
					dataNascimento: voluntario.data_nascimento ?? "Não Informado",
					criadoEm: voluntario.criado_em ?? "Não Informado"
				};
			},
		}),
	],
	callbacks: {
		// Callback JWT - adiciona dados do usuário ao token
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.nome = user.nome;
				token.email = user.email;
				token.cpf = user.cpf;
				token.telefone = user.telefone;
				token.genero = user.genero;
				token.cargo = user.cargo;
				token.endereco = user.endereco;
				token.bairro = user.bairro;
				token.cep = user.cep;
				token.dataNascimento = user.dataNascimento;
				token.criadoEm = user.criadoEm;
			}
			return token;
		},
		// Callback Session - passa dados do token para a sessão
		async session({ session, token }) {
			if (token && session.user) {
				session.user.id = token.id as string;
				session.user.nome = token.nome as string;
				session.user.email = token.email as string;
				session.user.cpf = token.cpf as string;
				session.user.telefone = token.telefone as string;
				session.user.genero = token.genero as string;
				session.user.cargo = token.cargo as string | undefined;
				session.user.endereco = token.endereco as string | undefined;
				session.user.bairro = token.bairro as string | undefined;
				session.user.cep = token.cep as string | undefined;
				session.user.dataNascimento = token.dataNascimento as string | undefined;
				session.user.criadoEm = token.criadoEm as string | undefined;
			}
			return session;
		},
	},
	pages: {
		signIn: "/",
	},
	session: {
		strategy: "jwt",
	},
});