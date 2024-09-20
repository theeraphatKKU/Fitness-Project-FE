import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register3.css';

const Register3 = () => {
    const navigate = useNavigate();
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const [loading, setLoading] = useState(false);

    // Simulate checking the admin's confirmation
    const checkPaymentConfirmation = () => {
        setLoading(true);
        setTimeout(() => {
            const isConfirmed = Math.random() > 0.5; // ตอนนี้เป็นแบบสุ่ม เดี๋ยวแก้ตรงนี้ให้เป็นผ่านหลังจากที่ admin ยืนยันการชำระเงิน
            setPaymentConfirmed(isConfirmed);
            setLoading(false);
            if (isConfirmed) {
                navigate('/register4');
            }
        }, 2000); // Simulate a 2-second wait for checking
    };

    return (
        <div className="register3-container">
            <h1>สมัครสมาชิก</h1>
            <div className="progress-bar">
                <span className="step">1</span>
                <span className="step">2</span>
                <span className="step">3</span>
                <span className="step active">4</span>
                <span className="step">5</span>
            </div>
            <div className="progress-bar-name">
                <span className="step">กรอกข้อมูล</span>
                <span className="step">เลือกแผนการเป็นสมาชิก</span>
                <span className="step">ยืนยันลงทะเบียน</span>
                <span className="step active">รอยืนยันการชำระเงิน</span>
                <span className="step">เสร็จสิ้น</span>
            </div>

            <div className="register-content">
                <div className="left-pane">
                    <img src="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc1OTc1NTk2NzYzMDA0/best-workout-apps-ftr.jpg" alt="Waiting for Payment Confirmation" className="payment-image" />
                </div>
                <div className="right-pane">
                    <h1>กำลังตรวจสอบการชำระเงิน</h1>
                    <div className="left-pane2">
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/basic-icon-of-cat-line/wait-10.png" alt="Waiting for Payment Confirmation2" className="payment-image2" />
                    </div>
                    <div className="payment-status">
                        {!loading ? (
                            <p>{paymentConfirmed ? 'การชำระเงินได้รับการยืนยันแล้ว!' : 'ยังไม่มีการยืนยัน กรุณารอ...'}</p>
                        ) : (
                            <p>กำลังตรวจสอบ...</p>
                        )}
                    </div>
                    <button onClick={checkPaymentConfirmation} className="check-payment-btn" disabled={loading}>
                        {loading ? 'กำลังตรวจสอบ...' : 'ตรวจสอบการยืนยันการชำระเงิน'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register3;
