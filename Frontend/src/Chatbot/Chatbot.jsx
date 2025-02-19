import React, { useState } from "react";
import axios from "axios";
import { useStateContext } from "./context.jsx";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const { theme, toggleTheme } = useStateContext();
    const [selectedChat, setSelectedChat] = useState(null);

    const sendMessage = async () => {
        if (!input.trim()) return;

        setLoading(true);
        const newMessage = { role: "user", content: input, timestamp: new Date().toLocaleTimeString() };
        setMessages(prev => [...prev, newMessage]);
        setInput("");

        try {
            const response = await fetch("http://localhost:8080/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inputs: input })
            });

            if (!response.ok) throw new Error("API response failed");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let botMessage = { role: "bot", content: "", timestamp: new Date().toLocaleTimeString() };

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const newText = decoder.decode(value, { stream: true });

                setMessages(prev => {
                    const lastMessage = prev[prev.length - 1];

                    // Eğer son mesaj bottan geldiyse güncelle
                    if (lastMessage && lastMessage.role === "bot") {
                        return [
                            ...prev.slice(0, -1), // Önceki tüm mesajları al
                            { ...lastMessage, content: lastMessage.content + newText } // Son mesajı güncelle
                        ];
                    } else {
                        // Eğer ilk bot mesajıysa, yeni olarak ekle
                        return [
                            ...prev,
                            { role: "bot", content: newText, timestamp: new Date().toLocaleTimeString() }
                        ];
                    }
                });
            }

        } catch (error) {
            console.error("API call failed:", error);
            setMessages(prev => [...prev, { role: "bot", content: "Error: AI response failed.", timestamp: new Date().toLocaleTimeString() }]);
        }

        setLoading(false);
    };



    return (
        <div className={`min-h-screen ${theme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-colors`}>
            <div className="flex h-screen">
                {/* Left Sidebar (Chat History) */}
                <div className={`w-64 p-4 ${theme ? "bg-gray-800" : "bg-white"} border-r border-gray-300`}>
                    <div className="flex justify-between mb-4">
                        <h2 className="text-xl font-bold">Chat History</h2>
                        <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-300">
                            {theme ? '🌞' : '🌙'}
                        </button>
                    </div>
                    <div className="overflow-y-auto h-[calc(100vh-90px)] space-y-2">
                        {messages.length > 0 ? (
                            messages.filter(msg => msg.role === "user").map((chat, index) => (
                                <div key={index} onClick={() => setSelectedChat(index)} className={`p-3 rounded-lg cursor-pointer ${selectedChat === index ? "bg-gray-400" : ""}`}>
                                    <p className="font-medium truncate">{chat.content}</p>
                                    <p className="text-xs text-gray-500">{chat.timestamp}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No chat history yet</p>
                        )}
                    </div>
                </div>

                {/* Chat Window */}
                <div className="flex-1 flex flex-col">
                    <div className="p-4 border-b border-gray-300">
                        <h2 className="text-xl font-bold">DeepSeek AI</h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[70%] rounded-lg p-4 ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-900"}`}>
                                    <p>{msg.content}</p>
                                    <p className="text-xs mt-2 text-gray-500">{msg.timestamp}</p>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="max-w-[70%] rounded-lg p-4 bg-gray-300 text-gray-900">
                                    <p>Thinking...</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-300">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 rounded-lg px-4 py-2 bg-white text-gray-900 focus:outline-none border focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                onClick={sendMessage}
                                disabled={loading}
                                className={`px-6 py-2 rounded-lg text-white transition-colors duration-200 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
