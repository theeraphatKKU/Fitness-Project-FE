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
            const isConfirmed = Math.random() > 0.5; // Randomly simulate confirmation for testing
            setPaymentConfirmed(isConfirmed);
            setLoading(false);
            if (isConfirmed) {
                navigate('/register4');
            }
        }, 2000); // Simulate a 2-second wait for checking
    };

    return (
        <div className="register3-container">
            <h1>รอการยืนยันการชำระเงิน</h1>
            <div className="progress-bar">
                <span className="step">1</span>
                <span className="step">2</span>
                <span className="step active">3</span>
                <span className="step">4</span>
            </div>
            <div className="progress-bar-name">
                <span className="step">กรอกข้อมูล</span>
                <span className="step">ยืนยันลงทะเบียน</span>
                <span className="step active">รอยืนยันการชำระเงิน</span>
                <span className="step">เสร็จสิ้น</span>
            </div>

            <div className="register-content">
                <div className="left-pane">
                    <img src="https://imgr1.menshealth.de/Mit-der-richtigen-Fitnessroutine-faellt-das-Abnehmen-ganz-leicht-jsonLd1x1-9ec423ea-180471.jpg" alt="Waiting for Payment Confirmation" className="payment-image" />
                </div>
                <div className="right-pane">
                    <h1>กำลังตรวจสอบการชำระเงิน</h1>
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
