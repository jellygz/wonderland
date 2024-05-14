import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router'; 
import styles from "./IntroductionTemplate.module.css";
import Restrainer from "@/components/Restrainer";
import NavDotBar from "@/components/N"


export default function IntroductionTemplate() {
    const router = useRouter(); 
    const [currentStep, setCurrentStep] = useState(0);

    const getContent = () => {
        switch (currentStep) {
            case 0:
                return {
                    title: "Immersive Quiz",
                    head: "Immersive Quiz",
                    description: "Embark on a journey of self-discovery by taking Alice's quiz. Enjoy the experience!",
                    icon: "/images/heart.svg",
                };
            case 1:
                return {
                    title: "Music Box",
                    head: "Music Box",
                    description: "Unwind with our peaceful music box, drawing inspiration from the tale of Alice in Wonderland.",
                    icon: "/images/musicBoxIcon.svg",
                };
            case 2:
                return {
                    title: "Chat Bot",
                    head: "Chat Bot",
                    description: "Relieve stress by confiding in our real-time Chatbot! You're not alone.",
                    icon: "/chatchat.png",
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
        } else {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSkip = () => {
        router.push("/main");
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
                            <br />
                            <p className={styles.descriptionText}>{description}</p>
                        </div>
                    </div>
                    <div className={styles.clickContainer}>
                        <button onClick={() => handleArrowClick('left')} 
                                style={{ backgroundColor: 'transparent', border: 'none', visibility: currentStep === 0 ? 'hidden' : 'visible' }}>
                            <Image src="/images/leftArrowIcon.svg" alt="Left Arrow" width={40} height={40} />
                        </button>
                        <button onClick={() => handleArrowClick('right')} 
                                style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <Image src="/images/rightArrowIcon.svg" alt="Right Arrow" width={40} height={40} />
                        </button>
                    </div>
                    <NavDotBar />
                    <button onClick={handleSkip} className={styles.skipButton}>
                        Skip
                    </button>
                </div>
            </main>
        </Restrainer>
    );
}
