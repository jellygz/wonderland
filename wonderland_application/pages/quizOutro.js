import React from 'react'
import { RecordContextProvider } from '@/context/RecordContext'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Restrainer from '@/components/Restrainer'
import styles from '@/styles/QuizOutro.module.css'
import Image from "next/image"
import BreathingText from '@/components/BreathingText'
import { useRecordContext } from "@/hooks/useRecordContext"
import Buttons from '@/components/Buttons'


export default function quizOutro() {
    const [inputValue, setInputValue] = useState("");
    const router = useRouter()

  return (
    <Restrainer>
    <main className={styles.main}>
        <BreathingText />
        <Image className={styles.spline} src="/spline_no_bg.gif" alt="Blob" width={650} height={400} />
            <div className={styles.enterNameContainer}>
            <p className={styles.enterNameText}>How was your walk? <br /> Do you remember who you are?</p>
            <input
                classname={styles.inputBar}
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder='Enter your name...' 
            />
        <div className={styles.buttonContainer}>
            <Buttons 
                buttonName="ENTER"
                userName = {inputValue}
                isResult
            />
        </div>
    </div>
    </main>
    </Restrainer>
  )
}
