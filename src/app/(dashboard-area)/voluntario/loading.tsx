import {
	Card,
	CardContent,
	CardHeader,
} from "@/components/UI/Styled-Components/card";
import { Separator } from "@/components/UI/Styled-Components/separator";

export default function Loading() {
	return (
		<div className="animate-pulse">
			{/* Título e possível botão */}
			<div className="flex-r justify-between items-center mb-4">
				<div className="h-10 bg-muted rounded-md w-64"></div>
				<div className="h-10 bg-muted rounded-md w-32"></div>
			</div>

			{/* Card de mensagem/alerta */}
			<div className="mb-4">
				<Card>
					<CardHeader>
						<div className="flex items-center gap-3">
							<div className="h-5 w-5 bg-muted rounded"></div>
							<div className="flex-1">
								<div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
								<div className="h-3 bg-muted rounded w-3/4"></div>
							</div>
						</div>
					</CardHeader>
				</Card>
			</div>

			{/* Grid de estatísticas */}
			<div className="grid-4 gap-md mb-4">
				{[...Array(4)].map((_, i) => (
					<Card key={i}>
						<CardHeader>
							<div className="h-4 bg-muted rounded w-20 mb-2"></div>
							<div className="h-8 bg-muted rounded w-12"></div>
						</CardHeader>
					</Card>
				))}
			</div>

			{/* Grid principal de conteúdo */}
			<div className="grid-2 gap-md">
				<Card>
					<CardHeader>
						<div className="h-6 bg-muted rounded w-48 mb-4"></div>
					</CardHeader>
					<CardContent className="flex-c gap-4">
						{[...Array(3)].map((_, i) => (
							<div key={i}>
								<div className="flex items-center gap-4">
									<div className="shrink-0">
										<div className="h-12 w-12 bg-muted rounded"></div>
									</div>
									<div className="flex-1">
										<div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
										<div className="h-3 bg-muted rounded w-1/2"></div>
									</div>
								</div>
								{i < 2 && (
									<Separator className="separator-h mt-4" />
								)}
							</div>
						))}
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div className="h-6 bg-muted rounded w-48 mb-4"></div>
					</CardHeader>
					<CardContent className="flex-c gap-md">
						{[...Array(4)].map((_, i) => (
							<div key={i}>
								<div className="h-4 bg-muted rounded w-32 mb-2"></div>
								<div className="h-2 bg-muted rounded w-full"></div>
							</div>
						))}
						<Separator className="mt-4" />
						<div>
							<div className="h-4 bg-muted rounded w-32 mb-2"></div>
							<div className="h-2 bg-muted rounded w-full"></div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
