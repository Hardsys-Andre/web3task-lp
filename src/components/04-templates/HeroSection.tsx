import { CardHero, TheHeader } from "@/components/02-molecules";

export const HeroSection = () => {
	return (
		<section
			id="home"
			className="flex h-[1080px] w-full flex-col lg:h-[800px] xl:h-[800px]"
		>
			<TheHeader />
			<CardHero />
		</section>
	);
};
