import React from 'react';
import './member_profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
      navigate('/member-editprofile'); // Navigate to member-editprofile
  };

  const handleChangePassword = () => {
      navigate('/member-changepass'); // Navigate to member-changepass
  };

  const handleResume = () => {
    navigate('/Register'); 
  };

  const handleLogout = () => {
    navigate('/Login'); 
  };

  return (
      <div>
          <main className="profile-container">
              <div className="profile-card">
                  <div className="profile-edit">
                      <button className="edit-button" onClick={handleEditProfile}>แก้ไข</button>
                  </div>
                  <div className="profile-picture-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Profile" className="profile-picture" />
                  </div>
                  <h2>ข้อมูลส่วนตัว</h2>
                  <div className="profile-info">
                      <p><strong>ชื่อ:</strong> <span>{/* {member.name} */}</span></p>
                      <p><strong>นามสกุล:</strong> {/* นามสกุล */}</p>
                      <p><strong>วันเกิด:</strong> {/* วันเกิด */}</p>
                      <p><strong>เบอร์โทรศัพท์:</strong> <span>{/* {member.phoneNumber} */}</span></p>
                      <p><strong>อีเมล:</strong> <span>{/* {member.email} */}</span></p>
                      <p><strong>สถานะ:</strong> <span>{/* {member.memberType} */}</span></p>
                      <p><strong>ระยะเวลา:</strong> <span>{/* {member.expireDate} */}</span></p>
                  </div>
                  <div className="profile-actions">
                      <button className="renew-button" onClick={handleResume}>ต่ออายุ</button>
                      <button className="logout-button" onClick={handleLogout}>ล็อกเอาท์</button>
                      <a href="#!" className="change-password" onClick={handleChangePassword}>เปลี่ยนรหัสผ่าน</a>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default Profile;