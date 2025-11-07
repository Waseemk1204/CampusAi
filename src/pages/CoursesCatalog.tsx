import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, FilterIcon, BookOpenIcon, UsersIcon, ClockIcon, TagIcon } from 'lucide-react';
export function CoursesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInstructor, setSelectedInstructor] = useState('All');
  const categories = ['All', 'Computer Science', 'Data Science', 'Business', 'Engineering', 'Humanities'];
  const instructors = ['All', 'Dr. Priya Patel', 'Prof. Rahul Sharma', 'Prof. Ajay Kumar', 'Dr. Neha Gupta'];
  return <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Course Catalog
          </h1>
          <p className="text-gray-600">
            Explore our wide range of courses taught by expert faculty members.
          </p>
        </div>
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" placeholder="Search courses..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select className="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                  {categories.map(category => <option key={category} value={category}>
                      {category}
                    </option>)}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FilterIcon className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={selectedInstructor} onChange={e => setSelectedInstructor(e.target.value)}>
                  {instructors.map(instructor => <option key={instructor} value={instructor}>
                      {instructor}
                    </option>)}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FilterIcon className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              <TagIcon className="h-3 w-3 mr-1" />
              <span>Popular</span>
            </div>
            <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              <TagIcon className="h-3 w-3 mr-1" />
              <span>Free</span>
            </div>
            <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
              <TagIcon className="h-3 w-3 mr-1" />
              <span>Premium</span>
            </div>
            <div className="flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              <TagIcon className="h-3 w-3 mr-1" />
              <span>New</span>
            </div>
            <div className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              <TagIcon className="h-3 w-3 mr-1" />
              <span>Beginner</span>
            </div>
            <div className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              <TagIcon className="h-3 w-3 mr-1" />
              <span>Advanced</span>
            </div>
          </div>
        </div>
        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="Web Development" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Free
                </span>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">12 weeks</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Introduction to Web Development
              </h3>
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
                <span className="text-sm text-gray-600">
                  Prof. Rahul Sharma
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Learn the fundamentals of web development, including HTML, CSS,
                and JavaScript. Build responsive websites from scratch.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">245 students</span>
                </div>
                <Link to="/courses/web-development" className="text-blue-700 hover:text-blue-800 font-medium">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Course Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src="https://img.freepik.com/free-vector/gradient-ai-concept_23-2149379698.jpg" alt="Machine Learning" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  Premium
                </span>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">16 weeks</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Machine Learning Fundamentals
              </h3>
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
                <span className="text-sm text-gray-600">Dr. Priya Patel</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Explore the core concepts of machine learning, including
                supervised and unsupervised learning, neural networks, and
                practical applications.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">189 students</span>
                </div>
                <Link to="/courses/machine-learning" className="text-blue-700 hover:text-blue-800 font-medium">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Course Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg" alt="Business Management" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Free
                </span>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">10 weeks</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Business Management 101
              </h3>
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
                <span className="text-sm text-gray-600">Prof. Ajay Kumar</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Learn essential business management principles, including
                leadership, strategy, marketing, and organizational behavior.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">312 students</span>
                </div>
                <Link to="/courses/business-management" className="text-blue-700 hover:text-blue-800 font-medium">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Course Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src="https://img.freepik.com/free-vector/big-data-analytics-abstract-concept-illustration_335657-4817.jpg" alt="Data Science" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  Premium
                </span>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">14 weeks</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Data Science and Analytics
              </h3>
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
                <span className="text-sm text-gray-600">Dr. Priya Patel</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Master data analysis techniques, statistical methods, and
                visualization tools to extract insights from complex datasets.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">156 students</span>
                </div>
                <Link to="/courses/data-science" className="text-blue-700 hover:text-blue-800 font-medium">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Course Card 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src="https://img.freepik.com/free-vector/mobile-app-development-isometric-illustration-application-development-process-responsive-web-design-user-interface-development-concept-vector-illustration_613284-2357.jpg" alt="Mobile App Development" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  Premium
                </span>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">12 weeks</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Mobile App Development
              </h3>
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
                <span className="text-sm text-gray-600">
                  Prof. Rahul Sharma
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Learn to build native and cross-platform mobile applications for
                iOS and Android using React Native.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">178 students</span>
                </div>
                <Link to="/courses/mobile-development" className="text-blue-700 hover:text-blue-800 font-medium">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Course Card 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src="https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg" alt="Cybersecurity" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex space-x-2">
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    Premium
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">16 weeks</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Cybersecurity Fundamentals
              </h3>
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
                <span className="text-sm text-gray-600">Dr. Neha Gupta</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Understand cybersecurity principles, threat detection,
                encryption, and best practices for securing digital systems.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">92 students</span>
                </div>
                <Link to="/courses/cybersecurity" className="text-blue-700 hover:text-blue-800 font-medium">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-md border bg-white text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md border bg-blue-700 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-50">
              3
            </button>
            <span className="px-3 py-1 text-gray-500">...</span>
            <button className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-50">
              8
            </button>
            <button className="px-3 py-1 rounded-md border bg-white text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>;
}