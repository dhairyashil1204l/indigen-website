"use client";

import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "👋 Welcome to Indigen Technologies.\n\nHow can I help you today?",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user" as const,
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;

    setInput("");

    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: currentInput,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
        fixed
        bottom-6
        right-6
        h-16
        w-16
        rounded-full
        bg-blue-600
        text-white
        text-2xl
        shadow-xl
        hover:bg-blue-700
        transition
        z-50
        "
      >
        💬
      </button>

      {/* Chat Window */}

      {open && (
        <div
          className="
          fixed
          bottom-24
          right-6
          w-[360px]
          h-[550px]
          bg-white
          rounded-2xl
          shadow-2xl
          border
          flex
          flex-col
          overflow-hidden
          z-50
          "
        >
          {/* Header */}

          <div
            className="
            bg-blue-600
            text-white
            p-4
            font-semibold
            "
          >
            Indigen AI Assistant
          </div>

          {/* Messages */}

          <div
            className="
            flex-1
            overflow-y-auto
            p-4
            space-y-4
            bg-slate-50
            "
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "bg-white border"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-white border rounded-xl px-4 py-3 text-sm w-fit">
                Typing...
              </div>
            )}
          </div>

          {/* Input */}

          <div
            className="
            p-4
            border-t
            flex
            gap-2
            "
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="
              flex-1
              border
              rounded-xl
              px-4
              py-3
              outline-none
              "
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              onClick={sendMessage}
              className="
              px-5
              rounded-xl
              bg-blue-600
              text-white
              hover:bg-blue-700
              "
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}