"use client"
            
import { useRecordContext } from "@/hooks/useRecordContext";
import { useRouter } from "next/router";
import Image from "next/image";
//style
import style from "./QuizTemplate.module.css";
//components
import Buttons from "@/components/Buttons";
import Restrainer from "../Restrainer";
import QuizButton from "../QuizButton";
import SwitchButton from "../SwitchButton";
import MainNav from "../MainNav";
import ProgressBar from "../ProgressBar";



export default function QuizTemplate({ chapterNumber, question, imageSrc, options }) {

	const {activeOption, selectedOptions, setActiveOption} = useRecordContext()
	const router = useRouter()

	const countA = selectedOptions.filter(option => option === "A").length
	const countB = selectedOptions.filter(option => option === "B").length

	console.log("countA:", countA, "countB:", countB)

	return (
		<Restrainer>
			<main className={style.main}>
			<MainNav isQuizPage />
			<div className={style.container}>
				<h1 className={style.h1}>CHAPTER {chapterNumber}</h1>
				
				<ProgressBar dotNumber={chapterNumber} />
				<div className={style.question}>
						<div>{question}</div>
				</div>
				<div className={style.imageContainer}>
				<Image 
					src={imageSrc} 
					alt="Question Image" 
					width={250} 
					height={250}
				/>
				</div>
				<QuizButton 
					text={options[0].textA}
					onClick={() => setActiveOption("A")}
					isActive={activeOption === "A"}
				/>
				<QuizButton 
					text={options[1].textB}
					onClick={() => setActiveOption("B")}
					isActive={activeOption === "B"}
				/>
				<div className={style.buttonContainer}>
						{router.query.id !== "1" && 
						<Buttons 
							buttonName="BACK"
							routerName={String(Number(router.query.id) - 1)}
							isBack
						/>
						}
						<Buttons
							buttonName="NEXT"
							routerName={router.query.id === "6" ? "/quizOutro" : String(Number(router.query.id) + 1)}
						/>
				</div>
				<SwitchButton />
			</div>
			</main>
		</Restrainer>
	);
}