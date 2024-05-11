import { useState } from "react";
import axios from "axios";
import MainNav from "../MainNav";
import Restrainer from "../Restrainer";
import styles from "./ChatBot.module.css";
import submitIcon from "@/public/images/submitIcon.svg";
import Image from "next/image";
import userChat from "@/public/images/userChat.svg";
import aliceBot from "@/public/images/aliceBot.svg";


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
            <div className={styles.messageContainer}>
                {error && <div className="error">{error}</div>}
                <div>
                    {
                        chatHistory.map((message,index) => (
                            <div key={index} className={message.sender=="user"?"user":"alice"}>
                                {
                                    message.sender=="user"?
                                    <div className={styles.chat}>
                                       <p className={}> {message.text}</p>
                                      <Image src={userChat} width={48} height={48} alt="profileImage" />
                                    </div>:
                                    <div className={styles.chat}>
                                         <Image src={aliceBot} width={48} height={48} alt="profileImage" />
                                        <p> {message.text}</p>
                                    </div>
                                }
                              
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