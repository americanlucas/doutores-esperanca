import { Button } from "@/components/UI/Styled-Components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/UI/Styled-Components/card";
import { Progress } from "@/components/UI/Styled-Components/progress";
import { ListMusic, MessageSquareWarning } from "lucide-react";
import Link from "next/link";

export default function Perfil() {
	return (
		<>
			<h1 className="mx-1 mb-4 text-2xl font-semibold">Meu Perfil</h1>
            <section className="flex flex-col gap-4 mb-4">
                <div>
                    <Card className="card-size">
                        <CardHeader>
                            <section className="flex justify-between gap-4">
                                <div className="flex p-3 bg-green-300 rounded-full justify-center items-center">
                                    <CardTitle>Foto de Perfil</CardTitle>
                                </div>
                                <div className="flex flex-col justify-between w-full gap-1">
                                    <div className="flex items-center justify-between w-full">
                                        <CardTitle>Pedro Álvares Cabral</CardTitle>
                                        <Link href={"/voluntario/inicio"}>
                                            <Button
                                                className="cursor-pointer"
                                                variant={"secondary"}
                                            >
                                                Editar Perfil
                                            </Button>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="bg-cyan-300 text-cyan-800 w-fit py-1 px-2 rounded-full">
                                            Treineiro
                                        </p>
                                    </div>
                                    <CardDescription>
                                        Membro desde Janeiro de 2025.
                                    </CardDescription>
                                </div>
                            </section>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <CardDescription>Perfil Completo</CardDescription>
                                <CardDescription>80%</CardDescription>
                            </div>
                            <Progress className="" value={80} />
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-2 card-size gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Dados Pessoais</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-3">
                            <div>
                                <CardDescription>Nome</CardDescription>
                                <span>Pedro Álvares Cabral</span>
                            </div>
                            <div>
                                <CardDescription>E-mail</CardDescription>
                                <span>pedro.alvares.cabral@example.com</span>
                            </div>
                            <div>
                                <CardDescription>Endereço</CardDescription>
                                <span>SQN 304, Bloco B, Ap 304</span>
                            </div>
                            <div>
                                <CardDescription>Cidade</CardDescription>
                                <span>Brasília - DF</span>
                            </div>
                            <div>
                                <CardDescription>Telefone</CardDescription>
                                <span>Não informado</span>
                            </div>
                            <div>
                                <CardDescription>CPF</CardDescription>
                                <span>Não informado</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Resumo de Atividades</CardTitle>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="muted-card">
                                    <span className="text-2xl font-semibold">
                                        2
                                    </span>
                                    <p>Inscrições</p>
                                </div>
                                <div className="muted-card">
                                    <span className="text-2xl font-semibold">
                                        0
                                    </span>
                                    <p>Realizadas</p>
                                </div>
                                <div className="muted-card">
                                    <span className="text-2xl font-semibold">
                                        4
                                    </span>
                                    <p>Horas</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardHeader>
                            <CardTitle>Avisos</CardTitle>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="message-card">
                                    <div className="flex items-center gap-2">
                                        <MessageSquareWarning size={16} />
                                        <CardTitle>Treinamento</CardTitle>
                                    </div>
                                    <p>
                                        Caros voluntários, nosso treinamento
                                        ocorrerá amanhã às 9h via Google Meet!
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
                <div className="card-size">
                    <Card>
                        <CardHeader>
                            <CardTitle>Minhas Inscrições</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <div className="default-card justify-between px-2">
                                <div className="flex items-center gap-4 px-2">
                                    <div className="bg-green-200 rounded p-2 w-fit">
                                        <ListMusic size={20} />
                                    </div>
                                    <div className="text-xs">
                                        <CardTitle>Hospital Santa Lúcia</CardTitle>
                                        <CardDescription>
                                            20/06/2026 • Canto
                                        </CardDescription>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-2">
                                    <p className="bg-green-200 text-green-800 w-fit py-1 px-2 rounded-full">
                                        Treineiro
                                    </p>
                                    <Button size={"sm"} variant={"destructive"}>Cancelar</Button>
                                    <Button size={"sm"} variant={"outline"}>Editar</Button>
                                </div>
                            </div>
                            <div className="default-card justify-between px-2">
                                <div className="flex items-center gap-4 px-2">
                                    <div className="bg-green-200 rounded p-2 w-fit">
                                        <ListMusic size={20} />
                                    </div>
                                    <div className="text-xs">
                                        <CardTitle>Hospital Santa Lúcia</CardTitle>
                                        <CardDescription>
                                            20/06/2026 • Canto
                                        </CardDescription>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-2">
                                    <p className="bg-green-200 text-green-800 w-fit py-1 px-2 rounded-full">
                                        Treineiro
                                    </p>
                                    <Button size={"sm"} variant={"destructive"}>Cancelar</Button>
                                    <Button size={"sm"} variant={"outline"}>Editar</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
		</>
	);
}
