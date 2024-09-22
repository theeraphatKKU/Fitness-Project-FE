import React from 'react';
import { Link } from 'react-router-dom'; // For navigation between pages
import './ContactUs.css';  // Ensure this import exists

const ContactUs = ({ userRole }) => {

    // Determine the home route based on the user role
    const homeRoute = userRole === 'admin' 
    ? '/admin-home' 
    : userRole === 'member'
    ? '/member-home'
    : userRole === 'trainer'
    ? '/trainer-home'
    : '/';

  return (
    <div className="contactUs-container">
      <div className='wrap-breadcrumb'>
        <div className="contact-breadcrumb">
          <Link to={homeRoute} className="breadcrumb-link">Home</Link>
          <span> </span>
          <span>&gt;</span>
          <span className="breadcrumb-current"> Contact us</span>
        </div>
        <h1 className="contact-title">Contact</h1>
        <p className="contact-subtitle">ช่องทางการติดต่อ</p>
      </div>
      <section className="contact-info">
        <div className="contact-details">
          <div className="contact-label">ที่ตั้ง:</div>
          <div className="contact-text">
            เลขที่ 123 หมู่ 12 หมู่บ้าน - ซอย 121 ถนน มข-บ้านวัดป่าโนนม่วง Mueang Khon Kaen District, Khon Kaen 40000
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-label">เวลาเปิดร้าน:</div>
          <div className="contact-text">จันทร์ - อาทิตย์ 07.00 น. - 22:00 น.</div>
        </div>
        <div className="contact-details">
          <div className="contact-label">ช่องทางการติดต่อ:</div>
          <div className="contact-icons">
            <div className="contact-item">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/smile-preference/phone-287.png" alt="Phone icon" className="phone-image" />
              <i className="fa fa-phone"></i> 0812345678
            </div>
            <div className="contact-item">
              <img src="https://icons.veryicon.com/png/o/internet--web/common-social-site-icons-for-the-web/line-6.png" alt="Line icon" className="Line-image" />
              <i className="fa fa-line"></i> @CS_Fitness
            </div>

            <div className="contact-item">
              <img src="https://icons.veryicon.com/png/o/internet--web/common-social-site-icons-for-the-web/facebook-130.png" alt="Facebook icon" className="fb-image" />
              <i className="fa fa-facebook"></i> CS Fitness
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
