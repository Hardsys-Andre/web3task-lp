"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import web3TaskLogo from "@/app/public/web3TaskLogo.png";
import web3tasklogo1 from "@/app/public/the-footer/web3tasklogo1.svg";
import { useScreenSize } from "@/hooks/useScreenSize";
import Link from "next/link";
import { Button, NavbarMobile, ArrowIcon } from "@/components/01-atoms";
import { navBarMenu } from "@/lib/constants";

export const TheHeader = () => {
	const { isMobile, isTablet } = useScreenSize();

	return (
		<header className={cn("flex w-full justify-center")}>
			{!isMobile ? (
				<div
					className={cn(
						"flex h-[126px] items-center justify-center md:gap-14 lg:gap-[60px]  xl:w-[1336px] xl:gap-[78px]"
					)}
				>
					<div className="flex items-center">
						<Image
							src={web3tasklogo1}
							alt={"Web3Task"}
							className="transition duration-500 hover:scale-125"
						/>
					</div>
					<div className="flex h-[80px] xl:px-[90px]">
						{navBarMenu.map((menuItem, index) => (
							<div key={index} className="flex items-center">
								<Link
									href={menuItem.href}
									className="navbar-title flex h-[80px] flex-shrink items-center justify-center px-[16.69px] py-[30px] hover:opacity-60"
								>
									{menuItem.title}
								</Link>
							</div>
						))}
					</div>
					<div className="duration-2000 flex animate-pulse flex-col">
						{isTablet ? (
							<Link href="https://web3task.w3d.community/" target="blank">
								<Button size={"sm"}>
									Open dApp
									<div className="ml-1">
										<ArrowIcon />
									</div>
								</Button>
							</Link>
						) : (
							<Link href="https://web3task.w3d.community/" target="blank">
								<Button>
									Open dApp
									<div className="ml-1">
										<ArrowIcon />
									</div>
								</Button>
							</Link>
						)}
					</div>
				</div>
			) : (
				<div
					className="fixed flex h-[60px] w-full items-center justify-between bg-[#0f051d]"
					style={{
						zIndex: 1000,
					}}
				>
					<div className="flex w-full items-center justify-center">
						<Link href={"#home"}>
							<Image
								src={web3tasklogo1}
								alt={"Web3Task"}
								height={40}
								className="transition duration-500 hover:scale-110"
							/>
						</Link>
					</div>
					<div className="mr-4 ">
						<NavbarMobile />
					</div>
				</div>
			)}
		</header>
	);
};
