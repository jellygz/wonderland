import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router'; 
import styles from "./IntroductionTemplate.module.css";
import Restrainer from "@/components/Restrainer";
import { Visibility } from '@mui/icons-material';

export default function IntroductionTemplate() {
    const router = useRouter(); 
    const [currentStep, setCurrentStep] = useState(0);
    const [link, setLink] = useState("");
    const [display, setDisplay] = useState({ visibility: "hidden" });

    useEffect(() => {
        const handleKeyboard = (event) => {
            if (event.key === 'ArrowRight') {
                handleRightButton();
            } else if (event.key === 'ArrowLeft') {
                handleLeftButton();
            }
        };

        window.addEventListener('keydown', handleKeyboard);
        return () => {
            window.removeEventListener('keydown', handleKeyboard);
        };
    }, [currentStep]);  

    const handleRightButton = () => {
        setCurrentStep((prev) => (prev < 2 ? prev + 1 : prev));
        setDisplay({ visibility: "visible" });
        if (currentStep > 0) {
            setLink("/main");
        }
    };

    const handleLeftButton = () => {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
        if (currentStep <= 1) {
            setDisplay({ visibility: "hidden" });
            setLink("");
        } else {
            setDisplay({ visibility: "visible" });
        }
    };

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
                        <button onClick={() => handleLeftButton()} style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <Image src="/images/leftArrowIcon.svg" alt="Left Arrow" width={40} height={40} />
                        </button>
                        <button onClick={() => handleRightButton()} style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <Image src="/images/rightArrowIcon.svg" alt="Right Arrow" width={40} height={40} />
                        </button>
                    </div>
                    <button onClick={() => router.push(link)} className={styles.skipButton} style={display}>Skip</button>  
                </div>
            </main>
        </Restrainer>
    );
}
