import { useState } from "react";
import axios from "axios";
import


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
        <div>
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
            <form onSubmit={handleSubmit}>
              <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Enter Your Question" required>
              
              </input>
              <button type="submit">
                   Submit
              </button>
            </form>
        </div>
    )
}