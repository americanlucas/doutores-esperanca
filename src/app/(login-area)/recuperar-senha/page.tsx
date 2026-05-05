// src/app/(login-area)/recuperar-senha/page.tsx
"use client";

import { useActionState } from "react";
import FormBotao from "@/components/UI/Form/FormBotao";
import FormInput from "@/components/UI/Form/FormInput";
import FormLink from "@/components/UI/Form/FormLink";
import FormLogo from "@/components/UI/Form/FormLogo";
import Form from "next/form";
import { RecuperarSenha, type RecuperarSenhaState } from "@/lib/actions";

const initialState: RecuperarSenhaState = {
	success: false,
	errors: {},
};

export default function RecuperaSenha() {
	const [state, action, isPending] = useActionState(
		RecuperarSenha,
		initialState,
	);

	return (
		<>
			<Form className="form-file" action={action}>
				<FormLogo />
				<div className="input-form">
					<FormInput
						label="E-Mail"
						name="email"
						type="email"
						placeholder="Digite seu e-mail"
						required
						pattern="text"
						errors={state.errors?.email}
					/>
					<FormInput
						label="CPF"
						name="cpf"
						type="text"
						placeholder="000.000.000-00"
						required
						maxLength={11}
						pattern="cpf"
						errors={state.errors?.cpf}
					/>
					<FormInput
						label="Nova Senha"
						name="senha"
						type="password"
						placeholder="Nova Senha"
						required
						pattern="text"
						errors={state.errors?.senha}
					/>
					<FormInput
						label="Confirmar Senha"
						name="confirmar-senha"
						type="password"
						placeholder="Confirmar Senha"
						required
						pattern="text"
						errors={state.errors?.confirmarSenha}
					/>
				</div>
				{/* <div className="link-form">
					<FormLink href="/cadastrar" title="Cadastre-se" />
					<FormLink
						href="/cadastrar-voluntario"
						title="Deseja ser voluntário?"
					/>
				</div> */}
				<FormBotao
					name="submit"
					title={isPending ? "Enviando..." : "Enviar"}
					disabled={isPending}
				/>
			</Form>
		</>
	);
}
