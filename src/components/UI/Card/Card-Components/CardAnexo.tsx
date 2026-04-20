import { CardDescription, CardTitle } from "../../Styled-Components/card";
import { FileUser } from "lucide-react";
import CardBadge from "./CardBadge";
import { Separator } from "../../Styled-Components/separator";
import { Button } from "../../Styled-Components/button";

interface CardAnexoProps {
    title: string
    descricao: string
	status: "enviado" | "revisão" | "pendente" ;
}

export default function CardAnexo({ ...props }: CardAnexoProps) {
	const borderColorClass = {
		enviado: "border-l-green-800/60",
		revisão: "border-l-amber-600/60",
		pendente: "border-l-red-800/60",
	};

	return (
		<div className={`flex-c rounded-xl px-6 py-4 gap-2 border-2 ${borderColorClass[props.status]}`}>
				<FileUser size={20}/>
			<div className="flex-r items-center justify-between">
                <div>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.descricao}</CardDescription>
                </div>
                {props.status === "enviado" && <CardBadge titulo="Enviado" as="green" />}
                {props.status === "revisão" && <CardBadge titulo="Revisão" as="muted" />}
                {props.status === "pendente" && <CardBadge titulo="Pendente" as="muted" />}
			</div>
			<Separator className="my-1"/>
            <div className="flex-r justify-between items-center">
                {props.status === "enviado" || props.status === "revisão" ?
                    <CardDescription>Enviado em 10/01/2024</CardDescription> : 
                    <CardDescription className="text-red-800">Não Enviado</CardDescription>         
                }
                
                {props.status === "enviado" || props.status === "revisão" ?
                    <div className="flex-r gap-2">
                        <Button variant={"outline"}>Visualizar</Button>
                        <Button variant={"destructive"}>Substituir</Button>
                    </div> : 
                    <Button variant={"outline"}>Enviar</Button>
                }
            </div>
		</div>
	);
}
