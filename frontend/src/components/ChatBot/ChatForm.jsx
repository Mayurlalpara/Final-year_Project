/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { StoreContext } from "../../context/StoreContext";

const ChatForm = ({ chatHistory, setChatHistory, generatebotresponse }) => {
    const inputref = useRef();
    const { botAnswer, aiChatBot } = useContext(StoreContext);

    const handlesubmit = (e) => {
        e.preventDefault();
        const usermsg = inputref.current.value.trim();
        if (!usermsg) return;
        inputref.current.value = "";

        setChatHistory((history) => [...history, { role: "user", text: usermsg }]);
        setTimeout(() => {
            setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
            generatebotresponse([...chatHistory, { role: "user", text: usermsg }]);
        }, 600);
    };

    return (
        <div >
            <form className="chatbot-input-container" onSubmit={handlesubmit}>
                <input ref={inputref} type="text" className="chatbot-input" placeholder="Type a message..." required />
                <button className="chatbot-send-button" onClick={aiChatBot}>➤</button>
            </form>
        </div>
    );
};

export default ChatForm;
