import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-gray-50 text-white w-64 flex flex-col border-r-4 shadow-xl border-t-4 h-full">
      <div className="p-4 text-xl text-center text-gray-700 font-bold">Admin Panel</div>
      <div className="border-t text-gray-700 font-mono border-gray-200">
        <Link
          to="/admin/user-management"
          className={`block px-4 py-2 ${
            pathname.includes('user-management') ? 'bg-blue-200' : ''
          }`}
        >
          User Management
        </Link>
        <Link
          to="/admin/course-management"
          className={`block px-4 py-2 ${
            pathname.includes('course-management') ? 'bg-blue-200' : ''
          }`}
        >
          Course Management
        </Link>
        <Link
          to="/admin/payment-management"
          className={`block px-4 py-2 ${
            pathname.includes('payment-management') ? 'bg-blue-200' : ''
          }`}
        >
          Payment Management
        </Link>
        <Link
          to="/admin/feedback-management"
          className={`block px-4 py-2 ${
            pathname.includes('feedback-management') ? 'bg-blue-200' : ''
          }`}
        >
          Feedback Management
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
