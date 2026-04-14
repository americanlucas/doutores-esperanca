import FormInput from "@/components/UI/Form/FormInput";
import Form from "next/form";
import CadastraUsusario from "../cadastrar-usuario/page";
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

export default function CadastraVoluntario() {
	return (
		<>
			<FormLogo className="absolute w-16 left-10" />
			<h1 className="flex items-center justify-center text-2xl font-bold m-4 w-full">
				Cadastro de Voluntário
			</h1>
			<Form action={"/voluntario"}>
				<section className="section-voluntario">
					<div className="grid grid-cols-4 gap-4 p-4 h-full">
						<FormInput
							className="col-span-4"
							type="text"
							label="Endereço"
							name="endereco"
							placeholder="Digite o endereço"
							/* required */
						/>

						<FormInput
							className="col-span-2"
							type="text"
							label="Complemento"
							name="complemento"
							placeholder="Digite o complemento"
							/* required */
						/>
						<FormInput
							className="col-span-2"
							type="text"
							label="Número"
							name="numero"
							placeholder="Digite o número"
							/* required */
						/>
						<FormInput
							className="col-span-2"
							type="text"
							label="Bairro"
							name="bairro"
							placeholder="Digite o bairro"
							/* required */
						/>
						<FormInput
							type="nome"
							label="Cidade"
							name="cidade"
							placeholder="Digite a cidade"
							/* required */
						/>
						{/* Conectar com a API de CEP para preencher ENDEREÇO */}
						<FormInput
							type="cep"
							label="CEP"
							name="cep"
							placeholder="Digite o CEP"
							/* required */
						/>
					</div>
					<div className="flex flex-col p-4 justify-between h-full">
						{/* Criar esse componente como FormSelect */}
						<div className="flex flex-col gap-1">
							<label htmlFor="local">Local</label>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Selecione um Local" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Local</SelectLabel>
										<SelectItem value="local1">Local 1</SelectItem>
										<SelectItem value="local2">Local 2</SelectItem>
										<SelectItem value="local3">Local 3</SelectItem>
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
										<SelectItem value="polo1">Polo 1</SelectItem>
										<SelectItem value="polo2">Polo 2</SelectItem>
										<SelectItem value="polo3">Polo 3</SelectItem>
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
							<label>Nome Completo:</label>
							<span>
								(Fetch "voluntário.nome" no banco de dados)
							</span>
						</div>
						<div>
							<label>CPF:</label>
							<span>
								(Fetch "voluntário.cpf" no banco de dados)
							</span>
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
					<div className="gap-5 p-4 h-full">
						<label className="">
							Função Pretendida
						</label>
						<div className="flex gap-2 px-4">
							<Checkbox
								name="canto"
								id="canto"
							/>
							<label htmlFor="canto">Canto</label>
						</div>
						<div className="flex gap-2 px-4">
							<Checkbox
								name="intercessao"
								id="intercessao"
							/>
							<label htmlFor="intercessao">Intercessão</label>
						</div>
						<div className="flex gap-2 px-4">
							<Checkbox
								name="clown"
								id="clown"
							/>
							<label htmlFor="clown">Clown</label>
						</div>
						<div className="flex gap-2 px-4">
							<Checkbox
								name="staff"
								id="staff"
							/>
							<label htmlFor="staff">Staff</label>
						</div>
					</div>
				</section>
				<FormBotao name="submit" title="Enviar" css="flex mx-auto" />
			</Form>
		</>
	);
}
