import style from './Buttons.module.css';
import { useRouter } from 'next/navigation';
import { useRecordContext } from '@/hooks/useRecordContext';

export default function Buttons({buttonName, routerName, isBack}) {
    const router = useRouter()
    const {setActiveOption, setSelectedOptions, activeOption, selectedOptions} = useRecordContext()

    const handleClickNext = (option) => {
        setSelectedOptions([...selectedOptions, option])
        router.push({pathname: routerName})
        setActiveOption(null)
    }

    const handleClickBack = () => {
        const updatedOptions = [...selectedOptions]
        updatedOptions.pop()
        setSelectedOptions(updatedOptions)
        router.push({pathname: routerName})
    }

    return(
    <div className={isBack ? style.quizBackButton : style.quizButton}>
        {isBack ? (
            <button onClick={()=>handleClickBack()}>{buttonName}</button>
        ) : activeOption ? (
            <button onClick={()=>handleClickNext(activeOption)}>{buttonName}</button>
        ) : null}
    </div>
    );
}