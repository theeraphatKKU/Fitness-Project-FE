import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin_ConfirmPayment.css';

const AdminConfirmPayment = () => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการเปลี่ยนเส้นทาง

  // ฟังก์ชันสำหรับการนำทางไปยังหน้าต่างๆ
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-ConfirmPayment">
      <h1>Confirm Payment</h1>
    </div>
  );
};

export default AdminConfirmPayment;
