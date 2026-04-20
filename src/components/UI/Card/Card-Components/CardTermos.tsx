"use client"

import { Check } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../../Styled-Components/card";
import { Separator } from "../../Styled-Components/separator";
import CardBadge from "./CardBadge";
import CardTermoTopico from "./CardTermoTopico";

export default function CardTermos() {
	return (
		<Card>
			<div className="flex-r justify-between">
				<div className="px-lg">
					<CardTitle>Termo de adesão ao voluntariado — Treineiro</CardTitle>
					<CardDescription>Versão vigente · Publicado em 01/01/2024</CardDescription>
				</div>
				<div className="flex-r-center gap-2 px-lg">
					<CardBadge
						titulo="v2.0"
						as="green"
						className="cursor-pointer"
					/>
					<CardBadge
						titulo="v1.0"
						as="muted"
						className="cursor-pointer"
					/>
				</div>
			</div>
			<Separator className="separator-h" />
			<CardTermoTopico />
			<Separator className="separator-h" />
			<div className="flex-r justify-between">
				<div className="px-lg">
					<CardDescription>Aceito em 10/01/2024</CardDescription>
					<CardTitle className="text-green-700">
						por Pedro Álvares Cabral
					</CardTitle>
				</div>
				<div className="flex-r-center gap-2 px-lg">
					<CardBadge
						titulo="Aceito"
						as="green"
					/>
				</div>
			</div>
		</Card>
	);
}
