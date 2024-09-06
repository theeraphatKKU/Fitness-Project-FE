import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // นำเข้า Link
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // ตรวจสอบความถูกต้องของข้อมูล
    if (email === 'user@example.com' && password === 'password123') {
      navigate('/'); // เปลี่ยนเส้นทางไปหน้า Home เมื่อเข้าสู่ระบบสำเร็จ
    } else {
      alert('Email หรือ Password ไม่ถูกต้อง');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="login-links">
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
        <p><Link to="/forgot-password">Forgot your password?</Link></p>
      </div>
    </div>
  );
};

export default Login;
