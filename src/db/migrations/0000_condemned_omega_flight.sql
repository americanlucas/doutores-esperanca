CREATE TYPE "public"."cargo_voluntario" AS ENUM('Música', 'Intercessão', 'Clown', 'Staff', 'Coordenador de equipes', 'Comunicação');--> statement-breakpoint
CREATE TYPE "public"."genero_voluntario" AS ENUM('Masculino', 'Feminino', 'Outro');--> statement-breakpoint
CREATE TABLE "voluntarios" (
	"id" uuid DEFAULT gen_random_uuid(),
	"nome" text NOT NULL,
	"email" text NOT NULL,
	"telefone" integer NOT NULL,
	"cpf" integer PRIMARY KEY NOT NULL,
	"genero" "genero_voluntario" DEFAULT 'Outro',
	"senha" text NOT NULL,
	"endereco" text NOT NULL,
	"bairro" text NOT NULL,
	"cep" integer NOT NULL,
	"data_nascimento" date NOT NULL,
	"cargo" "cargo_voluntario",
	CONSTRAINT "voluntarios_email_unique" UNIQUE("email")
);
