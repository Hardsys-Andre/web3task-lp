import React from "react";

interface CardItem {
	label: string;
	link: string;
	target: string;
}

interface CardTheFooterProps {
	title: string;
	items: CardItem[];
}

const CardTheFooterLayout = ({ title, items }: CardTheFooterProps) => {
	return (
		<div className="flex h-fit max-w-[205px] flex-col px-[15px] md:h-full">
			<div className="flex flex-col gap-3 ">
				<div className="text-[16px] font-bold leading-[30.80px] text-white md:text-[22px] xl:w-full">
					{title}
				</div>
				{items.map((item, index) => (
					<a
						className="text-[12px] text-[#B7B4BB] md:text-[18px]"
						key={index}
						href={item.link}
						target={item.target}
					>
						{item.label}
					</a>
				))}
			</div>
		</div>
	);
};

export default CardTheFooterLayout;
