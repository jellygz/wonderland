import Image from "next/image";
import styles from "./ResultsTemplate.module.css"
import Restrainer from "@/components/Restrainer";
import React from 'react';
import { Radar } from 'react-chartjs-2';
import 'chart.js/auto'; 
import MainNav from "../MainNav";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ResultsTemplate({title, mainImageSrc, characteristics, description, radarData, userName, secondDescription, thirdDescription, leftMatchImage, leftMatchText, rightMatchImage, rightMatchText}) {
  const data = {
    labels: ['Innovation', 'Independent', 'Detail-Oriented', 'Action-Oriented', 'Resilience', 'Extrovert'],
    datasets: [
      {
        label: 'Your Personality Traits',
        data: radarData || [20, 30, 40, 50, 60, 70], 
        backgroundColor: 'var(--blue)',
        borderColor: 'var',
        borderWidth: 1,
        fill: true
      }
    ]
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
    }
  };

  return (
    <>
      <Restrainer>
          <main className={styles.main}>
          <MainNav />
          <div className={styles.container}>
            <h1 className={styles.h1}>Test Results</h1>
            <Image 
                src={mainImageSrc}
                alt={title}
                width={300} 
                height={400} 
                className={styles.magician} 
            />
            <div className={styles.nameContainer}>
              <p className={styles.name}>{userName}! You are a...</p>
              <h1 className={styles.result}>{title}</h1>
            </div>
            <div className={styles.characteristicsContainer}>
              <p className={styles.characteristics}>{characteristics}</p>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.radarChart}>
              <Radar data={data} options={options} />
            </div>
            <div className={styles.description}>{secondDescription}</div>
            <div className={styles.descriptionList}>{thirdDescription}</div>
            </div>
            <div className={styles.matchesContainer}>
              <div>
                <div className={styles.matchImageContainer}>
                  {leftMatchImage}
                </div>
                <p className={styles.matchTitle}>{leftMatchText}</p>
                <p className={styles.matchDesc}>BEST MATCH</p>
              </div>
              <div>
                <div className={styles.matchImageContainer}>
                  {rightMatchImage}
                </div>
                <p className={styles.matchTitle}>{rightMatchText}</p>
                <p className={styles.matchDesc}>WORST MATCH</p>
              </div>
            </div>
            <div className={styles.buttonsContainer}>
              <div className={styles.quizButton}>
                <Link href="/resources" className={styles.buttonBlue}>
                    <p>Learn More...</p>
                    <FaArrowRight />
                </Link>
                <Link href="/main" className={styles.buttonWhite}>
                    <p>Return Home...</p>
                    <FaArrowRight />
                </Link>
              </div>
            </div>
          </main>
      </Restrainer>
    </>
  )
}
