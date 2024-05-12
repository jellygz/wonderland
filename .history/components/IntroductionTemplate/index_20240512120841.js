import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link for navigation
import styles from "./IntroductionTemplate.module.css";
import Restrainer from "@/components/Restrainer";

export default function IntroductionTemplate() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);

    const getContent = () => {
        switch (currentStep) {
            case 0:
                return {
                    title: "Immersive Quiz",
                    head: "Immersive Quiz",
                    description: "A quiz with Alice to understand her story. Enjoy the journey!",
                    icon: "/images/heart.svg",
                };
            case 1:
                return {
                    title: "Music Box",
                    head: "Music Box",
                    description: "Relax with our peaceful music box. Inspired by the story of Alice in Wonderland.",
                    icon: "/images/musicBoxIcon.svg",
                };
            case 2:
                return {
                    title: "Chat Bot",
                    head: "Chat Bot",
                    description: "Try our real-time chat bot! Don’t feel alone.",
                    icon: "/images/chatBotIcon.svg",
                };
            default:
                return {};
        }
    };

    const { title, head, description, icon } = getContent();

    const handleArrowClick = (direction) => {
        if (direction === 'right') {
            if (currentStep === 2) {
                router.push("/main");
            } else {
                setCurrentStep(currentStep + 1);
            }
        } else if (currentStep > 0) { // Added check to prevent negative index
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <Restrainer>
            <main className={styles.main}>
                <div className={styles.borderContainer}>
                    <div className={styles.textContainer}>
                        <Image src="/images/intrologo.svg" alt="Wonderland Text" width={500} height={147} />
                    </div>
                    <div className={styles.frameContainer}>
                        <Image src="/images/border.svg" alt="Border Image" width={500} height={400} />
                        <div className={styles.descriptionImageContainer}>
                            <Image src={icon} alt={title} width={65} height={65} />
                        </div>
                        <div className={styles.descriptionTextContainer}>
                            <h1 className={styles.headText}>{head}</h1>
                            <p className={styles.descriptionText}>{description}</p>
                        </div>
                    </div>
                    <div className={styles.clickContainer}>
                        {currentStep > 0 && (
                            <button onClick={() => handleArrowClick('left')} 
                                    style={{ backgroundColor: 'transparent', border: 'none' }}>
                                <Image src="/images/leftArrowIcon.svg" alt="Left Arrow" width={40} height={40} />
                            </button>
                        )}
                        {currentStep < 2 && (
                            <button onClick={() => handleArrowClick('right')} 
                                    style={{ backgroundColor: 'transparent', border: 'none' }}>
                                <Image src="/images/rightArrowIcon.svg" alt="Right Arrow" width={40} height={40} />
                            </button>
                        )}
                    </div>
                    <Link href="/main">
                        <a className={styles.skipButton}>Skip</a>
                    </Link>
                </div>
            </main>
        </Restrainer>
    );
}
