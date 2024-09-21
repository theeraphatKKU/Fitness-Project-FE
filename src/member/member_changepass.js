import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './member_changepass.css';

const ChangePassword = () => {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // ใช้ useNavigate
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // ตรวจสอบว่ารหัสผ่านใหม่และยืนยันรหัสผ่านใหม่ตรงกัน
      if (newPassword !== confirmPassword) {
        alert('รหัสผ่านใหม่และยืนยันรหัสผ่านใหม่ต้องตรงกัน!');
        return; // ไม่ส่งฟอร์ม
      }
  
      // คุณสามารถส่งข้อมูลไปยังเซิร์ฟเวอร์ที่นี่
      console.log('Email:', email);
      console.log('Old Password:', oldPassword);
      console.log('New Password:', newPassword);
      console.log('Confirm Password:', confirmPassword);
  
      // ถ้าบันทึกข้อมูลสำเร็จ ให้เปลี่ยนเส้นทางไปที่หน้าโปรไฟล์
      navigate('/member-profile'); // เปลี่ยนเส้นทางไปที่หน้าโปรไฟล์
    };
  
    return (
      <main className="change-password-container">
        <div className="change-password-card">
          <h2>เปลี่ยนรหัสผ่าน</h2>
          <form className="change-password-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">อีเมล:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="old-password">รหัสผ่านเก่า:</label>
              <input
                type="password"
                id="old-password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-password">รหัสผ่านใหม่:</label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">ยืนยันรหัสผ่านใหม่:</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">เปลี่ยนรหัสผ่าน</button>
          </form>
        </div>
      </main>
    );
  };
  
  export default ChangePassword;
