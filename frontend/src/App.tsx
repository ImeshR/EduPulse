
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import HeaderPrimary from './components/Header/HeaderPrimary';
import Footer from './components/Footer/Footer';
import { ChakraProvider } from '@chakra-ui/react'
export default function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
    <HeaderPrimary />
    <div className='py-10' >
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      
    </Routes>
    </div>
    <Footer/>
    
    </BrowserRouter>
    </ChakraProvider>
  );
}
