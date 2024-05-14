import styles from "./ProgressBar.module.css";
import progressDotB from "@/public/images/progressDotB.svg";
import progressDotE from "@/public/images/progressDotE.svg";
import Image from "next/image";


export default function ProgressBar({dotNumber}) {
    const totalDots = 6;
    const
   return (
    <div className={styles.progressBar}>
        <div className={styles.progressLine}>
             
        
       { [1,2,3,4,5,6].map((dot,index) => (
            <Image src={dotNumber == dot?progressDotB: progressDotE} width={10} height={10} alt="progress dot" key={index} className={styles.dot} />
               
           
        ))}
        </div>
    </div>
   )
}