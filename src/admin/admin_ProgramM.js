import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin_ProgramM.css';

const AdminProgramM = () => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการเปลี่ยนเส้นทาง

  // ฟังก์ชันสำหรับการนำทางไปยังหน้าต่างๆ
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-ProgramM">
      <h1>Training Program Management</h1>
    </div>
  );
};

export default AdminProgramM;
