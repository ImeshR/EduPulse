
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import HeaderPrimary from './components/Header/HeaderPrimary';

export default function App() {
  return (
    <BrowserRouter>
    <HeaderPrimary />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  );
}
