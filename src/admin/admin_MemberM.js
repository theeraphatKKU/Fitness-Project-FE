import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin_MemberM.css';

const AdminMemberM = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data for testing purposes
  const mockMembers = [
    {
      id: 1,
      firstName: 'สมชาย',
      lastName: 'ใจดี',
      phone: '0123456789',
      email: 'somchai@example.com',
      status: 'สมาชิกธรรมดา',
      membershipStart: '2024-01-01',
      membershipEnd: '2024-04-01',
    },
    {
      id: 2,
      firstName: 'สมหญิง',
      lastName: 'รักดี',
      phone: '0987654321',
      email: 'somying@example.com',
      status: 'สมาชิกสุดคุ้ม',
      membershipStart: '2024-01-01',
      membershipEnd: '2024-07-01',
    },
  ];

  // Filter members based on search term when button is clicked
  const handleSearch = () => {
    const results = mockMembers.filter(
      (member) =>
        member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.phone.includes(searchTerm)
    );
    setFilteredMembers(results);
  };

  // Open modal to show member details
  const handleSelect = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Delete member with confirmation
  const handleDeleteMember = () => {
    if (window.confirm('คุณแน่ใจว่าต้องการลบสมาชิกนี้หรือไม่?')) {
      alert('ลบข้อมูลสมาชิกเรียบร้อย');
      setFilteredMembers(filteredMembers.filter((member) => member !== selectedMember));
      setShowModal(false);
    }
  };

  // Back to workspace
  const handleBack = () => {
    navigate('/admin-workspace');
  };

  return (
    <div className="admin-member-management">
      {/* Breadcrumb */}
      <div className="wrap-breadcrumb">
        <div className="breadcrumb">
          <Link to="/admin-home" className="breadcrumb-link">Home</Link>
          <span> &gt; </span>
          <Link to="/admin-workspace" className="breadcrumb-link">Workspace</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current">Member Management</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="page-title">Member Management</h1>
      <p className="page-subtitle">จัดการข้อมูลสมาชิก</p>

      {/* Search box */}
      <div className="search-container">
        <label htmlFor="search">ค้นหาสมาชิก:</label>
        <input
          type="text"
          id="search"
          placeholder="ค้นหาด้วยไอดี ชื่อ หรือเบอร์โทร..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>ค้นหา</button>
      </div>

      {/* Member Table */}
      <div className="table-container">
        <table className="member-table">
          <thead>
            <tr>
              <th>memberId</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทร</th>
              <th>อีเมล</th>
              <th>ตัวเลือก</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{`${member.firstName} ${member.lastName}`}</td>
                  <td>{member.phone}</td>
                  <td>{member.email}</td>
                  <td>
                    <button className="select-button" onClick={() => handleSelect(member)}>
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
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">ข้อมูลส่วนตัว</h2>
            <p className="modal-member-id">memberId {selectedMember.id}</p>
            <div className="modal-profile-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User Icon" className="user-icon" />
            </div>
            <div className="modal-details">
              <p><strong>ชื่อ:</strong> {selectedMember.firstName}</p>
              <p><strong>นามสกุล:</strong> {selectedMember.lastName}</p>
              <p><strong>วันเกิด:</strong> 12/03/2001</p>
              <p><strong>เบอร์โทรศัพท์:</strong> xxx-xxxx-xxx</p>
              <p><strong>อีเมล:</strong> {selectedMember.email}</p>
              <p><strong>สถานะ:</strong> {selectedMember.status}</p>
              <p><strong>ระยะเวลา:</strong> {selectedMember.membershipStart} - {selectedMember.membershipEnd}</p>
            </div>
            <div className="modal-buttons">
              <button className="close-modal-button" onClick={handleCloseModal}>
                ปิด
              </button>
              <button className="delete-member-button" onClick={handleDeleteMember}>
                ลบสมาชิก
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          กลับ
        </button>
      </div>
    </div>
  );
};

export default AdminMemberM;
