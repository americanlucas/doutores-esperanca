import Form from "next/form";
import { Button } from "../Styled-Components/button";
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
	CardContent,
} from "../Styled-Components/card";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "../Styled-Components/sheet";
import FormInput from "../Form/FormInput";
import CardBadge from "./Card-Components/CardBadge";
import CardProgress from "./Card-Components/CardProgress";

export default function CardPerfil() {
	return (
		<Card>
			<CardHeader>
				<section className="flex-r justify-between gap-md">
					<div className="flex-r-center p-md bg-sky-50 text-sky-700 rounded-full">
						{/* Aqui entra a foto de perfil */}
						<CardTitle>Foto de Perfil</CardTitle>
					</div>
					<div className="flex-c justify-between w-full gap-0.5">
						<div className="flex-r items-center justify-between w-full">
							{/* Capturar do banco de dados */}
							<CardTitle>Pedro Álvares Cabral</CardTitle>
							<Form action={"/voluntario/perfil"}>
								<Sheet>
									<SheetTitle className="hidden">
										Editar Perfil
									</SheetTitle>
									<SheetTrigger asChild>
										<Button variant={"outline"} size={"sm"}>
											Editar Perfil
										</Button>
									</SheetTrigger>
									<SheetContent className="flex-c p-md gap-md">
										<CardTitle>Editar Perfil</CardTitle>
										<FormInput
											label="Nome"
											name="nome"
											defaultValue="Pedro Álvares Cabral"
											type="text"
											required
											placeholder="Digite seu nome"
										/>
										<FormInput
											label="Endereço"
											name="endereco"
											defaultValue="Seu endereço atual"
											type="text"
											required
											placeholder="Digite seu endereço"
										/>
										<FormInput
											label="E-Mail"
											name="email"
											defaultValue="pedro.alvares.cabral@example.com"
											type="email"
											required
											placeholder="Digite seu e-mail"
										/>
										<FormInput
											label="Cidade"
											name="cidade"
											defaultValue="Sua cidade atual"
											type="text"
											required
											placeholder="Digite sua cidade"
										/>
										<FormInput
											label="Telefone"
											name="telefone"
											defaultValue="(11) 99999-9999"
											type="telefone"
											required
											placeholder="Digite seu telefone"
										/>
										<FormInput
											label="CPF"
											name="cpf"
											defaultValue="123.456.789-00"
											type="text"
											required
											placeholder="Digite seu CPF"
										/>
                                        <SheetClose type="submit" className="botao-login">
                                            Salvar Alterações
                                        </SheetClose>
									</SheetContent>
								</Sheet>
							</Form>
						</div>
						<CardBadge as="green" titulo="Treineiro"/>
						<CardDescription>
							Membro desde Janeiro de 2025.
						</CardDescription>
					</div>
				</section>
			</CardHeader>
			<CardContent className="flex-c gap-2">
				<CardProgress
					as="gray"
					label="Perfil Completo"
					progressValue={80}
				/>
			</CardContent>
		</Card>
	);
}
