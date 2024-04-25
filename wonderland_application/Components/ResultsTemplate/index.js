import Image from "next/image";
import styles from "./ResultsTemplate.module.css"
import Restrainer from "@/components/Restrainer";


export default function ResultsTemplate({title, mainImageSrc, characteristics, description}) {
  return (
    <>
      <Restrainer>
          <main className={styles.main}>
            <h1 className={styles.h1}>Test Results</h1>
              <Image className={styles.magician} 
                src={mainImageSrc}
                alt={title}
                width={300} 
                height={400} 
                />
            <div className={styles.nameContainer}>
              <p className={styles.name}>Name! You are a...</p>
            </div>
              <h1 className={styles.result}>{title}</h1>
            <div className={styles.characteristicsContainer}>
            <p className={styles.characteristics}>{characteristics}</p>
            </div>
            <div className={styles.description}>{description}</div>
            
          </main>
      </Restrainer>
    </>
  )
}
