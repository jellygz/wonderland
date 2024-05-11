import { useState } from "react";
import axios from "axios";
import MainNav from "../MainNav";
import Restrainer from "../Restrainer";
import styles from "./ChatBot.module.css"
import submitIcon from "@/public/images/submitIcon.svg"
import Image from "next/image";


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
          <div className={styles.messageContainer} >
            {error && <div className="error">{error}</div>}
            <div>
                {
                    chatHistory.map((message,index) => (
                        <div key={index}>
                            <strong>
                                {message.sender}:
                            </strong>{message.text}
                        </div>
                    ))
                }
            </div>
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
              <input  className={styles.inputBox} type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Enter Your Question" required>
              
              </input>
              <button type="submit" className={styles.submitButton}>
              <Image src={submitIcon} className={styles.submitIcon} width={32} height={32} />
              </button>
            </form>
         </div>   
        
      </main>
      </Restrainer>
    )
}