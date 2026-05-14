CREATE TYPE "public"."cargo_voluntario" AS ENUM('Música', 'Intercessão', 'Clown', 'Staff', 'Coordenador de equipes', 'Comunicação');--> statement-breakpoint
CREATE TYPE "public"."genero_voluntario" AS ENUM('Masculino', 'Feminino', 'Outro');--> statement-breakpoint
CREATE TABLE "voluntarios" (
	"id" serial NOT NULL,
	"nome" text NOT NULL,
	"email" text NOT NULL,
	"telefone" char(11) NOT NULL,
	"cpf" char(11) PRIMARY KEY NOT NULL,
	"genero" "genero_voluntario" DEFAULT 'Outro',
	"senha" text NOT NULL,
	"endereco" text,
	"bairro" text,
	"cep" char(8),
	"data_nascimento" date,
	"cargo" "cargo_voluntario",
	CONSTRAINT "voluntarios_email_unique" UNIQUE("email")
);
