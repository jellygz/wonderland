import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./IntroductionTemplate.module.css";
import Restrainer from "@/components/Restrainer";

export default function IntroductionTemplate() {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const handleKeyboard = (event) => {
            if (event.key === "ArrowRight") {
                setCurrentStep(prev => prev < 2 ? prev + 1 : prev);
            } else if (event.key === "ArrowLeft") {
                setCurrentStep(prev => prev > 0 ? prev - 1 : prev);
            }
        };

        window.addEventListener('keydown', handleKeyboard);
        return () => window.removeEventListener('keydown', handleKeyboard);
    }, []);

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

    const handleArrowClick = direction => {
        setCurrentStep(prev => 
            direction === 'right' ? (prev < 2 ? prev + 1 : prev) :
            (prev > 0 ? prev - 1 : prev)
        );
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
                        <br />
                        <div className={styles.descriptionTextContainer}>
                            <h1 className={styles.headText}>{head}</h1>
                            <br />
                            <p className={styles.descriptionText}>{description}</p>
                        </div>
                    </div>
                    <div className={styles.clickContainer}>
                       <button onClick={() => handleArrowClick('left')} style={{ backgroundColor: 'transparent', border: 'none' }}>
                         <Image src="/images/leftArrowIcon.svg" alt="Left Arrow" width={40} height={24} />
                       </button>
                       <button onClick={() => handleArrowClick('right')} style={{ backgroundColor: 'transparent', border: 'none' }}>
                         <Image src="/images/rightArrowIcon.svg" alt="Right Arrow" width={24} height={24} />
                       </button>
                    </div>

                </div>
            </main>
        </Restrainer>
    );
}
