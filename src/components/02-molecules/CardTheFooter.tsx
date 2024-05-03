import CardTheFooterLayout from "@/components/01-atoms/CardTheFooterLayout";
import { Target } from "lucide-react";

const CardsTheFooterData = [
	{
		title: "Quick Link",
		items: [
			{ label: "How it works", link: "#howItWorks", target: "" },
			{ label: "Roadmap", link: "#roadmap", target: "" },
			{ label: "FAQ", link: "#faq", target: "" },
		],
	},
	{
		title: "Community",
		items: [
			{
				label: "Documentation",
				link: "https://web3task.gitbook.io/web3task",
				target: "Blank",
			},
			{ label: "Web3Dev", link: "https://www.web3dev.media/", target: "Blank" },
			{
				label: "LinkTree",
				link: "https://linktr.ee/web3task?utm_source=linktree_profile_share&ltsid=bd5b2288-989c-4719-9605-c5be37875792",
				target: "Blank",
			},
		],
	},
];

export const CardsTheFooter = () => {
	return (
		<div className="grid grid-cols-2 gap-[60px] md:gap-[20px]">
			{CardsTheFooterData.map((card, index) => (
				<div key={index}>
					<CardTheFooterLayout title={card.title} items={card.items} />
				</div>
			))}
		</div>
	);
};

export default CardsTheFooter;
