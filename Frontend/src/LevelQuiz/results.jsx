import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get user answers from state (fallback if undefined)
    const userAnswers = location.state?.userAnswers || [];

    // Count correct and incorrect answers
    const correctCount = userAnswers.filter(answer => answer.isCorrect).length;
    const incorrectCount = userAnswers.length - correctCount;
    const score = userAnswers.length > 0
        ? Math.round((correctCount / userAnswers.length) * 100)
        : 0;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                    Quiz Results 🏆
                </h1>

                {userAnswers.length > 0 ? (
                    <div className="space-y-6">
                        {/* Correct Answers */}
                        <div className="flex justify-between items-center p-4 bg-green-100 dark:bg-green-700 rounded-lg">
                            <span className="text-green-700 dark:text-green-200 font-medium">Correct Answers:</span>
                            <span className="text-green-700 dark:text-green-200 text-xl font-bold">{correctCount}</span>
                        </div>

                        {/* Incorrect Answers */}
                        <div className="flex justify-between items-center p-4 bg-red-100 dark:bg-red-700 rounded-lg">
                            <span className="text-red-700 dark:text-red-200 font-medium">Incorrect Answers:</span>
                            <span className="text-red-700 dark:text-red-200 text-xl font-bold">{incorrectCount}</span>
                        </div>

                        {/* Total Questions */}
                        <div className="flex justify-between items-center p-4 bg-blue-100 dark:bg-blue-700 rounded-lg">
                            <span className="text-blue-700 dark:text-blue-200 font-medium">Total Questions:</span>
                            <span className="text-blue-700 dark:text-blue-200 text-xl font-bold">{userAnswers.length}</span>
                        </div>

                        {/* Final Score */}
                        <div className="mt-6 text-center">
                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                Final Score: <span className="text-indigo-600 dark:text-indigo-400">{score}%</span>
                            </div>
                            <button
                                onClick={() => navigate("/MainQuiz")}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Explore More
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-600 dark:text-gray-300">
                        No answers recorded.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Results;
