import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = ({ getRole }) => {  // Destructure ok from props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email,
        password
      };
      const response = await axios.post('http://localhost:8080/api/auth/login', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // localStorage.setItem('token', response.data.accessToken);
      // console.log('Stored token:', localStorage.getItem('token'));

      // Call the ok function if login is successful
      if (getRole) getRole(response.data);

      navigate('/', { state: response.data });

    } catch (error) {
      console.error('Error:', error);
      // Handle error (show error message to the user, etc.)
    }
  };

  return (
    <div className="flexx_v2">
      <div className='login-container'>
        <h2>ลงชื่อเข้าใช้</h2>
        <form onSubmit={handleLogin}> {/* Call handleLogin here */}
          <div className="input-group">
            <label htmlFor="email">อีเมล</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="กรุณาใส่อีเมล"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรุณาใส่รหัสผ่าน"
              required
            />
          </div>
          <button type="submit" className="login-button">เข้าสู่ระบบ</button>
        </form>
        <div className="login-links">
          <p>หาคุณยังไม่สมัครสมาชิก <Link to="/register">สมัครสมาชิก</Link></p>
          <p><Link to="/forgot-password">ลืมรหัสผ่าน?</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
