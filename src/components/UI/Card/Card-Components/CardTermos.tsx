"use client"

import { Check } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../../Styled-Components/card";
import { Separator } from "../../Styled-Components/separator";
import CardBadge from "./CardBadge";
import CardTermoTopico from "./CardTermoTopico";
import { useVoluntario } from "@/hooks/useVoluntario";

export default function CardTermos() {
	const {voluntario} = useVoluntario()

	const data = new Date()

	return (
		<Card>
			<div className="flex-r justify-between">
				<div className="px-lg">
					<CardTitle>Termo de adesão ao voluntariado — Treineiro</CardTitle>
					<CardDescription>Versão vigente · Publicado em {data.getDay()}/{data.getMonth().toString()}/{data.getFullYear()}</CardDescription>
				</div>
				<div className="flex-r-center gap-2 px-lg">
					<CardBadge
						titulo="v2.0"
						color="green"
						className="cursor-pointer"
					/>
					<CardBadge
						titulo="v1.0"
						color="muted"
						className="cursor-pointer"
					/>
				</div>
			</div>
			<Separator className="separator-h" />
			<CardTermoTopico />
			<Separator className="separator-h" />
			<div className="flex-r justify-between">
				<div className="px-lg">
					<CardDescription>Aceito em {data.getDay()}/{data.getMonth()}/{data.getFullYear()}</CardDescription>
					<CardTitle className="text-green-600">
						por {voluntario?.nome}
					</CardTitle>
				</div>
				<div className="flex-r-center gap-2 px-lg">
					<CardBadge
						titulo="Aceito"
						color="green"
					/>
				</div>
			</div>
		</Card>
	);
}
