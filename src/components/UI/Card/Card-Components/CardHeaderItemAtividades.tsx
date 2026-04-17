import { ElementType } from "react";
import { CardDescription, CardTitle } from "../../Styled-Components/card";
import CardBadge from "./CardBadge";

interface CardHeaderItemAtividadesProps {
	titulo: string;
	dia: string;
	mes: string;
	modalidade: string;
	turno: "Manhã" | "Tarde";
	status: "Confirmada" | "Pendente" | "Cancelada"
}

export default function CardHeaderItemAtividades(
	props: CardHeaderItemAtividadesProps,
) {
	return (
		<div className={`flex-r items-center justify-between ${props.status === "Cancelada" && `opacity-20`}`}>
			<div className="flex items-center gap-md px-2">
				<div className="flex-c-center py-2 px-md bg-green-200/40 rounded w-fit">
					<h2 className="h3">{props.dia}</h2>
					<h3>{props.mes}</h3>
				</div>
				<div>
					<CardTitle>{props.titulo}</CardTitle>
					<CardDescription className="text-xs">
						{props.modalidade} • Turno da {props.turno}
					</CardDescription>
				</div>
			</div>
			{
				props.status === "Confirmada" ? 
					<CardBadge titulo={props.status} as={`green`}/> :
					<CardBadge titulo={props.status} as={`muted`}/>
			}
		</div>
	);
}
