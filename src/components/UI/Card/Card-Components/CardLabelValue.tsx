import { CardDescription } from "../../Styled-Components/card";

interface CardLabelValueProps {
    label: string
    value?: string | undefined
}

export default function CardLabelValue({ label, value }: CardLabelValueProps) {
	return (
		<div>
			<CardDescription>{label}</CardDescription>
			<span className={`${value == "Não Informado" && "text-muted-foreground"}`}>{value}</span>
		</div>
	);
}
