import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Program from './pages/Program';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login'; 
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Register2 from './pages/Register2'; // Add this import
import Register3 from './pages/Register3'; 
import Register4 from './pages/Register4'; 

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register2" element={<Register2 />} /> {/* Add routes */}
          <Route path="/register3" element={<Register3 />} />
          <Route path="/register4" element={<Register4 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Optional: Add a route for 404 */}
          <Route path="*" element={<Home />} /> {/* Redirect to Home or a 404 component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
