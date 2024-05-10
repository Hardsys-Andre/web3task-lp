"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import web3TaskLogo from "@/app/public/web3TaskLogo.png";
import bitcoin01 from "@/app/public/call-to-action/bitcoin01.png";

const RandomMovingImage = () => {
	const [keyframes, setKeyframes] = useState("");
	const [keyframes2, setKeyframes2] = useState("");

	useEffect(() => {
		// Gerar keyframes aleatórios para movimento
		const randomPosition = () => {
			return `${Math.floor(Math.random() * 100)}%`; // entre 0% e 100% da viewport
		};

		const newKeyframes = `
    @keyframes randomMove {
        0% {
            left: 0%;
            top: 0%;
        }
        20% {
            top: ${randomPosition()};
            left: ${randomPosition()};
          }
          40% {
            top: ${randomPosition()};
            left: ${randomPosition()};
          }
          60% {
            top: ${randomPosition()};
            left: ${randomPosition()};
          }
          80% {
            top: ${randomPosition()};
            left: 0%;
          }
        100% {
            left: 0%;
            top: 0%;
        }
      }
      `;
		const newKeyframes2 = `
      @keyframes randomMove2 {
        0% {
            right: 0%;
            bottom: 0%;
        }
        20% {
            bottom: ${randomPosition()};
            right: ${randomPosition()};
          }
          40% {
            bottom: ${randomPosition()};
            right: ${randomPosition()};
          }
          60% {
            bottom: ${randomPosition()};
            right: ${randomPosition()};
          }
          80% {
            bottom: ${randomPosition()};
            right: 0%;
          }
        100% {
            right: 0%;
            bottom: 0%;
        }
      }
    `;

		setKeyframes(newKeyframes);
		setKeyframes2(newKeyframes2);
	}, []);

	return (
		<>
			{/* Inserir a animação no head para ser usada */}
			<style>
				{keyframes}
				{keyframes2}
			</style>

			{/* Elemento com posição fixa */}
			<div
				className="fixed h-[40px] w-[40px] opacity-70"
				style={{
					zIndex: 1000,
					animation: "randomMove 25s linear infinite", // 10 segundos de duração, loop infinito
				}}
			>
				<Image src={bitcoin01} alt={"Bitcoin Icon"} width={40} height={40} />
			</div>
			<div
				className="fixed h-[40px] w-[40px] opacity-70"
				style={{
					zIndex: 1000,
					animation: "randomMove2 25s linear infinite", // 10 segundos de duração, loop infinito
				}}
			>
				<Image src={bitcoin01} alt={"Bitcoin Icon"} width={40} height={40} />
			</div>
		</>
	);
};

export default RandomMovingImage;