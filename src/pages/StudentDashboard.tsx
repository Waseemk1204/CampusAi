import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, ClockIcon, TrendingUpIcon, BellIcon, PlayIcon, BrainIcon, FileTextIcon, CalendarIcon, CheckCircleIcon } from 'lucide-react';
export function StudentDashboard() {
  return <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Student Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back, Arjun! Here's your learning summary.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <button className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-50">
                <BellIcon className="h-5 w-5 text-gray-500 mr-1" />
                <span className="text-gray-700">Notifications</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Learning Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Course Completion</span>
                <span className="text-blue-700 font-semibold">68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-700 h-2.5 rounded-full" style={{
                width: '68%'
              }}></div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Assignments</span>
                <span className="text-green-600 font-semibold">12/15</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{
                width: '80%'
              }}></div>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Weekly Study Goal</span>
                <span className="text-orange-600 font-semibold">8/10 hrs</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{
                width: '80%'
              }}></div>
              </div>
            </div>
          </div>
        </div>
        {/* Enrolled Courses */}
        <h2 className="text-xl font-semibold mb-4">My Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Course 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-36 bg-blue-700 relative">
              <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="Web Development" className="w-full h-full object-cover opacity-75" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-bold text-lg">
                  Introduction to Web Development
                </h3>
                <p className="text-blue-100 text-sm">Prof. Rahul Sharma</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">
                    Next class: Today, 2:00 PM
                  </span>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  In Progress
                </span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-800 font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '75%'
                }}></div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link to="/courses/web-development" className="flex-1 bg-blue-700 text-white text-center py-2 rounded-md text-sm hover:bg-blue-800 transition-colors">
                  Continue
                </Link>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <BrainIcon className="h-5 w-5 text-blue-700" />
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <PlayIcon className="h-5 w-5 text-blue-700" />
                </button>
              </div>
            </div>
          </div>
          {/* Course 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-36 bg-purple-700 relative">
              <img src="https://img.freepik.com/free-vector/gradient-ai-concept_23-2149379698.jpg" alt="Machine Learning" className="w-full h-full object-cover opacity-75" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-bold text-lg">
                  Machine Learning Fundamentals
                </h3>
                <p className="text-purple-100 text-sm">Dr. Priya Patel</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">
                    Next class: Tomorrow, 10:00 AM
                  </span>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  In Progress
                </span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
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
                  Continue
                </Link>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <BrainIcon className="h-5 w-5 text-blue-700" />
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <PlayIcon className="h-5 w-5 text-blue-700" />
                </button>
              </div>
            </div>
          </div>
          {/* Course 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-36 bg-green-700 relative">
              <img src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg" alt="Business Management" className="w-full h-full object-cover opacity-75" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-bold text-lg">
                  Business Management 101
                </h3>
                <p className="text-green-100 text-sm">Prof. Ajay Kumar</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">
                    Next class: Friday, 3:30 PM
                  </span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Just Started
                </span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-800 font-medium">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{
                  width: '15%'
                }}></div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link to="/courses/business-management" className="flex-1 bg-blue-700 text-white text-center py-2 rounded-md text-sm hover:bg-blue-800 transition-colors">
                  Continue
                </Link>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <BrainIcon className="h-5 w-5 text-blue-700" />
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <PlayIcon className="h-5 w-5 text-blue-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Upcoming and Assignments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Deadlines */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-blue-700" />
                Upcoming Deadlines
              </h2>
              <ul className="space-y-4">
                <li className="border-l-4 border-red-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Web Dev Project Submission</p>
                      <p className="text-sm text-gray-500">
                        Introduction to Web Development
                      </p>
                    </div>
                    <span className="text-red-600 text-sm font-medium">
                      Tomorrow
                    </span>
                  </div>
                </li>
                <li className="border-l-4 border-yellow-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">ML Algorithm Quiz</p>
                      <p className="text-sm text-gray-500">
                        Machine Learning Fundamentals
                      </p>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      In 3 days
                    </span>
                  </div>
                </li>
                <li className="border-l-4 border-green-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Case Study Analysis</p>
                      <p className="text-sm text-gray-500">
                        Business Management 101
                      </p>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      In 7 days
                    </span>
                  </div>
                </li>
                <li className="border-l-4 border-green-500 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Mid-term Exam</p>
                      <p className="text-sm text-gray-500">Web Development</p>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      In 10 days
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Recent Announcements */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BellIcon className="h-5 w-5 mr-2 text-blue-700" />
                Recent Announcements
              </h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Prof. Rahul Sharma" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <p className="font-medium">Prof. Rahul Sharma</p>
                        <p className="text-sm text-gray-500">
                          Introduction to Web Development
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-gray-700">
                    Project submission deadline extended to Friday. Please make
                    sure to include proper documentation with your code.
                  </p>
                  <div className="mt-2 flex justify-end">
                    <button className="flex items-center text-sm text-blue-700 hover:text-blue-800">
                      <FileTextIcon className="h-4 w-4 mr-1" />
                      View AI Summary
                    </button>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Priya Patel" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <p className="font-medium">Dr. Priya Patel</p>
                        <p className="text-sm text-gray-500">
                          Machine Learning Fundamentals
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                  <p className="text-gray-700">
                    Additional resources for neural networks have been uploaded
                    to the course repository. These will be very helpful for
                    your upcoming quiz.
                  </p>
                  <div className="mt-2 flex justify-end">
                    <button className="flex items-center text-sm text-blue-700 hover:text-blue-800">
                      <FileTextIcon className="h-4 w-4 mr-1" />
                      View AI Summary
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Prof. Ajay Kumar" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <p className="font-medium">Prof. Ajay Kumar</p>
                        <p className="text-sm text-gray-500">
                          Business Management 101
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    Guest lecture by industry expert Mr. Ravi Desai, CEO of
                    TechStart India, scheduled for next Tuesday. Attendance is
                    mandatory.
                  </p>
                  <div className="mt-2 flex justify-end">
                    <button className="flex items-center text-sm text-blue-700 hover:text-blue-800">
                      <FileTextIcon className="h-4 w-4 mr-1" />
                      View AI Summary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}