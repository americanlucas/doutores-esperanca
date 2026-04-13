import FormBotao from "@/components/UI/Form/FormBotao";
import FormInput from "@/components/UI/Form/FormInput";
import FormLink from "@/components/UI/Form/FormLink";
import FormLogo from "@/components/UI/Form/FormLogo";
import Form from "next/form";

export default function RecuperaSenha() {
	return (
		<>
			<Form className="form-file" action={"/"}>
				<FormLogo />
				<div className="input-form">
					<FormInput
						label="E-Mail"
						name="email"
						type="email"
						placeholder="Digite seu e-mail"
						required
					/>
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
						name="senha"
						type="password"
						placeholder="Nova Senha"
						required
					/>
					<FormInput
						label="Confirma Senha"
						name="confirmar-senha"
						type="password"
						placeholder="Confirmar Senha"
						required
					/>
				</div>
				<div className="link-form">
                    <FormLink href="/cadastrar-usuario" title="Cadastre-se" />
                    <FormLink href="/cadastrar-voluntario" title="Deseja ser voluntário?" />
				</div>
				<FormBotao name="submit" title="Enviar" />
			</Form>
		</>
	);
}
