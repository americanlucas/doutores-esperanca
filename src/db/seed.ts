import { db } from ".";
import { voluntarios } from "./schema";

async function Seed() {
	const data = await db;

	try {
		await data.delete(voluntarios);

		await data.insert(voluntarios).values({
			nome: "Lucas Americano",
			genero: "Masculino",
			email: "lucasamericano.dev@gmail.com",
			telefone: "61981621414",
			cpf: "02127418107",
			senha: "L@flame15ttc",
			endereco: "SQN 215 Bloco K Apto 405",
			bairro: "Asa Norte",
			cep: "70874110",
			data_nascimento: "2003-08-15",
			cargo: "Música",
		});

        console.log('Seed Concluída!')
        process.exit(0)
	} catch (error) {
        console.log('Erro na Seed: ', error)
        process.exit(1)
    }
}

Seed()