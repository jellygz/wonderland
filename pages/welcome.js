import React from 'react'
import Restrainer from '@/components/Restrainer'
import styles from '@/styles/Welcome.module.css'
import MainNav from '@/components/MainNav'
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Welcome() {

  return (
    <>
        <Restrainer>
            <main className={styles.main}>
                <MainNav />
                <div className={styles.container}>
                    <div className={styles.aliceContainer}>
                        <Image className={styles.alice} src="/Group 27.png" alt="Alice" width={385} height={70} />
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.welcomeText}>Welcome to Wonderland!</h1>
                        <p className={styles.descriptionText}>
                        <span className={styles.spanText}>Thanks for stopping by!</span>
                        Ready for a stroll in the forest? There are <br />
                        mysterious beings here that dive into our <br />
                        thoughts to guide us toward our higher <br />
                        selves.
                        <span className={styles.spanText}>Cool, right? Want to join me?</span>
                        </p>
                    </div>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.quizButton}>
                            <Link href="/quizIntro" className={styles.buttonWhite}>
                                <p>Join Alice...</p>
                                <FaArrowRight />
                            </Link>
                        </div>
                        <div className={styles.quizButton}>
                            <Link href="/quizIntro" className={styles.buttonBlack}>
                                <p>Go alone...</p>
                                <FaArrowRight className={styles.arrowWhite}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Restrainer>
        </>
  )
}
