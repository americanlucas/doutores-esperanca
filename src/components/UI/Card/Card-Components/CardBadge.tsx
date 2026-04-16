interface CardBadgeProps {
	titulo: string
	as?: "green" | "muted"
	className?: string
}

export default function CardBadge({ titulo, as, className }: CardBadgeProps) {
	const bgClass = as === "green" ? "bg-green-50" : "bg-muted";
	const textClass = as === "green" ? "text-green-700" : "text-muted-foreground";

	return (
		<p className={`${bgClass} ${textClass} ${className} border w-fit py-1 px-2 rounded-full`}>
			{titulo}
		</p>
	);
}
