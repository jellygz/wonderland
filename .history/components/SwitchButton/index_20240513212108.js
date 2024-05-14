import { useEffect, useState } from "react";
import Switch from '@mui/material/Switch';

export default function SwitchButton() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio("/music/trip_wonderland.mp3"))
    useEffect(() => {
        

        return () => {audio.pause()};
    }, [audio]);
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