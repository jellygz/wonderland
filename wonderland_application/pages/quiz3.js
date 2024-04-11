import QuizTemplate from "@/components/QuizTemplate";
import { useState } from "react";
import Quiz3_image from "@/public/images/q3.png"

export default function Quiz3() {
    const [chapterNumber] = useState(3); 
    const question = "You're invited to a bizarre tea party. How do you handle the situation?";
   
    const options = [
        { text: "Join in and try to make the best of the nonsensical conversation." },
        { text: "Start sharing riddles, even if they don't make sense." },
    ];

    return (
        <div>
            <QuizTemplate
                chapterNumber={chapterNumber}
                question={question}
                imageSrc={Quiz3_image}
                options={options}
            />
        </div>
    );
}