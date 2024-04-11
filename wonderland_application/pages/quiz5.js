import QuizTemplate from "@/Components/QuizTemplate";
import { useState } from "react";
import Quiz5_image from "@/public/images/q5.png";
import { useRouter, useSearchParams } from 'next/navigation';

export default function Quiz5() {
    const [chapterNumber] = useState(5); 
    const router = useRouter();
    const searchParams = useSearchParams()
    const recordA= searchParams.get("rdA")
    const recordB= searchParams.get("rdB")

    console.log("recordA, recordB", recordA, recordB)

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
    
    const [countA,setCountA] = useState(4);
    const [countB,setCountB] = useState(4);

    return (
        <div>
            <QuizTemplate
                chapterNumber={chapterNumber}
                question={question}
                imageSrc={Quiz5_image}
                options={options}
                prevName="Previous"
                prevRouterName="/quiz4"
                nextName="Next"
                nextRouterName="/quiz6"
            />
        </div>
    );
}
