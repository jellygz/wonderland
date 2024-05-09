import { useState } from "react"
import Image from "next/image"
// styles
import style from "./QuizButton.module.css"

export default function QuizButton({ text, onClick, isActive, id }) {

  return (
    <div
      id={id}
      className={style.quizButtonContainer} 
      onClick={onClick}
    >
        <Image 
            src="/images/leftarrowtri.svg" 
            alt="Left Arrow" 
            width={10} 
            height={10}
            className={isActive ? `${style.arrow} ${style.active}` : style.arrow}
        />
        <button className={style.quizButtons}>{text}</button>
        <Image 
            src="/images/rightarrowtri.svg" 
            alt="Right Arrow" 
            width={10} 
            height={10} 
            className={isActive ? `${style.arrow} ${style.active}` : style.arrow}
        />
    </div>
  )
}
