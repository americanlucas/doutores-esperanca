import CardBadge from "@/components/UI/Card/Card-Components/CardBadge";
import CardHeaderItemInscricoes from "@/components/UI/Card/Card-Components/CardHeaderItemInscricoes";
import CardLabelValue from "@/components/UI/Card/Card-Components/CardLabelValue";
import CardStats from "@/components/UI/Card/Card-Components/CardStats";
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
				<Card className="border-gray-200">
					<CardContent className="p-4">
						<div className="flex items-center gap-4">
							<div className="text-center min-w-15 p-3 bg-gray-50 rounded-lg">
								<p className="text-2xl font-bold text-gray-900">
									20
								</p>
								<p className="text-xs text-gray-500 uppercase">
									Jun
								</p>
							</div>

							<div className="flex-1 min-w-0">
								<div className="flex items-center gap-md mb-1">
									<h3 className="font-semibold text-gray-900">
										Hospital Brasília
									</h3>
									<Badge className="bg-purple-100 text-purple-700">
										Canto
									</Badge>
								</div>
								<div className="flex items-center gap-4 text-sm text-gray-500">
									<span className="flex items-center gap-1">
										<Clock className="w-3 h-3" />
										Manhã
									</span>
									<span className="flex items-center gap-1">
										<MapPin className="w-3 h-3" />
										St. de Habitações Individuais Sul QI 15
										- Lago Sul
									</span>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="flex gap-1">
									<CardBadge
										titulo="Confirmada"
										color="verde"
									></CardBadge>
									<Button variant="ghost" size="sm">
										<Edit className="w-4 h-4" />
									</Button>
									<Button
										variant="ghost"
										size="sm"
										className="text-red-600 hover:text-red-700 hover:bg-red-50"
									>
										<Trash2 className="w-4 h-4" />
									</Button>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
