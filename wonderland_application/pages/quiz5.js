import QuizTemplate from "@/Components/QuizTemplate";
import { useState } from "react";
import Quiz5_image from "@/public/images/q5.png"

export default function Quiz5() {
    const [chapterNumber] = useState(5); 
    const question = "You're invited to a bizarre You find yourself at the Queen's croquet ground. How do you play the game?tea party. How do you handle the situation?";

    const options = [
        { text: "By trying to follow the rules, even though they keep changing." },
        { text: "By using a flamingo as a mallet because that seems to be the trend." },
    ];

    return (
        <div>
            <QuizTemplate
                chapterNumber={chapterNumber}
                question={question}
                imageSrc={Quiz5_image}
                options={options}
            />
        </div>
    );
}