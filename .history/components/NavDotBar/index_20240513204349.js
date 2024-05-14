import navDotB from "@/public/images/navDotB.svg";
import navDotE from "@/public/images/navDotE.svg";
import Image from "next/image";
import styles from "./NavDotBar.module.css"

export default function NavDotBar({dotNumber}) {
    const totalDots = 3;
    const dotSpacing = 100/(totalDots - 1);

    return (
        <div className={navBarContainer}>
            <div className={styles.navBar}>       
           { [0,1,2].map((dot,index) => (
                <Image style={{ left: `${(index * dotSpacing)}%` }} src={dotNumber == dot?navDotB: navDotE} width={10} height={10} alt="navgation dot" key={index} className={styles.dot} />
            ))}
            
        </div>
        </div>
       )
}