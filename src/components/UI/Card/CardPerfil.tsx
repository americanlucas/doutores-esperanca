"use client";

import { Button } from "../Styled-Components/button";
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
	CardContent,
} from "../Styled-Components/card";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "../Styled-Components/dialog";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/UI/Styled-Components/select";
import FormInput from "../Form/FormInput";
import CardBadge from "./Card-Components/CardBadge";
import CardProgress from "./Card-Components/CardProgress";
import { useVoluntario } from "@/hooks/useVoluntario";
import { useActionState, useEffect } from "react";
import { UpdatePerfil } from "@/lib/voluntarioActions";
import { UpdateState } from "@/lib/actions";

const initialUpdateState: UpdateState = {
	success: false,
	errors: {},
};

export default function CardPerfil() {
	const { voluntario, isLoading, update } = useVoluntario();
	const [state, action, isPending] = useActionState(
		UpdatePerfil,
		initialUpdateState,
	);

	useEffect(() => {
		if (state.success) {
			update();
		}
	}, [state.success, update]);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p>Carregando...</p>
			</div>
		);
	}

	// Função para fazer parse seguro de data, evitando timezone issues
	const parseLocalDate = (dateString: string | undefined): Date | null => {
		if (!dateString) return null;
		// Se for apenas YYYY-MM-DD, faz parse manual para manter a data local
		const parts = dateString.split("T")[0].split("-");
		if (parts.length === 3) {
			return new Date(
				parseInt(parts[0]),
				parseInt(parts[1]) - 1,
				parseInt(parts[2]),
			);
		}
		return new Date(dateString);
	};

	const criadoEm = parseLocalDate(voluntario?.criadoEm);
	const formattedDate = criadoEm
		? criadoEm.toLocaleDateString("pt-BR", {
				day: "numeric",
				month: "long",
				year: "numeric",
			})
		: "Data não disponível";

	const resultado =
		formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

	return (
		<Card>
			<CardHeader>
				<section className="flex-r justify-between gap-md">
					{/* <div className="flex-r-center p-md bg-sky-50 text-sky-700 rounded-full">
						<CardTitle>Foto de Perfil</CardTitle>
					</div> */}
					<div className="flex-c justify-between w-full gap-0.5">
						<div className="flex-r items-center justify-between w-full">
							<div className="flex-r-center gap-md">
								<CardTitle>{voluntario?.nome}</CardTitle>
								<CardBadge
									color={
										voluntario?.cargo === "Música"
											? "green"
											: voluntario?.cargo === "Intercessão"
												? "blue"
												: voluntario?.cargo === "Staff"
													? "orange"
													: voluntario?.cargo === "Coordenador de equipes"
														? "purple"
														: "muted"
									}
									titulo={voluntario?.cargo}
								/>
							</div>
							<Dialog>
								<DialogTitle className="hidden">Editar Perfil</DialogTitle>
								<DialogTrigger asChild>
									<Button variant={"outline"} size={"sm"}>
										Editar Perfil
									</Button>
								</DialogTrigger>
								<DialogContent className="flex-c p-md gap-md overflow-y-auto max-h-[90vh]">
									<CardTitle>Editar Perfil</CardTitle>
									<CardDescription>
										Altere suas informações pessoais.
									</CardDescription>
									<form action={action} className="grid-4 gap-4">
										<FormInput
											className="col-span-4"
											label="Nome"
											name="nome"
											defaultValue={voluntario?.nome}
											type="text"
											required
											placeholder="Digite seu nome"
										/>
										{state.errors.nome && (
											<p className="text-red-500 text-xs">
												{state.errors.nome[0]}
											</p>
										)}

										<FormInput
											className="col-span-2"
											label="Telefone"
											name="telefone"
											defaultValue={voluntario?.telefone}
											type="text"
											required
											placeholder="Digite seu telefone"
										/>
										{state.errors.telefone && (
											<p className="text-red-500 text-xs">
												{state.errors.telefone[0]}
											</p>
										)}
										<FormInput
											className="col-span-2"
											label="Cep"
											name="cep"
											defaultValue={voluntario?.cep}
											type="text"
											required
											placeholder="Digite seu cep"
										/>
										<FormInput
											className="col-span-4"
											label="Bairro"
											name="bairro"
											defaultValue={voluntario?.bairro}
											type="text"
											required
											placeholder="Digite sua bairro"
										/>

										<FormInput
											className="col-span-4"
											label="Endereço"
											name="endereco"
											defaultValue={voluntario?.endereco}
											type="text"
											required
											placeholder="Digite seu endereço"
										/>

										{state.errors.cep && (
											<p className="text-red-500 text-xs">
												{state.errors.cep[0]}
											</p>
										)}
										<div className="col-span-4">
											<label htmlFor="cargo">Cargo</label>
											<Select
												name="cargo"
												defaultValue={voluntario?.cargo}
												disabled
											>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Selecione seu cargo" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Escolha seu Cargo</SelectLabel>
														<SelectItem value="Música">Música</SelectItem>
														<SelectItem value="Intercessão">
															Intercessão
														</SelectItem>
														<SelectItem value="Staff">Staff</SelectItem>
														<SelectItem value="Coordenador de equipes">
															Coordenador de Equipes
														</SelectItem>
														<SelectItem value="Comunicação">
															Comunicação
														</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</div>
										<FormInput
											className="col-span-4"
											label="Data de Nascimento"
											name="dataNascimento"
											defaultValue={voluntario?.dataNascimento}
											type="date"
											required
											disabled
											placeholder="Digite sua Data de Nascimento"
										/>

										<div className="grid-2 col-span-4 gap-md mt-4">
											<DialogClose asChild>
												<Button type="button" variant="destructive">
													Cancelar
												</Button>
											</DialogClose>
											<Button
												type="submit"
												disabled={isPending}
												className="bg-blue-600 hover:bg-blue-700 text-white"
											>
												{isPending ? "Salvando..." : "Salvar Alterações"}
											</Button>
										</div>
										{state.errors.database && (
											<p className="text-red-500 text-center">
												{state.errors.database[0]}
											</p>
										)}
										{state.success && (
											<p className="text-green-500 text-center">
												Perfil atualizado com sucesso!
											</p>
										)}
									</form>
								</DialogContent>
							</Dialog>
						</div>
						<CardDescription>Membro desde {resultado}</CardDescription>
					</div>
				</section>
			</CardHeader>
			<CardContent className="flex-c gap-2">
				<CardProgress progressValue={80} as="green" label="Perfil Completo" />
			</CardContent>
		</Card>
	);
}
