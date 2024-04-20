"use client"
            
import { useState } from "react";
import { useRecordContext } from "@/hooks/useRecordContext";
import { useRouter } from "next/router";
import Image from "next/image";
//style
import style from "./QuizTemplate.module.css";
//components
import Buttons from "@/components/Buttons";
import Restrainer from "../Restrainer";
import QuizButton from "../QuizButton";


export default function QuizTemplate({ chapterNumber, question, imageSrc, options }) {
	// const [ctA,setCountA] = useState(countA);
	// const [ctB,setCountB] = useState(countB);

	const {handleClickCountA, handleClickCountB, ctA, ctB, activeOption} = useRecordContext()
	const router = useRouter()

	return (
		<Restrainer>
			<div className={style.container}>
				<h1 className={style.h1}>CHAPTER {chapterNumber}</h1>
				<div className={style.question}>
						<div>{question}</div>
				</div>
				<Image 
					src={imageSrc} 
					alt="Question Image" 
					width={250} 
					height={250}
				/>
				<QuizButton 
					text={options[0].textA}
					onClick={() => handleClickCountA("A")}
					id={"A"}
					isActive={activeOption === "A"}
				/>
				<QuizButton 
					text={options[1].textB}
					onClick={() => handleClickCountB("B")}
					id={"B"}
					isActive={activeOption === "B"}
				/>
				<div className={style.buttonContainer}>
						{router.query.id !== "1" && 
						<Buttons 
							buttonName="BACK"
							routerName={String(Number(router.query.id) - 1)}
							recordA={ctA}
							recordB={ctB}
							isBack
						/>
						}
						<Buttons
							buttonName="NEXT"
							routerName={String(Number(router.query.id) + 1)}
							recordA={ctA}
							recordB={ctB}
						/>
				</div>
			</div>
		</Restrainer>
	);
}
