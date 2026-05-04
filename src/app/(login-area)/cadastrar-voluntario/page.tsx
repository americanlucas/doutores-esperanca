import FormInput from "@/components/UI/Form/FormInput";
import Form from "next/form";
import FormLogo from "@/components/UI/Form/FormLogo";
import FormBotao from "@/components/UI/Form/FormBotao";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/UI/Styled-Components/select";
import { Checkbox } from "@/components/UI/Styled-Components/checkbox";
import { Separator } from "@/components/UI/Styled-Components/separator";

export default async function CadastraVoluntario() {
	return (
		<>
			<FormLogo className="absolute w-16 left-10" />
			<h1 className="h1 flex-r-center m-md w-full">
				Cadastro de Voluntário
			</h1>
			<Form action={"/voluntario/inicio"}>
				<section className="section-voluntario">
					<div className="flex-c gap-md p-md h-full">
						<FormInput
							type="text"
							label="Endereço"
							name="endereco"
							placeholder="Digite o endereço"
							/* required */
						/>
						<FormInput
							type="text"
							label="Bairro"
							name="bairro"
							placeholder="Digite o bairro"
							/* required */
						/>
						{/* Conectar com a API de CEP para preencher ENDEREÇO */}
						<FormInput
							className="w-40"
							type="cep"
							label="CEP"
							name="cep"
							placeholder="Digite o CEP"
							maxLength={8}
							/* required */
						/>
					</div>
					<div className="flex flex-col p-4 justify-between h-full">
						<div className="flex flex-col gap-1">
							<label htmlFor="local">Local</label>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Selecione um Local" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Local</SelectLabel>
										<SelectItem value="local1">
											Local 1
										</SelectItem>
										<SelectItem value="local2">
											Local 2
										</SelectItem>
										<SelectItem value="local3">
											Local 3
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="polo">Polo</label>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Selecione um Polo" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Polo</SelectLabel>
										<SelectItem value="polo1">
											Polo 1
										</SelectItem>
										<SelectItem value="polo2">
											Polo 2
										</SelectItem>
										<SelectItem value="polo3">
											Polo 3
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="">
							<FormInput
								type="data"
								name="data"
								label="Data"
								/* required */
							/>
						</div>
					</div>
				</section>
				<Separator className="separator-h" />
				<section className="section-voluntario">
					<div className="gap-4 p-4 h-full">
						<div>
							<label>Nome Completo: </label>
							Pedro
						</div>
						<div>
							<label>CPF: </label>
							000000000
						</div>
						<div>
							<label>Email:</label>
							<span>
								(Fetch "voluntário.email" no banco de dados)
							</span>
						</div>
						<div>
							<label>Telefone:</label>
							<span>
								(Fetch "voluntário.telefone" no banco de dados)
							</span>
						</div>
					</div>
					<div className="gap-4 p-4 h-full">
						<label className="">Função Pretendida</label>
						<div className="flex gap-2 px-4">
							<Checkbox name="canto" id="canto" />
							<label htmlFor="canto">Canto</label>
						</div>
						<div className="flex gap-2 px-4">
							<Checkbox name="intercessao" id="intercessao" />
							<label htmlFor="intercessao">Intercessão</label>
						</div>
						<div className="flex gap-2 px-4">
							<Checkbox name="clown" id="clown" />
							<label htmlFor="clown">Clown</label>
						</div>
						<div className="flex gap-2 px-4">
							<Checkbox name="staff" id="staff" />
							<label htmlFor="staff">Staff</label>
						</div>
					</div>
				</section>
				<FormBotao name="submit" title="Enviar" css="flex mx-auto" />
			</Form>
		</>
	);
}
