import React, { useState, useEffect } from 'react';
import styles from './BreathingText.module.css';

const BreathingText = () => {
    const [isInhale, setIsInhale] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsInhale((prevIsInhale) => !prevIsInhale);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.breathingTextContainer}>
            <div className={`${styles.breathingText} ${isInhale ? '' : styles.fadeOut}`}>
                {isInhale ? 'inhale' : 'exhale'}
            </div>
        </div>
    );
}

export default BreathingText;
