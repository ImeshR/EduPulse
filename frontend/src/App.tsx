import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import HeaderPrimary from './components/Header/HeaderPrimary';
import Footer from './components/Footer/Footer';
import CoursePage from './components/Home/Courses/CoursePage';
import Payment from './pages/Payment';
import MyCourse from './pages/MyCourse';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';

import AdminDashboard from './pages/Admin/AdminDashboard';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className='min-h-screen'> 
          <HeaderPrimary />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/my-course" element={<MyCourse />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
