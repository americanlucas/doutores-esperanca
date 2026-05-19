// app/api/voluntario/[id]/route.ts
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { voluntarios } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const session = await auth();

	// Verifica se está autenticado
	if (!session?.user) {
		return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
	}

	// Verifica se está acessando os próprios dados
	if (session.user.id !== params.id) {
		return NextResponse.json({ error: "Sem permissão" }, { status: 403 });
	}

	try {
		// Busca apenas dados adicionais que não estão no JWT
		const voluntario = await db
			.select({
				endereco: voluntarios.endereco,
				bairro: voluntarios.bairro,
				cep: voluntarios.cep,
				dataNascimento: voluntarios.data_nascimento,
				criadoEm: voluntarios.criado_em,
			})
			.from(voluntarios)
			.where(eq(voluntarios.id, parseInt(params.id)))
			.limit(1)
			.then((rows) => rows[0]);

		if (!voluntario) {
			return NextResponse.json({ error: "Voluntário não encontrado" }, { status: 404 });
		}

		// Retorna com cache de 5 minutos
		return NextResponse.json(voluntario, {
			headers: {
				"Cache-Control": "private, max-age=300",
			},
		});
	} catch (error) {
		console.error("Erro ao buscar dados do voluntário:", error);
		return NextResponse.json({ error: "Erro interno" }, { status: 500 });
	}
}