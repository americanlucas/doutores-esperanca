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
import { useVoluntario } from "@/hooks/useVoluntario";
import { updateVoluntarioPerfil } from "@/lib/voluntarioActions";
import { useActionState } from "react";
import { UpdateState } from "@/lib/actions";

export default function CardPerfil() {
	const { voluntario, isLoading } = useVoluntario();

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p>Carregando...</p>
			</div>
		);
	}

	// Função para fazer parse seguro de data, evitando timezone issues
	const parseLocalDate = (dateString: string | undefined): Date | null => {
		if (!dateString) return null;
		// Se for apenas YYYY-MM-DD, faz parse manual para manter a data local
		const parts = dateString.split('T')[0].split('-');
		if (parts.length === 3) {
			return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
		}
		return new Date(dateString);
	};

	const criadoEm = parseLocalDate(voluntario?.criadoEm);
	const formattedDate = criadoEm ? criadoEm.toLocaleDateString('pt-BR', {
		day: "numeric",
		month: "long",
		year: "numeric",
	}) : 'Data não disponível';

	const resultado = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

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
							<CardTitle>{voluntario?.nome}</CardTitle>
							<Form action={"voluntario/perfil"}>
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
											defaultValue={voluntario?.nome}
											type="text"
											required
											placeholder="Digite seu nome"
										/>
										<FormInput
											label="Telefone"
											name="telefone"
											defaultValue={voluntario?.telefone}
											type="telefone"
											required
											placeholder="Digite seu telefone"
										/>
										<FormInput
											label="Endereço"
											name="endereco"
											defaultValue={voluntario?.endereco}
											type="text"
											required
											placeholder="Digite seu endereço"
										/>
										<FormInput
											label="Bairro"
											name="bairro"
											defaultValue={voluntario?.bairro}
											type="text"
											required
											placeholder="Digite sua bairro"
										/>
										<FormInput
											label="Cep"
											name="cep"
											defaultValue={voluntario?.cep}
											type="text"
											required
											placeholder="Digite seu cep"
										/>
										<FormInput
											label="Data de Nascimento"
											name="data de Nascimento"
											defaultValue={voluntario?.dataNascimento}
											type="text"
											required
											placeholder="Digite sua Data de Nascimento"
										/>
										<SheetClose
											type="submit"
											className="botao-login"
										>
											Salvar Alterações
										</SheetClose>
									</SheetContent>
								</Sheet>
							</Form>
						</div>
						<CardBadge as="green" titulo={voluntario?.cargo} />
						<CardDescription>
							Membro desde {resultado}
						</CardDescription>
					</div>
				</section>
			</CardHeader>
			<CardContent className="flex-c gap-2">
				<CardProgress
					as="gray"
					label="Perfil Completo"
				/>
			</CardContent>
		</Card>
	);
}
