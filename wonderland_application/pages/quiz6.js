import QuizTemplate from "@/components/QuizTemplate";
import { useState } from "react";
import Quiz6_image from "@/public/images/q6.png"

export default function Quiz6() {
    const [chapterNumber] = useState(6); 
    const question = "It's time to go home. How do you feel about leaving Wonderland?";
 
    const options = [
        { text: "Relieved, it's been quite a confusing adventure." },
        { text: "Sad, you've enjoyed the madness and learned a lot." },
    ];

    return (
        <div>
            <QuizTemplate
                chapterNumber={chapterNumber}
                question={question}
                imageSrc={Quiz6_image}
                options={options}
            />
        </div>
    );
}