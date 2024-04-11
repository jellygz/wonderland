import Image from "next/image";
import style from "../styles/quiz.module.css"
import {progress1} from "../public/images/progress1.svg"
import {q1} from "../public/images/q1.png"
import {leftarrowtri} from "../public/images/leftarrowtri.svg"
import {rightarrowtri} from 



export default function quiz() {
    return (
    <div>
        <h1>Chapter 1</h1>
        <Image src = {progress1} width={200} height={20} />
        <div className={style.question}>
            <p>You've just followed a hurried rabbit down a rabbit hole. What's your first reaction?</p>
        </div>
        <Image src = {q1} width={200} height={200} />
        <div>
        <Image src = {leftarrowtri} width={10} height={10} />
        <button className={style.buttonA}>Feel excited and curious about what's below.</button>
        <Image src = "../public/images/rightarrowtri.svg" width={10} height={10} />
        </div>
        <div>
        <Image src = "../public/images/leftarrowtri.svg" width={10} height={10} />
        <button className={style.buttonB}>Worry about how late you're going to be for your next appointment.</button>
        <Image src = "../public/images/rightarrowtri.svg" width={10} height={10} />
        </div>
    </div>
    
    )
}