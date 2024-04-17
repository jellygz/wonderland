import QuizTemplate from "@/components/QuizTemplate";
import { useState } from "react";
import Quiz1_image from "@/public/images/q1.png";

export default function Quiz1() {
    const [chapterNumber] = useState(1); 
    const question = (
        <div>
            As you trail along Alice down the winding <br /> forest path, you trip into a steep rabbit hole <br /> A fleeting minute slips by, yet you still <br /> feel the sensation of yourself falling down... <br /> What would cross your mind amidst the fall?
        </div>
    );
    const options = [
        { textA: (
            <div>
                Start to wonder and feel curiosity <br /> about the adventures down below...
            </div>
        ) },
        { textB: (
            <div>
                Start to question whether or not to try <br /> and grab onto something to stop the fall.
            </div>
        ) },
    ];

    const [countA,setCountA] = useState(0);
    const [countB,setCountB] = useState(0);

    return (
        <div>
            <QuizTemplate
                chapterNumber={chapterNumber}
                question={question}
                imageSrc={Quiz1_image}
                options={options}
                prevName="Intro"
                prevRouterName="/quizIntro"
                nextName="Next"
                nextRouterName="/quiz2"
                countA={countA}
                countB={countB}
            />
        </div>
    );
}
