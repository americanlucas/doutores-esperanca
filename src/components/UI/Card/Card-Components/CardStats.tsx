import { CardDescription } from "../../Styled-Components/card";

interface CardStatsProps {
    quantidade: number
    titulo: string
    as: "black" | "green" | "red" | "yellow"
    percent?: boolean
}

export default function CardStats({as: color, ...props}: CardStatsProps) {

    const colorClass = {
        black: "text-black",
        green: "text-green-500/80",
        red: "text-red-500/80",
        yellow: "text-amber-500/80"
    }

	return (
		<div className="muted-card">
			<span className={`h1 ${colorClass[color]}`}>{props.quantidade}{props.percent && `%`}</span>
			<CardDescription>{props.titulo}</CardDescription>
		</div>
	);
}
