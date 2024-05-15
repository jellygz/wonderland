import React from 'react'
import Restrainer from '@/components/Restrainer'
import styles from '@/styles/Error.module.css'
import MainNav from '@/components/MainNav'
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Error() {

  return (
    <>
        <Restrainer>
            <main className={styles.main}>
                <MainNav />
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.errorText}>404 ERROR</h1>
                    </div>
                    <div className={styles.blueContainer}>
                        <p className={styles.blueText}>
                        This page is not part of Wonderland. An unknown character has decided to erase your memories. Please go back before they finish your portrait!
                        </p>
                    </div>
                    <div className={styles.painterContainer}>
                        <Image className={styles.painter} src="/1484.png" alt="Painter" width={350} height={70} />
                    </div>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.articleButton}>
                            <Link href="/resources" className={styles.button}>
                                <p>Return to Articles</p>
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
