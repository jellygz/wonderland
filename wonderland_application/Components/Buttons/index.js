import style from './Buttons.module.css';
import { useRouter } from 'next/navigation';
import { useRecordContext } from '@/hooks/useRecordContext';

export default function Buttons({buttonName, routerName, isBack}) {
    const router = useRouter()
    const {ctA, ctB} = useRecordContext()
    const rdA = ctA;
    const rdB = ctB;

    return(
    <div className={isBack ? style.quizBackButton : style.quizButton}>
    <button onClick={()=>{router.push({pathname:routerName,query:{rdA, rdB},})}}>{buttonName}</button>
    </div>
    );
}