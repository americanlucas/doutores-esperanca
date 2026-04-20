import { MessageSquareWarning } from "lucide-react";
import { Button } from "../Styled-Components/button";
import {
	Card,
	CardHeader,
	CardTitle,
} from "../Styled-Components/card";
import CardStats from "./Card-Components/CardStats";
import CardMessage from "./Card-Components/CardMessage";

export default function CardAtividades() {
	return (
		<Card>
			{/* Capturar do banco de dados */}
			<CardHeader>
				<CardTitle>Resumo de Atividades</CardTitle>
				<div className="grid-3 gap-md">
					<CardStats as="black" quantidade={2} titulo="Inscrições" />
					<CardStats as="green" quantidade={0} titulo="Realizadas" />
					<CardStats as="black" quantidade={4} titulo="Horas" />
				</div>
			</CardHeader>
			<CardHeader>
				<CardTitle>Avisos</CardTitle>
				<div className="grid-1 gap-md">
					<CardMessage
						bgColor="message"
						textColor="message"
						icon={MessageSquareWarning}
						title="Treinamento"
						message="Caros voluntários, nosso treinamento ocorrerá amanhã às 9h via Google Meet!"
					/>
				</div>
			</CardHeader>
		</Card>
	);
}
