"use client";

import CardMessage from "@/components/UI/Card/Card-Components/CardMessage";
import CardProgress from "@/components/UI/Card/Card-Components/CardProgress";
import CardStats from "@/components/UI/Card/Card-Components/CardStats";
import { Button } from "@/components/UI/Styled-Components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/UI/Styled-Components/card";
import { Separator } from "@/components/UI/Styled-Components/separator";
import {
	BookOpen,
	Calendar,
	MessageSquareCheck,
	TrendingUp,
	Users,
} from "lucide-react";
import Link from "next/link";
import { useVoluntario } from "@/hooks/useVoluntario";
import CardInscricoesAgendadas from "@/components/UI/Card/Card-Components/CardInscricoesAgendadas";

export default function Inicio() {
	const { voluntario, isLoading } = useVoluntario();

	const now = new Date();

	const dataFormatada = now.toLocaleDateString("pt-BR", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const resultado =
		dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

	// Extrai o primeiro nome do usuário
	const primeiroNome = voluntario?.nome.split(" ")[0] || "Voluntário";

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p>Carregando...</p>
			</div>
		);
	}

	return (
		<>
			<div>
				<h1 className="h1">Olá, {primeiroNome}</h1>
				<CardDescription>
					<span>{`${resultado}`}</span>
				</CardDescription>
			</div>
			<div>
				<CardMessage
					bgColor="message"
					textColor="message"
					icon={MessageSquareCheck}
					title="Treinamento"
					message="Caros voluntários, nosso treinamento ocorrerá amanhã às 9h via Google Meet!"
				/>
			</div>
			<div className="grid-4 gap-md">
				<CardStats
					icon={Users}
					titulo="Inscrições"
					quantidade={3}
					color="green"
				/>
				<CardStats
					icon={Calendar}
					titulo="Realizadas"
					quantidade={0}
					color="blue"
				/>
				<CardStats
					icon={TrendingUp}
					titulo="Horas"
					quantidade={4}
					color="orange"
				/>
				<CardStats
					icon={BookOpen}
					titulo="Perfil Completo"
					quantidade={80}
					color="purple"
					percent
				/>
			</div>
			<div className="grid-2 gap-md">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-lg font-semibold">
							Próximos Plantões
						</CardTitle>
						<Link href="/voluntario/minhas-inscricoes">
							<Button variant="link" className="p-0 h-auto">
								Ver todos
							</Button>
						</Link>
					</CardHeader>
					<CardContent className="flex-c gap-md">
						<CardInscricoesAgendadas
							nome_local="Hospital Santa Lúcia Sul"
							modalidade="Canto"
							turno="Manhã"
							dia="20"
							mes="Jun"
							status="Confirmada"
						/>
						<CardInscricoesAgendadas
							nome_local="Hospital Santa Lúcia Norte"
							modalidade="Canto"
							turno="Tarde"
							dia="20"
							mes="Jun"
							status="Pendente"
						/>
						<CardInscricoesAgendadas
							nome_local="Hospital Santa Lúcia Sul"
							modalidade="Canto"
							turno="Manhã"
							dia="20"
							mes="Jun"
							status="Cancelada"
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="text-lg font-semibold flex-r items-center justify-between">
							Progresso do Perfil
							<Link href={"/voluntario/perfil"}>
								<Button variant={"link"}>Completar Perfil</Button>
							</Link>
						</CardTitle>
					</CardHeader>
					<CardContent className="flex-c gap-md justify-around h-full">
						<div className="flex-c gap-1.5">
							<CardProgress
								label="Dados Pessoais"
								progressValue={80}
								as="green"
							/>
							<CardProgress label="Endereço" progressValue={100} as="green" />
							<CardProgress label="Anexos" progressValue={50} as="yellow" />
							<CardProgress label="Inscrições" progressValue={70} as="green" />
						</div>
						<Separator className="mt-4" />
						<div>
							<CardProgress
								label="Perfil geral"
								progressValue={80}
								as="green"
							/>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
