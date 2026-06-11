import CardMessage from "@/components/UI/Card/Card-Components/CardMessage";
import CardTermos from "@/components/UI/Card/Card-Components/CardTermos";
import { Check } from "lucide-react";

export default function Termos() {
    const data = new Date()
	return (
		<>
			<h1 className="h1">Meus Termos</h1>
			<CardMessage
				bgColor="message"
				textColor="message"
				icon={Check}
				title="Termos Aceitos"
				message={`Você aceitou os termos em ${data.getDay()}/${data.getMonth().toString()}/${data.getFullYear()}. Sempre que uma nova versão for publicada, você será notificado para reler e aceitar novamente.`}
			/>
			<CardTermos />
		</>
	);
}
