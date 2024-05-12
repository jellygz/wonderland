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
import React from "react";
import musicBoxIcon from "@/public/images/music"


export default function IntroductionTemplate({introImageSrc, description}) {

  const onboardingData = [
    {
      title: "Immersive Quiz",
      description: "A quiz with Alice to understand her story. Enjoy the journey!",
      buttonText: "Next",
    },
    {
      title: "Music Box",
      description: "Relax with our peaceful music box. Inspired by the story Alice in Wonderland.",
      buttonText: "Next",
    },
    {
      title: "Chat Bot",
      description: "Try our real-time chat bot! Don’t feel alone.",
      buttonText: "Start your Journey",
    },
  ];
  
  const Onboarding = () => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const nextStep = () => {
      if (currentStep < onboardingData.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };
  
    const content = onboardingData[currentStep];
  
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

