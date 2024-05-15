import React from 'react'
import Restrainer from '@/components/Restrainer'
import styles from '@/styles/Makeawish.module.css'
import MainNav from '@/components/MainNav'
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Makeawish() {

  return (
    <>
        <Restrainer>
            <main className={styles.main}>
                <MainNav />
                <div className={styles.container}>
                    <div className={styles.aliceContainer}>
                        <Image className={styles.alice} src="/Group 27.png" alt="Alice" width={330} height={70} />
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.welcomeText}>Welcome to Wonderland’s Wishing Station!</h1>
                        <p className={styles.descriptionText}>
                        This room was specially made for you... <br /> Once you write something down this magical <br /> text box, 
                        our staff will send it off to the <br /> shooting stars. We sincerely hope you receive <br /> everything 
                        you deserve in your world!
                        </p>
                    </div>
                    <div className={styles.bottomContainer}>
                        <textarea className={styles.inputBox} rows="12" cols="50" placeholder="Write your wishes here." />
                        <Link className={styles.arrowButton} href="/sent"><FaArrowRight /></Link>
                    </div>
                </div>
            </main>
        </Restrainer>
        </>
  )
}
