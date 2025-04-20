/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./ChatBot.css";
import ChatMsg from "./ChatMsg";
import ChatForm from "./ChatForm";
import axios from "axios";
import { assets } from "../../assets/assets";

const ChatBot = ({setShowChat}) => {
    const [chatHistory, setChatHistory] = useState([]);
    const { botAnswer, aiChatBot,apiKey } = useContext(StoreContext);
    const chatRef = useRef();

    
    const generatebotresponse = async(history) => {

        const updateHistory =(text, isError = false)=>{
            setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."),{role:"model",text, isError}])
        }
        // console.log(history); 
       history = history.map(({role, text})=>({role,parts: [{text}]}))
        const apiKey = "AIzaSyAdCo6P4sebY2H4UiE6ekcFR7I7WTzf-UE";


        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                {
                    contents: history
                }
            );
    
            // Safely access response data
            if (response.data?.candidates?.length > 0) {
                const generatedText = response.data.candidates[0].content.parts[0].text;
                updateHistory(generatedText)
                // console.log(generatedText);
                // setBotAnswer(generatedText);
            } else {
                console.error("Candidates array is undefined or empty.");
            }
    
        } catch (error) {
            console.error("Error making API call:", error.message);
            updateHistory(error.message, true)
        }
    };

    useEffect(()=>{
        chatRef.current.scrollTo({top: chatRef.current.scrollHeight, behavior: "smooth"})
    },[chatHistory])

    return (
        <div className="chatbot">

        <div className="chatbot-container">
            {/* Header Section */}
            <div className="chatbot-header">
                <span className="chatbot-title">Chatbot</span>
                {/* <span className="chatbot-icon">🤖</span> */}
                <img onClick={() => setShowChat(false)} className="chatbot-icon" src={assets.bot1} alt="" />
                {/* <img src={assets.cross_icon}
                            alt=""/> */}

            </div>

            {/* Chat Area */}
            <div ref={chatRef} className="chatbot-message">
                {chatHistory.length > 0 ? (
                    chatHistory.map((chat, index) => (
                        <ChatMsg key={index} chat={chat} />
                    ))
                ) : (
                    <p className="chatbot-placeholder">Start the conversation by typing below!</p>
                )}
            </div>

            {/* Input Section */}
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generatebotresponse={generatebotresponse} />
        </div>
                </div>
    );
};

export default ChatBot;
