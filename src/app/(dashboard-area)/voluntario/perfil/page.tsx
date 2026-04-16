import CardPerfil from "@/components/UI/Card/CardPerfil";
import CardDados from "@/components/UI/Card/CardDados";
import CardAtividades from "@/components/UI/Card/CardAtividades";
import CardInscricoes from "@/components/UI/Card/CardInscrições";

export default function Perfil() {
	return (
		<>
			<h1 className="mx-md mb-4 h1">Meu Perfil</h1>
            <section className="flex-c gap-md m-md">
                <CardPerfil/>
                <div className="grid-2 gap-md">
                    <CardDados/>
                    <CardAtividades/>
                </div>
                <CardInscricoes/>
            </section>
		</>
	);
}
