import React from 'react';
import './TrainerHome.css';
import { Link } from 'react-router-dom';

function TrainerHome() {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1 className="home-welcome">Welcome to CS Fitness</h1>
        <p>Join us and start your fitness journey today!</p>
      </header>

      
      {/* Welcome Section */}
      <div className="join-now-container">
        <div className="join-now-content">
          <div className="join-now-text">
            <div className="join-now-title">Welcome Trainer</div>
            <p>
              ยินดีต้อนรับผู้ฝึกสอน! <br />
              ไปที่ Workspace เพื่อจัดการการทำงานของคุณ! <br />
            </p>
            <div className="join-now-actions">
              <Link to="/trainer-workspace" className="register-button">Workspace</Link>
              <div className="join-now-links">
                {/* <p className="signup">สมัครสมาชิกแล้ว?{' '}
                <Link to="/login" className="login">เข้าสู่ระบบ</Link>
                </p> */}
             
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

export default TrainerHome;
