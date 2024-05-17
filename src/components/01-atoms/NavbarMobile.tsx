"use client";
import { MenuIcon, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navBarMenu } from "@/lib/constants";

export const NavbarMobile = () => {
	const [open, setOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setOpen(false);
		}
	};

	const handleScroll = () => {
		if (open) {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		window.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [open]);

	return (
		<div className="relative flex flex-col" ref={menuRef}>
			<button
				className="flex items-center justify-center"
				onClick={() => {
					setOpen(!open);
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
