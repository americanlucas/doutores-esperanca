import { ElementType } from "react";
import { CardTitle } from "../../Styled-Components/card";

interface CardMessageProps {
	icon: ElementType;
	title: string;
	message: string;
}

export default function CardMessage({
	icon: Icon,
	title,
	message,
}: CardMessageProps) {
	return (
		<div className="message-card">
			<div className="flex-r items-center gap-md">
				<Icon className="message-card-title" size={16} />
				<CardTitle className="message-card-title">{title}</CardTitle>
			</div>
			<p>{message}</p>
		</div>
	);
}
