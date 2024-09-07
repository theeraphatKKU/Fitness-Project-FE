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
            <h1>การลงทะเบียนเสร็จสมบูรณ์</h1>
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

            <div className="register-content">
                <div className="left-pane">
                    <img src="https://imgr1.menshealth.de/Mit-der-richtigen-Fitnessroutine-faellt-das-Abnehmen-ganz-leicht-jsonLd1x1-9ec423ea-180471.jpg" alt="Registration Complete" className="complete-image" />
                </div>
                <div className="right-pane">
                    <h1>ยินดีด้วย! คุณได้ลงทะเบียนเรียบร้อยแล้ว</h1>
                    <div className="complete-status">
                        <p>คุณสามารถเข้าสู่ระบบหรือกลับไปหน้าแรกได้ทันทีเพื่อเริ่มต้นการใช้งานระบบ</p>
                    </div>
                    <div className="button-group">
                        <button onClick={goToLogin} className="login-btn">เข้าสู่ระบบ</button>
                        <button onClick={goToHome} className="home-btn">ไปหน้าแรก</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register4;
