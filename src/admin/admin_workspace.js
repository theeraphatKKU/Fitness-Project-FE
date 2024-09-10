import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin_workspace.css';

const AdminWorkspace = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-workspace-container">
      <div className="wrap-breadcrumb">
        <div className="admin-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span> </span>
          <span>&gt;</span>
          <span className="breadcrumb-current"> Workspace</span>
        </div>
        <h1 className="admin-title">Workspace : Admin</h1>
        <p className="admin-subtitle">สำหรับผู้ดูแล</p>
      </div>

      <div className="admin-sections">
        <div className="admin-card" onClick={() => handleNavigation('/admin-member-management')}>
          <img src="https://pic.onlinewebfonts.com/thumbnails/icons_303464.svg" alt="Member Management" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Member Management</h2>
            <p>จัดการข้อมูลสมาชิก</p>
          </div>
        </div>

        <div className="admin-card" onClick={() => handleNavigation('/admin-trainer-management')}>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/coach-instructor-icon.png" alt="Trainer Management" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Trainer Management</h2>
            <p>จัดการข้อมูลผู้ฝึกสอน</p>
          </div>
        </div>

        <div className="admin-card" onClick={() => handleNavigation('/admin-training-program-management')}>
          <img src="https://pic.onlinewebfonts.com/thumbnails/icons_268353.svg" alt="Training Program Management" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Training Program Management</h2>
            <p>จัดการโปรแกรมการฝึกสอน</p>
          </div>
        </div>

        <div className="admin-card" onClick={() => handleNavigation('/admin-confirm-payment')}>
          <img src="https://pic.onlinewebfonts.com/thumbnails/icons_456933.svg" alt="Confirm Payment" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Confirm Payment</h2>
            <p>ยืนยันการชำระเงิน</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWorkspace;