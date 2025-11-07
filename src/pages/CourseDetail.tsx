import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, UsersIcon, ClockIcon, PlayIcon, FileTextIcon, CheckCircleIcon, StarIcon, BrainIcon, CalendarIcon, DownloadIcon } from 'lucide-react';
export function CourseDetail() {
  return <div className="w-full bg-gray-50 min-h-screen">
      <div className="bg-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">
                Machine Learning Fundamentals
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Master the core principles and algorithms of machine learning
                with hands-on projects
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-blue-200" />
                  <span>16 weeks</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 mr-2 text-blue-200" />
                  <span>189 students enrolled</span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 mr-1 text-yellow-300" />
                  <StarIcon className="h-5 w-5 mr-1 text-yellow-300" />
                  <StarIcon className="h-5 w-5 mr-1 text-yellow-300" />
                  <StarIcon className="h-5 w-5 mr-1 text-yellow-300" />
                  <StarIcon className="h-5 w-5 mr-1 text-gray-400" />
                  <span className="ml-1">(4.2)</span>
                </div>
              </div>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Priya Patel" className="w-12 h-12 rounded-full border-2 border-white mr-4" />
                <div>
                  <p className="font-medium">Dr. Priya Patel</p>
                  <p className="text-sm text-blue-200">
                    Associate Professor, Data Science Department
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-900">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">₹4,999</span>
                  <span className="text-lg text-gray-500 line-through ml-2">
                    ₹7,999
                  </span>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-md font-medium mb-4 hover:bg-orange-600 transition-colors">
                  Enroll Now
                </button>
                <p className="text-center text-sm text-gray-500 mb-4">
                  30-day money-back guarantee
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Access on mobile and desktop</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>AI-powered learning assistant</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* About the Course */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
              <p className="text-gray-700 mb-4">
                This comprehensive course on Machine Learning Fundamentals is
                designed to provide you with a strong foundation in machine
                learning concepts, algorithms, and practical applications.
                Whether you're a beginner or have some experience in the field,
                this course will help you develop the skills needed to build and
                deploy machine learning models.
              </p>
              <p className="text-gray-700 mb-4">
                You'll learn through a combination of lectures, hands-on coding
                exercises, and real-world projects. By the end of the course,
                you'll have a portfolio of projects demonstrating your machine
                learning skills and the ability to tackle complex data problems.
              </p>
              <h3 className="text-xl font-medium mb-2">What You'll Learn</h3>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                <li>Fundamentals of supervised and unsupervised learning</li>
                <li>Linear and logistic regression algorithms</li>
                <li>Decision trees and random forests</li>
                <li>Neural networks and deep learning basics</li>
                <li>Feature engineering and selection</li>
                <li>Model evaluation and validation techniques</li>
                <li>Deploying machine learning models</li>
              </ul>
              <h3 className="text-xl font-medium mb-2">Requirements</h3>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                <li>Basic programming knowledge (preferably Python)</li>
                <li>Fundamental understanding of mathematics and statistics</li>
                <li>Computer with internet connection</li>
              </ul>
            </div>
            {/* Course Content */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
              <div className="mb-4">
                <p className="text-gray-600">
                  16 weeks • 48 lectures • 24 hands-on exercises • 4 projects
                </p>
              </div>
              {/* Module 1 */}
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">
                    Module 1: Introduction to Machine Learning
                  </h3>
                  <span className="text-sm text-gray-500">3 lectures</span>
                </div>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlayIcon className="h-4 w-4 text-blue-700 mr-2" />
                      <span className="text-gray-700">
                        What is Machine Learning?
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">45 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlayIcon className="h-4 w-4 text-blue-700 mr-2" />
                      <span className="text-gray-700">
                        Types of Machine Learning Problems
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">52 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileTextIcon className="h-4 w-4 text-green-700 mr-2" />
                      <span className="text-gray-700">
                        Setting Up Your Development Environment
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">30 min</span>
                  </div>
                </div>
              </div>
              {/* Module 2 */}
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">
                    Module 2: Supervised Learning - Regression
                  </h3>
                  <span className="text-sm text-gray-500">4 lectures</span>
                </div>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlayIcon className="h-4 w-4 text-blue-700 mr-2" />
                      <span className="text-gray-700">
                        Linear Regression Fundamentals
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">65 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlayIcon className="h-4 w-4 text-blue-700 mr-2" />
                      <span className="text-gray-700">
                        Multiple Linear Regression
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">58 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileTextIcon className="h-4 w-4 text-green-700 mr-2" />
                      <span className="text-gray-700">
                        Hands-on: Building a Regression Model
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">90 min</span>
                  </div>
                </div>
              </div>
              {/* Module 3 */}
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">
                    Module 3: Supervised Learning - Classification
                  </h3>
                  <span className="text-sm text-gray-500">5 lectures</span>
                </div>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlayIcon className="h-4 w-4 text-blue-700 mr-2" />
                      <span className="text-gray-700">Logistic Regression</span>
                    </div>
                    <span className="text-sm text-gray-500">62 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlayIcon className="h-4 w-4 text-blue-700 mr-2" />
                      <span className="text-gray-700">
                        Decision Trees and Random Forests
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">75 min</span>
                  </div>
                </div>
              </div>
              {/* Show More Button */}
              <button className="text-blue-700 font-medium hover:text-blue-800 flex items-center mt-4">
                <span>Show all modules</span>
                <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {/* Student Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Student Reviews</h2>
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  <StarIcon className="h-6 w-6 text-yellow-400" />
                  <StarIcon className="h-6 w-6 text-yellow-400" />
                  <StarIcon className="h-6 w-6 text-yellow-400" />
                  <StarIcon className="h-6 w-6 text-yellow-400" />
                  <StarIcon className="h-6 w-6 text-gray-300" />
                </div>
                <div>
                  <span className="text-3xl font-bold">4.2</span>
                  <span className="text-gray-500 ml-1">course rating</span>
                </div>
              </div>
              <div className="space-y-6">
                {/* Review 1 */}
                <div className="border-b pb-6">
                  <div className="flex items-start mb-2">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Student" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">Vikram Mehta</h4>
                        <span className="mx-2 text-gray-300">•</span>
                        <div className="flex">
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">2 weeks ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    This course is fantastic! Dr. Patel explains complex
                    concepts in a way that's easy to understand. The hands-on
                    exercises really helped me apply what I learned. I've
                    already used some of these techniques in my work projects.
                  </p>
                </div>
                {/* Review 2 */}
                <div className="border-b pb-6">
                  <div className="flex items-start mb-2">
                    <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="Student" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">Neha Gupta</h4>
                        <span className="mx-2 text-gray-300">•</span>
                        <div className="flex">
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">1 month ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Great course content and structure. The AI tutor was very
                    helpful when I got stuck on some concepts. The only reason
                    I'm giving 4 stars instead of 5 is that some of the
                    programming exercises could use more detailed explanations.
                  </p>
                </div>
                {/* Review 3 */}
                <div>
                  <div className="flex items-start mb-2">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">Rahul Sharma</h4>
                        <span className="mx-2 text-gray-300">•</span>
                        <div className="flex">
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                          <StarIcon className="h-4 w-4 text-gray-300" />
                          <StarIcon className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">2 months ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    The course content is solid and I learned a lot, but I found
                    the pace a bit too fast in the neural networks section.
                    Would have appreciated more examples. The AI-generated
                    lecture summaries were very helpful for review though.
                  </p>
                </div>
              </div>
              <button className="mt-6 border border-blue-700 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors">
                See All Reviews
              </button>
            </div>
          </div>
          <div className="md:col-span-1">
            {/* AI Learning Tools */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">AI Learning Tools</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 text-blue-700 p-3 rounded-md transition-colors">
                  <div className="flex items-center">
                    <BrainIcon className="h-5 w-5 mr-3" />
                    <span>Ask AI Tutor</span>
                  </div>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 text-blue-700 p-3 rounded-md transition-colors">
                  <div className="flex items-center">
                    <FileTextIcon className="h-5 w-5 mr-3" />
                    <span>Generate Lecture Summary</span>
                  </div>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 text-blue-700 p-3 rounded-md transition-colors">
                  <div className="flex items-center">
                    <DownloadIcon className="h-5 w-5 mr-3" />
                    <span>Download Study Materials</span>
                  </div>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-3">
                    <CalendarIcon className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium">Neural Networks Lecture</p>
                    <p className="text-sm text-gray-500">Tomorrow, 2:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-md mr-3">
                    <CalendarIcon className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="font-medium">Hands-on Lab Session</p>
                    <p className="text-sm text-gray-500">Friday, 10:00 AM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-md mr-3">
                    <CalendarIcon className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <p className="font-medium">Project Discussion</p>
                    <p className="text-sm text-gray-500">
                      Next Monday, 3:30 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Related Courses */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Related Courses</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <img src="https://img.freepik.com/free-vector/big-data-analytics-abstract-concept-illustration_335657-4817.jpg" alt="Data Science" className="w-16 h-16 object-cover rounded-md mr-3" />
                  <div>
                    <h3 className="font-medium">Data Science and Analytics</h3>
                    <p className="text-sm text-gray-500">Dr. Priya Patel</p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-xs text-gray-500 ml-1">(4.3)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://img.freepik.com/free-vector/gradient-ai-concept_23-2149379698.jpg" alt="Deep Learning" className="w-16 h-16 object-cover rounded-md mr-3" />
                  <div>
                    <h3 className="font-medium">Advanced Deep Learning</h3>
                    <p className="text-sm text-gray-500">Dr. Neha Gupta</p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                      </div>
                      <span className="text-xs text-gray-500 ml-1">(4.8)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg" alt="AI Ethics" className="w-16 h-16 object-cover rounded-md mr-3" />
                  <div>
                    <h3 className="font-medium">AI Ethics and Governance</h3>
                    <p className="text-sm text-gray-500">Prof. Ajay Kumar</p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <StarIcon className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-xs text-gray-500 ml-1">(4.2)</span>
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