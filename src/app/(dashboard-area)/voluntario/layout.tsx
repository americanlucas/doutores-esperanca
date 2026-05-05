"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import "@/app/globals.css";
import {
	SidebarProvider,
	SidebarTrigger,
} from "@/components/UI/Styled-Components/sidebar";
import { AppSidebar } from "@/components/UI/Sidebar/App-Sidebar";
import { Separator } from "@/components/UI/Styled-Components/separator";

interface VoluntarioLayoutProps {
	children: React.ReactNode;
}

export default function VoluntarioLayout({ children }: VoluntarioLayoutProps) {
	const router = useRouter();
	const { status } = useSession();

	useEffect(() => {
		const handlePageShow = (e: PageTransitionEvent) => {
			if (e.persisted) {
				router.refresh();
			}
		};

		window.addEventListener("pageshow", handlePageShow);
		return () => window.removeEventListener("pageshow", handlePageShow);
	}, [router]);

	useEffect(() => {
		if (status === "unauthenticated") {
			router.replace("/");
		}
	}, [status, router]);

	if (status === "loading") return null;

	return (
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
	);
}