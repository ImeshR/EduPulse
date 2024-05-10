import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import HeaderPrimary from './components/Header/HeaderPrimary';
import Footer from './components/Footer/Footer';
import CoursePage from './components/Home/Courses/CoursePage';
import Payment from './pages/Payment';
import { ChakraProvider } from '@chakra-ui/react';
import AdminDashboard from './pages/Admin/AdminDashboard';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div>
          <HeaderPrimary />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
