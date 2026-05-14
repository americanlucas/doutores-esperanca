"use client";

import { useSession } from "next-auth/react";

export interface VoluntarioData {
	id: string;
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
	genero: string;
	cargo?: string;
	endereco?: string;
	bairro?: string;
	cep?: string;
	dataNascimento?: string;
	criadoEm?: string;
}

export function useVoluntario() {
	const { data: session, status } = useSession();

	const voluntario = session?.user as VoluntarioData | undefined;

	return {
		voluntario,
		isLoading: status === "loading",
		isAuthenticated: status === "authenticated",
	};
}