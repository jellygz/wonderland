import Image from "next/image";
import styles from "./ResultsTemplate.module.css"
import Restrainer from "@/components/Restrainer";
import React from 'react';
import { Radar } from 'react-chartjs-2';
import 'chart.js/auto'; 
import MainNav from "../MainNav";

export default function ResultsTemplate({title, mainImageSrc, characteristics, description, radarData, userName}) {
  const data = {
    labels: ['Innovation', 'Independent', 'Detail-Oriented', 'Action-Oriented', 'Resilience', 'Extrovert'],
    datasets: [
      {
        label: 'Your Personality Traits',
        data: radarData || [20, 30, 40, 50, 60, 70], 
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
            </div>
            <div className={styles.radarChart}>
              <Radar data={data} options={options} />
            </div>
            <h1 className={styles.result}>{title}</h1>
            <div className={styles.characteristicsContainer}>
              <p className={styles.characteristics}>{characteristics}</p>
            </div>
            <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.buttonsContainer}>
              <div className={styles.quizButton}>
                <Link href="/quizIntro" className={styles.buttonWhite}>
                    <p>Join Alice...</p>
                    <FaArrowRight />
                </Link>
                <Link href="/quizIntro" className={styles.buttonWhite}>
                    <p>Join Alice...</p>
                    <FaArrowRight />
                </Link>
              </div>
            </div>
          </main>
      </Restrainer>
    </>
  )
}
