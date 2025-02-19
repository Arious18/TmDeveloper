import React, { useEffect, useState } from "react";
import { useStateContext } from "../Chatbot/context.jsx";
import axios from "axios";

const CompactChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const { theme } = useStateContext();

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Add user message to the chat
        setMessages((prev) => [...prev, { sender: "user", text: input }]);
        setInput(""); // Clear input field
        setLoading(true);

        try {
            // Send user input to the backend
            const response = await axios.post("http://localhost:8080/api/chat", { input }, { responseType: "stream" });

            // Process the streamed response
            const aiResponse = [];
            for await (const chunk of response.data) {
                aiResponse.push(chunk);
                setMessages((prev) => [
                    ...prev,
                    { sender: "ai", text: aiResponse.join("") },
                ]);
            }
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { sender: "ai", text: "Error: Unable to fetch response." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`h-full p-4 rounded-lg ${theme ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <div className="flex flex-col h-full">
                <h3 className="font-bold mb-2">Chatbot</h3>
                <div className="flex-1 overflow-y-auto border border-gray-600 p-2 rounded mb-2">
                    {messages.length > 0 ? (
                        messages.map((msg, idx) => (
                            <p
                                key={idx}
                                className={`text-sm mb-1 ${
                                    msg.sender === "user"
                                        ? "text-blue-500"
                                        : "text-green-500"
                                }`}
                            >
                                {msg.text}
                            </p>
                        ))
                    ) : (
                        <p className="text-gray-500">No messages yet</p>
                    )}
                </div>
                <div className="mt-auto flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={`w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-300 ${
                            theme ? "text-white" : "text-black"
                        }`}
                        placeholder="Type a message..."
                        disabled={loading}
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={sendMessage}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </div>
            </div>
        </div>
    );
};

const QuestionBox = ({ question, theme, onGetQuestion, hasQuestionLoaded }) => {
    return (
        <div
            className={`h-full p-6 rounded-lg ${theme ? "bg-gray-800" : "bg-white"} shadow-lg transition-all duration-300`}
        >
            <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">Quiz Question</h2>
                <div className="flex-1">
                    <div
                        className={`p-4 rounded-lg ${
                            theme ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"
                        } border`}
                    >
                        {question ? (
                            <div className="space-y-4">
                                <p className="text-lg font-medium text-blue-500">Problem Statement</p>
                                <pre
                                    className={`whitespace-pre-wrap font-mono text-sm ${
                                        theme ? "text-gray-300" : "text-gray-700"
                                    }`}
                                >
                                    {question.question}
                                </pre>
                            </div>
                        ) : (
                            <div className="animate-pulse flex space-x-4">
                                <div className="flex-1 space-y-4">
                                    <div className="h-4 bg-gray-400 rounded w-1/4"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-400 rounded"></div>
                                        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-auto flex justify-center">
                    <button
                        onClick={onGetQuestion}
                        className={`px-4 py-2 rounded hover:bg-blue-600 transition-colors ${
                            hasQuestionLoaded
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-blue-500 hover:bg-blue-600"
                        } text-white font-semibold`}
                    >
                        {hasQuestionLoaded ? "Change Question" : "Get Question"}
                    </button>
                </div>
            </div>
        </div>
    );
};

const AnswerEditor = ({ answer, setAnswer, theme, onRunCode }) => {
    return (
        <div
            className={`h-full p-6 rounded-lg ${
                theme ? "bg-[#1E1E1E]" : "bg-gray-100"
            } shadow-lg transition-all duration-300`}
        >
            <div className="flex flex-col h-full">
                <h3 className={`font-bold text-lg mb-4 ${theme ? "text-white" : "text-black"}`}>
                    Your Answer
                </h3>
                <div className="flex-1 rounded-lg overflow-hidden border transition-colors duration-300">
                    <textarea
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className={`w-full h-full p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                            theme ? "text-[#D4D4D4] bg-[#1E1E1E] placeholder-gray-500" : "text-gray-200 bg-white placeholder-gray-500"
                        }`}placeholder="
    #include <iostream>
    using namespace std;
    int main()
    // Your code here
       return 0;"

                    />
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onRunCode}
                        className="px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600"
                    >
                        Compile & Run
                    </button>
                </div>
            </div>
        </div>
    );
};

const ConsoleBox = ({ consoleOutput, theme }) => {
    return (
        <div
            className={`h-full p-6 rounded-lg ${
                theme ? "bg-gray-800" : "bg-white"
            } shadow-lg transition-all duration-300`}
        >
            <div className="flex flex-col h-full">
                <h3 className="font-bold mb-4">Execution Results</h3>
                <div
                    className={`flex-1 rounded-lg overflow-hidden border ${
                        theme ? "border-gray-600 bg-gray-900" : "border-gray-200 bg-gray-50"
                    }`}
                >
                    <pre
                        className={`h-full p-4 font-mono text-sm overflow-y-auto whitespace-pre-wrap ${
                            theme ? "text-green-400" : "text-gray-800"
                        }`}
                    >
                        {consoleOutput}
                    </pre>
                </div>
            </div>
        </div>
    );
};

const MainQuiz = () => {
    const { theme, toggleTheme } = useStateContext();
    const [answer, setAnswer] = useState("");
    const [consoleOutput, setConsoleOutput] = useState("> Ready\n");
    const [question, setQuestion] = useState(null);
    const [error, setError] = useState(null);
    const [hasQuestionLoaded, setHasQuestionLoaded] = useState(false);
    const [inputValues, setInputValues] = useState("");

    const fetchQuestion = async () => {
        try {
            setError(null);
            const response = await fetch("http://localhost:8080/api/random");

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data?.question) {
                setQuestion(data);
                setHasQuestionLoaded(true);
            }
        } catch (err) {
            console.error("Error fetching question:", err);
            setError(err.message);
            setHasQuestionLoaded(false);
        }
    };

    const handleRunCode = async () => {
        if (!answer.trim()) {
            setConsoleOutput((prev) => prev + "> Error: Code cannot be empty\n");
            return;
        }

        setConsoleOutput((prev) => prev + "> Running code...\n");
        try {
            const response = await fetch("http://localhost:8080/api/execute", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code: answer,
                    language: "cpp",
                    input: inputValues || "", // Ensure input is always defined
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Execution failed");
            }

            const data = await response.json();
            const output = data.output || data.error || "No output";
            setConsoleOutput((prev) => prev + `> ${output}\n`);
        } catch (error) {
            setConsoleOutput((prev) => prev + `> Error: ${error.message}\n`);
        }
    };


    return (
        <div className={`min-h-screen p-6 ${theme ? "bg-gray-900 text-white" : "bg-gray-50"} transition-all duration-300`}>
            <div className="flex justify-end gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <label className="switch">
                        <input type="checkbox" onChange={toggleTheme} />
                        <span className="slider round"></span>
                    </label>
                    <div className={`w-8 h-8 rounded-full ${theme ? "bg-gray-700" : "bg-gray-300"}`} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100vh-120px)] min-h-[80vh]">
                {/* Left Column */}
                <div className="flex flex-col gap-6 h-full">
                    <div className="h-[40vh]">
                        <QuestionBox
                            question={question}
                            theme={theme}
                            onGetQuestion={fetchQuestion}
                            hasQuestionLoaded={hasQuestionLoaded}
                        />
                    </div>
                    <div className="h-[40vh]">
                        <div className={`h-full border rounded-lg ${theme ? "border-gray-700" : "border-gray-300"}`}>
                            <CompactChatbot />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6 h-full">
                    <div className="h-[40vh]">
                        <AnswerEditor
                            answer={answer}
                            setAnswer={setAnswer}
                            theme={theme}
                            onRunCode={handleRunCode}
                        />
                    </div>
                    <div className="h-[40vh]">
                        <ConsoleBox
                            consoleOutput={consoleOutput}
                            theme={theme}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainQuiz;