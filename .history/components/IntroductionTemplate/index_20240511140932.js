import Head from "next/head";
import Image from "next/image";
import styles from "./IntroductionTemplate.module.css";
import Link from "next/link";
import Restrainer from "@/components/Restrainer";
import MainNav from "../MainNav";
import rightArrowIcon from "@/public/images/rightArrowIcon.svg";
import { useRouter } from "next/router";
import heartImage from "@/public/images/heart.svg";


export default function IntroductionTemplate({introImageSrc, description}) {

    const router = useRouter()

    const handleClick = (index) => {
        router.push({pathname: String(Number(index) + 1)})
    }
  
        return (
          <Restrainer>
    <>
        <main className={`${styles.main}`}>
          <div className={styles.textContainer}>
            <Image className={styles.topText} 
            src="/top.png" 
            alt="wonderlandtext" 
            width={340} 
            height={370} />
          </div>
          <div className={styles.borderContainer}>
            <Image className={styles.border} src="/image 25.png" alt="Logo" width={400} height={200} />
            <button onClick={() => handleClick(router.query.intro)}>
                <SlArrowRight className={styles.arrowIcon} />
                </button>
          </div>
          <div className={styles.descriptionImageContainer}>
            {introImageSrc}
          </div>
          <div className={styles.descriptionTextContainer}>
            <p className={styles.descriptionText}>
              {description}</p>
          </div>
          
        </main>
    </>
    </Restrainer>
  )
}

