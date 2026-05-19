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
			async authorize(credentials) {
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
					name: voluntario.nome,
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
		async jwt({ token, user, trigger }) {
			if (user) {
				token.id = user.id as string;
				token.nome = user.nome;
				token.name = user.nome;
				token.email = user.email as string;
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

			// Se houver um gatilho de "update", buscamos os dados mais recentes do banco
			if (trigger === "update" && token.id) {
				const voluntario = await db
					.select()
					.from(voluntarios)
					.where(eq(voluntarios.id, parseInt(token.id as string)))
					.limit(1)
					.then((rows) => rows[0]);

				if (voluntario) {
					token.nome = voluntario.nome;
					token.name = voluntario.nome;
					token.telefone = voluntario.telefone;
					token.cargo = voluntario.cargo ?? "Não Informado";
					token.endereco = voluntario.endereco ?? "Não Informado";
					token.bairro = voluntario.bairro ?? "Não Informado";
					token.cep = voluntario.cep ?? "Não Informado";
					token.dataNascimento = voluntario.data_nascimento ?? "Não Informado";
				}
			}

			return token;
		},
		// Callback Session - passa dados do token para a sessão
		async session({ session, token }) {
			if (token && session.user) {
				session.user.id = token.id;
				session.user.nome = token.nome;
				session.user.name = token.nome;
				session.user.email = token.email;
				session.user.cpf = token.cpf;
				session.user.telefone = token.telefone;
				session.user.genero = token.genero;
				session.user.cargo = token.cargo;
				session.user.endereco = token.endereco;
				session.user.bairro = token.bairro;
				session.user.cep = token.cep;
				session.user.dataNascimento = token.dataNascimento;
				session.user.criadoEm = token.criadoEm;
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