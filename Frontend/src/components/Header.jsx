import React, { useState } from 'react'
import { 
  Search, 
  Globe, 
  ShoppingCart, 
  Bell, 
  Sun,
  Moon,
  Rocket
} from 'lucide-react'

function Header() {
  const [isDark, setIsDark] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800 dark:text-white">TmDev</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Products</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Services</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:outline-none ml-2 w-48 text-gray-600 dark:text-gray-300"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <Globe className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <Bell className="h-5 w-5" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header