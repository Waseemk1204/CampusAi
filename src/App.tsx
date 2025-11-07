import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ChatWidget } from './components/widgets/ChatWidget';
import { Home } from './pages/Home';
import { StudentDashboard } from './pages/StudentDashboard';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { CoursesCatalog } from './pages/CoursesCatalog';
import { CourseDetail } from './pages/CourseDetail';
export function App() {
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/courses" element={<CoursesCatalog />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>;
}