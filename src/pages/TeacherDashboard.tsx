import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, UsersIcon, TrendingUpIcon, FileTextIcon, UploadIcon, PlusIcon, CalendarIcon, ClipboardCheckIcon, BrainIcon, BellIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
export function TeacherDashboard() {
  return <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Teacher Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back, Dr. Priya! Manage your courses and students.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <button className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 mr-2">
                <BellIcon className="h-5 w-5 text-gray-500 mr-1" />
                <span className="text-gray-700">Notifications</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <PlusIcon className="h-6 w-6 text-blue-700" />
            </div>
            <span className="text-gray-800 font-medium">Create Course</span>
          </button>
          <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center">
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <FileTextIcon className="h-6 w-6 text-green-700" />
            </div>
            <span className="text-gray-800 font-medium">Create Test</span>
          </button>
          <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center">
            <div className="bg-purple-100 p-3 rounded-full mb-3">
              <UploadIcon className="h-6 w-6 text-purple-700" />
            </div>
            <span className="text-gray-800 font-medium">Upload Lecture</span>
          </button>
          <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center">
            <div className="bg-orange-100 p-3 rounded-full mb-3">
              <BrainIcon className="h-6 w-6 text-orange-500" />
            </div>
            <span className="text-gray-800 font-medium">AI Assistant</span>
          </button>
        </div>
        {/* Analytics Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Student Performance Analytics
            </h2>
            <select className="border rounded-md px-3 py-1 text-sm">
              <option>All Courses</option>
              <option>Machine Learning Fundamentals</option>
              <option>Data Structures</option>
              <option>AI Ethics</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Average Attendance
              </h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-blue-700">87%</span>
                <span className="text-green-600 text-sm ml-2 flex items-center">
                  <TrendingUpIcon className="h-4 w-4 mr-1" />
                  +3%
                </span>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Assignment Completion
              </h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-green-700">92%</span>
                <span className="text-green-600 text-sm ml-2 flex items-center">
                  <TrendingUpIcon className="h-4 w-4 mr-1" />
                  +5%
                </span>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Average Test Score
              </h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-orange-700">78%</span>
                <span className="text-red-600 text-sm ml-2 flex items-center">
                  <TrendingUpIcon className="h-4 w-4 mr-1 transform rotate-180" />
                  -2%
                </span>
              </div>
            </div>
          </div>
          {/* Chart Placeholder */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-64">
            <div className="text-center">
              <div className="mb-2">
                <TrendingUpIcon className="h-10 w-10 text-blue-700 inline-block" />
              </div>
              <p className="text-gray-500">
                Student performance chart would display here
              </p>
              <p className="text-sm text-gray-400">
                Showing data for the current semester
              </p>
            </div>
          </div>
        </div>
        {/* Your Courses */}
        <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Course 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-purple-600 to-purple-800 flex items-center px-6">
              <h3 className="text-white font-bold text-lg">
                Machine Learning Fundamentals
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">42 Students</span>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Course Progress</span>
                  <span className="text-gray-800 font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{
                  width: '45%'
                }}></div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link to="/courses/machine-learning" className="flex-1 bg-blue-700 text-white text-center py-2 rounded-md text-sm hover:bg-blue-800 transition-colors">
                  Manage
                </Link>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <FileTextIcon className="h-5 w-5 text-blue-700" />
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <UploadIcon className="h-5 w-5 text-blue-700" />
                </button>
              </div>
            </div>
          </div>
          {/* Course 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center px-6">
              <h3 className="text-white font-bold text-lg">
                Data Structures and Algorithms
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">38 Students</span>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Course Progress</span>
                  <span className="text-gray-800 font-medium">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '72%'
                }}></div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link to="/courses/data-structures" className="flex-1 bg-blue-700 text-white text-center py-2 rounded-md text-sm hover:bg-blue-800 transition-colors">
                  Manage
                </Link>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <FileTextIcon className="h-5 w-5 text-blue-700" />
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <UploadIcon className="h-5 w-5 text-blue-700" />
                </button>
              </div>
            </div>
          </div>
          {/* Course 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-green-600 to-green-800 flex items-center px-6">
              <h3 className="text-white font-bold text-lg">
                AI Ethics and Governance
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">25 Students</span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  New
                </span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Course Progress</span>
                  <span className="text-gray-800 font-medium">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{
                  width: '15%'
                }}></div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link to="/courses/ai-ethics" className="flex-1 bg-blue-700 text-white text-center py-2 rounded-md text-sm hover:bg-blue-800 transition-colors">
                  Manage
                </Link>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <FileTextIcon className="h-5 w-5 text-blue-700" />
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <UploadIcon className="h-5 w-5 text-blue-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Upcoming and Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Schedule */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-blue-700" />
                Upcoming Schedule
              </h2>
              <ul className="space-y-4">
                <li className="border-l-4 border-red-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">ML Fundamentals Lecture</p>
                      <p className="text-sm text-gray-500">Room 302, Block B</p>
                    </div>
                    <span className="text-red-600 text-sm font-medium">
                      Today, 2:00 PM
                    </span>
                  </div>
                </li>
                <li className="border-l-4 border-yellow-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Department Meeting</p>
                      <p className="text-sm text-gray-500">Conference Room</p>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      Tomorrow, 10:00 AM
                    </span>
                  </div>
                </li>
                <li className="border-l-4 border-green-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Data Structures Lab</p>
                      <p className="text-sm text-gray-500">Computer Lab 1</p>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      Thursday, 11:30 AM
                    </span>
                  </div>
                </li>
                <li className="border-l-4 border-blue-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">AI Ethics Seminar</p>
                      <p className="text-sm text-gray-500">Auditorium</p>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      Friday, 3:00 PM
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Pending Tasks */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <ClipboardCheckIcon className="h-5 w-5 mr-2 text-blue-700" />
                Pending Tasks
              </h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="bg-red-100 p-2 rounded-md mr-3">
                        <FileTextIcon className="h-5 w-5 text-red-700" />
                      </div>
                      <div>
                        <p className="font-medium">
                          Grade ML Algorithm Projects
                        </p>
                        <p className="text-sm text-gray-500">
                          Machine Learning Fundamentals • Due in 2 days
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-100 p-1.5 rounded-md hover:bg-green-200 transition-colors">
                        <CheckCircleIcon className="h-5 w-5 text-green-700" />
                      </button>
                      <button className="bg-gray-100 p-1.5 rounded-md hover:bg-gray-200 transition-colors">
                        <BrainIcon className="h-5 w-5 text-blue-700" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="bg-orange-100 p-2 rounded-md mr-3">
                        <UploadIcon className="h-5 w-5 text-orange-700" />
                      </div>
                      <div>
                        <p className="font-medium">Upload DSA Mid-term Exam</p>
                        <p className="text-sm text-gray-500">
                          Data Structures • Due in 3 days
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-100 p-1.5 rounded-md hover:bg-green-200 transition-colors">
                        <CheckCircleIcon className="h-5 w-5 text-green-700" />
                      </button>
                      <button className="bg-gray-100 p-1.5 rounded-md hover:bg-gray-200 transition-colors">
                        <BrainIcon className="h-5 w-5 text-blue-700" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-md mr-3">
                        <FileTextIcon className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-medium">
                          Create AI Ethics Case Studies
                        </p>
                        <p className="text-sm text-gray-500">
                          AI Ethics and Governance • Due in 5 days
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-100 p-1.5 rounded-md hover:bg-green-200 transition-colors">
                        <CheckCircleIcon className="h-5 w-5 text-green-700" />
                      </button>
                      <button className="bg-gray-100 p-1.5 rounded-md hover:bg-gray-200 transition-colors">
                        <BrainIcon className="h-5 w-5 text-blue-700" />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-2 rounded-md mr-3">
                        <UsersIcon className="h-5 w-5 text-purple-700" />
                      </div>
                      <div>
                        <p className="font-medium">Update Attendance Records</p>
                        <p className="text-sm text-gray-500">
                          All Courses • Due in 1 week
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-100 p-1.5 rounded-md hover:bg-green-200 transition-colors">
                        <CheckCircleIcon className="h-5 w-5 text-green-700" />
                      </button>
                      <button className="bg-gray-100 p-1.5 rounded-md hover:bg-gray-200 transition-colors">
                        <BrainIcon className="h-5 w-5 text-blue-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}