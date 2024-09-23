import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './admin_MemberM.css';

const AdminMemberM = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // data for testing purposes

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('http://localhost:8080/api/member', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMembers(response.data)
    }
    fetch()
    document.body.classList.add('memberM-page');

    return () => {
      document.body.classList.remove('memberM-page');
    };
  }, []);

  // Format date to dd-mm-yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };


  // Filter members based on search term when button is clicked
  const handleSearch = () => {
    const results = members.filter(
      (member) =>
        member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.phone.includes(searchTerm)
    );
    setMembers(results);
  };

  // Fetch detailed data for the selected member and split the name
  const handleSelect = async (member) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/member/${member.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Assume `response.data.name` contains the full name
      const fullName = response.data.name;
      
      // Split the name into first and last name based on space
      const [firstName, lastName] = fullName.split(' ');

      // Update the selectedMember with the split name
      setSelectedMember({
        ...response.data,
        firstName: firstName || '',
        lastName: lastName || '',
        expireDate: formatDate(response.data.expireDate),
      });
      
      setShowModal(true); // Show the modal
    } catch (error) {
      console.error("Error fetching member details:", error);
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Delete member with confirmation
const handleDeleteMember = async () => {
  if (window.confirm('คุณแน่ใจว่าต้องการลบสมาชิกนี้หรือไม่?')) {
    try {
      await axios.delete(`http://localhost:8080/api/member/${selectedMember.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Remove the deleted member from the local state
      setMembers(members.filter((member) => member.id !== selectedMember.id)); // Update members list
      setShowModal(false);
      alert('ลบข้อมูลสมาชิกเรียบร้อย');
    } catch (error) {
      console.error("Error deleting member:", error);
      alert('ไม่สามารถลบสมาชิกได้');
    }
  }
};

  // Back to workspace
  const handleBack = () => {
    navigate('/admin-workspace');
  };

  return (
    <div className="admin-member-management-unique">
      {/* Breadcrumb */}
      <div className="wrap-breadcrumb">
        <div className="breadcrumb-unique">
          <Link to="/admin-home" className="breadcrumb-link-unique">Home</Link>
          <span> &gt; </span>
          <Link to="/admin-workspace" className="breadcrumb-link-unique">Workspace</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current-unique">Member Management</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="page-title-unique">Member Management</h1>
      <p className="page-subtitle-unique">จัดการข้อมูลสมาชิก</p>

      {/* Search box */}
      <div className="search-container-unique">
        <label htmlFor="search">ค้นหาสมาชิก:</label>
        <input
          type="text"
          id="search"
          placeholder="ค้นหาด้วยไอดี ชื่อ หรือเบอร์โทร..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button-unique" onClick={handleSearch}>ค้นหา</button>
      </div>

      {/* Member Table */}
      <div className="table-container-unique">
        <table className="member-table-unique">
          <thead>
            <tr>
              <th>memberId</th>
              <th>ชื่อ-นามสกุล</th>
              {/* <th>เบอร์โทร</th> */}
              <th>อีเมล</th>
              <th>ตัวเลือก</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  {/* <td>{member.phoneNumber}</td> */}
                  <td>{member.email}</td>
                  <td>
                    <button className="select-button-unique" onClick={() => handleSelect(member)}>
                      เลือก
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">ไม่พบข้อมูลสมาชิก</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedMember && (
        <div className="modal-overlay-unique">
          <div className="modal-content-unique">
            <h2 className="modal-title-unique">ข้อมูลส่วนตัว</h2>
            <p className="modal-member-id-unique">MemberID: {selectedMember.id}</p>
            <div className="modal-profile-icon-unique">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User Icon" className="user-icon-unique" />
            </div>
            <div className="modal-details-unique">
              <p><strong>ชื่อ:</strong> {selectedMember.firstName}</p>
              <p><strong>นามสกุล:</strong> {selectedMember.lastName}</p>
              <p><strong>เบอร์โทรศัพท์:</strong>{selectedMember.phoneNumber}</p>
              <p><strong>อีเมล:</strong> {selectedMember.email}</p>
              <p><strong>สถานะ:</strong> {selectedMember.memberType}</p>
              <p><strong>วันหมดอายุของสมาชิก:</strong> {selectedMember.expireDate}</p>
            </div>
            <div className="modal-buttons-unique">
              <button className="close-modal-button-unique" onClick={handleCloseModal}>
                ปิด
              </button>
              <button className="delete-member-button-unique" onClick={handleDeleteMember}>
                ลบสมาชิก
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="back-button-container-unique">
        <button className="back-button-unique" onClick={handleBack}>
          กลับ
        </button>
      </div>
    </div>
  );
};

export default AdminMemberM;
