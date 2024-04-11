import Image from "next/image";

export default function quiz() {
    return (
    <div>
        <h1>Chapter 1</h1>
        <Image src = "../public/images/progress1.svg" />
        <div className={styles}>
            <p>You've just followed a hurried rabbit down a rabbit hole. What's your first reaction?</p>
        </div>
    </div>
    
    )
}