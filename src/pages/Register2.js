import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Register2.css';

const Register2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state || {}; // ตรวจสอบว่ามี state หรือไม่

    console.log(state);

    // ประกาศ formData และ setFormData
    const fullName = state.firstName + ' ' + state.lastName;
    const [formData] = useState({
        firstName: state.firstName || '',
        lastName: state.lastName || '',
        name: fullName || '',
        email: state.email || '',
        password: state.password || '',
        phoneNumber: state.phoneNumber || '',
        membershipType: state.membershipType || '',
        startDate: state.startDate || '',
        paymentMethod: state.paymentMethod || '',
        role: 'USER'
    });

    // Generate a random payment ID
    const generatePaymentID = () => {
        return Math.random().toString(36).substr(2, 5).toUpperCase();
    };

    // Determine the total amount based on membership type
    const getTotalAmount = () => {
        switch (formData.membershipType) {
            case 'premium':
                return '1550';
            case 'basic':
            default:
                return '950';
        }
    };

    // Determine the expire date on membership type and start date
    const getEXPdate = () => {
        const startDate = new Date(formData.startDate);
        let expirationDate;

        switch (formData.membershipType) {
            case 'premium':
                expirationDate = new Date(startDate);
                expirationDate.setMonth(expirationDate.getMonth() + 6); // Add 6 months
                break;
            case 'basic':
            default:
                expirationDate = new Date(startDate);
                expirationDate.setMonth(expirationDate.getMonth() + 3); // Add 3 months
                break;
        }

        return expirationDate.toISOString().split('T')[0]; // Return date in YYYY-MM-DD format
    };

    const handleConfirm = async (e) => {
        e.preventDefault();
        try {
            const inputData = {
                name: formData.name,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                password: formData.password,
                memberType: formData.membershipType,
                role: formData.role,
                expireDate: getEXPdate()
            };
            console.log('Data Form:', inputData);
            const response = await axios.post('http://localhost:8080/api/member', inputData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Registration successful', response.data);

            // Navigate to the next step or handle successful registration
            navigate('/register3', { state: formData });
        } catch (error) {
            console.error('Error:', error);
            // Handle error (show error message to the user, etc.)
        }
    };

    const handleCancel = () => {
        navigate('/register');
    };

    return (
        <div className="register2-container">
            <h1>สมัครสมาชิก</h1>
            <div className="progress-bar">
                <span className="step">1</span>
                <span className="step">2</span>
                <span className="step active">3</span>
                <span className="step">4</span>
                <span className="step">5</span>
            </div>
            <div className="progress-bar-name">
                <span className="step">กรอกข้อมูล</span>
                <span className="step">เลือกแผนการเป็นสมาชิก</span>
                <span className="step active">ยืนยันลงทะเบียน</span>
                <span className="step">รอยืนยันการชำระเงิน</span>
                <span className="step">เสร็จสิ้น</span>
            </div>

            <div className="register-content">
                <div className="left-pane">
                    <img
                        src="https://imgr1.menshealth.de/Mit-der-richtigen-Fitnessroutine-faellt-das-Abnehmen-ganz-leicht-jsonLd1x1-9ec423ea-180471.jpg"
                        alt="Payment Details"
                        className="payment-image"
                    />
                </div>
                <div className="right-pane">
                    <h1>ใบแจ้งชำระ</h1>
                    <div className="payment-details">
                        <div className="wrap-payment-details">
                            <p><strong>ID:</strong> {generatePaymentID()}</p>
                            <p><strong>ชื่อ:</strong> {formData.name}</p>
                            <p><strong>แพ็คเกจสมาชิก:</strong> {formData.membershipType === 'basic' ? 'แพ็คเกจสมาชิกธรรมดา' : 'แพ็คเกจสมาชิกพิเศษ'}</p>
                            <p><strong>วันที่เริ่ม:</strong> {formData.startDate}</p>
                            <p><strong>วิธีการชำระ:</strong> {formData.paymentMethod}</p>
                            <p><strong>ยอดรวม:</strong> {getTotalAmount()} บาท</p>
                        </div>
                        <div className="wrap-confirm-btn">
                            <button onClick={handleConfirm} className="confirm-btn">ยืนยันลงทะเบียน</button>
                        </div>
                        <div className="wrap-cancel-btn">
                            <a href="#!" onClick={handleCancel} className="cancel-link">ยกเลิก</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register2;
