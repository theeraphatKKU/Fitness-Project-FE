import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1 className="home-welcome">Welcome to CS Fitness</h1>
        <p>Join us and start your fitness journey today!</p>
      </header>

      {/* About Us Section */}
      <div className="about-us-container">
        <img 
          src="https://pngimg.com/uploads/fitness/fitness_PNG91.png" 
          alt="About Us" 
          className="about-us-image" 
        />
        <div className="about-us-contentt">
          <div className="about-us-title">About Us</div>
          ยินดีต้อนรับสู่ CS Fitness <br />
          จุดหมายปลายทางสำหรับสุขภาพ <br />
          และการออกกำลังกายที่สมบูรณ์แบบของคุณ <br />
          ที่ CS Fitness เราเชื่อมั่นในการสร้างชุมชน<br />
          ที่ทุกคนไม่ว่าจะมีระดับความฟิตเนสแค่ไหน <br />
          ก็สามารถมาร่วมกันเพื่อบรรลุเป้าหมายด้านสุขภาพของตนเองได้
        </div>
      </div>

      {/* Promotion Section */}
      <div className="promotion-sectionn">
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

      {/* Join Now Section */}
      <div className="join-now-container">
        <div className="join-now-content">
          <div className="join-now-text">
            <div className="join-now-title">Join now</div>
            <p>
              มาเป็นส่วนหนึ่งของ CS Fitness <br />
              และเริ่มต้นเส้นทางสู่การเป็นตัวคุณที่ดีกว่าวันนี้ <br />
              เป้าหมายของคุณอยู่ใกล้แค่เอื้อม <br />
              และเราพร้อมที่จะช่วยให้คุณบรรลุมัน
            </p>
            <div className="join-now-actions">
              <Link to="/register" className="register-button">ลงทะเบียน</Link>
              <div className="join-now-links">
                <p className="signup">สมัครสมาชิกแล้ว?{' '}
                <Link to="/login" className="login">เข้าสู่ระบบ</Link>
                </p>
             
              </div>
            </div>
          </div>
          <img
            src="https://pngimg.com/uploads/fitness/fitness_PNG4.png" 
            alt="Join Now Illustration" 
            className="join-now-image" 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
