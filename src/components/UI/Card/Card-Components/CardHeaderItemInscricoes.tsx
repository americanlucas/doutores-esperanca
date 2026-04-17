import { ElementType } from "react";
import { CardDescription, CardTitle } from "../../Styled-Components/card";

interface CardHeaderItemInscricoesProps {
    icon: ElementType
    titulo: string
    data?: string
    local?: string
    modalidade?: string
    turno?: "Manhã" | "Tarde"
}

export default function CardHeaderItemInscricoes(props: CardHeaderItemInscricoesProps) {
	return (
		<div className="flex items-center gap-md px-2">
			<div className="bg-green-200/40 rounded p-3 w-fit">
				<props.icon size={20} />
			</div>
			<div>
				<CardTitle>{props.titulo}</CardTitle>
				<CardDescription className="text-xs">
                    {props.local ? `${props.local}` : `${props.data} • ${props.modalidade}`}
				</CardDescription>
			</div>
		</div>
	);
}
