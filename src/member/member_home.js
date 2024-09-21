import React from 'react';
import MemberNavbar from '../member/member_navbar';
import './member_home.css';


function MemberHome() {
  return (
    <div><MemberNavbar />
      <div className="home-container">
        {/* Header Section */}
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
        <div className="promotion-section">
          <h2>Promotion!!</h2>
          <div className="promotion-slides">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/personal-training-video-instagram-facebook-design-template-447e456e861c72dd67a9db52da7322ab_screen.jpg?ts=1715527907" alt="Promotion 1" />
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-gym-membership-pamphlet-design-template-0d551204689e6ead1a5126dd974dfa5c_screen.jpg?ts=1698307976" alt="Promotion 2" />
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-flyer-..-design-template-463d733392e9603d70772d6d8bcc80a8_screen.jpg?ts=1636980862" alt="Promotion 3" />
          </div>
          {/* <div className="slide-indicator">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default MemberHome;