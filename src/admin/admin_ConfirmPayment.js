import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin_ConfirmPayment.css';
import axios from 'axios';

const AdminConfirmPayment = () => {
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('http://localhost:8080/api/member/onlyuser', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setPayments(response.data)
    }
    fetch()
    document.body.classList.add('memberM-page');

    return () => {
      document.body.classList.remove('memberM-page');
    };
  }, []);

  const navigate = useNavigate(); 

  const getTotalAmount = (type) => {
    switch (type) {
        case 'premium':
            return '1550';
        case 'basic':
        default:
            return '950';
    }
};

  // State เก็บข้อมูลการชำระเงินของสมาชิกที่รอการอนุมัติ
  const [payments, setPayments] = useState([
    {
      id: 1,
      name: 'สมใจ ใจดี',
      package: 'แพ็คเกจสมาชิกธรรมดา',
      total: 950,
      paymentMethod: 'เงินสด',
      approved: false,
    },
    {
      id: 2,
      name: 'สุดหล่อ หล่อสุด',
      package: 'แพ็คเกจสมาชิกสุดคุ้ม',
      total: 1555,
      paymentMethod: 'เงินสด',
      approved: false,
    },
  ]);

    // ฟังก์ชันสำหรับการอนุมัติการชำระเงิน
    // const handleApprove = (id) => {
    //   setPayments((prevPayments) =>
    //     prevPayments.map((payment) =>
    //       payment.id === id ? { ...payment, approved: true } : payment
    //     )
    //   );
    // };

  // ฟังก์ชันสำหรับการอนุมัติการชำระเงิน และลบออกจาก state
  const handleApprove = async (id) => {
    // ค้นหาสมาชิกที่มี id ตรงกันใน payments
    const approveM = payments.find(member => member.id === id);
  
    if (!approveM) {
      console.error('ไม่พบสมาชิกที่มี ID นี้');
      return;
    }
  
    // กำหนด role ให้เป็น "MEMBER"
    approveM.role = 'MEMBER';
  
    try {
      // เรียก back-end API เพื่ออัปเดตสมาชิก
      const response = await fetch(`http://localhost:8080/api/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(approveM),
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
  

  // ฟังก์ชันสำหรับการกลับไปหน้า /admin-workspace
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

      {/* ปุ่มกลับ */}
      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          กลับ
        </button>
      </div>
    </div>
  );
};

export default AdminConfirmPayment;
