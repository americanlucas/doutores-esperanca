// app/page.tsx
"use client";

import FormBotao from "@/components/UI/Form/FormBotao";
import FormInput from "@/components/UI/Form/FormInput";
import FormLink from "@/components/UI/Form/FormLink";
import FormLogo from "@/components/UI/Form/FormLogo";
import { Button } from "@/components/UI/Styled-Components/button";
import { Login, LoginState } from "@/lib/actions";
import Form from "next/form";
import Link from "next/link";
import { useActionState } from "react";

const initialState: LoginState = {
	success: false,
	errors: {},
};

export default function Home() {
	// useActionState espera (prevState, formData) — corrigido em actions.ts
	const [state, action, isPending] = useActionState(Login, initialState);

	return (
		<>
			<Link className="absolute right-5 top-5" href={"/coordenador"}>
				<Button variant={"link"}>Sou Coordenador</Button>
			</Link>
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
					<FormLink href="/cadastrar" title="Cadastre-se" />
					{/* <FormLink href="/cadastrar-voluntario" title="Deseja ser voluntário?"/> */}
				</div>

				<FormBotao
					disabled={isPending}
					name="submit"
					title={isPending ? "Entrando..." : "Entrar"}
				/>
			</Form>
		</>
	);
}
