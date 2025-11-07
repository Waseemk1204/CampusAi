import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, UsersIcon, TrendingUpIcon, BrainIcon, VideoIcon, ClipboardCheckIcon } from 'lucide-react';
export function Home() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Empower Your Learning with AI
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Revolutionize your college experience with personalized AI
              tutoring, smart content summarization, and interactive learning
              tools.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/student-dashboard" className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium text-center hover:bg-gray-100 transition-colors">
                Student Login
              </Link>
              <Link to="/teacher-dashboard" className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium text-center hover:bg-orange-600 transition-colors">
                Teacher Login
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://img.freepik.com/free-vector/online-learning-isometric-concept_1284-17947.jpg" alt="Online Learning" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How CampusAI Transforms Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BrainIcon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI-Powered Tutoring
              </h3>
              <p className="text-gray-600">
                Get personalized help and explanations from our AI tutor,
                available 24/7 to answer your questions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <VideoIcon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lecture Summaries</h3>
              <p className="text-gray-600">
                Save time with AI-generated video lecture summaries,
                highlighting key concepts and important points.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUpIcon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your learning progress with detailed analytics and
                personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Courses</h2>
            <Link to="/courses" className="text-blue-700 hover:underline">
              View All
            </Link>
          </div>
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
                  <span className="text-sm text-gray-500">12 weeks</span>
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
                <Link to="/courses/web-development" className="block text-center bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors">
                  Enroll Now
                </Link>
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
                  <span className="text-sm text-gray-500">16 weeks</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Machine Learning Fundamentals
                </h3>
                <div className="flex items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
                  <span className="text-sm text-gray-600">Dr. Priya Patel</span>
                </div>
                <Link to="/courses/machine-learning" className="block text-center bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors">
                  Purchase
                </Link>
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
                  <span className="text-sm text-gray-500">10 weeks</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Business Management 101
                </h3>
                <div className="flex items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
                  <span className="text-sm text-gray-600">
                    Prof. Ajay Kumar
                  </span>
                </div>
                <Link to="/courses/business-management" className="block text-center bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Students Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Student" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Ananya Singh</h4>
                  <p className="text-sm text-gray-500">
                    Computer Science, Delhi University
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The AI tutor helped me understand complex programming concepts
                that I was struggling with. It's like having a personal teacher
                available 24/7!"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/47.jpg" alt="Student" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Vikram Mehta</h4>
                  <p className="text-sm text-gray-500">
                    Mechanical Engineering, IIT Bombay
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The lecture summaries save me so much time. Now I can quickly
                review key concepts before exams instead of rewatching hours of
                lectures."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="Student" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Neha Gupta</h4>
                  <p className="text-sm text-gray-500">
                    Business Administration, Symbiosis Pune
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a working student, CampusAI has been a game-changer. I can
                study at my own pace and get help whenever I need it without
                waiting for office hours."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students and educators using CampusAI to enhance
            their teaching and learning journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/student-dashboard" className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Get Started as Student
            </Link>
            <Link to="/teacher-dashboard" className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors">
              Get Started as Teacher
            </Link>
          </div>
        </div>
      </section>
    </div>;
}