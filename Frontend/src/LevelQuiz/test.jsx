import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Test = () => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchQuestion = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get("http://localhost:8080/api/level/random-question");
            if (!response.data) {
                setError("No questions available in the database.");
                return;
            }
            setQuestion(response.data); // Set the single question object
        } catch (err) {
            console.error("Error fetching question:", err);
            setError(err.response?.data?.message || "Failed to load question. Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchQuestion();
    }, []);

    const handleAnswer = () => {
        if (selectedAnswer !== null && question) {
            const newAnswer = {
                question: question.question,
                selected: question.options[selectedAnswer],
                actual: question.options[question.answer],
                isCorrect: selectedAnswer === question.answer
            };

            const updatedAnswers = [...userAnswers, newAnswer];

            if (updatedAnswers.length === 5) {
                navigate("/results", { state: { userAnswers: updatedAnswers } });
            } else {
                setUserAnswers(updatedAnswers);
                fetchQuestion();
                setSelectedAnswer(null);
            }
        }
    };

    const handleRetry = () => {
        fetchQuestion();
        setSelectedAnswer(null);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Programming Assessment 🚀</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-4">Loading question...</p>
                <div className="mt-4 text-gray-600 dark:text-gray-400">
                    Question {userAnswers.length + 1} of 5
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Programming Assessment 🚀</h1>
                <p className="text-red-600 dark:text-red-400 mt-4">{error}</p>
                <button
                    className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                    onClick={handleRetry}
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Programming Assessment 🚀</h1>
            <div className="w-full max-w-lg mb-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        Question {userAnswers.length + 1} of 5
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {5 - (userAnswers.length + 1)} remaining
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${((userAnswers.length + 1) / 5 * 100)}%` }}
                    ></div>
                </div>
            </div>

            {question && (
                <div
                    key={question._id || Date.now()}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-lg w-full transform transition-all hover:shadow-xl"
                >
                    <p className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
                        {question.question}
                    </p>
                    <div className="space-y-4">
                        {question.options?.map((option, index) => (
                            <button
                                key={index}
                                className={`w-full py-3 px-6 rounded-xl border-2 transition-all duration-300 ${
                                    selectedAnswer === index
                                        ? "bg-indigo-600 border-indigo-700 text-white scale-[1.02]"
                                        : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:border-indigo-500"
                                } hover:shadow-md`}
                                onClick={() => setSelectedAnswer(index)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button
                        className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleAnswer}
                        disabled={selectedAnswer === null}
                    >
                        {userAnswers.length === 4 ? "Finish Test" : "Next Question"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Test;