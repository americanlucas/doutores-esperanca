"use client";
import FormBotao from "@/components/UI/Form/FormBotao";
import FormInput from "@/components/UI/Form/FormInput";
import FormLink from "@/components/UI/Form/FormLink";
import FormLogo from "@/components/UI/Form/FormLogo";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/UI/Styled-Components/select";
import { Cadastro } from "@/lib/actions";
import Form from "next/form";
import { useActionState } from "react";

export default function CadastraUsuario() {
	const [state, action] = useActionState(Cadastro, undefined);
	return (
		<>
			<Form className="form-file" action={action}>
				<FormLogo />
				<div className="input-form">
					<FormInput
						label="Nome"
						name="nome"
						type="text"
						placeholder="Digite seu nome"
					/>
					{state?.errors.nome && <span>{state.errors.nome}</span>}
					<div>
						<label htmlFor="genero">Gênero</label>
						<Select name="genero">
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Selecione seu gênero" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Gênero</SelectLabel>
									<SelectItem value="Masculino">
										Masculino
									</SelectItem>
									<SelectItem value="Feminino">
										Feminino
									</SelectItem>
									<SelectItem value="Outro">Outro</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					{state?.errors.genero && <span>{state.errors.genero}</span>}
					<FormInput
						label="E-Mail"
						name="email"
						type="email"
						placeholder="Digite seu e-mail"
					/>
					{state?.errors.email && <span>{state.errors.email}</span>}
					<FormInput
						label="Telefone"
						name="telefone"
						type="tel"
						placeholder="(00) 99999-9999"
						maxLength={18}
					/>
					{state?.errors.telefone && (
						<span>{state.errors.telefone}</span>
					)}
					<FormInput
						label="CPF"
						name="cpf"
						type="text"
						placeholder="000.000.000-00"
						maxLength={14}
					/>
					{state?.errors.cpf && <span>{state.errors.cpf}</span>}
					<FormInput
						label="Senha"
						name="senha"
						type="password"
						placeholder="Nova Senha"
					/>
					{state?.errors.senha && (
						<div>
							<span>Sua senha deve: </span>
							<ul>
								{state.errors.senha.map((err) => (
									<li className="px-2" key={err}>{err}</li>
								))}
							</ul>
						</div>
					)}
				</div>
				<FormBotao name="submit" title="Enviar" css="mb-4" />
			</Form>
		</>
	);
}
