"use client";
import React, { useState } from "react";
import { AccordionDownIcon } from "./icons/AccordionDownIcon";
import { AccordionUpIcon } from "./icons/AccordionUpIcon";

export interface AccordionProps {
	title: string;
	answer: string;
}

export const Accordion = ({ title, answer }: AccordionProps) => {
	const [accordionOpen, setAccordionOpen] = useState(false);

	return (
		<div className="py-2">
			<button
				onClick={() => setAccordionOpen(!accordionOpen)}
				className="flex w-full justify-between"
			>
				<span>
					<p className="text-start font-['Inter'] text-sm font-bold leading-relaxed text-white md:text-xl md:leading-[30px]">
						{title}
					</p>
				</span>
				{accordionOpen ? <AccordionUpIcon /> : <AccordionDownIcon />}
			</button>
			<div
				className={` grid overflow-hidden pr-[20px] pt-[20px] text-sm font-normal leading-[30px] transition-all duration-300 ease-in-out ${
					accordionOpen
						? "grid-rows-[1fr] opacity-100"
						: "grid-rows-[0fr] opacity-0"
				}`}
			>
				<div className="overflow-hidden">
					<p className="font-['Inter'] text-[19px] text-xs font-normal leading-[15px] text-[#B7B4BB] md:leading-[30px]">
						{answer}
					</p>
				</div>
			</div>
		</div>
	);
};
