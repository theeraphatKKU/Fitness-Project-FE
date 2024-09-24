import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin_ConfirmPayment.css';
import axios from 'axios';

const AdminConfirmPayment = () => {
  const navigate = useNavigate(); 

  // State to hold payment data from the backend
  const [payments, setPayments] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/member/onlyuser', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
    
    document.body.classList.add('memberM-page');
    return () => {
      document.body.classList.remove('memberM-page');
    };
  }, []);

  const getTotalAmount = (type) => {
    switch (type) {
      case 'premium':
        return '1550';
      case 'basic':
      default:
        return '950';
    }
  };

  // Function to handle approving payment
  const handleApprove = async (id) => {
    // ค้นหาสมาชิกที่มี id ตรงกันใน payments
    const approveM = payments.find(member => member.id === id);
  
    if (!approveM) {
      console.error('ไม่พบสมาชิกที่มี ID นี้');
      return;
    }
  
    // กำหนด role ให้เป็น "MEMBER"
    approveM.role = 'MEMBER';
  
    // Remove password from approveM object before sending it to the API
    const { password, ...memberWithoutPassword } = approveM;
  
    try {
      // เรียก back-end API เพื่ออัปเดตสมาชิก
      const response = await fetch(`http://localhost:8080/api/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberWithoutPassword), // Send without password
      });
  
      if (response.ok) {
        // เมื่อ back-end ตอบกลับสำเร็จ ลบรายการนั้นออกจาก state
        setPayments(prevPayments => prevPayments.filter(member => member.id !== id));
        alert('อนุมัติสำเร็จ');
      } else {
        alert('การอนุมัติล้มเหลว');
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:', error);
    }
};


  // Handle the back button to navigate to the workspace page
  const handleBack = () => {
    navigate('/admin-workspace');
  };

  return (
    <div className="admin-confirm-payment-container">
      {/* Breadcrumb */}
      <div className="wrap-breadcrumb">
        <div className="confirm-payment-breadcrumb">
          <Link to="/admin-home" className="breadcrumb-link-programM">Home</Link>
          <span> &gt; </span>
          <Link to="/admin-workspace" className="breadcrumb-link-programM">Workspace</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current-programM">Confirm Payment</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="confirm-payment-title">Confirm Payment</h1>
      <p className="confirm-payment-subtitle">ยืนยันการชำระเงิน</p>

      {/* Payment Table */}
      <table className="payment-table">
        <thead>
          <tr>
            <th>ชื่อ</th>
            <th>แพ็คเกจ</th>
            <th>ยอดรวม</th>
            <th>วิธีการชำระ</th>
            <th>อนุมัติ</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className={payment.approved ? 'approved-row' : ''}>
              <td>{payment.name}</td>
              <td>{payment.memberType}</td>
              <td>{getTotalAmount(payment.memberType)}</td>
              <td>{"เงินสด"}</td>
              <td>
                {payment.approved ? (
                  <span className="approved-status">อนุมัติแล้ว</span>
                ) : (
                  <button
                    className="approve-button"
                    onClick={() => handleApprove(payment.id)}
                  >
                    ยืนยัน
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Back button */}
      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          กลับ
        </button>
      </div>
    </div>
  );
};

export default AdminConfirmPayment;
