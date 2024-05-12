import Image from "next/image";
import styles from "./IntroductionTemplate.module.css";
import Link from "next/link";
import Restrainer from "@/components/Restrainer";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import * as React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";


export default function IntroductionTemplate() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === "ArrowRight") {
        if (currentStep < 2) { 
          setCurrentStep(currentStep + 1);
        }
      } else if (event.key === "ArrowLeft") {
        if (currentStep > 0) {
          setCurrentStep(currentStep - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [currentStep]);
  
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

  const handleArrowClick = (direction) => {
    if (direction === 'right' && currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else if (direction === 'left' && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <Restrainer>
      <main className={styles.main}>
        <div className={styles.textContainer}>
          <Image src="/images/intrologo.svg" alt="Wonderland Text" width={500} height={147} />
        </div>
        <div className={styles.borderContainer}>
          <Image src="/images/border.svg" alt="Decorative Border" width={500} height={500} />
          <div>
            <button onClick={() => handleArrowClick('left')}>
              <Image src="/images/leftArrowIcon.svg" alt="Left Arrow" width={11} height={21} />
            </button>
            <button onClick={() => handleArrowClick('right')}>
              <Image src="/images/rightArrowIcon.svg" alt="Right Arrow" width={11} height={21} />
            </button>
          </div>
        </div>
        <div className={styles.descriptionImageContainer}>
          <Image src={icon} alt={title} width={65} height={65} />
        </div>
        <div className={styles.descriptionTextContainer}>
          <p className={styles.descriptionText}>
            {description}
          </p>
        </div>
      </main>
    </Restrainer>
  );
}
