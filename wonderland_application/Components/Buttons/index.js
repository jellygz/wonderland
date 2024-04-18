import style from './Buttons.module.css';
import { useRouter } from 'next/navigation';
import { useRecordContext } from '@/hooks/useRecordContext';

export default function Buttons({buttonName, routerName, isBack}) {
    const router = useRouter()
    const {ctA, ctB, setActiveOption} = useRecordContext()
    const rdA = ctA;
    const rdB = ctB;

    const handleClick = () => {
        router.push({pathname:routerName,query:{rdA, rdB},})
        setActiveOption(null)
    }

    return(
    <div className={isBack ? style.quizBackButton : style.quizButton}>
    <button onClick={()=>handleClick()}>{buttonName}</button>
    </div>
    );
}