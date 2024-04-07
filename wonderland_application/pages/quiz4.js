import QuizTemplate from "@/Components/QuizTemplate";
import { useState } from "react";
import Quiz4_image from "@/public/images/q4.png"

export default function Quiz4() {
    const [chapterNumber] = useState(4); 
    const question = "You're invited to a bizarre tea party. How do you handle the situation?";

    const options = [
        { text: "With a confident explanation of who you are and your purpose." },
        { text: "By questioning the caterpillar back, 'Who are YOU?'" },
    ];

    return (
        <div>
            <QuizTemplate
                chapterNumber={chapterNumber}
                question={question}
                imageSrc={Quiz4_image}
                options={options}
            />
        </div>
    );
}