import Head from "next/head";
import Image from "next/image";
import styles from "./IntroductionTemplate.module.css";
import Link from "next/link";
import Restrainer from "@/components/Restrainer";
import MainNav from "../MainNav";
import rightArrowIcon from "@/public/images/rightArrowIcon.svg";
import leftArrowIcon from "@/public/images/leftArrowIcon.svg";
import { useRouter } from "next/router";
import heartImage from "@/public/images/heart.svg";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import musicBoxIcon from "@/public/images/musicBoxIcon.svg";
import chatBotIcon from "@/public/images/chatBotIcon.svg";


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
          icon: "/images/quizIcon.svg", // Adjust the path as necessary
        };
      case 1:
        return {
          title: "Music Box",
          description: "Relax with our peaceful music box. Inspired by the story Alice in Wonderland.",
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

  const content = getContent();
  
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
                <rightArrowIcon className={styles.arrowIcon} />
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

