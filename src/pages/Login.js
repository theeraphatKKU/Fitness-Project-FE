import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // นำเข้า Link
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
      try {  
        const username = {
          email : email,
          password : password
        };
        const response = await axios.post('http://localhost:8080/api/auth/login', username, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        // console.log('Login successful', response.data.accessToken);
        localStorage.setItem('token', response.data.accessToken);
        console.log('Stored token:', localStorage.getItem('token'));
        
        // const accessToken = response.data.accessToken;
        // console.log('Access Token:', accessToken);
        // Navigate to the next step or handle successful registration
        navigate('/', { state: response.data.accessToken
         });

        
  
      } catch (error) {
        console.error('Error:', error);
        // Handle error (show error message to the user, etc.)
      }
    
};

  return (
    <div className="login-container">
      <h2>ลงชื่อเข้าใช้</h2>
      <form onSubmit={handleLogin}>
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
  );
};

export default Login;
