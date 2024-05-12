import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./IntroductionTemplate.module.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Tooltip from "@mui/material/Tooltip";
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
                    description: "A quiz with Alice to understand her story. Enjoy the journey!",
                    icon: "/images/heart.svg",
                };
            case 1:
                return {
                    title: "Music Box",
                    description: "Relax with our peaceful music box. Inspired by the story of Alice in Wonderland.",
                    icon: "/images/musicBoxIcon.svg",
                };
            case 2:
                return {
                    title: "Chat Bot",
                    description: "Try our real-time chat bot! Don’t feel alone.",
                    icon: "/images/chatBotIcon.svg",
                };
            default:
                return {};
        }
    };

    const { title, description, icon } = getContent();

    const handleArrowClick = direction => {
        setCurrentStep(prev => 
            direction === 'right' ? (prev < 2 ? prev + 1 : prev) :
            (prev > 0 ? prev - 1 : prev)
        );
    };

    const progressData = [
        { value: 0, label: "Quiz" },
        { value: 50, label: "Music Box" },
        { value: 100, label: "Chat Bot" }
    ];

    return (
        <Restrainer>
            <main className={styles.main}>
                <div className={styles.borderContainer}>
                    <div className={styles.}
                    <div className={styles.textContainer}>
                        <Image src="/images/intrologo.svg" alt="Wonderland Text" width={500} height={147} />
                    </div>
                    <div className={styles.descriptionImageContainer}>
                        <Image src={icon} alt={title} width={65} height={65} />
                    </div>
                    <div className={styles.descriptionTextContainer}>
                        <p className={styles.descriptionText}>{description}</p>
                    </div>
                    <ProgressBar percent={currentStep * 50} className="ProgressBar">
                        {progressData.map((d, index) => (
                            <Step key={index}>
                                {({ accomplished }) => (
                                    <Tooltip title={d.label} arrow>
                                        <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}></div>
                                    </Tooltip>
                                )}
                            </Step>
                        ))}
                    </ProgressBar>
                    <div className={styles.clickContainer}>
                        <button onClick={() => handleArrowClick('left')}>
                            <Image src="/images/leftArrowIcon.svg" alt="Left Arrow" width={24} height={24} />
                        </button>
                        <button onClick={() => handleArrowClick('right')}>
                            <Image src="/images/rightArrowIcon.svg" alt="Right Arrow" width={24} height={24} />
                        </button>
                    </div>
                </div>
            </main>
        </Restrainer>
    );
}


