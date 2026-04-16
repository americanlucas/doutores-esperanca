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
	return (
		<Card>
			<CardHeader>
				<CardTitle>Dados Pessoais</CardTitle>
			</CardHeader>
			<CardContent className="grid-2 gap-md">
				{/* Capturar do banco de dados */}
				<CardLabelValue label="Nome" value="Pedro Álvares Cabral" />
				<CardLabelValue label="E-mail" value="pedro.alvares.cabral@example.com" />
				<CardLabelValue label="Endereço" value="SQN 304, Bloco B, Ap 304" />
				<CardLabelValue label="Cidade" value="Brasília - DF" />
				<CardLabelValue label="Telefone" value="Não informado" />
				<CardLabelValue label="CPF" value="Não informado" />
			</CardContent>
		</Card>
	);
}
