import React from 'react';
import { useNavigate } from 'react-router-dom';

const BeginTest = () => {
    const navigate = useNavigate();

    const handleStartTest = () => {
        navigate('/test'); // Navigate to the test page
    };

    return (
        <div className="mt-10 flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Ready to Test Your Skills?</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">Click below to start a test on your chosen programming language.</p>
            <button
                onClick={handleStartTest}
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
                Begin Test
            </button>
        </div>
    );
};

export default BeginTest;