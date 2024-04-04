import Image from "next/image";
import style from "../styles/quiz.module.css";
import progress1 from "../public/images/progress1.svg";
import q1 from "../public/images/q1.png";
import leftarrowtri from "../public/images/leftarrowtri.svg";
import rightarrowtri from "../public/images/rightarrowtri.svg";

export default function Quiz() {
    return (
        <div className={style.container}>
            <h1>Chapter 1</h1>
            <Image src={progress1} alt="Progress" width={200} height={20} />
            <div className={style.question}>
                <p>You've just followed a hurried rabbit <br />
                down a rabbit hole. What's your first <br />
                reaction?</p>
            </div>
            <Image src={q1} alt="Question" width={200} height={200} />
            <div>
                <Image src={leftarrowtri} alt="Left Arrow" width={10} height={10} />
                <button className={style.buttonA}>Feel excited and curious about <br />
                 what's below.</button>
                <Image src={rightarrowtri} alt="Right Arrow" width={10} height={10} />
            </div>
            <div>
                <Image src={leftarrowtri} alt="Left Arrow" width={10} height={10} />
                <button className={style.buttonB}>Worry about how late you're going <br />
                 to be for your next appointment.</button>
                <Image src={rightarrowtri} alt="Right Arrow" width={10} height={10} />
            </div>
        </div>
    );
}
