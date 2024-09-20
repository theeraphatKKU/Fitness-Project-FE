import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './Register1.css';



const Register1 = () => {
    const location = useLocation();
    const state = location.state || {}; // ตรวจสอบว่ามี state หรือไม่
  
     // ประกาศ formData และ setFormData
  const [formData, setFormData] = useState({
    firstName: state.firstName || '',
    lastName: state.lastName || '',
    membershipType: 'basic', // ค่าเริ่มต้น
    startDate: state.startDate || '',
    paymentMethod: 'cash' // ค่าเริ่มต้น
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    // if (!formData.firstName) newErrors.firstName = 'กรุณากรอกชื่อ';
    // if (!formData.lastName) newErrors.lastName = 'กรุณากรอกนามสกุล';
    // if (!formData.phone) newErrors.phone = 'กรุณากรอกหมายเลขโทรศัพท์';
    // if (!formData.email) newErrors.email = 'กรุณากรอกอีเมล';
    // if (!formData.password) newErrors.password = 'กรุณากรอกรหัสผ่าน';
    // if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน';
    if (!formData.startDate) newErrors.startDate = 'กรุณากรอกวันที่เริ่มต้น';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/register2', { state: formData });
    }
  };

  return (
    <div className="register-container">
      <h1>สมัครสมาชิก</h1>
      <div className="progress-bar">
        <span className="step">1</span>
        <span className="step active">2</span>
        <span className="step">3</span>
        <span className="step">4</span>
        <span className="step">5</span>
      </div>
      <div className="progress-bar-name">
        <span className="step">กรอกข้อมูล</span>
        <span className="step active">เลือกแผนการเป็นสมาชิก</span>
        <span className="step">ยืนยันลงทะเบียน</span>
        <span className="step">รอยืนยันการชำระเงิน</span>
        <span className="step">เสร็จสิ้น</span>
      </div>

      <form onSubmit={handleSubmit} className="register-form">
        {/* <div className="personal-info">
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
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
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
        </div> */}

        <div className="left-pane">
            <img src="https://www.villageattimarron.com/wp-content/uploads/2022/12/GettyImages-874700028.jpg" alt="Payment Details" className="payment-image" />
        </div>

        <div className="membership-info">
          <h2>การเป็นสมาชิก</h2>
          <div className="form-group">
            <label>เลือกแผนการเป็นสมาชิก:</label>
            <div className="membership-options">
              <label>
                <input
                  type="radio"
                  name="membershipType"
                  value="basic"
                  checked={formData.membershipType === 'basic'}
                  onChange={handleInputChange}
                />
                แพ็คเกจธรรมดา 950/3 เดือน
              </label>
              <label>
                <input
                  type="radio"
                  name="membershipType"
                  value="premium"
                  checked={formData.membershipType === 'premium'}
                  onChange={handleInputChange}
                />
                แพ็คเกจพิเศษ 1,555/6 เดือน !!!
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>วันที่เริ่มต้น: *</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
            {errors.startDate && <p className="error-text">{errors.startDate}</p>}
          </div>
          <div className="form-group">
            <label>เลือกวิธีชำระ:</label>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleInputChange}
                />
                เงินสด
              </label>
              {/* <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={handleInputChange}
                />
                บัตรเครดิต (ขณะนี้ยังไม่รองรับ)
              </label> */}
            </div>
          </div>
          <button type="submit" className="submit-btn">ต่อไป</button>
          <p className="signin-link">
            <a href="/register">ย้อนกลับ</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register1;
