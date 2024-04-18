"use client";
import Image from "next/image";
import Link from "next/link";
import ctabg from "@/app/public/call-to-action/ctabg.png";
import ethereum02 from "@/app/public/call-to-action/ethereum02.png";
import bitcoin01 from "@/app/public/call-to-action/bitcoin01.png";
import { ArrowIcon, Button } from "@/components/01-atoms";
import { useScreenSize } from "@/hooks/useScreenSize";

export const CardCallToAction = () => {
	const { isMobile } = useScreenSize();
	return (
		<div className="relative flex h-[302px] w-full flex-col items-center md:h-[470px]">
			<div
				className="absolute w-full md:h-[470px] xl:w-full"
				style={{
					zIndex: 1,
				}}
			>
				<Image
					className="h-[302px] w-full md:h-[470px]"
					src={ctabg}
					alt={"ctabg"}
					style={{
						zIndex: 1,
					}}
				/>
			</div>
			<div className="absolute right-[20%] top-[37px] flex h-[25px] w-[25px] md:right-[15%] md:h-[40px] md:w-[40px]">
				{isMobile ? (
					<Image src={ethereum02} alt={"Ethereum Icon"} hidden={true} />
				) : (
					<Image src={ethereum02} alt={"Ethereum Icon"} />
				)}
			</div>
			<div className="mt-[37px] flex flex-col items-center md:h-[192px] lg:w-[585px]">
				<p className="flex text-[50px] font-bold leading-none text-white md:text-[96px]">
					Let&#039;s start
				</p>
				<p className=" flex bg-gradient-to-r from-violet-700 to-cyan-400 bg-clip-text text-[50px] font-bold text-transparent md:text-[96px] md:leading-[110px]">
					building
				</p>
			</div>
			<div className="mt-[46px]">
				{isMobile ? (
					<Link href="https://web3task.w3d.community/">
						<Button
							size={"sm"}
							style={{
								position: "relative",
								zIndex: 2,
							}}
						>
							Open dApp
							<div className="ml-1">
								<ArrowIcon />
							</div>
						</Button>
					</Link>
				) : (
					<Link href="https://web3task.w3d.community/">
						<Button
							size={"lg"}
							style={{
								position: "relative",
								zIndex: 2,
							}}
						>
							Open dApp
							<div className="ml-2">
								<ArrowIcon />
							</div>
						</Button>
					</Link>
				)}
			</div>
			<div className="absolute bottom-[132px] left-[20%] flex h-[25px] w-[25px] md:left-[15%] md:h-[40px] md:w-[40px]">
				{isMobile ? (
					<Image src={bitcoin01} alt={"Bitcoin Icon"} hidden={true} />
				) : (
					<Image src={bitcoin01} alt={"Bitcoin Icon"} />
				)}
			</div>
		</div>
	);
};
