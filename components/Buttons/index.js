import style from './Buttons.module.css';
import { useRouter } from 'next/navigation';
import { useRecordContext } from '@/hooks/useRecordContext';
import { useState, useEffect} from 'react';

export default function Buttons({buttonName, routerName, isBack, isResult, userName}) {
    const router = useRouter()
    const {setActiveOption, setSelectedOptions, activeOption, selectedOptions} = useRecordContext()
    
    const [clickSound, setClickSound] = useState()
    useEffect(() => {
        if (typeof Audio !== 'undefined') {
            const audio = new Audio("/music/tap_1.mp3");
            setClickSound(audio)
            }
    }, []);

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

    console.log(countA, countB);
    console.log(userName);

    const handleClickResult = () => {
        clickSound.play();
        if (countA > countB) {
            router.push({pathname:`/result/magician`, query: { userName: userName }})
        } else if (countA < countB) {
            router.push({pathname:`/result/pirate`, query: { userName: userName }})
        } else if (countA === countB) {
            router.push({pathname:`/result/archer`, query: { userName: userName }})
        } else if (countB === 6) {
            router.push({pathname:`/result/warrior`, query: { userName: userName }})
        } else {
            router.push({pathname:`/result/magician`, query: { userName: userName }})
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