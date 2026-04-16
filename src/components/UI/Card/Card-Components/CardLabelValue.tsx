import { CardDescription } from "../../Styled-Components/card";

interface CardLabelValueProps {
    label: string
    value: string
}

export default function CardLabelValue({ label, value }: CardLabelValueProps) {
	return (
		<div>
			<CardDescription>{label}</CardDescription>
			<span>{value}</span>
		</div>
	);
}
