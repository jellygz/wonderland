import style from './Buttons.module.css';

export default function Buttons({buttonName}) {
    return(
    <div className={style.quizButton}>
    <button>{buttonName}</button>
    </div>
    );
}