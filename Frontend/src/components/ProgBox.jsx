import React, { useState } from 'react';
import { Rocket } from 'lucide-react';

const languages = [
    'Java', 'Python', 'C++', 'JavaScript', 'C#', 'Ruby', 'Go', 'Swift', 'Kotlin', 'PHP',
    'Rust', 'TypeScript', 'Dart', 'Scala', 'Perl', 'Haskell', 'Lua', 'R', 'Objective-C', 'Shell', 'Spring Boot'
];

const itemsPerPage = 9;

function ProgBox() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(languages.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleLanguages = languages.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                    Programming Languages
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {visibleLanguages.map((lang, index) => (
                    <a
                        href="/test"
                        key={index}
                        className="flex items-center space-x-2 p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
                    >
                        <span className="text-gray-800 dark:text-white">{lang}</span>
                    </a>
                ))}
            </div>

            <div className="flex items-center justify-center space-x-4">
                <a
                    href="/test"
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(prev => Math.max(prev - 1, 1));
                    }}
                    className={`px-4 py-2 rounded-md text-white ${
                        currentPage === 1
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500'
                    }`}
                >
                    Prev
                </a>

                <a
                    href="/test"
                    className="text-gray-800 dark:text-white hover:underline"
                >
                    Page {currentPage} of {totalPages}
                </a>

                <a
                    href="/test"
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                    }}
                    className={`px-4 py-2 rounded-md text-white ${
                        currentPage === totalPages
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500'
                    }`}
                >
                    Next
                </a>
            </div>
        </div>
    );
}

export default ProgBox;