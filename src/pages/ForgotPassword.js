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
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="links">
        <p>Remember your password? <a href="/login">Login</a></p>
        <p>Don't have an account? <a href="/register">Sign up</a></p>
      </div>
    </div>
  );
};

export default ForgotPassword;
