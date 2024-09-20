import React from 'react';
import { Link } from 'react-router-dom'; // เพิ่มบรรทัดนี้
import './TrainerLogin.css';

const TrainerLogin = () => {
  return (
    <section className="profile-tl">
      <div className="container-tl">
        <div className="head-edit-tl">
          <div className="profile-picture-tl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f973a788df5b14c62475f3508739362688152c43702c0aa0871ff97b054f9aa?placeholderIfAbsent=true&apiKey=765867cd70bd47438cc6f11c19137da0"
              alt="profile"
            />
          </div>
          <div className="header-text-tl">
            <h2 className="title-tl">ข้อมูลส่วนตัว</h2>
            <div className="edit-button-tl">
              <button className="edit-tl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d351945df9638427df1fa9e59e9eccb3b1d2429907c9e0d75cf0d228792b9cd0?placeholderIfAbsent=true&apiKey=765867cd70bd47438cc6f11c19137da0"
                  alt="edit"
                />
                <span>แก้ไข</span>
              </button>
            </div>
          </div>
        </div>
        <div className="information-tl">
          <p>
            <span className="font-bold">ชื่อ</span> พี่เก่ง{' '}
            <span className="font-bold">นามสกุล</span> พลังช้าง
          </p>
          <p>
            <span className="font-bold">เบอร์โทรศัพท์</span> xxx-xxxx-xxx
          </p>
          <p>
            <span className="font-bold">สถานะ</span> Trainer
          </p>
          <p>
            <span className="font-bold">รูปแบบการสอน</span> โปรแกรมสร้างกล้ามเนื้อ, โปรแกรมการฝึกสอนแบบส่วนตัว
          </p>
          {/* <div className="training-style-tl">
            รูปแบบการสอน <span>โปรแกรมสร้างกล้ามเนื้อ, โปรแกรมการฝึกสอนแบบส่วนตัว</span>
          </div> */}
          <p>
            <span className="font-bold">อีเมล </span>Kengpch@gmail.com
          </p>
        </div>
        <div className="button-group-tl">
          <button className="logout-button-tl">
            <Link to="/login" className="button-text-tl">
              ล็อคเอาท์
            </Link>
          </button>
          <button className="change-password-button-tl">
            <Link to="/forgot-password" className="button-text-tl">
              เปลี่ยนรหัสผ่าน
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainerLogin;