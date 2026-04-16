import { Music2 } from "lucide-react";
import { Button } from "../Styled-Components/button";
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
	CardContent,
} from "../Styled-Components/card";
import Link from "next/link";
import CardBadge from "./Card-Components/CardBadge";
import CardHeaderItemInscricoes from "./Card-Components/CardHeaderItemInscricoes";

export default function CardInscricoes() {
	return (
		<Card>
			<div className="flex-r justify-between px-md pl-6">
				<CardTitle>Minhas Inscrições</CardTitle>
				<Link href="/voluntario/minhas-inscricoes">
					<Button variant="link" size="sm">
						Consultar inscrições
					</Button>
				</Link>
			</div>
			{/* Capturar do banco de dados */}
			<CardContent className="flex-c gap-md">
				<div className="default-card justify-between px-2">
					<CardHeaderItemInscricoes
						icon={Music2}
						titulo="Hospital Santa Lúcia"
						data="20/06/2024"
						modalidade="Canto"
					/>
					<div className="flex items-center gap-md px-2">
						<CardBadge titulo="Canto" />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
