"use client";

import * as React from "react";
import Logo from "../../../../public/logo-Doutores.png";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
} from "@/components/UI/Styled-Components/sidebar";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../Styled-Components/separator";
import { usePathname } from "next/navigation";
import { EllipsisVertical, IdCard } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../Styled-Components/dropdown-menu";
import { Button } from "../Styled-Components/button";

const data = {
	navMain: [
		{
			title: "Minha Área",
			url: "inicio",
			items: [
				{
					title: "Início",
					url: "inicio",
				},
				{
					title: "Perfil",
					url: "perfil",
				},
				{
					title: "Meus Anexos",
					url: "meus-anexos",
				},
				{
					title: "Termos",
					url: "termos",
				},
				{
					title: "Minhas Inscrições",
					url: "minhas-inscricoes",
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const currentPath = usePathname();
	const newCurrentPath = currentPath.split("/").pop();
	const basePath = "/voluntario";

	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href={`${basePath}/${data.navMain[0].url}`}>
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
									<Image
										src={Logo}
										alt="Doutores de Esperança"
										width={32}
										height={32}
									/>
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">
										Doutores de Esperança
									</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<Separator className="separator-h" />
			<SidebarContent className="flex-c justify-between">
				<SidebarGroup>
					<SidebarMenu>
						{data.navMain.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<Link
										href={`${basePath}/${item.url}`}
										className="font-semibold"
									>
										{item.title}
									</Link>
								</SidebarMenuButton>
								{item.items?.length ? (
									<SidebarMenuSub>
										{item.items.map((item) => (
											<SidebarMenuSubItem
												key={item.title}
											>
												<SidebarMenuSubButton
													className={`
														${newCurrentPath === item.url ? "font-bold" : "font-medium"}
														${newCurrentPath === item.url ? "text-black" : "text-zinc-700"}
													`}
													asChild
												>
													<Link
														href={`${basePath}/${item.url}`}
													>
														{item.title}
													</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								) : null}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
				<SidebarGroup>
					<Separator className="separator-h" />

					<DropdownMenu>
						<DropdownMenuTrigger>
							<div className="flex-r items-center justify-around hover:bg-black/5 transition-all ease-in-out duration-200 cursor-pointer  rounded-sm px-1 py-2">
								<IdCard size={30} />
								<div className="flex-c items-start">
									<span>Pedro</span>
									<span className="text-xs text-muted-foreground">
										pedro@example.com
									</span>
								</div>
								<EllipsisVertical />
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<div className="flex-c px-2">
								<span>Pedro</span>
								<span className="text-xs text-muted-foreground">
									pedro@example.com
								</span>
								<DropdownMenuSeparator/>
							</div>
							<DropdownMenuItem>
								<Link className="w-full" href={"/voluntario/perfil"}>Perfil</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link className="w-full" href={"/"}>Sair</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
