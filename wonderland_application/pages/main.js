import React from 'react'
import Restrainer from '@/components/Restrainer'
import styles from '@/styles/Main.module.css'
import MainNav from '@/components/MainNav'
import Image from "next/image";
import Link from "next/link";

export default function Main() {

  return (
    <>
        <Restrainer>
            <main className={styles.main}>
                <MainNav />
                <div className={styles.container}>
                    <div className={styles.top}>
                        <div className={styles.topText}>
                            <h1 className="subtitle">Welcome Home!</h1>
                            <p>I’m happy that you are here.
                            <br /> Here is where you may place down 
                            <br /> all of your worries. 
                            <br /> Have a cup of tea!</p>
                        </div>
                        <div className={styles.bottomImage}>
                            <Image className={styles.kingcard} src="/king 1.png" alt="King Card" width={70} height={70} />
                            <Image className={styles.alice} src="/Layer_1.png" alt="Alice" width={450} height={400} />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <h2 className="subtitle">Explore your home</h2>
                        <div>
                            <Link className={styles.button} href="/quizIntro">
                                GO FOR A WALK
                                <hr className={styles.line} />
                                <Image className={styles.buttonImage} src="/landscape 1.png" alt="Mountains" width={70} height={70} />
                            </Link>
                            <Link className={styles.button} href="/chatbot">
                                <Image className={styles.buttonImage} src="/speech-bubble 1.png" alt="Speech Bubble" width={70} height={70} />
                                <hr className={styles.line} />
                                TALK TO ALICE
                            </Link>
                            <Link className={styles.button} href="/music">
                                LISTEN TO MUSIC
                                <hr className={styles.line} />
                                <Image className={styles.buttonImage} src="/musical-notes 1.png" alt="Musical Notes" width={70} height={70} />
                            </Link>
                            <Link className={styles.button} href="/quizIntro">
                                <Image className={styles.buttonImage} src="/star 1.png" alt="Stars" width={70} height={70} />
                                <hr className={styles.line} />
                                MAKE A WISH
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Restrainer>
        </>
  )
}
