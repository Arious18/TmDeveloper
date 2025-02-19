import React from 'react'
import { Rocket } from 'lucide-react'

function Hero() {
    return (
        <div className="relative min-h-[600px] overflow-hidden bg-white dark:bg-gray-800">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 animate-gradient">
                {/* Animated shapes */}
                <div className="absolute w-96 h-96 bg-gray-400/30 dark:bg-gray-700/30 rounded-full blur-3xl -top-48 -left-48 animate-blob"></div>
                <div className="absolute w-96 h-96 bg-gray-500/30 dark:bg-gray-600/30 rounded-full blur-3xl top-48 right-48 animate-blob animation-delay-2000"></div>
                <div className="absolute w-96 h-96 bg-gray-600/30 dark:bg-gray-500/30 rounded-full blur-3xl bottom-48 left-48 animate-blob animation-delay-4000"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-24">
                <div className="max-w-2xl mr-auto text-left">
                    <div className="flex justify-start mb-8">
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">
                        Innovate with  TmDev
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in animation-delay-500">
                        Empowering your digital journey with cutting-edge solutions that transform ideas into reality.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
