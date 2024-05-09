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
import HomeIconImage from "@/public/images/Rabbit Icon (1).png";
import LogoImage from "@/public/images/Wonderland.png";
import HambugerMenuImage from "@/public/images/Hamburger Menu Icon (1).png";
import Link from "next/link";


export default function QuizTemplate({ chapterNumber, question, imageSrc, options }) {

	const {activeOption, selectedOptions, setActiveOption} = useRecordContext()
	const router = useRouter()

	const countA = selectedOptions.filter(option => option === "A").length
	const countB = selectedOptions.filter(option => option === "B").length

	console.log("countA:", countA, "countB:", countB)

	return (
		<Restrainer>
			<div className={style.container}>
				<div className={style.navBar}>
				<Link href="/main">
					<Image 
					src={HomeIconImage}
					alt="Home Icon Image"
					width={30}
					height={30}></Image>
					</Link>
				<Link href="/main">
					<Image
					src={LogoImage}
					alt="Logo Image"
					width={160}
					height={56}></Image>
				</Link>
					<Image
					src={HambugerMenuImage}
					alt="Hambuger menu Image"
					width={27}
					height={23}></Image>
				</div>
				<h1 className={style.h1}>CHAPTER {chapterNumber}</h1>
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
		</Restrainer>
	);
}