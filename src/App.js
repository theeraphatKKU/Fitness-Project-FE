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

//For Member
import MemberBooking from './pages/member/member_booking';
import MemberCancel from './pages/member/member_cancel';
import MemberChangePass from './pages/member/member_changepass';
import MemberContactus from './pages/member/member_contactus';
import MemberEditProfile from './pages/member/member_editprofile';
import MemberMembership from './pages/member/member_membership';
import MemberProfile from './pages/member/member_profile';
import MemberProgram from './pages/member/member_program';
import MemberSchedule from './pages/member/member_schedule';
import MemberHome from './pages/member/member_home';

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

          <Route path="/member-booking" element={<MemberBooking />} />
          <Route path="/member-cancel" element={<MemberCancel />} />
          <Route path="/member-changepass" element={<MemberChangePass />} />
          <Route path="/member-contactus" element={<MemberContactus />} />
          <Route path="/member-editprofile" element={<MemberEditProfile />} />
          <Route path="/member-membership" element={<MemberMembership />} />
          <Route path="/member-profile" element={<MemberProfile />} />
          <Route path="/member-program" element={<MemberProgram />} />
          <Route path="/member-schedule" element={<MemberSchedule />} />
          <Route path="/member-home" element={<MemberHome />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
