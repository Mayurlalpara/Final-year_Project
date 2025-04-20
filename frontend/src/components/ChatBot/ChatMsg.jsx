/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../../assets/assets";

const ChatMsg = ({ chat }) => {
    return (
        <div className={`msg ${chat.role === "model" ? "bot" : "user"}-msg ${chat.isError ? "error" : ""}`}>
                
            <p className="msg-text">{chat.text}</p>
            {chat.role === "model" && <img className="chatbot-icon" src={assets.bot1} alt="" />}
        </div>
    );
};

export default ChatMsg;
