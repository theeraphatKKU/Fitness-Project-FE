import React, { useEffect, useState } from 'react';
import './member_profile.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MemberProfile = ({ user }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/member/${user.id}`, {
          headers: { 'Content-Type': 'application/json' },
        });
        setProfile(response.data); // Set profile data
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (user?.id) {
      fetchProfile();

    }
  }, [user]);

  if (!profile) {
    return <div>Loading...</div>; // Show loading state while fetching profile
  }
  const [firstName, lastName] = profile ? profile.name.split(' '):null; // Assuming space separates first and last name


  return (
    <section className="profile-tl">
      <div className="container-tl">
        <div className="head-edit-tl">
          <div className="profile-picture-tl">
            <img
              loading="lazy"
              src={profile.profilePicture || "https://cdn.builder.io/api/v1/image/assets/TEMP/9f973a788df5b14c62475f3508739362688152c43702c0aa0871ff97b054f9aa?placeholderIfAbsent=true&apiKey=765867cd70bd47438cc6f11c19137da0"}
              alt="profile"
            />
          </div>
          <div className="header-text-tl">
            <h2 className="title-tl">ข้อมูลส่วนตัว</h2>
            <div className="edit-button-tl">
              <Link to="/member-editprofile" className="edit-link-tl">
                <button className="edit-tl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d351945df9638427df1fa9e59e9eccb3b1d2429907c9e0d75cf0d228792b9cd0?placeholderIfAbsent=true&apiKey=765867cd70bd47438cc6f11c19137da0"
                    alt="edit"
                  />
                  <span>แก้ไข</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="information-tl">
          <p>
            <span className="font-bold">ชื่อ</span> {firstName} <span className="font-bold">นามสกุล</span> {lastName}
          </p>
          <p>
            <span className="font-bold">เบอร์โทรศัพท์</span> {profile.phoneNumber}
          </p>
          <p>
            <span className="font-bold">สถานะ</span> {profile.memberType}
          </p>
          <p>
            <span className="font-bold">ระยะเวลาการเป็นสมาชิก</span> {new Date(profile.expireDate).toLocaleDateString('th-TH')}
          </p>
          <p>
            <span className="font-bold">อีเมล</span> {profile.email}
          </p>
        </div>
        <div className="button-group-tl">
          <button className="logout-button-tl">
            <Link to="/login" className="button-text-tl">
              ล็อคเอาท์
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MemberProfile;
