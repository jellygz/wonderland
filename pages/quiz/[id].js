import { RecordContextProvider } from "@/context/RecordContext";
import { useRouter } from "next/router";
// components
import QuizTemplate from "@/components/QuizTemplate";
import { useEffect } from "react";

export default function Quiz() {

    const router = useRouter()
    useEffect(()=>{
        const handleKeyboard = (event) =>{
            if (event.key == "ArrowRight") {
                const nextId = Number(router.query.id) + 1
                if (nextId <= 6) {
                    router.push(`/quiz/${nextId}`)
                }
            }
            else if (event.key == "ArrowLeft"){
                const prevId = Number(router.query.id) - 1
                if(prevId >= 1) {
                    router.push(`/quiz/${prevId}`)
                }
            }
        }
        document.addEventListener('keydown', handleKeyboard);
        return () => {
            document.removeEventListener('keydown', handleKeyboard);
        }
    },[router])

    const questionValue = (id) => {
        switch(id) {
            case "1" :
                return (<div>
                As you trail along Alice down the winding <br /> forest path, you trip into a steep rabbit hole <br /> A fleeting minute slips by, yet you still <br /> feel the sensation of yourself falling down... <br /> What would cross your mind amidst the fall?
            </div>)
            break
            case "2" :
                return (<div>
                After a long trip down the rabbit hole, you <br /> were cushioned by soft grass and greeted by <br /> a smiling cat. It starts telling you to go back <br /> up and and that you are not supposed to be <br /> here...
            </div>)
            break
            case "3" :
                return (<div>
                You stumble upon a tea party with unknown <br /> characters chattering nonsense while <br /> staring at you. One comes up to you, <br /> offering a cup of tea. It glistens in the sun <br /> with rising smoke from the heat.
            </div>)
            break
            case "4" :
                return (<div>
                A small voice calls out your name from the <br /> ground, where a caterpillar awaits, offering <br /> its prediction about your inevitable fate once <br /> you leave Wonderland....
            </div>)
            break
            case "5" :
                return (<div>
                The queen of the forest accuses you of <br /> painting her red roses white in her garden. <br /> You are about to face severe punishment for <br /> a crime you did not commit...
            </div>)
            break
            case "6" :
                return (<div>
                In a garden of lovely flowers, you encounter <br /> a dead-end. You have five minutes before <br /> you risk eternal entrapment in the forest. <br /> What would you do?
            </div>)
            break
        }
    }

    const optionsValue = (id) => {
        switch(id) {
            case "1" :
                return [
                    { textA: "Start to wonder whether this fall is going to be endless..."
                     },
                    { textB: "Start reflecting on each decision I made to have led me to this moment."
                    },
                ];
            break
            case "2" :
                return [
                    { textA: "Politely thank the cat for its concern but assert my right to explore..."
                     },
                    { textB: "Tell the cat that I'll consider going back up if it can provide a compelling reason..."
                    },
                ];
            break
            case "3" :
                return [
                    { textA: "Politely decline the drink while asking why everyone is staring at you."
                     },
                    { textB: "Warily accept the drink while asking what it is made of."
                    },
                ];
            break
            case "4" :
                return [
                    { textA: "Ask the caterpillar for advice on how to navigate the challenges that await me outside."
                     },
                     { textB: "Laugh off the caterpillar's prediction, expressing confidence in my ability to shape my own destiny."
                    },
                ];
            break
            case "5" :
                return [
                    { textA: "Express confusion and disbelief at the accusation, insisting that you are innocent."
                     },
                     { textB: "Ask for evidence to support the accusation and request a fair trial to prove your innocence."
                    },
                ];
            break
            case "6" :
                return [
                    // { textA: (
                    //     <div>
                    //         Start to wonder and feel curiosity <br /> about the adventures down below...
                    //     </div>
                    // ) },
                    // { textB: (
                    //     <div>
                    //         Start to question whether or not to try <br /> and grab onto something to stop the fall.
                    //     </div>
                    // ) },
                    { textA: "Use the five minutes to carefully backtrack and retrace my steps, searching for any missed paths"
                     },
                     { textB: "Quickly assess the dead-end for any hidden passages that might lead to another path."
                    },
                ];
            break
        }
    }

    return (
        <>
            {router.query.id &&
            <QuizTemplate
                chapterNumber={router.query.id}
                question={questionValue(router.query.id)}
                imageSrc={`/images/q${router.query.id}.png`}
                options={optionsValue(router.query.id)}
            />
        }
        </>
    );
}
