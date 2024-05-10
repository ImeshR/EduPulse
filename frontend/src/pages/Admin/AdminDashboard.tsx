import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserManagement from '../../components/Admin/UserManagement';
import CourseManagement from '../../components/Admin/CourseManagement';
import FeedbackManagement from '../../components/Admin/FeedbackManagement';
import PaymentManagement from '../../components/Admin/PaymentManagement';
import CreateCourse from './CreateCourse';


const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen" >


      <Sidebar />
      <div className="flex-grow p-4 " >
        <Routes>
          <Route path="/" element={<Navigate to="user-management" />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="course-management" element={<CourseManagement />} />
          <Route path="payment-management" element={<FeedbackManagement />} />
          <Route path="feedback-management" element={<PaymentManagement />} />
          <Route path="create-course" element={<CreateCourse />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
