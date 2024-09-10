import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin_MemberM.css';

const AdminMemberM = () => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการเปลี่ยนเส้นทาง

  // ฟังก์ชันสำหรับการนำทางไปยังหน้าต่างๆ
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-MemberM">
      <h1>Member Management</h1>
    </div>
  );
};

export default AdminMemberM;
