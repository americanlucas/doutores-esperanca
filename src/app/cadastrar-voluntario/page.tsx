import FormInput from "@/components/UI/Form/FormInput";
import Form from "next/form";
import CadastraUsusario from "../cadastrar-usuario/page";

export default function CadastraVoluntario() {
	return (
		<>
			<h1 className="flex items-center justify-center text-2xl font-bold m-4 w-full">Cadastro de Voluntário</h1>
			<Form action={""}>
				<section className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b-2 border-gray-800 mx-4 pb-4">
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
			</Form>
		</>
	);
}
