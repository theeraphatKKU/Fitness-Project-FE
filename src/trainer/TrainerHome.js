// src/pages/public/Home.js
import React from 'react';
import TrainerNavbar from '../trainer/TrainerNavbar';
import './TrainerHome.css';
import { Link } from 'react-router-dom';

function TrainerHome() {
  return (
    <div>
      <TrainerNavbar />
        <header className="home-header">
          <h1>Welcome to CS Fitness</h1>
          <p>Join us and start your fitness journey today!</p>
        </header>

        {/* About Us Section */}
        <div className="about-us-container">
          <img
            src="https://pngimg.com/uploads/fitness/fitness_PNG91.png"
            alt="About Us"
            className="about-us-image"
          />
          <div className="about-us-content">
            <div className="about-us-title">About Us</div>
            ยินดีต้อนรับสู่ CS Fitness <br />
            จุดหมายปลายทางสำหรับสุขภาพและการออกกำลังกายที่สมบูรณ์แบบของคุณ ที่ CS Fitness <br />
            เราเชื่อมั่นในการสร้างชุมชนที่ทุกคนไม่ว่าจะมีระดับความฟิตเนสแค่ไหนก็สามารถมาร่วมกันเพื่อบรรลุเป้าหมายด้านสุขภาพของตนเองได้
          </div>
        </div>

        {/* Promotion Section */}
        <div className="promotion-banner">Program!!</div>
        <div className="promotion-overlay" />

        {/* Images */}
        {/* <img src="https://pngimg.com/uploads/fitness/fitness_PNG91.png" alt="Decoration" className="decoration-image" /> */}
        <img src="https://via.placeholder.com/380x377" alt="Fitness" className="fitness-image-1" />
        <img src="https://via.placeholder.com/355x377" alt="Fitness" className="fitness-image-2" />
        <img src="https://via.placeholder.com/382x377" alt="Fitness" className="fitness-image-3" />
        <img src="https://www.rntfitness.co.uk/img/hp-hero/hp-hero-img-x2.png" alt="Extra" className="extra-image" />

        {/* Join Now Section */}
        <div className="join-now-container">
          <div className="join-now-title">Join now</div>
          <div className="join-now-content">
            มาเป็นส่วนหนึ่งของ CS Fitness และเริ่มต้นเส้นทางสู่การเป็นตัวคุณที่ดีกว่าวันนี้ เป้าหมายของคุณอยู่ใกล้แค่เอื้อม และเราพร้อมที่จะช่วยให้คุณบรรลุมัน
          </div>
          <div className="join-now-actions">
            <Link to="/register" className="register-button">ลงทะเบียน</Link>
            <div className="join-now-links">
              <p className="signup">สมัครสมาชิกแล้ว?</p>
              <Link to="/login" className="login">เข้าสู่ระบบ</Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            {/* คุณสามารถเพิ่มเนื้อหาเพิ่มเติมใน footer ได้ที่นี่ */}
          </div>
        </div>
      </div>
    
  );
}

export default TrainerHome;