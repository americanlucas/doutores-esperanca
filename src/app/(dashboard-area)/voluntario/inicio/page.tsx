import CardHeaderItemAtividades from "@/components/UI/Card/Card-Components/CardHeaderItemAtividades";

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
import { MessageSquareCheck } from "lucide-react";
import Link from "next/link";

export default function Inicio() {
	const now = new Date();

	const dataFormatada = now.toLocaleDateString("pt-BR", {
		weekday: "long", // Quinta-feira
		day: "numeric", // 16
		month: "long", // de abril
		year: "numeric", // de 2026
	});

	const resultado =
		dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

	return (
		<>
			<div>
				{/* Capturar o nome do banco de dados */}
				<h1 className="h1">Olá, Pedro</h1>
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
				<CardStats titulo="Inscrições" quantidade={3} as="black" />
				<CardStats titulo="Realizadas" quantidade={0} as="yellow" />
				<CardStats titulo="Horas" quantidade={4} as="green" />
				<CardStats
					titulo="Perfil Completo"
					quantidade={80}
					as="green"
					percent
				/>
			</div>
			<div className="grid-2 gap-md">
				<Card>
					<CardHeader>
						<CardTitle>Próximas Atividades</CardTitle>
					</CardHeader>
					<CardContent className="flex-c">
						<CardHeaderItemAtividades
							titulo="Hospital Santa Lúcia Sul"
							modalidade="Canto"
							turno="Manhã"
							dia="20"
							mes="Jun"
							status="Confirmada"
						/>
						<Separator className="separator-h mt-4" />
						<CardHeaderItemAtividades
							titulo="Hospital Santa Lúcia Norte"
							modalidade="Canto"
							turno="Tarde"
							dia="20"
							mes="Jun"
							status="Pendente"
						/>
						<Separator className="separator-h mt-4" />
						<CardHeaderItemAtividades
							titulo="Hospital Santa Lúcia Sul"
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
						<CardTitle className="flex-r items-center justify-between">
							Progresso do Perfil
							<Link href={"/voluntario/perfil"}>
								<Button variant={"link"}>
									Completar Perfil
								</Button>
							</Link>
						</CardTitle>
					</CardHeader>
					<CardContent className="flex-c gap-md">
						<div>
							<CardProgress
								label="Dados Pessoais"
								progressValue={100}
								as="green"
							/>
						</div>
						<div>
							<CardProgress
								label="Endereço"
								progressValue={100}
								as="green"
							/>
						</div>
						<div>
							<CardProgress
								label="Anexos"
								progressValue={40}
								as="yellow"
							/>
						</div>
						<div>
							<CardProgress
								label="Telefone"
								progressValue={0}
								as="red"
							/>
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
