import { TheHeader } from "@/components/02-molecules";

export const HeaderSection = () => {
	return (
		<section
			id="home"
			className="flex h-[100px] w-full flex-col lg:h-[100px] xl:h-[100px]"
		>
			<TheHeader />
		</section>
	);
};
