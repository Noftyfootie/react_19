import dayjs from "dayjs";
import { useState } from "react";
import { Chatbot } from "supersimpledev";
import type { Dispatch, SetStateAction } from "react";
import "./ChatInput.css";

type ChatMessages = {
  id: string;
  message: string;
  sender: "user" | "robot";
  time: number;
}[];

type ChatInputProps = {
  chatMessages: ChatMessages;
  setChatMessages: Dispatch<SetStateAction<ChatMessages>>;
};

export function ChatInput({ chatMessages, setChatMessages }: ChatInputProps) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event: {
    target: {
      value: string;
    };
  }) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages: ChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ]);

    setInputText("");
  }

  function clearMessage() {
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size={30}
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        send
      </button>

      <button onClick={clearMessage} className="clear-button">
        clear
      </button>
    </div>
  );
}
