import CardMessage from "@/components/UI/Card/Card-Components/CardMessage";
import CardTermos from "@/components/UI/Card/Card-Components/CardTermos";
import { Check } from "lucide-react";

export default function Termos() {
	return (
		<>
			<h1 className="h1">Meus Termos</h1>
			<CardMessage
                bgColor="message"
                textColor="message"
				icon={Check}
                title="Termos Aceitos"
				message="
                    Você aceitou os termos em 10 de janeiro de 2024. Sempre que uma nova versão for publicada, você será notificado para reler e aceitar novamente.
                "
			/>
            <CardTermos 
            
            />
        </>
	);
}
