"use client";

import CardBadge from "@/components/UI/Card/Card-Components/CardBadge";
import CardStats from "@/components/UI/Card/Card-Components/CardStats";
import CardInscricoes from "@/components/UI/Card/CardInscrições";
import FormInput from "@/components/UI/Form/FormInput";
import { Button } from "@/components/UI/Styled-Components/button";
import { CardDescription, CardTitle } from "@/components/UI/Styled-Components/card";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/UI/Styled-Components/dialog";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/UI/Styled-Components/select";
import {
	Check,
	CheckCheck,
	ClockAlertIcon,
	PenToolIcon,
	Plus,
} from "lucide-react";

export default function MinhasInscricoes() {
	const isPending = false;

	return (
		<>
			{/* TÍTULO E BOTÃO */}
			<div className="flex-r justify-between">
				<h1 className="h1">Minhas Inscrições</h1>
				<Dialog>
					<DialogTitle className="hidden">
						Nova Inscrição
					</DialogTitle>
					<DialogTrigger asChild>
						<Button variant={"outline"}>
							<Plus />
							Nova Inscrição
						</Button>
					</DialogTrigger>
					<DialogContent className="flex-c p-md gap-md overflow-y-auto max-h-[90vh]">
						<CardTitle>Nova Inscrição</CardTitle>
						<CardDescription>
							Selecione o hospital, a data e o horário da atividade em que deseja participar.
						</CardDescription>
						<form action={"/voluntario/minhas-inscricoes"} className="grid-4 gap-4">
							<div className="col-span-4">
								<label htmlFor="localHospital">Local / Hospital</label>
								<Select name="localHospital" required>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Selecione o hospital" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Hospitais</SelectLabel>
											<SelectItem value="Hospital Santa Lúcia Sul">Hospital Santa Lúcia Sul</SelectItem>
											<SelectItem value="Hospital Santa Lúcia Norte">Hospital Santa Lúcia Norte</SelectItem>
											<SelectItem value="Hospital de Base">Hospital de Base</SelectItem>
											<SelectItem value="Hospital Brasília">Hospital Brasília</SelectItem>
											<SelectItem value="Hospital Anchieta">Hospital Anchieta</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<FormInput
								className="col-span-4"
								label="Data"
								name="dataInscricao"
								type="date"
								required
								placeholder="Selecione a data"
							/>
							<FormInput
								className="col-span-2"
								label="Início"
								name="horaInicio"
								type="time"
								required
							/>
							<FormInput
								className="col-span-2"
								label="Fim"
								name="horaFim"
								type="time"
								required
							/>
							<div className="col-span-4">
								<label htmlFor="tipoAtividade">Tipo de Atividade</label>
								<Select name="tipoAtividade" required>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Selecione o tipo de atividade" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Tipos de Atividade</SelectLabel>
											<SelectItem value="Visita Mensal">Visita Mensal</SelectItem>
											<SelectItem value="Visita Extraordinária (Para Membros)">Visita Extraordinária (Para Membros)</SelectItem>
											<SelectItem value="Eventos (Apresentações / Divulgação)">Eventos (Apresentações / Divulgação)</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>

							<div className="grid-2 col-span-4 gap-md mt-4">
								<DialogClose asChild>
									<Button type="button" variant="destructive">Cancelar</Button>
								</DialogClose>
								<Button
									type="submit"
									disabled={isPending}
									className="bg-blue-600 hover:bg-blue-700 text-white"
								>
									{isPending ? "Salvando..." : "Salvar Alterações"}
								</Button>
							</div>
						</form>
					</DialogContent>
				</Dialog>
			</div>
			{/* ESTATÍSTICAS */}
			<div className="grid-4 gap-md ">
				<CardStats
					icon={Check}
					color="green"
					quantidade={2}
					titulo="Total"
				></CardStats>
				<CardStats
					icon={CheckCheck}
					color="blue"
					quantidade={2}
					titulo="Confirmadas"
				></CardStats>
				<CardStats
					icon={ClockAlertIcon}
					color="orange"
					quantidade={0}
					titulo="Pendentes"
				></CardStats>
				<CardStats
					icon={PenToolIcon}
					color="purple"
					quantidade={0}
					titulo="Realizadas"
				></CardStats>
			</div>
			{/* FILTROS */}
			<div className="flex-r items-center gap-md ">
				<CardDescription>Filtrar:</CardDescription>
				<CardBadge color="green" titulo="Todas" />
				<CardBadge color="purple" titulo="Confirmadas" />
				<CardBadge color="purple" titulo="Pendentes" />
				<CardBadge color="purple" titulo="Realizadas" />
			</div>
			{/* CARD GRANDE DE INSCRIÇÕES */}
			<div className="flex-c ">
				<CardInscricoes
					dia={20}
					mes="Jun"
					nome_local="Hospital Brasília"
					endereco_local="St. de Habitações Individuais Sul QI 15 - Lago Sul, Brasília"
					comeco_turno="08:00"
					final_turno="12:00"
					status="Confirmado"
				/>
			</div>
		</>
	);
}
