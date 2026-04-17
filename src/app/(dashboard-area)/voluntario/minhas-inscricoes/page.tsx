import CardBadge from "@/components/UI/Card/Card-Components/CardBadge";
import CardHeaderItemInscricoes from "@/components/UI/Card/Card-Components/CardHeaderItemInscricoes";
import CardLabelValue from "@/components/UI/Card/Card-Components/CardLabelValue";
import CardStats from "@/components/UI/Card/Card-Components/CardStats";
import { Button } from "@/components/UI/Styled-Components/button";
import { Card, CardDescription } from "@/components/UI/Styled-Components/card";
import { Separator } from "@/components/UI/Styled-Components/separator";
import { Music2, Plus } from "lucide-react";

export default function MinhasInscricoes() {
	return (
		<>
			{/* TÍTULO E BOTÃO */}
			<div className="flex-r justify-between">
				<h1 className="h1">Minhas Inscrições</h1>
				<Button variant={"outline"}>
					<Plus />
					Nova Inscrição
				</Button>
			</div>
			{/* ESTATÍSTICAS */}
			<div className="grid-4 gap-md ">
				<CardStats as="black" quantidade={2} titulo="Total"></CardStats>
				<CardStats
					as="green"
					quantidade={2}
					titulo="Confirmadas"
				></CardStats>
				<CardStats
					as="red"
					quantidade={0}
					titulo="Pendentes"
				></CardStats>
				<CardStats
					as="black"
					quantidade={0}
					titulo="Realizadas"
				></CardStats>
			</div>
			{/* FILTROS */}
			<div className="flex-r items-center gap-md ">
				<CardDescription>Filtrar:</CardDescription>
				<CardBadge className="text-sm" as="green" titulo="Todas" />
				<CardBadge
					className="text-sm"
					as="muted"
					titulo="Confirmadas"
				/>
				<CardBadge className="text-sm" as="muted" titulo="Pendentes" />
				<CardBadge className="text-sm" as="muted" titulo="Realizadas" />
			</div>
			{/* CARD GRANDE DE INSCRIÇÕES */}
			<div className="flex-c ">
				<Card className="px-md">
					<div className="flex-r items-center justify-between ">
						<CardHeaderItemInscricoes
							icon={Music2}
							titulo="Hospital Santa Lúcia Sul"
							local="Brasília | DF"
						/>
						<CardBadge className="text-sm" as="green" titulo="Confirmada" />
					</div>
                    <Separator/>
                    <div className="grid-3 px-md">
                        <CardLabelValue label="Data" value="20/06/2024" />
                        <CardLabelValue label="Modalidade" value="Canto" />
                        <CardLabelValue label="Turno" value="Manhã" />
                    </div>
                    <Separator/>
                    <div className="flex-r items-center justify-end gap-md">
                        <Button variant={"destructive"}>Cancelar Inscrição</Button>
                        <Button variant={"outline"}>Editar</Button>
                    </div>
				</Card>
			</div>
		</>
	);
}
