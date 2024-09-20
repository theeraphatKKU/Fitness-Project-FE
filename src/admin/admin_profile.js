import React from 'react';
import { Link } from 'react-router-dom'; // เพิ่มบรรทัดนี้
import './admin_profile.css';

const AdminProfile = () => {
  return (
    <section className="profile-ap">
      <div className="container-ap">
        <div className="head-edit-ap">
          <div className="profile-picture-ap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f973a788df5b14c62475f3508739362688152c43702c0aa0871ff97b054f9aa?placeholderIfAbsent=true&apiKey=765867cd70bd47438cc6f11c19137da0"
              alt="profile"
            />
          </div>
          <div className="header-text-ap">
            <h2 className="title-ap">ข้อมูลส่วนตัว</h2>
            {/* <div className="edit-button-tl">
              <button className="edit-tl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d351945df9638427df1fa9e59e9eccb3b1d2429907c9e0d75cf0d228792b9cd0?placeholderIfAbsent=true&apiKey=765867cd70bd47438cc6f11c19137da0"
                  alt="edit"
                />
                <span>แก้ไข</span>
              </button>
            </div> */}
          </div>
        </div>
        <div className="information-ap">
          {/* <p>
            <span className="font-bold">ชื่อ</span> แอดมิน{' '}
            <span className="font-bold">นามสกุล</span> จ้า
          </p> */}
          {/* <p>
            <span className="font-bold">เบอร์โทรศัพท์</span> xxx-xxxx-xxx
          </p>
          <p>
            <span className="font-bold">สถานะ</span> Trainer
          </p>
          <p>
            <span className="font-bold">รูปแบบการสอน</span> โปรแกรมสร้างกล้ามเนื้อ, โปรแกรมการฝึกสอนแบบส่วนตัว
          </p> */}
          {/* <div className="training-style-tl">
            รูปแบบการสอน <span>โปรแกรมสร้างกล้ามเนื้อ, โปรแกรมการฝึกสอนแบบส่วนตัว</span>
          </div> */}
          <p>
            <span className="font-bold">อีเมล </span>admin@gmail.com
          </p>
        </div>
        <div className="button-group-ap">
          <button className="logout-button-ap">
            <Link to="/login" className="button-text-ap">
              ล็อคเอาท์
            </Link>
          </button>
          <button className="change-password-button-ap">
            <Link to="/forgot-password" className="button-text-ap">
              เปลี่ยนรหัสผ่าน
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminProfile;