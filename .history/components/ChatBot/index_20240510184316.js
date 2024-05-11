import { useState } from "react";
import axios from "axios";
import MainNav from "../MainNav";


export default function ChatBot () {
    const [input, setInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("Failed to send message. Please try again later.");
    setChatHistory((prevMessages) => [...prevMessages,{text:input,sender:"user"}])
    try {
        const response = await axios.post("/api/chatBotService",{message:input});
        setChatHistory((prevMessages) => [...prevMessages,{text:response.data.reply,sender:"assistant"}]);
    } catch (error) {
        console.error("error sending to chatbot:", error)
    }
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
                <p>{currentTime}</p>
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