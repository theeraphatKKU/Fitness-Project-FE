import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2023/05/31/Gym-Logo-Fitness-Logo-Vector-Design-Graphics-70960661-1.jpg"
            alt="CS Fitness Logo"
            className="footer-logo-img"
          />
          <p>มาเป็นส่วนหนึ่งของเราเพื่อสร้างเส้นทางการฟิตเนสที่แข็งแรงและสนุกสนาน</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/program">Programs</a></li>
            <li><a href="/membership">Membership</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fa fa-phone"></i> 0812345678</p>
          <p><i className="fa fa-envelope"></i> support@csfitness.com</p>
        </div>

        <div className="footer-section">
            <h3>Follow Us</h3>
                <div className="social-icons">
                    {/* ลิงก์ไปยัง Line */}
                    <a href="https://line.me" target="_blank" rel="noopener noreferrer">
                    <img src="https://icons.veryicon.com/png/o/internet--web/common-social-site-icons-for-the-web/line-6.png" alt="Line icon" />
                    </a>
                    {/* ลิงก์ไปยัง Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://icons.veryicon.com/png/o/internet--web/common-social-site-icons-for-the-web/facebook-130.png" alt="Facebook icon" />
                    </a>
                </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 CS Fitness. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
