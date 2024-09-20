import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
<<<<<<< HEAD


// Import all pages
// For public
=======
>>>>>>> parent of 1b78524 (Merge branch 'Napasorn-branch' into FEnaja)
import Home from './pages/Home';
import Program from './pages/Program';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login'; 
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
<<<<<<< HEAD
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import Register4 from './pages/Register4';

import TrainerHome from './trainer/TrainerHome';
import TrainerWorkspace from './trainer/TrainerWorkspace';
import TrainerAvailability from './trainer/TrainerAvailability';
import TrainerSchedule from './trainer/TrainerSchedule';
import TrainerProgram from './trainer/TrainerProgram';
import TrainerContactus from './trainer/TrainerContactus';
import TrainerLogin from './trainer/TrainerLogin';

=======
>>>>>>> parent of 1b78524 (Merge branch 'Napasorn-branch' into FEnaja)

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
<<<<<<< HEAD
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
        
=======
        </Routes>
>>>>>>> parent of 1b78524 (Merge branch 'Napasorn-branch' into FEnaja)
      </div>
    </Router>
  );
}

export default App;
