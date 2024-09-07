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


        {/* ไอคอนรูปคนสำหรับไปหน้า Login */}
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

