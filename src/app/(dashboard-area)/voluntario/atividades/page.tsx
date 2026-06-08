import CardBadge from "@/components/UI/Card/Card-Components/CardBadge";
import CardHeaderItemInscricoes from "@/components/UI/Card/Card-Components/CardHeaderItemInscricoes";
import CardLabelValue from "@/components/UI/Card/Card-Components/CardLabelValue";
import CardStats from "@/components/UI/Card/Card-Components/CardStats";
import CardAtividades from "@/components/UI/Card/CardAvisos";
import FormInput from "@/components/UI/Form/FormInput";
import { Badge } from "@/components/UI/Styled-Components/badge";
import { Button } from "@/components/UI/Styled-Components/button";
import {
	Card,
	CardContent,
	CardDescription,
} from "@/components/UI/Styled-Components/card";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
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
import { Separator } from "@/components/UI/Styled-Components/separator";
import { Check, CheckCircle2, Clock, Edit, LucideCalculator, MapPin, Music2, Plus, Timer, Trash2 } from "lucide-react";
import Link from "next/link";

export default function Atividades() {
	return (
		<>
			{/* TÍTULO E BOTÃO */}
			<div className="flex-r justify-between">
				<h1 className="h1">Minhas Atividades</h1>
				<Dialog>
					<DialogTrigger asChild>
						<Button id="nova_atividade" variant={"outline"}>
							<Plus />
							Nova Atividade
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Nova Atividade</DialogTitle>
						</DialogHeader>
						<form action="" className="grid grid-cols-2 gap-md">
							<FormInput className="col-span-2"type="text" label="Hospital" name="hospital" placeholder="Nome do hospital"/>
							<FormInput className="col-span-2"type="text" label="Local" name="local" placeholder="Localização da atividade"/>
							<FormInput className="col-span-1"type="date" label="Data" name="data" placeholder="Data da atividade"/>
							<div className="flex-1 col-span-1">
								<label htmlFor="turno">Turno</label>
								<Select name="turno">
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Selecione seu turno" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Escolha seu Turno</SelectLabel>
											<SelectItem value="Manhã">Manhã</SelectItem>
											<SelectItem value="Tarde">Tarde</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className="flex-1 col-span-2">
								<label htmlFor="cargo">Cargo</label>
								<Select name="cargo" disabled>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Selecione seu cargo"/>
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Escolha seu Cargo</SelectLabel>
											<SelectItem value="Música">Música</SelectItem>
											<SelectItem value="Intercessão">Intercessão</SelectItem>
											<SelectItem value="Staff">Staff</SelectItem>
											<SelectItem value="Coordenador de equipes">Coordenador de Equipes</SelectItem>
											<SelectItem value="Comunicação">Comunicação</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className="grid gap-md grid-cols-2 col-span-2">
								<DialogClose asChild>
									<Button type="button" variant="destructive">Cancelar</Button>
								</DialogClose>
								<Button
									type="submit"
									className="bg-blue-600 hover:bg-blue-700 text-white"
								>
									Salvar Alterações
								</Button>
							</div>
						</form>
					</DialogContent>
				</Dialog>
			</div>
			{/* ESTATÍSTICAS */}
			<div className="grid-4 gap-md ">
				<CardStats quantidade={2} icon={LucideCalculator} as="black" titulo="Total"></CardStats>
				<CardStats quantidade={2} icon={Check}
					as="green"
					titulo="Confirmadas"
				></CardStats>
				<CardStats quantidade={2} icon={Timer}
					as="red"
					titulo="Pendentes"
				></CardStats>
				<CardStats quantidade={2} icon={CheckCircle2}
					as="black"
					titulo="Realizadas"
				></CardStats>
			</div>
			{/* FILTROS */}
			<div className="flex-r items-center gap-md ">
				<CardDescription>Filtrar:</CardDescription>
				<CardBadge className="text-sm" color="verde" titulo="Todas" />
				<CardBadge
					className="text-sm"
					color="cinza"
					titulo="Confirmadas"
				/>
				<CardBadge className="text-sm" color="cinza" titulo="Pendentes" />
				<CardBadge className="text-sm" color="cinza" titulo="Realizadas" />
			</div>
			{/* CARD GRANDE DE INSCRIÇÕES */}
			<div className="flex-c gap-md">
				<CardAtividades/>
			</div>
		</>
	);
}
