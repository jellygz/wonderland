import { RecordContextProvider } from "@/context/RecordContext";
import { useRouter } from "next/router";
// components
import QuizTemplate from "@/components/QuizTemplate";

export default function Quiz() {

    const router = useRouter()

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
                After a long trip down the rabbit hole, you <br /> were cushioned by soft grass and greeted by <br /> a smiling cat. It starts telling you to go back <br /> up and 
            </div>)
            break
            case "4" :
                return (<div>
                After a long trip down the rabbit hole, you <br /> were cushioned by soft grass and greeted by <br /> a smiling cat. It starts telling you to go back <br /> up and 
            </div>)
            break
            case "5" :
                return (<div>
                After a long trip down the rabbit hole, you <br /> were cushioned by soft grass and greeted by <br /> a smiling cat. It starts telling you to go back <br /> up and 
            </div>)
            break
            case "6" :
                return (<div>
                After a long trip down the rabbit hole, you <br /> were cushioned by soft grass and greeted by <br /> a smiling cat. It starts telling you to go back <br /> up and 
            </div>)
            break
        }
    }

    const optionsValue = (id) => {
        switch(id) {
            case "1" :
                return [
                    { textA: "Start to wonder and feel curiosity about the adventures down below..."
                     },
                    { textB: "Start to question whether or not to try and grab onto something to stop the fall." 
                    },
                ];
            break
            case "2" :
                return [
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
            break
            case "3" :
                return [
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
            break
            case "4" :
                return [
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
            break
            case "5" :
                return [
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
            break
            case "6" :
                return [
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
            break
        }
    }

    return (
        <RecordContextProvider>
        <div>
            {router.query.id &&
            <QuizTemplate
                chapterNumber={router.query.id}
                question={questionValue(router.query.id)}
                imageSrc={`/images/q${router.query.id}.png`}
                options={optionsValue(router.query.id)}
            />
        }
        </div>
        </RecordContextProvider>
    );
}
