import { ElementType } from "react";
import { CardTitle } from "../../Styled-Components/card";

interface CardMessageProps {
	icon: ElementType;
	title: string;
	message: string;
	bgColor: "warning" | "message" | "destructive"
	textColor: "warning" | "message" | "destructive"
}

export default function CardMessage({icon: Icon, ...props}: CardMessageProps) {
	const bgColorClass = {
		warning: "bg-amber-200/60",
		message: "bg-green-200/60",
		destructive: "bg-red-200/60"
	}
	const textColorClass = {
		warning: "text-amber-900",
		message: "text-green-900",
		destructive: "text-red-900"
	}

	return (
		<div className={`flex-c rounded-xl px-6 py-4 gap-2 border border-gray-300 ${bgColorClass[props.bgColor]}`}>
			<div className={`flex-r items-center gap-md ${textColorClass[props.textColor]}`}>
				<Icon size={16} />
				<CardTitle>{props.title}</CardTitle>
			</div>
			<p>{props.message}</p>
		</div>
	);
}
