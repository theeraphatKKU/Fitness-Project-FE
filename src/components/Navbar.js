// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // ตรวจสอบการนำเข้า CSS ของ Navbar

const Navbar = ({ userRole }) => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="logo-linkhome">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2023/05/31/Gym-Logo-Fitness-Logo-Vector-Design-Graphics-70960661-1.jpg"
            alt="Logo"
            className="navbar-logo"
          />
          <div className="navbar-title">CS Fitness</div>
        </Link>
      </div>

      {/* หน้าพื้นฐาน ไม่เปลี่ยน*/}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/program" className="navbar-link">Program</Link>
        
        {/* ถ้าเข้าสู่ระบบจะเปลี่ยนไป */}
        {userRole ? (
          <>
            {userRole === 'admin' && (
              <>
                <Link to="/admin-workspace" className="navbar-link">Workspace</Link>
              </>
            )}
            {/* เพิ่มลิงก์สำหรับบทบาทอื่น ๆ */}
          </>
        ) : (
          <Link to="/membership" className="navbar-link">Membership</Link>
        )}

        {/* หน้า contact us ไม่เปลี่ยน */}
        <Link to="/contact-us" className="navbar-link">Contact us</Link>

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
        <Link to="/login" className="navbar-link">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png" // ลิงก์ไอคอนรูปคน
            alt="Login"
            className="navbar-icon"
          />
        </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;