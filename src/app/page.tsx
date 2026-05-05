// app/page.tsx
"use client";

import FormBotao from "@/components/UI/Form/FormBotao";
import FormInput from "@/components/UI/Form/FormInput";
import FormLink from "@/components/UI/Form/FormLink";
import FormLogo from "@/components/UI/Form/FormLogo";
import { Login, LoginState } from "@/lib/actions";
import Form from "next/form";
import { useActionState } from "react";

const initialState: LoginState = {
	success: false,
	errors: {},
};

export default function Home() {
	// useActionState espera (prevState, formData) — corrigido em actions.ts
	const [state, action, isPending] = useActionState(Login, initialState);

	return (
		<Form className="form-file" action={action}>
			<FormLogo />

			<div className="input-form">
				<FormInput
					label="E-Mail"
					name="email"
					type="email"
					placeholder="Digite seu email"
				/>
				{state?.errors?.email && (
					<span className="text-red-500 text-sm">
						{state.errors.email[0]}
					</span>
				)}

				<FormInput
					label="Senha"
					name="senha"
					type="password"
					placeholder="********"
					maxLength={255}
				/>
				{/* Corrigido: chave era "senha" no schema mas "password" no input */}
				{state?.errors?.senha && (
					<span className="text-red-500 text-sm">
						{state.errors.senha[0]}
					</span>
				)}
			</div>

			<div className="link-form">
				<FormLink href="/recuperar-senha" title="Esqueci Minha Senha" />
				<FormLink href="/cadastrar-usuario" title="Cadastre-se" />
				<FormLink
					href="/cadastrar-voluntario"
					title="Deseja ser voluntário?"
				/>
			</div>

			<FormBotao
				disabled={isPending}
				name="submit"
				title={isPending ? "Entrando..." : "Entrar"}
			/>
		</Form>
	);
}
