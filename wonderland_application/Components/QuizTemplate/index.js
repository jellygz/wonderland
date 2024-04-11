import Image from "next/image";
import style from "./QuizTemplate.module.css";
import Buttons from "@/components/Buttons";
import Restrainer from "../Restrainer";

export default function QuizTemplate({ chapterNumber, question, imageSrc, options,buttonName }) {
    return (
        <Restrainer>
            <div className={style.container}>
                <h1>Chapter {chapterNumber}</h1>
                <Image src={imageSrc} alt="Question Image" width={200} height={200} />
                <div className={style.question}>
                    <p>{question}</p>
                </div>
                {options.map((option, index) => (
                    <div key={index}>
                        <Image src="/images/leftarrowtri.svg" alt="Left Arrow" width={10} height={10} />
                        <button className={style[`button${index + 1}`]}>{option.text}</button>
                        <Image src="/images/rightarrowtri.svg" alt="Right Arrow" width={10} height={10} />
                    </div>
                ))}
            <Buttons 
                    buttonName={buttonName}
            />
            
            </div>
        </Restrainer>
    );
}
