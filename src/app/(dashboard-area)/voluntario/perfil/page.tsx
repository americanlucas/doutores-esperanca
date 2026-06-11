"use client";

import CardPerfil from "@/components/UI/Card/CardPerfil";
import CardDados from "@/components/UI/Card/CardDados";
import CardAtividades from "@/components/UI/Card/CardAtividades";
import CardInscricoes from "@/components/UI/Card/CardInscrições";
import { useVoluntario } from "@/hooks/useVoluntario";
import Link from "next/link";

export default function Perfil() {
	return (
		<>
			<h1 className="h1">Meu Perfil</h1>
			<section className="flex-c gap-md">
				<CardPerfil />
				<div className="grid-2 gap-md">
					<CardDados />
					<CardAtividades />
				</div>
				<Link href={"/voluntario/minhas-inscricoes"}>
					<CardInscricoes
						dia={1}
						mes="Jan"
						nome_local="Hospital Santa Lúcia Sul"
						endereco_local="Rua das Flores, 123"
						comeco_turno="08:00"
						final_turno="12:00"
						status="Confirmado"
					/>
				</Link>
			</section>
		</>
	);
}
