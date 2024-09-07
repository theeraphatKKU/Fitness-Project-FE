// src/pages/public/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (

    <div className="contactUs-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">ช่องทางการติดต่อ</p>
      <section className="contact-info">
        <div className="contact-details">
          <div className="contact-label">ที่ตั้ง:</div>
          <div className="contact-text">
            เลขที่ 892 หมู่ 12 หมู่บ้าน - ซอย - ถนน มข-บ้านวัดป่าโนนม่วง Mueang Khon Kaen District, Khon Kaen 40000
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-label">เวลาเปิดร้าน:</div>
          <div className="contact-text">จันทร์ - อาทิตย์ 10:00 น. - 20:00 น.</div>
        </div>
        <div className="contact-details">
          <div className="contact-label">ช่องทางการติดต่อ:</div>
        </div>
      </section>
    </div>

  );
};

export default ContactUs;
