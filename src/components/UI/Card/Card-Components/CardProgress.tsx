"use client"
import { calcularProgressoPerfil } from "@/lib/voluntarioActions";
import { CardDescription } from "../../Styled-Components/card";
import { Progress } from "../../Styled-Components/progress";
import { voluntarios } from "@/db/schema";
import { useVoluntario } from "@/hooks/useVoluntario";
import { useEffect, useState } from "react";

interface CardProgressProps {
    label: string
    progressValue?: number
	as: "gray" | "green" | "red" | "yellow" | "blue"
}

interface ProgressoPerfil {
	dadosPessoais: number;
	endereco: number;
	anexos: number;
	telefone: number;
	geral: number;
}

export default function CardProgress({as: color, label, progressValue}: CardProgressProps) {
	const { voluntario } = useVoluntario()
	const [progresso, setProgresso] = useState<ProgressoPerfil | null>(null)
	
	const colorClass = {
        gray: "bg-gray-400",
        green: "bg-green-400",
        red: "bg-red-400",
        yellow: "bg-amber-500",
		blue: "bg-sky-400"
    }

	useEffect(() => {
		const fetchProgresso = async () => {
			const resultado = await calcularProgressoPerfil(voluntario?.id?.toString());
			setProgresso(resultado);
		};
		fetchProgresso();
	}, [voluntario?.id])

	return (
		<>
			<div className="flex justify-between">
				<CardDescription>{label}</CardDescription>
				<CardDescription>{progresso?.geral}%</CardDescription>
			</div>
			<Progress value={progresso?.geral} className={`${colorClass[color]}`}/>
		</>
	);
}