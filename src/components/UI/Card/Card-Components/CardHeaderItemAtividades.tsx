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
		<div className={`flex-r items-center justify-between gap-md p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors ${props.status === "Cancelada" && `opacity-20`}`}>
			<div className="flex items-center gap-md px-2">
				<div className="text-center min-w-12.5">
                    <p className="text-2xl font-bold text-gray-900">{props.dia}</p>
                    <p className="text-xs text-gray-500 uppercase">{props.mes}</p>
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
					<CardBadge titulo={props.status} color={`verde`}/> :
					<CardBadge titulo={props.status} color={`cinza`}/>
			}
		</div>
	);
}
