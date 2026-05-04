'use client'
import FormBotao from "@/components/UI/Form/FormBotao";
import FormInput from "@/components/UI/Form/FormInput";
import FormLink from "@/components/UI/Form/FormLink";
import FormLogo from "@/components/UI/Form/FormLogo";
import { Login } from "@/lib/actions";
import Form from "next/form";
import { useActionState } from "react";

export default function Home() {
	const [state, action] = useActionState(Login, undefined)

	return (
		<>
			<Form className="form-file" action={action}>
				<FormLogo />
				<div className="input-form">
					<FormInput
						label="E-Mail"
						name="email"
						type="email"
						placeholder="Digite seu email"
					/>
					{state?.errors.email && <span>{state.errors.email}</span>}
					<FormInput
						label="Senha"
						name="password"
						type="password"
						placeholder="********"
						maxLength={255}
					/>
					{state?.errors.senha && <span>{state.errors.senha}</span>}
				</div>
				<div className="link-form">
					<FormLink
						href="/recuperar-senha"
						title="Esqueci Minha Senha"
					/>
					<FormLink href="/cadastrar-usuario" title="Cadastre-se" />
					<FormLink
						href="/cadastrar-voluntario"
						title="Deseja ser voluntário?"
					/>
				</div>
				<FormBotao name="submit" title="Entrar" />
			</Form>
		</>
	);
}
