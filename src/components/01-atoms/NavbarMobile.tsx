"use client";
import { MenuIcon, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navBarMenu } from "@/lib/constants";

export const NavbarMobile = () => {
	const [open, setOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement | null>(null); // Referência para o menu

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setOpen(false); // Fecha o menu ao clicar fora
		}
	};

	const handleScroll = () => {
		if (open) {
			setOpen(false); // Fecha o menu ao rolar
		}
	};

	useEffect(() => {
		// Listener para cliques fora do menu
		document.addEventListener("mousedown", handleClickOutside);

		// Listener para eventos de rolagem
		window.addEventListener("scroll", handleScroll);

		return () => {
			// Remoção dos listeners para evitar vazamentos de memória
			document.removeEventListener("mousedown", handleClickOutside);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [open]); // Reexecuta quando 'open' muda

	return (
		<div className="relative flex flex-col" ref={menuRef}>
			<button
				className="flex items-center justify-center"
				onClick={() => {
					setOpen(!open); // Alterna entre abrir e fechar o menu
				}}
			>
				{open ? <X /> : <MenuIcon />}
			</button>
			{open && (
				<div
					className={cn([
						"absolute right-0 top-12 border-2 border-[#ffffff] bg-[#0f051d] text-lg font-bold",
						"bg-gradient-to-tr from-violet-700 to-cyan-400 opacity-90 md:gap-4 xl:gap-10",
						"text-lx h-[160px] w-[135px] rounded-2xl leading-loose",
					])}
				>
					{navBarMenu.map((menuItem, index) => (
						<div key={index} className="ml-2">
							<Link href={menuItem.href} className="hover:opacity-60">
								{menuItem.title}
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
