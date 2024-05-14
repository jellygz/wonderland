import { useEffect, useState } from "react";
import Switch from '@mui/material/Switch';

export default function SwitchButton() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio("/music/trip_wonderland.mp3"))
    useEffect(() => {
        const handleKeyboard = (event) => {
            if (event.key === "ArrowRight") {
                setCurrentStep(prev => prev < 2 ? prev + 1 : prev);
            } else if (event.key === "ArrowLeft") {
                setCurrentStep(prev => prev > 0 ? prev - 1 : prev);
            }
        };

        window.addEventListener('keydown', handleKeyboard);
        return () => window.removeEventListener('keydown', handleKeyboard);
    }, []);
    const handleChange = () => {
        console.log(isPlaying);
        if (isPlaying) {
            audio.pause();
        }else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }
    return(
        <div>
            <p>Music On/Off</p>
          <Switch checked={isPlaying} onChange={handleChange} />
        </div>
    )
}