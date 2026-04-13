import FormInput from "@/components/UI/Form/FormInput";
import Form from "next/form";
import CadastraUsusario from "../cadastrar-usuario/page";
import FormLogo from "@/components/UI/Form/FormLogo";
import FormBotao from "@/components/UI/Form/FormBotao";

export default function CadastraVoluntario() {
	return (
		<>
			<FormLogo
				className="absolute w-16 left-10 top-2"
			/>
			<h1 className="flex items-center justify-center text-2xl font-bold m-4 w-full">Cadastro de Voluntário</h1>
			<Form action={"/"}>
				<section className="section-voluntario border-b-2 border-gray-800">
                    <div className="grid grid-cols-4 gap-4 p-4 h-full">
						<FormInput
							className="col-span-4"
							type="text"
							label="Endereço"
							name="endereco"  
							placeholder="Digite o endereço"
						/>

						<FormInput
                            className="col-span-2"
							type="text"
							label="Complemento"
							name="complemento"
							placeholder="Digite o complemento"
						/>
						<FormInput
                            className="col-span-2"
							type="text"
							label="Número"
							name="numero"
							placeholder="Digite o número"
						/>
						<FormInput
                            className="col-span-2"
							type="text"
							label="Bairro"
							name="bairro"
							placeholder="Digite o bairro"
						/>
						<FormInput
							type="nome"
							label="Cidade"
							name="cidade"
							placeholder="Digite a cidade"
						/>
						<FormInput
							type="cep"
							label="CEP"
							name="cep"
							placeholder="Digite o CEP"
						/>
					</div>
                    <div className="flex flex-col p-4 justify-between h-full">
						{/* Criar esse componente como FormSelect */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="local">Local</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-100" name="local" id="local">
                                <option value="local1">Local 1</option>
                                <option value="local2">Local 2</option>
                                <option value="local3">Local 3</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="polo">Polo</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-100" name="polo" id="polo">
                                <option value="polo1">Polo 1</option>
                                <option value="polo2">Polo 2</option>
                                <option value="polo3">Polo 3</option>
                            </select>
                        </div>
                        <div className="">
							<FormInput
								type="data"
								name="data"
								label="Data"
							/>
                        </div>
                    </div>
				</section>
				<section className="section-voluntario">
					<div className="gap-4 p-4 h-full">
						<div>
							<h3 className="font-semibold">Nome Completo:</h3>
							<span>(Fetch "voluntário.nome" no banco de dados)</span>
						</div>
						<div>
							<h3 className="font-semibold">CPF:</h3>
							<span>(Fetch "voluntário.cpf" no banco de dados)</span>
						</div>
						<div>
							<h3 className="font-semibold">Email:</h3>
							<span>(Fetch "voluntário.email" no banco de dados)</span>
						</div>
						<div>
							<h3 className="font-semibold">Telefone:</h3>
							<span>(Fetch "voluntário.telefone" no banco de dados)</span>
						</div>
					</div>
					<div className="gap-4 p-4 h-full">
						<label className="font-semibold">Função Pretendida</label>
						<div className="flex gap-2 px-4">
							<input type="checkbox" name="canto" id="canto"/>
							<label >Canto</label>
						</div>
						<div className="flex gap-2 px-4">
							<input type="checkbox" name="intercessao" id="intercessao"/>
							<label >Intercessão</label>
						</div>
						<div className="flex gap-2 px-4">
							<input type="checkbox" name="clown" id="clown"/>
							<label >Clown</label>
						</div>
						<div className="flex gap-2 px-4">
							<input type="checkbox" name="staff" id="staff"/>
							<label >Staff</label>
						</div>
					</div>
				</section>
				<FormBotao
					name="submit"
					title="Enviar"
					css="mx-auto"
				/>
			</Form>
		</>
	);
}
