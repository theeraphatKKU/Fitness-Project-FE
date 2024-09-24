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
          <Link to="/admin-home" className="breadcrumb-link">Home</Link>
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

        <div className="admin-card" onClick={() => handleNavigation('/admin-training-section-management')}>
          <img src="data:image/png;base64,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" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Training Session Management</h2>
            <p>จัดการเซสชันการฝึกสอน</p>
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