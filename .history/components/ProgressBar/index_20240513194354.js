import styles from "./ProgressBar.module.css";


export default function ProgressBar() {
   return (
    <div className={styles.progressBar}>
        <div className={styles.progressLine}>
             
        </div>
       { [1,2,3,4,5,6].map((dot,index) => (
            <div key={index} className={styles.dot}>
               
            </div>
        ))}
    </div>
   )
}