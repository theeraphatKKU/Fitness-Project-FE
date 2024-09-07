import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Program from './pages/Program';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login'; 
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import TrainerHome from './trainer/TrainerHome';
import TrainerWorkspace from './trainer/TrainerWorkspace';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} /> {/* เพิ่ม Route สำหรับ Login */}
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/trainer-home" element={<TrainerHome />} /> {/* กำหนด route สำหรับ TrainerHome */}/trainer-workspace
          <Route path="/trainer-workspace" element={<TrainerWorkspace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
