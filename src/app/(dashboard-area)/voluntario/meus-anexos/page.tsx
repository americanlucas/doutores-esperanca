import CardAnexo from "@/components/UI/Card/Card-Components/CardAnexo";
import CardMessage from "@/components/UI/Card/Card-Components/CardMessage";
import CardProgress from "@/components/UI/Card/Card-Components/CardProgress";
import CardStats from "@/components/UI/Card/Card-Components/CardStats";
import { Button } from "@/components/UI/Styled-Components/button";
import {
	Card,
	CardDescription,
	CardHeader,
} from "@/components/UI/Styled-Components/card";
import { FileWarning, Paperclip } from "lucide-react";

export default function MeusAnexos() {
	return (
		<>
            <div className="flex-r justify-between">
			    <h1 className="h1">Meus Anexos</h1>
                <label className="text-sm font-semibold bg-muted border rounded-md p-2">
                    <input type="file" />
                    Enviar Arquivos
                </label>
            </div>
			<div className="grid-2 gap-md">
                <CardStats
                    titulo="Enviados"
                    color="green"
                    icon={Paperclip}
                    quantidade={2}

                />
                <CardStats
                    titulo="Pendentes"
                    color="orange"
                    icon={FileWarning}
                    quantidade={2}

                />

            </div>
            <div className="flex-c gap-md">
                <h2 className="h3 text-gray-800">Documentos</h2>
                <div className="grid-2 gap-md">
                    <CardAnexo
                        title="RG ou CNH"
                        descricao="Documento de identidade com foto"
                        status="enviado"
                    />
                    <CardAnexo
                        title="Foto 3x4"
                        descricao="Foto recente, fundo branco, rosto visível"
                        status="revisão"
                    />
                    <CardAnexo
                        title="CPF"
                        descricao="Cópia do CPF ou comprovante de situação cadastral"
                        status="pendente"
                    />
                    <CardAnexo
                        title="Comprovante de residência"
                        descricao="Emitido nos últimos 3 meses, em nome do voluntário"
                        status="pendente"
                    />
                </div>
            </div>
		</>
	);
}
