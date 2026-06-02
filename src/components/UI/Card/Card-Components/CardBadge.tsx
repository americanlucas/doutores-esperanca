import { VoluntarioData } from "@/hooks/useVoluntario";
import { ElementType } from "react";
import { Badge } from "../../Styled-Components/badge";

interface CardBadgeProps {
	titulo: string | undefined;
	color: "azul" | "roxo" | "cinza" | "laranja" | "verde" | "vermelho";
	className?: string;
}

export default function CardBadge({color, ...props}: CardBadgeProps) {
	const colorClass = {
		azul: "bg-blue-100 text-blue-700",
		roxo: "bg-purple-100 text-purple-700",
		cinza: "bg-gray-100 text-gray-700",
		laranja: "bg-orange-100 text-orange-700",
		verde: "bg-green-100 text-green-700",
		vermelho: "bg-red-100 text-red-700",
	};

	return (
		<>
			<Badge className={`${colorClass[color]} ${props.className}`}>{props.titulo}</Badge>
		</>
	);
}
