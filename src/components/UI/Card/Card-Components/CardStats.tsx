import { ElementType } from "react";
import { Card, CardContent } from "../../Styled-Components/card";

interface CardStatsProps {
	quantidade: number;
	titulo: string;
	color: "green" | "blue" | "orange" | "purple"
	percent?: boolean;
	icon: ElementType
}

export default function CardStats({ icon: Icon, ...props }: CardStatsProps) {
	const colorClass = {
		green: "text-green-600 bg-green-50",
		blue: "text-blue-600 bg-blue-50",
		orange: "text-orange-600 bg-orange-50",
		purple: "text-purple-600 bg-purple-50",
	};

	return (
		<Card key={props.titulo} className="border-gray-200">
			<CardContent className="pt-6">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-3xl font-bold text-gray-900">{props.quantidade}{props.percent && "%"}</p>
						<p className="text-sm text-gray-500">{props.titulo}</p>
						{/* <p className="text-xs text-gray-400">{props.subtitle}</p> */}
					</div>
					<div className={`p-3 rounded-full ${colorClass[props.color]}`}>
						<Icon className={`w-6 h-6`} />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
