import styles from "./ProgressBar.module.css";
import progressDotB from "@/public/images/progressDotB.svg";
import progressDotE from "@/public/images/progressDotE.svg";


export default function ProgressBar({dotNumber}) {
   return (
    <div className={styles.progressBar}>
        <div className={styles.progressLine}>
             
        
       { [1,2,3,4,5,6].map((dot,index) => (
            <Image src={dotNumber == dot?progressDotB: pro} key={index} className={styles.dot} />
               
           
        ))}
        </div>
    </div>
   )
}