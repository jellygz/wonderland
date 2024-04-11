import QuizTemplate from "@/Components/QuizTemplate";
import { useState } from "react";
import Quiz1_image from "@/public/images/q1.png"

export default function Quiz1() {
    const [chapterNumber] = useState(1); 
    const question = "You've just followed a hurried rabbit down a rabbit hole. What's your first reaction?";
    const options = [
        { text: "Feel excited and curious about what's below." },
        { text: "Worry about how late you're going to be for your next appointment." },
    ];
    const buttonName="back";

    return (
        <div>
            <QuizTemplate
                chapterNumber={chapterNumber}
                question={question}
                imageSrc={Quiz1_image}
                options={options}
                buttonName={buttonName}
            />
        </div>
    );
}