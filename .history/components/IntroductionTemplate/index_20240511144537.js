import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './IntroductionTemplate.module.css';
import Restrainer from '@/components/Restrainer';
import RightArrowIcon from '@/public/images/rightArrowIcon.svg';
import LeftArrowIcon from '@/public/images/leftArrowIcon.svg';
im

export default function IntroductionTemplate() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === "ArrowRight" && currentStep < 2) {
        setCurrentStep(currentStep + 1);
      } else if (event.key === "ArrowLeft" && currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [currentStep]);

  const handleNavigation = (direction) => {
    const newStep = direction === 'next' ? currentStep + 1 : currentStep - 1;
    if (newStep >= 0 && newStep <= 2) {
      setCurrentStep(newStep);
    }
  };

  const getContent = () => {
    switch (currentStep) {
      case 0:
        return {
          title: "Immersive Quiz",
          description: "A quiz with Alice to understand her story. Enjoy the journey!",
          icon: <Image src={}>,
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
      <main className={styles.main}>
        <div className={styles.textContainer}>
          <Image src={content.icon} alt="Intro Image" width={340} height={370} />
        </div>
        <div className={styles.descriptionTextContainer}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
        <div className={styles.borderContainer}>
          {currentStep > 0 && (
            <button onClick={() => handleNavigation('prev')}>
              <LeftArrowIcon className={styles.arrowIcon} />
            </button>
          )}
          <button onClick={() => handleNavigation('next')}>
            <RightArrowIcon className={styles.arrowIcon} />
          </button>
        </div>
      </main>
    </Restrainer>
  );
}
