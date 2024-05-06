"use client";
import {
	CascatadeImages,
	CascatadeImagesMB,
} from "@/components/01-atoms/ui/CascataDeImagens";
import Q1 from "@/app/public/roadmap/Q1.svg";
import Q1_1 from "@/app/public/roadmap/Q1_1.svg";
import Q2_1 from "@/app/public/roadmap/Q2_1.svg";
import Q2_2 from "@/app/public/roadmap/Q2_2.svg";
import Q3_1 from "@/app/public/roadmap/Q3_1.svg";
import Q3_2 from "@/app/public/roadmap/Q3_2.svg";
import { useScreenSize } from "@/hooks/useScreenSize";

const images = [Q1, Q1_1, Q2_1, Q2_2, Q3_1, Q3_2];

const CardTheRoadmap: React.FC = () => {
	const { isMobile } = useScreenSize();
	return (
		<div className="mt-32 h-[1100px] w-[280px] md:h-[2200px] md:w-[550px]">
			{isMobile ? (
				<CascatadeImagesMB images={images} />
			) : (
				<CascatadeImages images={images} />
			)}
		</div>
	);
};

export default CardTheRoadmap;
