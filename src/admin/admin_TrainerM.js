import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin_TrainerM.css';

const AdminTrainerM = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      firstName: 'พี่หน่วง',
      lastName: 'แหนกระโสน',
      phone: '0123456789',
      email: 'piyapong@example.com',
      programs: ['fitness-beginners']
    },
    {
      id: 2,
      firstName: 'พี่เก่ง',
      lastName: 'พลังช้าง',
      phone: '0987654321',
      email: 'narumon@example.com',
      programs: ['weight-loss-toning', 'muscle-building']
    },
  ]);
  const [filteredTrainers, setFilteredTrainers] = useState([]);
  const [newTrainer, setNewTrainer] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Function to filter trainers based on search term
  const handleSearch = () => {
    const results = trainers.filter(
      (trainer) =>
        trainer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.phone.includes(searchTerm)
    );
    setFilteredTrainers(results);
  };

  // Function to open modal with trainer details
  const handleSelect = (trainer) => {
    setSelectedTrainer(trainer);
    setSelectedPrograms(trainer.programs || []);
    setIsEditing(false);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTrainer(null);
    setNewTrainer({ firstName: '', lastName: '', phone: '', email: '' });
    setSelectedPrograms([]);
  };

  // Function to delete trainer
  const handleDeleteTrainer = () => {
    if (window.confirm('คุณแน่ใจว่าต้องการลบ Trainer นี้หรือไม่?')) {
      setTrainers(trainers.filter((trainer) => trainer !== selectedTrainer));
      setFilteredTrainers(filteredTrainers.filter((trainer) => trainer !== selectedTrainer));
      setShowModal(false);
    }
  };

  // Function to handle form input change for new trainer
  const handleInputChange = (e) => {
    setNewTrainer({ ...newTrainer, [e.target.name]: e.target.value });
  };

  // Function to add a new trainer
  const handleAddTrainer = () => {
    if (newTrainer.firstName && newTrainer.lastName && newTrainer.phone && newTrainer.email) {
      const newTrainerData = { ...newTrainer, id: trainers.length + 1, programs: selectedPrograms };
      const updatedTrainers = [...trainers, newTrainerData];
      setTrainers(updatedTrainers);
      alert('เพิ่ม Trainer สำเร็จ');
      handleCloseModal();
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  };

  // Function to switch to edit mode
  const handleEditTrainer = () => {
    setIsEditing(true);
  };

  // Function to save changes after editing
  const handleSaveChanges = () => {
    const updatedTrainers = trainers.map((trainer) =>
      trainer.id === selectedTrainer.id ? { ...selectedTrainer, programs: selectedPrograms } : trainer
    );
    setTrainers(updatedTrainers);
    setFilteredTrainers(updatedTrainers);
    alert('แก้ไขข้อมูล Trainer เรียบร้อย');
    setIsEditing(false);
    setShowModal(false);
  };

  // Function to navigate back
  const handleBack = () => {
    navigate('/admin-workspace');
  };

  // Function to get program label
  const getProgramLabel = (program) => {
    switch (program) {
      case 'fitness-beginners':
        return 'โปรแกรมฟิตเนสสำหรับผู้เริ่มต้น';
      case 'weight-loss-toning':
        return 'โปรแกรมลดน้ำหนักและกระชับสัดส่วน';
      case 'muscle-building':
        return 'โปรแกรมสร้างกล้ามเนื้อ';
      case 'fitness-seniors':
        return 'โปรแกรมฟิตเนสสำหรับผู้สูงอายุ';
      case 'personal-training':
        return 'โปรแกรมการฝึกสอนแบบส่วนตัว';
      default:
        return '';
    }
  };

  return (
    <div className="admin-trainer-management">
      {/* Breadcrumb */}
      <div className="wrap-breadcrumb">
        <div className="breadcrumb">
          <Link to="/admin-home" className="breadcrumb-link">Home</Link>
          <span> &gt; </span>
          <Link to="/admin-workspace" className="breadcrumb-link">Workspace</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current">Trainer Management</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="page-title">Trainer Management</h1>
      <p className="page-subtitle">จัดการข้อมูล Trainer</p>

      {/* Search box */}
      <div className="search-container">
        <label htmlFor="search">ค้นหา Trainer:</label>
        <input
          type="text"
          id="search"
          placeholder="ค้นหาด้วยไอดี ชื่อ หรือเบอร์โทร..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>ค้นหา</button>
      </div>

      {/* Trainer Table */}
      <div className="table-container">
        <table className="trainer-table">
          <thead>
            <tr>
              <th>Trainer ID</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทร</th>
              <th>อีเมล</th>
              <th>ตัวเลือก</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrainers.length > 0 ? (
              filteredTrainers.map((trainer) => (
                <tr key={trainer.id}>
                  <td>{trainer.id}</td>
                  <td>{`${trainer.firstName} ${trainer.lastName}`}</td>
                  <td>{trainer.phone}</td>
                  <td>{trainer.email}</td>
                  <td>
                    <button className="select-button" onClick={() => handleSelect(trainer)}>เลือก</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">ไม่พบข้อมูล Trainer</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Trainer Button */}
      <div className="add-trainer-container">
        <button className="add-trainer-button" onClick={() => setShowModal(true)}>
          เพิ่มผู้ฝึก
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">{selectedTrainer ? 'ข้อมูล Trainer' : 'เพิ่ม Trainer'}</h2>
            {selectedTrainer && !isEditing ? (
              <>
                <p className="modal-trainer-id">Trainer ID: {selectedTrainer.id}</p>
                <div className="modal-details">
                  <p><strong>ชื่อ:</strong> {selectedTrainer.firstName}</p>
                  <p><strong>นามสกุล:</strong> {selectedTrainer.lastName}</p>
                  <p><strong>เบอร์โทร:</strong> {selectedTrainer.phone}</p>
                  <p><strong>อีเมล:</strong> {selectedTrainer.email}</p>
                  <p><strong>โปรแกรมที่ฝึกสอน:</strong> {selectedTrainer.programs.map(getProgramLabel).join(', ')}</p>
                </div>
                <div className="modal-buttons">
                  <button className="close-modal-button" onClick={handleCloseModal}>ปิด</button>
                  <button className="delete-trainer-button" onClick={handleDeleteTrainer}>ลบ Trainer</button>
                  <button className="edit-trainer-button" onClick={handleEditTrainer}>แก้ไขข้อมูลส่วนตัว</button>
                </div>
              </>
            ) : (
              <>
                <div className="modal-inputs">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="ชื่อ"
                    value={isEditing ? selectedTrainer.firstName : newTrainer.firstName}
                    onChange={(e) => {
                      isEditing
                        ? setSelectedTrainer({ ...selectedTrainer, firstName: e.target.value })
                        : handleInputChange(e);
                    }}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="นามสกุล"
                    value={isEditing ? selectedTrainer.lastName : newTrainer.lastName}
                    onChange={(e) => {
                      isEditing
                        ? setSelectedTrainer({ ...selectedTrainer, lastName: e.target.value })
                        : handleInputChange(e);
                    }}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="เบอร์โทร"
                    value={isEditing ? selectedTrainer.phone : newTrainer.phone}
                    onChange={(e) => {
                      isEditing
                        ? setSelectedTrainer({ ...selectedTrainer, phone: e.target.value })
                        : handleInputChange(e);
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="อีเมล"
                    value={isEditing ? selectedTrainer.email : newTrainer.email}
                    onChange={(e) => {
                      isEditing
                        ? setSelectedTrainer({ ...selectedTrainer, email: e.target.value })
                        : handleInputChange(e);
                    }}
                  />
                  {/* โปรแกรมฝึกสอน */}
                  <div className="modal-programs">
                    <h3>เลือกโปรแกรมฝึกสอน:</h3>
                    {['fitness-beginners', 'weight-loss-toning', 'muscle-building', 'fitness-seniors', 'personal-training'].map(program => (
                      <label key={program}>
                        <input
                          type="checkbox"
                          value={program}
                          checked={selectedPrograms.includes(program)}
                          onChange={(e) => {
                            const value = e.target.value;
                            setSelectedPrograms(prev =>
                              prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]
                            );
                          }}
                        />
                        {getProgramLabel(program)}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="modal-buttons">
                  <button className="close-modal-button" onClick={handleCloseModal}>ปิด</button>
                  {isEditing ? (
                    <button className="save-changes-button" onClick={handleSaveChanges}>บันทึกการเปลี่ยนแปลง</button>
                  ) : (
                    <button className="add-trainer-button" onClick={handleAddTrainer}>เพิ่ม Trainer</button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>กลับ</button>
      </div>
    </div>
  );
};

export default AdminTrainerM;
