import Head from "next/head";
import Image from "next/image";
import styles from "./IntroductionTemplate.module.css";
import Link from "next/link";
import Restrainer from "@/components/Restrainer";
import { useRouter } from "next/router";
import { SlArrowRight } from "react-icons/sl";

export default function IntroductionTemplate({ introImageSrc, description, nextPage }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(nextPage);
    };

    return (
        <Restrainer>
            <Head>
                <title>Wonderland - Immersive Quiz</title>
            </Head>
            <main className={styles.main}>
                <Image src={introImageSrc} alt="Introduction Image" width={340} height={100} priority />
                <div className={styles.borderContainer}>
                    <Image src="/decorative-border.png" alt="Decorative border" layout="fill" objectFit="cover" />
                </div>
                <p className={styles.descriptionText}>{description}</p>
                <button className={styles.nextButton} onClick={handleClick}>
                    <SlArrowRight size={24} />
                </button>
                <Link href="/main" className={styles.skipLink}>Skip</Link>  // Updated here
            </main>
        </Restrainer>
    );
}
