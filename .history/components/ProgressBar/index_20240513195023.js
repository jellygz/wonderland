import styles from "./ProgressBar.module.css";
import progressDotB from ""


export default function ProgressBar({dotNumber}) {
   return (
    <div className={styles.progressBar}>
        <div className={styles.progressLine}>
             
        
       { [1,2,3,4,5,6].map((dot,index) => (
            <Image src={dotNumber == dot?} key={index} className={styles.dot} />
               
           
        ))}
        </div>
    </div>
   )
}