import { useVoluntario, VoluntarioData } from "@/hooks/useVoluntario";
import { Button } from "../Styled-Components/button";
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
	CardContent,
} from "../Styled-Components/card";
import CardLabelValue from "./Card-Components/CardLabelValue";

export default function CardDados() {
	const { voluntario, isLoading } = useVoluntario();

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p>Carregando...</p>
			</div>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Dados Pessoais</CardTitle>
			</CardHeader>
			<CardContent className="grid-2 gap-md">
				{/* Capturar do banco de dados */}
				<CardLabelValue label="Nome" value={voluntario?.nome} />
				<CardLabelValue label="E-mail" value={voluntario?.email} />
				<CardLabelValue label="Endereço" value={voluntario?.endereco} />
				<CardLabelValue label="Bairro" value={voluntario?.bairro} />
				<CardLabelValue label="Telefone" value={voluntario?.telefone} />
				<CardLabelValue label="CPF" value={voluntario?.cpf} />
			</CardContent>
		</Card>
	);
}
