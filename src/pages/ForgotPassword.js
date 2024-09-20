import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ใส่ลอจิกสำหรับรีเซ็ตพาสเวิร์ด เช่น การส่งคำขอไปยังเซิร์ฟเวอร์
    alert('คำขอรีเซ็ตพาสเวิร์ดได้ถูกส่งไปยังอีเมลของคุณแล้ว');
    navigate('/login'); // เปลี่ยนเส้นทางไปหน้า Login หลังจากส่งคำขอ
  };

  return (
    <div className="forgot-password-container">
      <h2>ลืมรหัสผ่าน</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">อีเมลของคุณ</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="กรุณาใส่อีเมลของคุณ"
            required
          />
        </div>
        <button type="submit" className="submit-button">ตั้งรหัสผ่านใหม่</button>
      </form>
      <div className="links">
        <p>หากจำรหัสผ่านของคุณได้ <a href="/login">เข้าสู่ระบบ</a></p>
        <p>หากไม่มีบัญชี <a href="/register">สมัครสมาชิก</a></p>
      </div>
    </div>
  );
};

export default ForgotPassword;
