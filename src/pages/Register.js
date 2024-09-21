import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
<<<<<<< Updated upstream
    // membershipType: 'basic',
    // paymentMethod: 'cash',
    // startDate: ''
=======
>>>>>>> Stashed changes
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'กรุณากรอกชื่อ';
    if (!formData.lastName) newErrors.lastName = 'กรุณากรอกนามสกุล';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'กรุณากรอกหมายเลขโทรศัพท์';
    if (!formData.email) newErrors.email = 'กรุณากรอกอีเมล';
    if (!formData.password) newErrors.password = 'กรุณากรอกรหัสผ่าน';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน';
<<<<<<< Updated upstream
    // if (!formData.startDate) newErrors.startDate = 'กรุณากรอกวันที่เริ่มต้น';
=======
>>>>>>> Stashed changes

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const combinedFormData = {
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`,
        };
<<<<<<< Updated upstream
        
        // Navigate to the next step or handle successful registration
        navigate('/register1', { state: combinedFormData });
=======
        const response = await axios.post('http://localhost:8080/api/auth/register', combinedFormData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        console.log('Registration successful', response.data);
        
        // Navigate to the next step or handle successful registration
        navigate('/register2', { state: combinedFormData });
>>>>>>> Stashed changes
  
      } catch (error) {
        console.error('Error:', error);
        // Handle error (show error message to the user, etc.)
      }
    }
  };

  return (
    <div className="register-container">
      <h1>สมัครสมาชิก</h1>
      <div className="progress-bar">
        <span className={`step ${errors.firstName ? 'error' : 'active'}`}>1</span>
        <span className={`step ${errors.startDate ? 'error' : ''}`}>2</span>
        <span className="step">3</span>
        <span className="step">4</span>
        <span className="step">5</span>
      </div>
      <div className="progress-bar-name">
        <span className={`step ${errors.firstName ? 'error' : 'active'}`}>กรอกข้อมูล</span>
        <span className={`step ${errors.startDate ? 'error' : ''}`}>เลือกแผนการเป็นสมาชิก</span>
        <span className="step">ยืนยันลงทะเบียน</span>
        <span className="step">รอยืนยันการชำระเงิน</span>
        <span className="step">เสร็จสิ้น</span>
      </div>

      <form onSubmit={handleSubmit} className="register-form">

        <div className="left-pane">
          <img src="https://fayazneurosurgery.com/wp-content/uploads/2021/07/lasting-results.jpg" alt="Payment Details" className="register-image" />
        </div>

        <div className="personal-info">
          <h2>ข้อมูลส่วนตัว</h2>
          <div className="form-group">
            <label>ชื่อ: *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label>นามสกุล: *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label>หมายเลขโทรศัพท์: *</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>}
          </div>
          <div className="form-group">
            <label>อีเมล: *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>รหัสผ่าน: *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label>ยืนยันรหัสผ่าน: *</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
          </div>
<<<<<<< Updated upstream
=======
        </div>

        <div className="membership-info">
>>>>>>> Stashed changes
          <button type="submit" className="submit-btn">ต่อไป</button>
          <p className="signin-link">
            สมัครสมาชิกแล้วใช่ไหม? <a href="/login">เข้าสู่ระบบ</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
