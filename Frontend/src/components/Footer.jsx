import React from 'react'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  Rocket
} from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">

              <span className="text-xl font-bold text-gray-800 dark:text-white">TmDev</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Empowering your digital journey with innovative solutions and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Shipping Info</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-400">Isparta Turkey </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-400">+905013542771</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-400">azatvepakulyyev@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} tmDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer