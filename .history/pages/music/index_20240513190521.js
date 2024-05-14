import { useState,useEffect,useRef } from "react";
import styles from "./Music.module.css"
import Image from "next/image"
import Restrainer from "@/components/Restrainer";
import MainNav from "@/components/MainNav";

export default function Music() {
    const allSongs = [
        {
          id: 0,
          track: "01",
          title: "Rain-kissed Sadness",
          artist: "wonderland",
          duration: "1:58",
          src: "/music/trip_wonderland.mp3",
          image: "/track1.png"
        },
        {
          id: 1,
          track: "02",
          title: "Rainy Day Strolls",
          artist: "wonderland",
          duration: "1:02",
          src: "/music/Wonderland_Adventure.mp3",
          image: "/track2.png"
        },
        {
          id: 2,
          track: "03",
          title: "Beaming Sunshine",
          artist: "wonderland",
          duration: "1:58",
          src: "/music/Rainy_Day_wonderland.mp3",
          image: "/track3.png"
        },
        {
          id: 3,
          track: "04",
          title: "Whispering Winds",
          artist: "wonderland",
          duration: "1:58",
          src: "/music/happy_wonderland.mp3",
          image: "/track4.png"
        },
        {
          id: 4,
          track: "05",
          title: "Alice’s Melody",
          artist: "wonderland",
          duration: "2:00",
          src: "/music/Raindrops_wonderland.mp3",
          image: "/track5.png"
        },
        {
          id: 5,
          track: "06",
          title: "Secret Lullabies",
          artist: "wonderland",
          duration: "1:04",
          src: "/music/wonderland_piano.mp3",
          image: "/track6.png"
        },
      ];

      const [currentSongIndex, setCurrentSongIndex] = useState(0);
      const [isPlaying, setIsPlaying] = useState(false);
      const [currentTime, setCurrentTime] = useState(0);
      const [titleText, setTitleText] = useState("");
      const [trackNumber, setTrackNumber] = useState("");
      const audioRef = useRef(null);
      const imageRef = useRef(null);
      useEffect(()=> {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
      },[isPlaying])
      useEffect(() =>{
        //Reached to the end of playlist
        //Reset currentSongIndex to beginning of the songs array
        console.log(currentSongIndex, allSongs.length);
        if(currentSongIndex > allSongs.length - 1) {setCurrentSongIndex(0)}
        else if (audioRef.current, imageRef.current) {
          audioRef.current.src = allSongs[currentSongIndex].src
          imageRef.current.src = allSongs[currentSongIndex].image
          setTitleText(allSongs[currentSongIndex].title)
          setTrackNumber(allSongs[currentSongIndex].track)
        //setIsPlaying(true)
        }
      }, [currentSongIndex])

      const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
        if (!isPlaying) {
            audioRef.current.play().catch((error) => console.error(error))
        }
      }

      const handleNext = () => {
        setIsPlaying(false)
        setCurrentSongIndex((prevIndex) => (prevIndex + 1))
      }

      const handlePrevious = () => {
        setIsPlaying(false)
        setCurrentSongIndex((prevIndex) => (prevIndex == 0?allSongs.length - 1:prevIndex - 1))
      }

      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime)
      }

      const handleSeek = (event) => {
        const newTime = event.target.value;
        console.log(newTime);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }

      const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds/60);
        const seconds = Math.floor(timeInSeconds%60);
        const formatMinutes = minutes<10?`0${minutes}`:minutes;
        const formatSeconds = seconds<10?`0${seconds}`:seconds;
        return `${formatMinutes}:${formatSeconds}`;
      }

      return (
        <Restrainer>
          <main className={styles.main}>
            <MainNav />
            <div className={styles.container}>
              <div className={styles.top}>
                  <h1 className={styles.titleText}>{titleText}</h1>               
                <hr className={styles.line} />
                <p className={styles.trackNumber}>Track {trackNumber}</p>
              </div>
              <div className={styles.musicPlayerContainer}>
                <div className={styles.imageContainer}>
                  <Image className={styles.musicPlayer} alt="musicplayer" src="/musicplayer.png" width={55} height={100} />
                  <Image ref={imageRef} className={styles.mainPhoto} width={250} height={370} />
                </div>
                  <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleNext}>

                  </audio>
                  <p>{formatTime(currentTime)}/{}</p>
                  <div className={styles.rangeSliderContainer}>                 
                    <div className={styles.songRangeControl}>
                    <input
                      type="range"
                      value={currentTime}
                      max={audioRef.current ? audioRef.current.duration : 0}
                      onChange={handleSeek}
                      className={styles.rangeSlider}
                    />
                    </div>                 
                  </div>
                <div className={styles.playerControls}>                 
                    <button className={styles.previousButton} onClick={handlePrevious}>
                        <Image alt="previous" src="/previous.png" width={15} height={15} />
                    </button>
                    <button className={styles.playPauseButton} onClick={handlePlayPause}>
                        {isPlaying ? 
                        <Image alt="pause" src="/pause.png" width={20} height={20} /> : 
                        <Image alt="play" src="/play.png" width={20} height={20} />}
                    </button>
                    <button className={styles.nextButton} onClick={handleNext}>
                        <Image alt="next" src="/next.png" width={15} height={15} />
                    </button>
                </div>
              </div>
          </div>
        </main>
        </Restrainer>
      )
}




