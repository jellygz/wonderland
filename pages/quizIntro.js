import Image from 'next/image';
import Restrainer from '@/components/Restrainer';
import styles from "@/styles/QuizIntro.module.css";
import BreathingText from '@/components/BreathingText';
import Link from "next/link"

export default function QuizIntro() {
    

    return (
        <>
        <Restrainer>
            <main className={styles.main}>
                <div className={styles.container}>
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
                        <div className={styles.quizButton}>
                            <Link href="/quiz/1" className={styles.button}>Start</Link>
                        </div>
                </div>
            </main>
        </Restrainer>
        </>
    );
}
