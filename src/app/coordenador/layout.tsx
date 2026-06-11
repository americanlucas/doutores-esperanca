import { ColorfulBorder } from "@/components/layout/colorful-border";
import { CoordinatorSidebar } from "@/components/layout/coordinator-sidebar";
import { CoordinatorHeader } from "@/components/layout/coordinator-header";
import { AppSidebar } from "@/components/UI/Sidebar/sidebar_coordenador";
import { SidebarProvider, SidebarTrigger } from "@/components/UI/Styled-Components/sidebar";
import { Separator } from "@/components/UI/Styled-Components/separator";
import { Suspense } from "react";
import Loading from "../(dashboard-area)/voluntario/loading";

export default function CoordinatorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="flex pt-2 pb-2 pl-2 pr-2">
				<SidebarProvider>
					<AppSidebar />
					<main className="w-full">
						<div className="flex-r items-center py-md">
							<SidebarTrigger className="pl-4 cursor-pointer" />
							<Separator className="m-2" orientation="vertical" />
							<div className="flex-r items-center justify-between w-full pr-4">
								<header>Doutores de Esperança</header>
							</div>
						</div>
						<div className="flex-c gap-lg my-md px-md">
							<Suspense fallback={<Loading />}>
								{children}
							</Suspense>
						</div>
					</main>
				</SidebarProvider>
				{/* <CoordinatorSidebar /> */}

				<div className="flex-1 flex flex-col min-h-[calc(100vh-16px)]">
					{/* <CoordinatorHeader /> */}

					{/* <main className="flex-1 p-6 overflow-auto">{children}</main> */}
				</div>
			</div>
		</div>
	);
}
