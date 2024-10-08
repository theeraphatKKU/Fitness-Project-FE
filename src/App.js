// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios';

// Import all pages
// For public
import Home from './pages/Home';
import Program from './pages/Program';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import Register4 from './pages/Register4';
import ErrorPage from './pages/ErrorPage';

// For trainer
import TrainerHome from './trainer/TrainerHome';
import TrainerWorkspace from './trainer/TrainerWorkspace';
import TrainerAvailability from './trainer/TrainerAvailability';
import TrainerSchedule from './trainer/TrainerSchedule';
import TrainerLogin from './trainer/TrainerLogin';

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
import TrainingSection from './admin/TrainingSection';
import AddTrainingSection from './admin/AddTrainingSection';
import AddTrainingSectionPrivate from './admin/AddTrainingSectionPrivate';

// For member
import MemberMembership from './member/member_membership';
import MemberSchedule from './member/member_schedule';
import MemberCancel from './member/member_cancel';
import MemberProfile from './member/member_profile';
import MemberBooking from './member/member_booking';
import MemberHome from './member/member_home';
import MemberEditProfile from './member/member_editprofile';

function App() {
  const [userRole, setUserRole] = useState('');
  const [user, setUser] = useState([]);

  const getRole = (data) => {
    setUserRole(data.role.toLowerCase());
    setUser(data);
    
    console.log("Login successful!", data.role.toLowerCase());
  };

  const getRedirectPath = () => {    
    switch (userRole) {
      case 'admin':
        return '/admin-home';
      case 'trainer':
        return '/trainer-home';
      case 'member':
        return '/membership'; // or whichever path is suitable for members
      default:
        return '/home';
    }
  };

  return (
    <Router>
      <div>
        <Navbar userRole={userRole} />
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Navigate to={getRedirectPath()} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/program" element={<Program userRole={userRole} />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact-us" element={<ContactUs userRole={userRole} />} />
          <Route path="/login" element={<Login getRole={getRole} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register1" element={<Register1 />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/register3" element={<Register3 />} />
          <Route path="/register4" element={<Register4 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Redirect based on role */}
          <Route path="/redirect" element={<Navigate to={getRedirectPath()} />} />

          {/* Trainer Pages */}
          <Route path="/trainer-home" element={<TrainerHome />} />
          <Route path="/trainer-workspace" element={<TrainerWorkspace />} />
          <Route path="/trainer-schedule" element={<TrainerSchedule user={user}/>} />
          <Route path="/trainer-availability" element={<TrainerAvailability user={user}/>} />
          <Route path="/trainer-login" element={<TrainerLogin />} />

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
          <Route path="/admin-training-section-management" element={<TrainingSection />} />
          <Route path="/admin-trainingS-add" element={<AddTrainingSection />} />
          <Route path="/admin-trainingS-addP" element={<AddTrainingSectionPrivate />} />

          {/* Member Pages */}
          <Route path="/member-booking" element={<MemberBooking user={user}/>} />
          <Route path="/member-cancel" element={<MemberCancel user={user}/>} />
          {/* <Route path="/member-changepass" element={<MemberChangePass />} /> */}
          {/* <Route path="/member-contactus" element={<MemberContactus />} /> */}
          <Route path="/member-editprofile" element={<MemberEditProfile user={user}/>} />
          <Route path="/member-membership" element={<MemberMembership />} />
          <Route path="/member-profile" element={<MemberProfile user={user}/>} />
          {/* <Route path="/member-program" element={<MemberProgram />} /> */}
          <Route path="/member-schedule" element={<MemberSchedule user={user} />} />
          <Route path="/member-home" element={<MemberHome />} />

          {/* Optional: Add a route for 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
