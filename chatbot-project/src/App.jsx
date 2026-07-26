import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [
      {
        message: "hello chatbot",
        sender: "user",
        id: "id1",
        time: 1736127288920,
      },
      {
        message: "Hello! How can I help you?",
        sender: "robot",
        id: "id2",
        time: 1736127291230,
      },
      {
        message: "can you get me today date?",
        sender: "user",
        id: "id3",
        time: 1736127385356,
      },
      {
        message: "Today is July 15",
        sender: "robot",
        id: "id4",
        time: 1736127385500,
      },
    ],
  );

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
