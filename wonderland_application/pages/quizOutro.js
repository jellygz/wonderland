import React from 'react'
import { RecordContextProvider } from '@/context/RecordContext'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Restrainer from '@/components/Restrainer'
import Buttons from '@/components/Buttons'
import styles from '@/styles/QuizOutro.module.css'


export default function quizOutro() {

    const router = useRouter()
    const [ inputValue, setInputValue ] = useState("")

    const handleClick = () => {
        router.push({pathname:"/result",query:{user: inputValue},})
    }

  return (
    <RecordContextProvider>
    <Restrainer>
    <main className={styles.main}>
        {/* <div>Spline</div> */}
        <div className={styles.enterNameContainer}>
            <p classname={styles.enterNameText}>How was your walk? <br /> Do you remember who you are?</p>
            <input
                classname={styles.inputBar}
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder='Enter your name...' 
            />
        <div className={styles.buttonContainer}>
            <button 
            className={styles.quizOutroButton}
            onClick={handleClick}
            >
                Enter
            </button>
        </div>
    </div>
    </main>
    </Restrainer>
    </RecordContextProvider>
  )
}
