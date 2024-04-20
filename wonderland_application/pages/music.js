import { useState,useEffect,useRef } from "react";

export default function Music() {
    const allSongs = [
        {
          id: 0,
          title: "happy_wonderland",
          artist: "wonderland",
          duration: "1:58",
          src: "../public/music/happy_wonderland.mp3",
        },
        {
          id: 1,
          title: "Raindrops_wonderland",
          artist: "wonderland",
          duration: "2:00",
          src: "../public/music/Raindrops_wonderland.mp3",
        },
        {
          id: 2,
          title: "Rainy_Day_wonderland",
          artist: "wonderland",
          duration: "1:58",
          src: "../public/music/Rainy_Day_wonderland.mp3",
        },
        {
          id: 3,
          title: "trip_wonderland",
          artist: "wonderland",
          duration: "1:58",
          src: "../public/music/trip_wonderland.mp3",
        },
        {
          id: 4,
          title: "Wonderland_Adventure",
          artist: "wonderland",
          duration: "1:02",
          src: "../public/music/Wonderland_Adventure.mp3",
        },
        {
          id: 5,
          title: "wonderland_piano",
          artist: "wonderland",
          duration: "1:04",
          src: "../public/music/wonderland_piano.mp3",
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
      }, [currentSongIndex])

      const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
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
        <div>
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleNext}>

            </audio>
            <div>
                <button onClick={handlePrevious}>
                    Previous
                </button>
                <button onClick={handlePlayPause}>
                    Pause
                </button>
                <button onClick={handleNext}>
                    Next
                </button>
            </div>
            <div>
                <input type="range" value={currentTime} max={audioRef.current?audioRef.current.duration:0} onChange={handleSeek}>
                
                </input>
            </div>
        </div>
      )
}


