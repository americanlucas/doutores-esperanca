import { CardDescription } from "../../Styled-Components/card";
import { Progress } from "../../Styled-Components/progress";

interface CardProgressProps {
    label: string
    progressValue: number
	as: "gray" | "green" | "red" | "yellow" | "blue"
}

export default function CardProgress({as: color, label, progressValue}: CardProgressProps) {
	const colorClass = {
        gray: "bg-gray-400",
        green: "bg-green-400",
        red: "bg-red-400",
        yellow: "bg-amber-500",
		blue: "bg-sky-400"
    }

	return (
		<>
			<div className="flex justify-between">
				<CardDescription>{label}</CardDescription>
				<CardDescription>{progressValue}%</CardDescription>
			</div>
			<Progress value={progressValue} className={`${colorClass[color]}`}/>
		</>
	);
}
