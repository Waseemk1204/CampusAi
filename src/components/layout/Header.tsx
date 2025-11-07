import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, UsersIcon, UsersRoundIcon, UserIcon, HelpCircleIcon, MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-blue-700 text-white font-bold rounded-md p-2 mr-2">
                <span className="text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-blue-700">CampusAI</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center text-gray-600 hover:text-blue-700">
              <HomeIcon className="w-4 h-4 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/courses" className="flex items-center text-gray-600 hover:text-blue-700">
              <BookOpenIcon className="w-4 h-4 mr-1" />
              <span>Courses</span>
            </Link>
            <Link to="/teacher-dashboard" className="flex items-center text-gray-600 hover:text-blue-700">
              <UsersIcon className="w-4 h-4 mr-1" />
              <span>Teachers</span>
            </Link>
            <Link to="/" className="flex items-center text-gray-600 hover:text-blue-700">
              <UsersRoundIcon className="w-4 h-4 mr-1" />
              <span>Community</span>
            </Link>
            <Link to="/student-dashboard" className="flex items-center text-gray-600 hover:text-blue-700">
              <UserIcon className="w-4 h-4 mr-1" />
              <span>Profile</span>
            </Link>
            <Link to="/" className="flex items-center text-gray-600 hover:text-blue-700">
              <HelpCircleIcon className="w-4 h-4 mr-1" />
              <span>Help</span>
            </Link>
          </nav>
          {/* Login/Signup Button */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-2 text-xs text-gray-500 mr-4">
              <img src="https://cdn-icons-png.flaticon.com/512/2504/2504792.png" alt="Moodle" className="h-5 w-5" />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Canvas" className="h-5 w-5" />
              <img src="https://cdn-icons-png.flaticon.com/512/4401/4401470.png" alt="Zoom" className="h-5 w-5" />
            </div>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
              Login / Sign Up
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-700 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="flex items-center">
                <HomeIcon className="w-4 h-4 mr-2" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/courses" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="flex items-center">
                <BookOpenIcon className="w-4 h-4 mr-2" />
                <span>Courses</span>
              </div>
            </Link>
            <Link to="/teacher-dashboard" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="flex items-center">
                <UsersIcon className="w-4 h-4 mr-2" />
                <span>Teachers</span>
              </div>
            </Link>
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="flex items-center">
                <UsersRoundIcon className="w-4 h-4 mr-2" />
                <span>Community</span>
              </div>
            </Link>
            <Link to="/student-dashboard" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="flex items-center">
                <UserIcon className="w-4 h-4 mr-2" />
                <span>Profile</span>
              </div>
            </Link>
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="flex items-center">
                <HelpCircleIcon className="w-4 h-4 mr-2" />
                <span>Help</span>
              </div>
            </Link>
            <div className="px-3 py-2">
              <button className="w-full bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>}
    </header>;
}