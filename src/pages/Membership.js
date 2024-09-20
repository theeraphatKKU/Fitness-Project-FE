// src/pages/public/Membership.js
import React from 'react';

const Membership = () => {
  return (
    <div className="membership-container">
<<<<<<< HEAD
      <div className='wrap-breadcrumb'>
        <div className="membership-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span> </span>
          <span>&gt;</span>
          <span className="breadcrumb-current"> Membership</span>
        </div>
        <h1 className="membership-title">Membership</h1>
        <p className="membership-subtitle">สมาชิก</p>
      </div>
      {/* <section className="membership-info">
        <ul className="membership-list">
          <li>สมาชิกธรรมดา</li>
          <li>สมาชิกสุดคุ้ม</li>
          <li>Family Membership</li>
          <li>Student Membership</li>
        </ul>
      </section> */}
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
=======
      <h1>Membership Plans</h1>
      <p>Join CS Fitness today and choose the membership plan that best fits your lifestyle.</p>
      <ul>
        <li>Monthly Membership</li>
        <li>Annual Membership</li>
        <li>Family Membership</li>
        <li>Student Membership</li>
      </ul>
>>>>>>> parent of 1b78524 (Merge branch 'Napasorn-branch' into FEnaja)
    </div>
  );
};

export default Membership;
