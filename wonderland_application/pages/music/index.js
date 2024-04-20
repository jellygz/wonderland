import { useState,useEffect,useRef } from "react";
import styles from "./Music.module.css"
import Image from "next/image";


export default function Music() {
    const allSongs = [
        {
          id: 0,
          title: "happy_wonderland",
          artist: "wonderland",
          duration: "1:58",
          src: "/music/happy_wonderland.mp3",
        },
        {
          id: 1,
          title: "Raindrops_wonderland",
          artist: "wonderland",
          duration: "2:00",
          src: "/music/Raindrops_wonderland.mp3",
        },
        {
          id: 2,
          title: "Rainy_Day_wonderland",
          artist: "wonderland",
          duration: "1:58",
          src: "/music/Rainy_Day_wonderland.mp3",
        },
        {
          id: 3,
          title: "trip_wonderland",
          artist: "wonderland",
          duration: "1:58",
          src: "/music/trip_wonderland.mp3",
        },
        {
          id: 4,
          title: "Wonderland_Adventure",
          artist: "wonderland",
          duration: "1:02",
          src: "/music/Wonderland_Adventure.mp3",
        },
        {
          id: 5,
          title: "wonderland_piano",
          artist: "wonderland",
          duration: "1:04",
          src: "/music/wonderland_piano.mp3",
        },
      ];
      const [currentSongIndex, setCurrentSongIndex] = useState(0);
      const [isPlaying, setIsPlaying] = useState(false);
      const [currentTime, setCurrentTime] = useState(0);
      const audioRef = useRef(null);
      useEffect(()=> {
        if (isPlaying) {
            audioRef.current.play()
        }else {
            audioRef.current.pause()
        }
      },[isPlaying])
      useEffect(() =>{
        if (audioRef.current) {
        audioRef.current.src = allSongs[currentSongIndex].src
        setIsPlaying(true)}
      }, [currentSongIndex,isPlaying])

      const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
        if (!isPlaying) {
            audioRef.current.play().catch((error) => console.error(error))
        }
      }

      const handleNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1))
      }

      const handlePrevious = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex == 0?allSongs.length - 1:prevIndex - 1))
      }

      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime)
      }

      const handleSeek = (event) => {
        const newTime = event.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }

      return (
        <div className={`${styles.container}`}>
          <div className={`${styles.musicBoxContainer}`}>
            <Image className={styles.mainPhoto} src="/images/alice002.png"  width={340} height={370} />
         
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleNext} controls={false} autoPlay={false}>

            </audio>
            <div>
                <button onClick={handlePrevious}>
                    Previous
                </button>
                <button onClick={handlePlayPause}>
                    {isPlaying?"pause": "play"}
                </button>
                <button onClick={handleNext}>
                    Next
                </button>
            </div>
            </div>
            <div>
            {audioRef.current && (
        <div>
          <input
            type="range"
            value={currentTime}
            max={audioRef.current.duration}
            onChange={handleSeek}
          />
        </div>
      )}
            </div>
        </div>
      )
}


