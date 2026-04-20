import CardAnexo from "@/components/UI/Card/Card-Components/CardAnexo";
import CardMessage from "@/components/UI/Card/Card-Components/CardMessage";
import CardProgress from "@/components/UI/Card/Card-Components/CardProgress";
import { Button } from "@/components/UI/Styled-Components/button";
import {
	Card,
	CardDescription,
	CardHeader,
} from "@/components/UI/Styled-Components/card";
import { FileWarning } from "lucide-react";

export default function MeusAnexos() {
	return (
		<>
            <div className="flex-r justify-between">
			    <h1 className="h1">Meus Anexos</h1>
                <label className="font-normal bg-muted border rounded-md p-2">
                    <input type="file" />
                    Enviar Arquivos
                </label>
            </div>
			<CardMessage
				bgColor="warning"
				textColor="warning"
				title="Documentos Pendentes"
				message="2 documentos obrigatórios ainda precisam ser enviados para a conclusão do seu cadastro."
				icon={FileWarning}
			/>
			<Card>
				<CardHeader>
					<CardProgress
                        label="Completude dos Anexos"
                        as="yellow"
                        progressValue={50}
                    />
                    <CardDescription>2 de 4 documentos enviados · 2 pendentes · 1 em revisão</CardDescription>
				</CardHeader>
			</Card>
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
