import FormBotao from "@/components/UI/Form/FormBotao";
import FormInput from "@/components/UI/Form/FormInput";
import FormLink from "@/components/UI/Form/FormLink";
import FormLogo from "@/components/UI/Form/FormLogo";
import Form from "next/form";

export default function Home() {
	return (
		<>
			<Form className="form-file" action="/dashboard">
				<FormLogo />
				<div className="input-form">
					<FormInput
						label="CPF"
						name="cpf"
						type="text"
						placeholder="000.000.000-00"
						required
						maxLenght={11}
					/>
					<FormInput
						label="Senha"
						name="password"
						type="password"
						placeholder="********"
						maxLenght={255}
						required
					/>
				</div>
				<div className="flex flex-col gap-2">
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
