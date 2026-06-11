import { Clock, DoorClosed, Edit, MapPin, Music2, Trash } from "lucide-react";
import { Button } from "../Styled-Components/button";
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
	CardContent,
} from "../Styled-Components/card";
import Link from "next/link";
import CardBadge from "./Card-Components/CardBadge";
import CardHeaderItemInscricoes from "./Card-Components/CardHeaderItemInscricoes";

interface CardInscricoesProps {
	dia: number;
	mes: string;
	nome_local: string;
	endereco_local: string;
	comeco_turno: string;
	final_turno: string;
	status: "Confirmado" | "Pendente";
}

export default function CardInscricoes(props: CardInscricoesProps) {
	return (
		<Card className="border-gray-200">
			<CardContent className="p-4">
				<div className="flex items-center gap-4">
					<div className="text-center min-w-[60px] p-3 bg-gray-50 rounded-lg">
						<p className="text-2xl font-bold text-gray-900">{props.dia}</p>
						<p className="text-xs text-gray-500 uppercase">{props.mes}</p>
					</div>

					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-md mb-1">
							<h3 className="font-semibold text-gray-900">
								{props.nome_local}
							</h3>
							<CardBadge color="purple" titulo="Canto"/>
						</div>
						<div className="flex-c gap-0.5">
							<div className="flex items-center gap-4 text-sm text-gray-500">
								<span className="flex items-center gap-1">Visita Mensal</span>
							</div>
							<div className="flex items-center gap-4 text-sm text-gray-500">
								<span className="flex items-center gap-1">
									<Clock className="w-3 h-3" />
									{props.comeco_turno} - {props.final_turno}
								</span>
								<span className="flex items-center gap-1">
									<MapPin className="w-3 h-3" />
									{props.endereco_local}
								</span>
							</div>
						</div>
						

					</div>
					<div className="flex-r-center gap-md">
						<CardBadge
							color={
								props.status === "Confirmado"
									? "green"
									: props.status === "Pendente"
										? "orange"
										: "purple"
							}
							titulo={props.status}
						/>
						<Button variant={"secondary"}>
							<Edit className="w-4 h-4" />
						</Button>
						<Button variant={"destructive"}>
							<Trash className="w-4 h-4" />
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
