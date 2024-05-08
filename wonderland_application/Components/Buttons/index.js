import style from './Buttons.module.css';
import { useRouter } from 'next/navigation';
import { useRecordContext } from '@/hooks/useRecordContext';
import { useState } from 'react';

export default function Buttons({buttonName, routerName, isBack, isResult}) {
    const router = useRouter()
    const {setActiveOption, setSelectedOptions, activeOption, selectedOptions} = useRecordContext()
    const [clickSound] = useState(new Audio("/music/tap_1.mp3"))

    const handleClickNext = (option) => {
        clickSound.play();
        setSelectedOptions([...selectedOptions, option])
        router.push({pathname: routerName})
        setActiveOption(null)
    }

    const handleClickBack = () => {
        clickSound.play();
        const updatedOptions = [...selectedOptions]
        updatedOptions.pop()
        setSelectedOptions(updatedOptions)
        router.push({pathname: routerName})
    }

    // const [ inputValue, setInputValue ] = useState("")

    const countA = selectedOptions.filter(option => option === "A").length
	const countB = selectedOptions.filter(option => option === "B").length

    console.log(countA, countB)

    const handleClickResult = () => {
        clickSound.play();
        if (countA > countB) {
            router.push({pathname:"/result/magician"})
        } else if (countA < countB) {
            router.push({pathname:"/result/pirate"})
        } else if (countA === countB) {
            router.push({pathname:"/result/archer"})
        } else if (countB === 6) {
            router.push({pathname:"/result/warrior"})
        } else {
            router.push({pathname:"/result/magician"})
        }
    }

    return(
    <div className={isBack ? style.quizBackButton : style.quizButton}>
        {isBack ? (
            <button onClick={()=>handleClickBack()}>{buttonName}</button>
        ) : activeOption ? (
            <button onClick={()=>handleClickNext(activeOption)}>{buttonName}</button>
        ) : null}
        {isResult &&
            <button onClick={()=>handleClickResult()}>{buttonName}</button>
        }
    </div>
    );
}