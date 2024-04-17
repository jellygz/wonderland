import style from './Buttons.module.css';
import { useRouter } from 'next/navigation';
import { useRecordContext } from '@/hooks/useRecordContext';

export default function Buttons({buttonName, routerName, recordA, recordB}) {
    const router = useRouter()
    const {ctA, ctB} = useRecordContext()
    const rdA = ctA;
    const rdB = ctB;

    return(
    <div className={style.quizButton}>
    <button onClick={()=>{router.push({pathname:routerName,query:{rdA, rdB},})}}>{buttonName}</button>
    </div>
    );
}