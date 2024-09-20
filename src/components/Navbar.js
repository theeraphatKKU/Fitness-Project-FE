import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // ตรวจสอบการนำเข้า CSS ของ Navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2023/05/31/Gym-Logo-Fitness-Logo-Vector-Design-Graphics-70960661-1.jpg"
        alt="Logo"
        className="navbar-logo"
      />
      <div className="navbar-title">CS Fitness</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/program" className="navbar-link">Program</Link>
        <Link to="/membership" className="navbar-link">Membership</Link>
        <Link to="/contact-us" className="navbar-link">Contact us</Link>

<<<<<<< HEAD

        {/* ไอคอนรูปคนสำหรับไปหน้า Login */}
        {/* ไอคอนรูปคนสำหรับ public ไปหน้าlogin สำหรับroleไปหน้าprofile*/}
        {userRole ? (
          <>
            {userRole === 'admin' && (
              <Link to="/admin-profile" className="navbar-link">
              <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png" // ลิงก์ไอคอนรูปคน
              alt="Login"
              className="navbar-icon"
              />
            </Link>
            )}
            {/* เพิ่มลิงก์สำหรับบทบาทอื่น ๆ */}
          </>
        ) : (
=======
        {/* ไอคอนรูปคนสำหรับไปหน้า Login */}
>>>>>>> parent of 1b78524 (Merge branch 'Napasorn-branch' into FEnaja)
        <Link to="/login" className="navbar-link">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png" // ลิงก์ไอคอนรูปคน
            alt="Login"
            className="navbar-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

