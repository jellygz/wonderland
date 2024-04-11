import Image from "next/image";
import style from "./QuizTemplate.module.css";
import Buttons from "@/Components/Buttons";
import { useState } from "react";

export default function QuizTemplate({ chapterNumber, question, imageSrc, options, prevName, nextName, prevRouterName, nextRouterName, countA, countB }) {
    console.log(options)
    console.log("quizTemplate", countA, countB)
    const [ctA,setCountA] = useState(countA);
    const [ctB,setCountB] = useState(countB);

    return (

        <div className={style.container}>
            <h1>Chapter {chapterNumber}</h1>
            <Image src={imageSrc} alt="Question Image" width={200} height={200} />
            <div className={style.question}>
                <div>{question}</div>
            </div>
    
                <div>
                    <Image src="/images/leftarrowtri.svg" alt="Left Arrow" width={10} height={10} />
                    <button className={style.buttonA} onClick={()=>setCountA(prev=>prev +1)}>{options[0].textA}</button>
                    <Image src="/images/rightarrowtri.svg" alt="Right Arrow" width={10} height={10} />
                </div>
                
                <div>
                <Image src="/images/leftarrowtri.svg" alt="Left Arrow" width={10} height={10} />
                    <button className={style.buttonB} onClick={()=>setCountB(prev=>prev +1)}>{options[1].textB}</button>
                    <Image src="/images/rightarrowtri.svg" alt="Right Arrow" width={10} height={10} />
                </div>
                
  
        <Buttons 
                buttonName={prevName}
                routerName={prevRouterName}
                recordA={ctA}
                recordB={ctB}
        />
        <Buttons
                buttonName={nextName}
                routerName={nextRouterName}
                recordA={ctA}
                recordB={ctB}
        />
        
        </div>
    );
}
