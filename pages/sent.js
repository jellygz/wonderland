import React from 'react'
import Restrainer from '@/components/Restrainer'
import styles from '@/styles/Sent.module.css'
import MainNav from '@/components/MainNav'
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Sent() {

  return (
    <>
        <Restrainer>
            <main className={styles.main}>
                <MainNav />
                <div className={styles.container}>
                    <div className={styles.aliceContainer}>
                        <Image className={styles.alice} src="/wishlogo.png" alt="Alice" width={385} height={70} />
                    </div>
                    <div className={styles.textContainer}>
                        <Image className={styles.letter} src="/wishmessage.png" alt="Alice" width={75} height={70} />
                        <Image className={styles.plane} src="/wishplane.png" alt="Alice" width={75} height={70} />
                        <h1 className={styles.welcomeText}>Successfully Mailed</h1>
                    </div>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.quizButton}>
                            <Link href="/main" className={styles.buttonWhite}>
                                <p>Return Home...</p>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Restrainer>
        </>
  )
}
