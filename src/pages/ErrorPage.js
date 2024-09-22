import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">ขออภัย ไม่พบหน้าที่คุณต้องการ</p>
        <a href="/" className="error-button">
          กลับสู่หน้าหลัก
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
