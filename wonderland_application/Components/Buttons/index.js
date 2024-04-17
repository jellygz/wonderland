import style from './Buttons.module.css';
import { useRouter } from 'next/navigation';

export default function Buttons({buttonName, routerName, recordA, recordB}) {
    const router = useRouter()
    const rdA = recordA; 
    const rdB = recordB;

    return(
    <div className={style.quizButton}>
    <button onClick={()=>{router.push({pathname:routerName,query:{rdA, rdB},})}}>{buttonName}</button>
    </div>
    );
}