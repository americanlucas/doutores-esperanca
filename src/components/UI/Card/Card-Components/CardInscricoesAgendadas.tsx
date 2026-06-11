import { ElementType } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../Styled-Components/card";
import CardBadge from "./CardBadge";
import Link from "next/link";
import { Button } from "../../Styled-Components/button";
import { Progress } from "../../Styled-Components/progress";

interface CardInscricoesAgendadasProps {
	dia: string;
	mes: string;
	nome_local: string;
	modalidade: string;
	turno: "Manhã" | "Tarde";
	status: "Confirmada" | "Pendente" | "Cancelada";
}

export default function CardInscricoesAgendadas({
	...props
}: CardInscricoesAgendadasProps) {
	return (
		<div className="space-4 flex-r-center gap-md border border-gray-200 hover:bg-gray-100 rounded-lg p-2 transition-all">
			<div className="text-center min-w-[50px] p-3 bg-gray-50 rounded-lg">
				<p className="text-2xl font-bold text-gray-900">{props.dia}</p>
				<p className="text-xs text-gray-500 uppercase">{props.mes}</p>
			</div>
			<div className="flex-1">
				<p className="font-medium text-gray-900">{props.nome_local}</p>
				<p className="text-sm text-gray-500">
					{props.modalidade} • Turno da {props.turno}
				</p>
			</div>
			<CardBadge
				titulo={props.status}
				color={
					props.status === "Confirmada"
						? "green"
						: props.status === "Pendente"
							? "orange"
							: props.status === "Cancelada"
								? "muted"
								: "purple"
				}
			/>
		</div>
	);
}
