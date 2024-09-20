import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register4.css';

const Register4 = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div className="register4-container">
            <div className="progress-container">
                <h1 className="title">สมัครสมาชิก</h1>
                <div className="progress-bar">
                    <span className="step">1</span>
                    <span className="step">2</span>
                    <span className="step">3</span>
                    <span className="step active">4</span>
                </div>
                <div className="progress-bar-name">
                    <span className="step">กรอกข้อมูล</span>
                    <span className="step">ยืนยันลงทะเบียน</span>
                    <span className="step">รอยืนยันการชำระเงิน</span>
                    <span className="step active">เสร็จสิ้น</span>
                </div>
            </div>
            <div className="main-content">
                <img 
                    src="https://basebangkok.com/app/uploads/2024/08/base-group-class-pic.jpg" 
                    alt="Fitness Group" 
                    className="background-image" 
                />
                <div className="overlay-box">
                    <h2>เสร็จสิ้น</h2>
                    <p>เข้าสู่ระบบเพื่อใช้งาน</p>
                    <button onClick={goToLogin} className="login-btn">เข้าสู่ระบบ</button>
                    <p className="go-home-link" onClick={goToHome}>ไปหน้าหลัก</p>
                </div>
            </div>
        </div>
    );
};

export default Register4;
