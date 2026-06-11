import { Badge } from "../../Styled-Components/badge";

interface CardBadgeProps {
	titulo?: string;
	color: "green" | "blue" | "orange" | "purple" | "muted"
	className?: string;
}

const colorClass = {
		green: "text-green-600 bg-green-50",
		blue: "text-blue-600 bg-blue-50",
		orange: "text-orange-600 bg-orange-50",
		purple: "text-purple-600 bg-purple-50",
		muted: "text-gray-500 bg-gray-50",
	};

export default function CardBadge({
	titulo,
	color,
	className,
}: CardBadgeProps) {
	

	return (
		<div className={`rounded-full ${colorClass[color]}`}>
			<Badge className={`text-sm ${colorClass[color]} ${className}`}>{titulo}</Badge>
		</div>
	);
}
