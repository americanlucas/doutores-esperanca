// lib/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/db";
import { voluntarios } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { LoginFormSchema } from "./validation";

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: { strategy: "jwt" },
	pages: {
		signIn: "/",
		signOut: "/",
	},
	providers: [
		Credentials({
			name: "credentials",
			credentials: {
				email: {},
				senha: {}, // ← nome deve ser idêntico ao que chega no signIn()
			},
			async authorize(credentials) {
				// Loga para confirmar o que está chegando
				console.log("[AUTHORIZE] credentials recebidos:", credentials);

				const parsed = LoginFormSchema.safeParse({
					email: credentials?.email,
					senha: credentials?.senha,
				});

				if (!parsed.success) {
					console.log(
						"[AUTHORIZE] falha no Zod:",
						parsed.error.flatten(),
					);
					return null;
				}

				const { email, senha } = parsed.data;

				const resultado = await db
					.select()
					.from(voluntarios)
					.where(eq(voluntarios.email, email));

				const usuario = resultado[0];

				if (!usuario) {
					console.log("[AUTHORIZE] usuário não encontrado");
					return null;
				}

				const match = await bcrypt.compare(senha, usuario.senha);
				console.log("[AUTHORIZE] senha confere:", match);

				if (!match) return null;

				return {
					id: String(usuario.id),
					name: usuario.nome,
					email: usuario.email,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.id = user.id;
			return token;
		},
		async session({ session, token }) {
			if (token?.id) session.user.id = token.id as string;
			return session;
		},
	},
});
