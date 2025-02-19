function UExperienceBox() {
    return (
        <div className="container mx-auto px-10 py-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-6 h-full">
                {/* Main Box - Reduce width (change flex-2 to flex-1) */}
                <div className="flex-1 flex flex-col">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl flex-1">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                            OdinAI Pro - The Ultimate Development Experience
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                            Supercharge your coding projects with the world's most advanced AI-powered development tool.
                            Whether you're writing, debugging, or deploying, we've got you covered.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Smart Editor</h3>
                                <ul className="space-y-3 text-gray-700 dark:text-gray-400">
                                    <li>✓ Advanced code intelligence</li>
                                    <li>✓ Real-time debugging support</li>
                                    <li>✓ Customizable dark theme</li>
                                    <li>✓ Multi-language support</li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">AI Assistant</h3>
                                <ul className="space-y-3 text-gray-700 dark:text-gray-400">
                                    <li>✓ Code generation powered by AI</li>
                                    <li>✓ Automatic code refactoring</li>
                                    <li>✓ Smart code suggestions</li>
                                    <li>✓ Natural language support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Boxes - Increase width (change flex-1 to flex-2) */}
                <div className="flex-2 flex flex-col gap-6">
                    {/* Box 1 - Cloud & Deployment */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex-1">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cloud & Deployment</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Effortless cloud integration and seamless deployment for smooth scaling.
                        </p>
                    </div>

                    {/* Box 2 - Remote Development */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex-1">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Remote Development</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Collaborate from anywhere globally with cutting-edge remote tools.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UExperienceBox;
