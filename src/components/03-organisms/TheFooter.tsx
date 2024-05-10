"use client";
import { CardsTheFooter } from "@/components/02-molecules";
import Image from "next/image";
import Link from "next/link";
import web3tasklogo1 from "@/app/public/the-footer/web3tasklogo1.svg";
import twiter from "@/app/public/the-footer/twiterIcon.png";
import discord from "@/app/public/the-footer/discordIcon.png";
import arrowUp from "@/app/public/the-footer/arrowUp.svg";

export const TheFooter = () => {
	return (
		<div className="flex w-full flex-col md:px-5">
			<div className="flex w-full flex-col-reverse justify-between md:flex-row">
				<div className="mt-4 flex flex-col gap-4 md:mt-0">
					<div className="flex items-center justify-center md:w-[230px]">
						<Image
							src={web3tasklogo1}
							alt={"Web3Task"}
							className="transition duration-500 hover:scale-110"
						/>
					</div>
					<div className="flex justify-center text-center text-[12px] font-normal text-[#B7B4BB] md:justify-normal md:text-start md:text-[18px]">
						<p className="flex w-[254px] md:h-[81px] md:w-[300px]">
							Join our Discord channel to keep up to date with our latest work
							and announcements.
						</p>
					</div>
					<div className="flex items-center justify-center gap-1 md:h-[28px] md:w-[80px] md:justify-start">
						<Link href="https://twitter.com/web3task" target="blank">
							<Image
								className="hidden h-[20px]  w-[20px] md:h-[24px] md:w-[25px]"
								src={twiter}
								alt={"Twiter Icon"}
							/>
						</Link>
						<Link href="https://discord.com/invite/web3dev" target="blank">
							<Image
								className="h-[20px] w-[25px] transition duration-500 hover:scale-125 md:h-[24px] md:w-[30px]"
								src={discord}
								alt={"Discord Icon"}
							/>
						</Link>
					</div>
				</div>
				<div className="flex flex-col md:w-[350px]">
					<CardsTheFooter />
				</div>
			</div>
			<div className="mt-10 flex w-full items-center justify-center text-[15px] text-[#B7B4BB]">
				Copyright 2024 Web3Task
			</div>
		</div>
	);
};
