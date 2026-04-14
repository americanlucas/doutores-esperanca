import FormBotao from "@/components/UI/Form/FormBotao";
import FormInput from "@/components/UI/Form/FormInput";
import FormLink from "@/components/UI/Form/FormLink";
import FormLogo from "@/components/UI/Form/FormLogo";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/UI/Styled-Components/select";
import Form from "next/form";

export default function CadastraUsuario() {
	return (
		<>
			<Form className="form-file" action={"/"}>
				<FormLogo />
				<div className="input-form">
					<FormInput
						label="Nome"
						name="nome"
						type="text"
						placeholder="Digite seu nome"
						required
					/>
					<label htmlFor="sexo">Sexo</label>
					<Select>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Selecione seu sexo" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Sexo</SelectLabel>
								<SelectItem value="masculino">Masculino</SelectItem>
								<SelectItem value="feminino">Feminino</SelectItem>
								<SelectItem value="outro">Outro</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<FormInput
						label="E-Mail"
						name="email"
						type="email"
						placeholder="Digite seu e-mail"
						required
					/>
					<FormInput
						label="Telefone"
						name="tel"
						type="telefone"
						placeholder="(00) 99999-9999"
						required
						maxLenght={18}
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
				</div>
				<FormLink
					href="/cadastrar-voluntario"
					title="Deseja ser voluntário?"
				/>
				<FormBotao name="submit" title="Enviar" css="mb-4" />
			</Form>
		</>
	);
}
