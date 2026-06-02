import { ElementType } from "react";
import {   
	Card,
	CardContent, 
} from "../../Styled-Components/card";

interface CardStatsProps {
	quantidade: number
	titulo: string;
	as: "black" | "green" | "red" | "yellow";
	icon: ElementType
	percent?: boolean
}

export default function CardStats({icon: Icon, as: color, ...props }: CardStatsProps) {

	const colorClass = {
		black: "text-black",
		green: "text-green-500/80",
		red: "text-red-500/80",
		yellow: "text-amber-500/80",
	};

	return (
		<Card className="pt-2 border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Icon className={`w-5 h-5 ${colorClass[color]}`} />
              </div>
              <div>
                <p className="text-2xl font-bold">{props.quantidade}{props.percent && "%"}</p>
                <p className="text-sm text-gray-500">{props.titulo}</p>
              </div>
            </div>
          </CardContent>
        </Card>
	);
}
