"use client"
            
import Image from "next/image";
import style from "./QuizTemplate.module.css";
import Buttons from "@/components/Buttons";
import Restrainer from "../Restrainer";
import { useState } from "react";
import { useRecordContext } from "@/hooks/useRecordContext";
import { useRouter } from "next/router";

export default function QuizTemplate({ chapterNumber, question, imageSrc, options }) {
    // const [ctA,setCountA] = useState(countA);
    // const [ctB,setCountB] = useState(countB);

    const {handleClickCountA, handleClickCountB, ctA, ctB} = useRecordContext()
    const router = useRouter()

    return (
        
        <Restrainer>
            <div className={style.container}>
                <h1>Chapter {chapterNumber}</h1>
                <Image src={imageSrc} alt="Question Image" width={200} height={200} />
                <div className={style.question}>
                    <div>{question}</div>
                </div>
        
                    <div>
                        <Image src="/images/leftarrowtri.svg" alt="Left Arrow" width={10} height={10} />
                        <button className={style.buttonA} onClick={handleClickCountA}>{options[0].textA}</button>
                        <Image src="/images/rightarrowtri.svg" alt="Right Arrow" width={10} height={10} />
                    </div>
                    
                    <div>
                    <Image src="/images/leftarrowtri.svg" alt="Left Arrow" width={10} height={10} />
                        <button className={style.buttonB} onClick={handleClickCountB}>{options[1].textB}</button>
                        <Image src="/images/rightarrowtri.svg" alt="Right Arrow" width={10} height={10} />
                    </div>
                    
            {router.query.id !== "1" && 
            <Buttons 
                    buttonName="BACK"
                    routerName={String(Number(router.query.id) - 1)}
                    recordA={ctA}
                    recordB={ctB}
            />
            }
            <Buttons
                    buttonName="NEXT"
                    routerName={String(Number(router.query.id) + 1)}
                    recordA={ctA}
                    recordB={ctB}
            />
            
            </div>
        </Restrainer>
    );
}
