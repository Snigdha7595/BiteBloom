import React, { useState } from "react";
import "./VirtualAssistant.css";
import menuData from "../../assets/menu.json";

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! What kind of food are you in the mood for today?",
    },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const reply = getFoodSuggestion(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  const getFoodSuggestion = (query) => {
    const lowerQ = query.toLowerCase();
    const filtered = menuData.filter((item) =>
      item.tags.some((tag) => lowerQ.includes(tag))
    );

    if (filtered.length > 0) {
      return `I recommend: ${filtered.map((f) => f.name).join(", ")}`;
    }
    return "Hmm... I couldn't find an exact match. Want to try pizza, pasta, or salad?";
  };

  return (
    <>
      <div className="assistant-btn" onClick={toggleChat}>
        🤖
      </div>
      {isOpen && (
        <div className="assistant-chat">
          <div className="chat-header">BiteBloom Assistant</div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your preference..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
