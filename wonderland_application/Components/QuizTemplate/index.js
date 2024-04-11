"use client"

import { useState } from "react";
import Image from "next/image";
// components
import Buttons from "@/components/Buttons";
import Restrainer from "@/components/Restrainer";
import QuizButton from "@/components/QuizButton";
// styles
import style from "./QuizTemplate.module.css";

export default function QuizTemplate({ chapterNumber, question, imageSrc, options, buttonName }) {

    const [activeOption, setActiveOption] = useState(null);

    const handleOptionClick = (index) => {
        setActiveOption(index);
    };

    return (
        <Restrainer>
            <div className={style.container}>
                <h1>Chapter {chapterNumber}</h1>
                <div className={style.question}>
                    <p>{question}</p>
                </div>
                <Image src={imageSrc} alt="Question Image" width={200} height={200} />
                {options.map((option, index) => (
                    <div key={index}>
                        <QuizButton 
                            text={option.text}
                            isIndex={index}
                            isActive={activeOption === index}
                            onClick={() => handleOptionClick(index)}
                        />
                    </div>
                ))}
            <Buttons 
                buttonName={buttonName}
            />
            
            </div>
        </Restrainer>
    );
}
