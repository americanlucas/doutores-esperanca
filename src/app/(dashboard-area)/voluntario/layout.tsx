import type { Metadata } from "next";
import "@/app/globals.css";
import {
	SidebarProvider,
	SidebarTrigger,
} from "@/components/UI/Styled-Components/sidebar";
import { AppSidebar } from "@/components/UI/Sidebar/App-Sidebar";
import { Separator } from "@/components/UI/Styled-Components/separator";

export const metadata: Metadata = {
	title: "Voluntário",
	description:
		"Página principal de acesso dos voluntários, onde podem visualizar suas informações e funções pretendidas.",
};

interface VoluntarioLayoutProps {
	children: React.ReactNode;
}

export default function VoluntarioLayout({ children }: VoluntarioLayoutProps) {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<main className="w-full">
					<div className="flex-r items-center py-md">
						<SidebarTrigger className="cursor-pointer" />
						<Separator className="m-2" orientation="vertical" />
						<header>Doutores de Esperança</header>
					</div>
					<div className="flex-c gap-lg my-md px-md">{children}</div>
				</main>
			</SidebarProvider>
		</>
	);
}
