import React from "react";
import Image from "next/image";

interface CascatadeImageProps {
	images: string[];
}
interface CascatadeImagePropsMB {
	images: string[];
}

const CascatadeImages: React.FC<CascatadeImageProps> = ({ images }) => {
	return (
		<div style={{ position: "relative", height: "100%" }}>
			{images.map((image, index) => (
				<Image
					key={index}
					src={image}
					alt={`Image ${index + 1}`}
					style={{
						position: "absolute",
						top: index * 285,
						left: 0,
						zIndex: images.length - index,
						width: "450px",
						transition: "top 0.3s",
					}}
				/>
			))}
		</div>
	);
};

const CascatadeImagesMB: React.FC<CascatadeImagePropsMB> = ({ images }) => {
	return (
		<div style={{ position: "relative", height: "100%" }}>
			{images.map((image, index) => (
				<Image
					key={index}
					src={image}
					alt={`Image ${index + 1}`}
					style={{
						position: "absolute",
						top: index * 170,
						left: 0,
						zIndex: images.length - index,
						width: "280px",
						transition: "top 0.3s",
					}}
				/>
			))}
		</div>
	);
};

export { CascatadeImages, CascatadeImagesMB };
