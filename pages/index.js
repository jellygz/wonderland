import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Restrainer from "@/components/Restrainer";
import MainNav from "@/components/MainNav";
import { RecordContextProvider } from "@/context/RecordContext";


export default function Index() {
  return (
    <>
      <Head>
        <title>Wonderland</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Restrainer>
          <main className={styles.main}>
            <div className={styles.aliceContainer}>
              <Image className={styles.alice} src="/Alice.png" alt="Alice" width={450} height={400} />
            </div>
            <div className={styles.wonderlandLogoContainer}>
              <Image className={styles.wonderlandLogo} src="/Wonderland Logo.png" alt="Logo" width={300} height={200} />
            </div>
            <div className={styles.buttonsContainer}>
              <Image className={styles.cardKing} src="/king 1.png" alt="King Card" width={70} height={70} />
              <div className={styles.mainButton}>
                <div className={styles.circleButton}>
                  <Image className={styles.button} src="/image 1.png" alt="Button" width={120} height={120} />
                </div>
                <Link href="/introduction/1" className={styles.arrowButton}>
                <Image className={styles.arrow} src="/button.png" alt="Button" width={50} height={50} />
                </Link>
              </div>
              <Image className={styles.cardQueen} src="/queen 1.png" alt="Queen Card" width={70} height={70} />
            </div>
          </main>
      </Restrainer>
    </>
  )
}
