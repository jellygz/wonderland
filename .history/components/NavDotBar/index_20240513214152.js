import navDotB from "@/public/images/navDotB.svg";
import navDotE from "@/public/images/navDotE.svg";
import Image from "next/image";
import styles from "./NavDotBar.module.css";

export default function NavDotBar({ dotNumber }) {
    const totalDots = 3;

    return (
        <div className={styles.navBarContainer}>
            <div className={styles.navBar}>
                {[0, 1, 2].map((dot, index) => (
                    <Image
                        style={{ marginLeft: `${index * 20}px` }}
                        src={dotNumber === dot ? navDotB : navDotE}
                        width={10}
                        height={10}
                        alt="navigation dot"
                        key={index}
                        className={styles.dot}
                    />
                ))}
            </div>
        </div>
    );
}
