import React from 'react';
import './TrainerContactus.css';
import TrainerNavbar from '../trainer/TrainerNavbar';
import { Link } from 'react-router-dom';

const TrainerContactus = () => {
  return (
    <div className="contactus"><TrainerNavbar />
      {/* Breadcrumb */}
      <div className="T-breadcrumb">
        <div className="TrainerContactus-breadcrumb">
          <Link to="/trainer-home" className="breadcrumb-link">Home</Link>
          <span> &gt; </span>
          <Link to="/trainer-contact-us" className="breadcrumb-link">ContactUs</Link>
        </div>
      </div>
      <div className="contactUs-container">
        <h1 className="contact-title">Contact</h1>
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
    </div>
  );
};
export default TrainerContactus;