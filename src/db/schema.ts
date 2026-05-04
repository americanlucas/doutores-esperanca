import { char, date, integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";

//---------------------ENUMS--------------------------------------
export const generoEnum = pgEnum('genero_voluntario', [
    'Masculino',
    'Feminino',
    'Outro',
])

export const cargoEnum = pgEnum('cargo_voluntario', [
    'Música',
    'Intercessão',
    'Clown',
    'Staff',
    'Coordenador de equipes',
    'Comunicação',
])

//---------------------TABLES--------------------------------------
export const voluntarios = pgTable('voluntarios', {
    id: uuid('id').defaultRandom(),
    nome: text('nome').notNull(),
    email: text('email').notNull().unique(),
    telefone: char('telefone', {length: 11}).notNull(),
    cpf: char('cpf', {length: 11}).primaryKey(),
    genero: generoEnum('genero').default('Outro'),
    senha: text('senha').notNull(),
    endereco: text('endereco'),
    bairro: text('bairro'),
    cep: char('cep', {length: 8}),
    // local
    // polo
    data_nascimento: date('data_nascimento'),
    cargo: cargoEnum('cargo'),
})