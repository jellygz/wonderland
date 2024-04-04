import Image from "next/image";
import style from "../styles/quiz.module.css"

export default function quiz() {
    return (
    <div>
        <h1>Chapter 1</h1>
        <Image src = "../public/images/progress1.svg" />
        <div className={style.question}>
            <p>You've just followed a hurried rabbit down a rabbit hole. What's your first reaction?</p>
        </div>
        <Image src = "../public/images/q1.png" />
        <div>
        <Image src = "../public/images/leftarrowtri.svg" />
        <button className={style.buttonA}>Feel excited and curious about what's below.</button>
        <Image src = "../public/images/rightarrowtri.svg" />
        </div>
        <div>
        <Image src = "../public/images/leftarrowtri.svg" />
        <button className={style.buttonB}>Worry about how late you're going to be for your next appointment.</button>
        <Image src = "../public/images/rightarrowtri.svg" />
        </div>
    </div>
    
    )
}