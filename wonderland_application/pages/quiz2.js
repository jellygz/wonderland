import QuizTemplate from "@/Components/QuizTemplate";
import { useState } from "react";
import Quiz2_image from "@/public/images/q2.png"

export default function Quiz2() {
    const [chapterNumber] = useState(2); 
    const question = "At a crossroads, you meet a smiling cat. What do you ask it?";
    const options = [
        { text: "Which way should I go?" },
        { text: "Why are you smiling?" },
    ];

    return (
        <div>
            <QuizTemplate
                chapterNumber={chapterNumber}
                question={question}
                imageSrc={Quiz2_image}
                options={options}
            />
        </div>
    );
}
