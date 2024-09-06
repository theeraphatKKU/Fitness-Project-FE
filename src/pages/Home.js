import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Overlay */}
      <div className="overlay" />

      {/* Navigation Bar */}
      <div className="navbar">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2023/05/31/Gym-Logo-Fitness-Logo-Vector-Design-Graphics-70960661-1.jpg" alt="Logo" className="navbar-logo" /> 
        <div className="navbar-title">CS Fitness</div>
        <div className="navbar-links">
          <div className="navbar-link">Home</div>
          <div className="navbar-link">Program</div>
          <div className="navbar-link">Membership</div>
          <div className="navbar-link">Contact us</div>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            {/* <div className="search-icon">
              <div className="circle" />
              <div className="dot" />
            </div> */}
          </div>
          {/* <div className="profile-icon">
            <div className="profile-circle" />
            <div className="profile-dot" />
          </div> */}
          {/* <div className="notification-icon">
            <div className="notification-bell" />
            <div className="notification-dot" />
          </div> */}
        </div>
      </div>

      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to CS Fitness</h1>
        <p>Join us and start your fitness journey today!</p>
      </header>

      {/* About Us Section */}
      <div className="about-us-title">About Us</div>
      <div className="about-us-content">
        ยินดีต้อนรับสู่ CS Fitness <br />
        จุดหมายปลายทางสำหรับสุขภาพและการออกกำลังกายที่สมบูรณ์แบบของคุณ ที่ CS Fitness <br />
        เราเชื่อมั่นในการสร้างชุมชนที่ทุกคนไม่ว่าจะมีระดับความฟิตเนสแค่ไหนก็สามารถมาร่วมกันเพื่อบรรลุเป้าหมายด้านสุขภาพของตนเองได้
      </div>

      {/* Promotion Section */}
      <div className="promotion-banner">Program!!</div>
      <div className="promotion-overlay" />

      {/* Images */}
      <div className="container"></div>
      <img src="https://pngimg.com/uploads/fitness/fitness_PNG91.png" alt="Decoration" className="decoration-image" />
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
          <div>
            <button className="register-button">ลงทะเบียน</button>
            <div className="signup">สมัครสมาชิกแล้ว?</div>
            <div className="login">เข้าสู่ระบบ</div>
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

export default Home;
