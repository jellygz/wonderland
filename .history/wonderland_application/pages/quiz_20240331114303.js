import Image from "next/image";

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

        </div>
    </div>
    
    )
}