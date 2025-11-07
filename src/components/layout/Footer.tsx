import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 text-white font-bold rounded-md p-1 mr-2">
                <span className="text-xl">C</span>
              </div>
              <span className="text-xl font-bold">CampusAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              An AI-powered learning management platform designed for Indian
              colleges and universities.
            </p>
          </div>
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/student-dashboard" className="text-gray-400 hover:text-white text-sm">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link to="/teacher-dashboard" className="text-gray-400 hover:text-white text-sm">
                  Teacher Dashboard
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  Academic Integrity
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MailIcon className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  support@campusai.edu
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-400 text-sm">+91 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-400 text-sm">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 CampusAI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/10107/10107659.png" alt="UGC Approved" className="h-10 w-10 bg-white p-1 rounded-full" />
            </div>
            <div className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2942/2942734.png" alt="NAAC A+" className="h-10 w-10 bg-white p-1 rounded-full" />
            </div>
            <div className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3064/3064311.png" alt="AICTE Approved" className="h-10 w-10 bg-white p-1 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>;
}