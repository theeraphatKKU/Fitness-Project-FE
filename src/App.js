// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import all pages
// For public
import Home from './pages/Home';
import Program from './pages/Program';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';

import TrainerHome from './trainer/TrainerHome';
import TrainerWorkspace from './trainer/TrainerWorkspace';
import TrainerAvailability from './trainer/TrainerAvailability';
import TrainerSchedule from './trainer/TrainerSchedule';
import TrainerProgram from './trainer/TrainerProgram';
import TrainerContactus from './trainer/TrainerContactus';
import TrainerLogin from './trainer/TrainerLogin';

import Register2 from './pages/Register2'; // Add this import
import Register3 from './pages/Register3'; 
import Register4 from './pages/Register4'; 
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import Register4 from './pages/Register4';

// For admin
import AdminWorkspace from './admin/admin_workspace';
import AdminProfile from './admin/admin_profile';
import AdminConfirmPayment from './admin/admin_ConfirmPayment';
import AdminMemberM from './admin/admin_MemberM';
import AdminProgramM from './admin/admin_ProgramM';
import AdminTrainerM from './admin/admin_TrainerM';
import AdminHome from './admin/admin_Home';
import AddTrainingProgram from './admin/AddTrainingProgram';
import EditTrainingProgram from './admin/EditTrainingProgram';


function App() {
  // กำหนดบทบาทที่ต้องการทดสอบ ใช้ '' ถ้าต้องการดูหน้าสาธารณะ(public)
  const userRole = 'admin'; // ใช้ค่า 'member' หรือ 'trainer' เพื่อทดสอบบทบาทอื่น

  return (
    <Router>
      <div>
        <Navbar userRole={userRole} />
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program userRole={userRole} />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact-us" element={<ContactUs userRole={userRole} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/register3" element={<Register3 />} />
          <Route path="/register4" element={<Register4 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/*************/}
          <Route path="/trainer-home" element={<TrainerHome />} /> {/* กำหนด route สำหรับ TrainerHome */}
          <Route path="/trainer-workspace" element={<TrainerWorkspace />} />
          <Route path="/trainer-schedule" element={<TrainerSchedule />} />
          <Route path="/trainer-availability" element={<TrainerAvailability />} />
          <Route path="/trainer-program" element={<TrainerProgram />} />
          <Route path="/trainer-contact-us" element={<TrainerContactus />} />
          <Route path="/trainer-login" element={<TrainerLogin />} />
          {/* Optional: Add a route for 404 */}
          <Route path="*" element={<Home />} /> {/* Redirect to Home or a 404 component */}
        </Routes>
        
          
          {/* Admin Pages */}
          <Route path="/admin-workspace" element={<AdminWorkspace />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/admin-confirm-payment" element={<AdminConfirmPayment />} />
          <Route path="/admin-member-management" element={<AdminMemberM />} />
          <Route path="/admin-training-program-management" element={<AdminProgramM />} />
          <Route path="/admin-trainer-management" element={<AdminTrainerM />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-training-edit" element={<EditTrainingProgram />} />
          <Route path="/admin-training-add" element={<AddTrainingProgram />} />

          {/* Optional: Add a route for 404 */}
          <Route path="*" element={<Home />} /> {/* Redirect to Home or a 404 component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
