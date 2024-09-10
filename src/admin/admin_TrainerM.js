import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin_TrainerM.css';

const AdminTrainerM = () => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการเปลี่ยนเส้นทาง

  // ฟังก์ชันสำหรับการนำทางไปยังหน้าต่างๆ
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-TrainerM">
      <h1>Trainer Management</h1>
    </div>
  );
};

export default AdminTrainerM;
