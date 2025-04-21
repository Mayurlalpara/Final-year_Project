/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./ChatBot.css";
import ChatMsg from "./ChatMsg";
import ChatForm from "./ChatForm";
import axios from "axios";
import { assets } from "../../assets/assets";

const ChatBot = ({ setShowChat }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const { foodList, token } = useContext(StoreContext);
  const chatRef = useRef();

  // ✅ Function to generate the dynamic intro for chatbot
  const generateIntro = () => {
    const siteInfo = {
      name: "Everyone's Meal",
      description:
        "At Everyone's Meal, we're passionate about creating delicious, high-quality meals that everyone can enjoy. We believe that good food should be accessible to all, which is why we offer a diverse menu at affordable prices. Order online and experience the difference.",
      mission:
        "To deliver exceptional food at affordable prices while fostering inclusivity and accessibility.",
      tagline: "Delicious meals for everyone, delivered to your doorstep.",
      features: [
        "Wide variety of handcrafted dishes",
        "Affordable and accessible menu options",
        "Easy online ordering system",
        "Prompt delivery services",
        "Excellent customer support",
      ],
      contactDetails: {
        phone: "+91 8758461872",
        email: "contact@gmail.com",
      },
      website: "everyonesmeal.com",
    };

    const productInfo =
      foodList && foodList.length > 0
        ? foodList
            .map((item) => `- ${item.name}: ₹${item.price}`)
            .join("\n")
        : "- Products are loading...";

    const menuInfo =
      assets.menu_list && assets.menu_list.length > 0
        ? assets.menu_list.map((item) => `- ${item.name}`).join("\n")
        : "- Menu is loading...";

    return `
Welcome to ${siteInfo.name}!

${siteInfo.description}

Mission: ${siteInfo.mission}
Tagline: ${siteInfo.tagline}

🌟 Features:
- ${siteInfo.features.join("\n- ")}

📦 Products:
${productInfo}

📋 Menu Categories:
${menuInfo}

📞 Contact: ${siteInfo.contactDetails.phone}
📧 Email: ${siteInfo.contactDetails.email}
🌐 Website: ${siteInfo.website}
    `;
  };

  // ✅ Call once on mount to show intro
  useEffect(() => {
    setChatHistory([
      {
        hideInChat: true,
        role: "model",
        text: generateIntro(),
      },
    ]);
  }, [foodList]);

  // ✅ AI API integration
  const generatebotresponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const apiKey = "AIzaSyAdCo6P4sebY2H4UiE6ekcFR7I7WTzf-UE";

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: history,
        }
      );

      if (response.data?.candidates?.length > 0) {
        const generatedText =
          response.data.candidates[0].content.parts[0].text;
        updateHistory(generatedText);
      } else {
        updateHistory("Sorry, I couldn't understand. Try again.", true);
      }
    } catch (error) {
      console.error("Error making API call:", error.message);
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    chatRef.current.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className="chatbot">
      <div className="chatbot-container">
        {/* Header Section */}
        <div className="chatbot-header">
          <span className="chatbot-title">Chatbot</span>
          <img
            onClick={() => setShowChat(false)}
            className="chatbot-icon"
            src={assets.bot1}
            alt=""
          />
        </div>

        {/* Chat Area */}
        <div ref={chatRef} className="chatbot-message">
          {chatHistory.length > 0 ? (
            chatHistory.map((chat, index) => (
              <ChatMsg key={index} chat={chat} />
            ))
          ) : (
            <p className="chatbot-placeholder">
              Start the conversation by typing below!
            </p>
          )}
        </div>

        {/* Input Section */}
        <ChatForm
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generatebotresponse={generatebotresponse}
        />
      </div>
    </div>
  );
};

export default ChatBot;
