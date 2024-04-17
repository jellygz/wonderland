import QuizTemplate from "@/components/QuizTemplate";
import { useState } from "react";
import Quiz3_image from "@/public/images/q3.png";
import { useRouter, useSearchParams } from 'next/navigation';

export default function Quiz3() {
    const [chapterNumber] = useState(3); 
    const router = useRouter();
    const searchParams = useSearchParams()
    const recordA= searchParams.get("rdA")
    const recordB= searchParams.get("rdB")

    console.log("recordA, recordB", recordA, recordB)

    const question = (
        <div>
            After a long trip down the rabbit hole, you <br /> were cushioned by soft grass and greeted by <br /> a smiling cat. It starts telling you to go back <br /> up and 
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
    
    const [countA,setCountA] = useState(2);
    const [countB,setCountB] = useState(2);

    return (
        <div>
            <QuizTemplate
                chapterNumber={chapterNumber}
                question={question}
                imageSrc={Quiz3_image}
                options={options}
                prevName="Previous"
                prevRouterName="/quiz2"
                nextName="Next"
                nextRouterName="/quiz4"
                countA={countA}
                countB={countB}
            />
        </div>
    );
}
