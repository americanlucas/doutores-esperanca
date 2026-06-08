import { Clock, Edit, MapPin, Trash2 } from "lucide-react";
import { Card, CardContent } from "../Styled-Components/card";
import CardBadge from "./Card-Components/CardBadge";
import { Button } from "../Styled-Components/button";

export default function CardAtividades() {
	return (
		<Card className="border-gray-200">
			<CardContent className="p-4">
				<div className="flex items-center justify-center gap-4">
					<div className="text-center min-w-15 p-3 bg-gray-50 rounded-lg">
						<p className="text-2xl font-bold text-gray-900">20</p>
						<p className="text-xs text-gray-500 uppercase">Jun</p>
					</div>

					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-md mb-1">
							<h3 className="font-semibold text-gray-900">
								Hospital Brasília
							</h3>
							<CardBadge color="roxo" titulo="Canto" />
						</div>
						<div className="flex items-center gap-4 text-sm text-gray-500">
							<span className="flex items-center gap-1">
								<Clock className="w-3 h-3" />
								Manhã
							</span>
							<span className="flex items-center gap-1">
								<MapPin className="w-3 h-3" />
								St. de Habitações Individuais Sul QI 15 - Lago
								Sul
							</span>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<div className="flex items-center gap-1">
							<CardBadge
								titulo="Confirmada"
								color="verde"
							></CardBadge>
							<Button variant="ghost" size="sm">
								<Edit className="w-4 h-4" />
							</Button>
							<Button
								variant="ghost"
								size="sm"
								className="text-red-600 hover:text-red-700 hover:bg-red-50"
							>
								<Trash2 className="w-4 h-4" />
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
