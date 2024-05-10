import {
	RandomMovieImageSection,
	HeaderSection,
	HeroSection,
	PartnersSection,
	WhyChooseUsSection,
	HowItWorksSection,
	RoadmapSection,
	CTASection,
	TheFooterSection,
	FaqSection,
} from "@/components/04-templates";

export default function Home() {
	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<RandomMovieImageSection />
			<HeaderSection />
			<HeroSection />
			<PartnersSection />
			<WhyChooseUsSection />
			<HowItWorksSection />
			<RoadmapSection />
			<FaqSection />
			<CTASection />
			<TheFooterSection />
		</main>
	);
}
