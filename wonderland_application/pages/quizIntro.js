import { useEffect } from 'react';
import Buttons from '@/components/Buttons';
import Image from 'next/image';
import { RecordContextProvider } from '@/context/RecordContext';
import Restrainer from '@/components/Restrainer';
import styles from "@/styles/QuizIntro.module.css";
import BreathingText from '@/components/BreathingText';


export default function QuizIntro() {
    

    return (
        <>
        <RecordContextProvider>
        <Restrainer>
            <main className={styles.main}>
                <BreathingText />
                <Image className={styles.spline} src="/spline_no_bg.gif" alt="Blob" width={650} height={400} />
                    <div>
                        <p className={styles.desc}>
                        <span className={styles.memoryText}>Your memory has been erased</span>
                        Take your time to relax <br />
                        We will soon begin to embark on a <br />
                        journey exploring your deepest thoughts
                        </p>
                    </div>
                    <Buttons 
                    buttonName="Start"
                    routerName="/quiz/1"
                    recordA={0}
                    recordB={0}
                    />
            </main>
        </Restrainer>
        </RecordContextProvider>
        </>
    );
}
