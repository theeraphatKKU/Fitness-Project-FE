import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Register2.css';

const Register2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    // Extract data from the state
    const {
        firstName = '',
        lastName = '',
        membershipType = 'basic',
        startDate = '',
        paymentMethod = 'cash'
    } = state || {};

    const name = `${firstName} ${lastName}`;

    // Generate a random payment ID
    const generatePaymentID = () => {
        return Math.random().toString(36).substr(2, 5).toUpperCase();
    };

    // Determine the total amount based on membership type
    const getTotalAmount = () => {
        switch (membershipType) {
            case 'premium':
                return '1550';
            case 'basic':
            default:
                return '950';
        }
    };

    const handleConfirm = () => {
        navigate('/register3');
    };

    const handleCancel = () => {
        navigate('/register');
    };

    return (
        <div className="register2-container">
            <h1>สมัครสมาชิก</h1>
            <div className="progress-bar">
                <span className="step">1</span>
                <span className="step active">2</span>
                <span className="step">3</span>
                <span className="step">4</span>
            </div>
            <div className="progress-bar-name">
                <span className="step">กรอกข้อมูล</span>
                <span className="step active">ยืนยันลงทะเบียน</span>
                <span className="step">รอยืนยันการชำระเงิน</span>
                <span className="step">เสร็จสิ้น</span>
            </div>

            <div className="register-content">
                <div className="left-pane">
                    <img src="https://imgr1.menshealth.de/Mit-der-richtigen-Fitnessroutine-faellt-das-Abnehmen-ganz-leicht-jsonLd1x1-9ec423ea-180471.jpg" alt="Payment Details" className="payment-image" />
                </div>
                <div className="right-pane">
                    <h1>ใบแจ้งชำระ</h1>
                    <div className="payment-details">
                        <div className='wrap-payment-details'>
                            <p><strong>ID:</strong> {generatePaymentID()}</p>
                            <p><strong>ชื่อ:</strong> {name}</p>
                            <p><strong>แพ็คเกจสมาชิก:</strong> {membershipType === 'basic' ? 'แพ็คเกจสมาชิกธรรมดา' : 'แพ็คเกจสมาชิกพิเศษ'}</p>
                            <p><strong>วันที่เริ่ม:</strong> {startDate}</p>
                            <p><strong>วิธีการชำระ:</strong> {paymentMethod}</p>
                            <p><strong>ยอดรวม:</strong> {getTotalAmount()} บาท</p>
                        </div>
                        <div className='wrap-confirm-btn'>
                        <button onClick={handleConfirm} className="confirm-btn">ยืนยันลงทะเบียน</button>
                        </div>
                        <div className='wrap-cancel-btn'>
                            <a href="#!" onClick={handleCancel} className="cancel-link">ยกเลิก</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register2;
