import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin_TrainerM.css';
import axios from 'axios';

const AdminTrainerM = () => {
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('http://localhost:8080/api/trainer', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data)
      setTrainers(response.data);
      setFilteredTrainers(response.data);
    }
    fetch()
    document.body.classList.add('trainerM-page');

    return () => {
      document.body.classList.remove('trainerM-page');
    };
  }, []);

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      firstName: 'พี่หน่วง',
      lastName: 'แหนกระโสน',
      phoneNumber: '0123456789',
      email: 'piyapong@example.com',
      programs: ['fitness-beginners']
    },
    {
      id: 2,
      firstName: 'พี่เก่ง',
      lastName: 'พลังช้าง',
      phoneNumber: '0987654321',
      email: 'narumon@example.com',
      programs: ['weight-loss-toning', 'muscle-building']
    },
  ]);
  const [filteredTrainers, setFilteredTrainers] = useState([]);
  const [newTrainer, setNewTrainer] = useState({
    firstName: '',
    lastName: '',
    phoneNumberNumber: '',
    email: '',
    password: '', // เพิ่มฟิลด์สำหรับรหัสผ่าน
  });
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
        trainer.phoneNumber.includes(searchTerm)
    );
    setFilteredTrainers(results);
  };

  // Function to open modal with trainer details
  const handleSelect = (trainer) => {
    const [firstName, lastName] = trainer.name.split(' ');
    const edit_trainer = {
      ...trainer,
      firstName:firstName,
      lastName:lastName
    };
    setSelectedTrainer(edit_trainer);
    setSelectedPrograms(trainer.specialization || []);
    setIsEditing(false);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTrainer(null);
    setNewTrainer({ firstName: '', lastName: '', phoneNumber: '', email: '' });
    setSelectedPrograms([]);
  };

  // Function to delete trainer
  const handleDeleteTrainer = async () => {
    if (window.confirm('คุณแน่ใจว่าต้องการลบ Trainer นี้หรือไม่?')) {
      try {
        await axios.delete(`http://localhost:8080/api/trainer/${selectedTrainer.id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setTrainers(trainers.filter((trainer) => trainer.id !== selectedTrainer.id)); // Update members list
        setShowModal(false);
        alert('ลบข้อมูล Trainer เรียบร้อย');
      } catch (error) {
        console.error("Error deleting Trainer:", error);
        alert('ไม่สามารถลบ Trainer ได้');
      }
    }
  };

  // Function to handle form input change for new trainer
  const handleInputChange = (e) => {
    setNewTrainer({ ...newTrainer, [e.target.name]: e.target.value });
  };

  // Function to add a new trainer
  const handleAddTrainer = async () => {
    if (true) {
      const fullname = newTrainer.firstName + ' ' + newTrainer.lastName;
      const newTrainerData = { 
        ...newTrainer,
        name: fullname,
        specialization: selectedPrograms.join(', '), 
        role: "TRAINER",
      };
      console.log(newTrainerData)
  
      try {
        const response = await axios.post('http://localhost:8080/api/trainer', newTrainerData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        // คุณสามารถอัปเดตรายการ trainers ได้ตาม response
        setTrainers([...trainers, response.data]);
        alert('เพิ่ม Trainer สำเร็จ');
        handleCloseModal();
      } catch (error) {
        console.error("Error adding trainer:", error);
        alert('ไม่สามารถเพิ่ม Trainer ได้');
      }
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
      trainer.id === selectedTrainer.id ? { ...selectedTrainer, specialization: selectedPrograms } : trainer
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
        <div className="breadcrumb-trainer">
          <Link to="/admin-home" className="breadcrumb-link-trainer">Home</Link>
          <span> &gt; </span>
          <Link to="/admin-workspace" className="breadcrumb-link-trainer">Workspace</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current-trainer">Trainer Management</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="page-title-trainer">Trainer Management</h1>
      <p className="page-subtitle-trainer">จัดการข้อมูลผู้ฝึกสอน</p>

    {/* Add Trainer Button */}
    <div className="add-trainer-container-trainer">
      <button className="add-trainer-button-trainer" onClick={() => setShowModal(true)}>
        <img src="https://cdn-icons-png.freepik.com/512/5974/5974633.png" alt="Add Icon" className="add-trainer-icon" />
        เพิ่มผู้ฝึก
      </button>
    </div>


      {/* Search box */}
      <div className="search-container-trainer">
        <label htmlFor="search">ค้นหาผู้ฝึกสอน:</label>
        <input
          type="text"
          id="search"
          placeholder="ค้นหาด้วยไอดี ชื่อ หรือเบอร์โทร..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button-trainer" onClick={handleSearch}>ค้นหา</button>
      </div>

      {/* Trainer Table */}
      <div className="table-container-trainer">
        <table className="trainer-table-trainer">
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
                  <td>{trainer.name}</td>
                  <td>{trainer.phoneNumber}</td>
                  <td>{trainer.email}</td>
                  <td>
                    <button className="select-button-trainer" onClick={() => handleSelect(trainer)}>เลือก</button>
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


      {/* Modal */}
      {showModal && (
        <div className="modal-overlay-trainer">
          <div className="modal-content-trainer">
            <h3 className="modal-title-trainer">
              {selectedTrainer ? 'ข้อมูลส่วนตัว' : 'เพิ่ม Trainer'}
            </h3>
            {selectedTrainer && !isEditing ? (
              <>
                <p className="modal-trainer-id-trainer">TrainerID: {selectedTrainer.id}</p>
                <div className="modal-profile-icon-trainer">
                  <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Trainer Icon" className="user-icon-trainer" />
                </div>
                <div className="modal-details-trainer">
                  <p><strong>ชื่อ:</strong> {selectedTrainer.firstName}</p>
                  <p><strong>นามสกุล:</strong> {selectedTrainer.lastName}</p>
                  <p><strong>เบอร์โทร:</strong> {selectedTrainer.phoneNumber}</p>
                  <p><strong>อีเมล:</strong> {selectedTrainer.email}</p>
                  <p><strong>โปรแกรมที่ฝึกสอน:</strong> {selectedTrainer.specialization}</p>
                </div>
                <div className="modal-buttons-trainer">
                  <button className="close-modal-button-trainer" onClick={handleCloseModal}>
                    ปิด
                  </button>
                  <button className="delete-trainer-button-trainer" onClick={handleDeleteTrainer}>
                    ลบ Trainer
                  </button>
                  <button className="edit-trainer-button-trainer" onClick={handleEditTrainer}>
                    แก้ไขข้อมูลส่วนตัว
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="modal-inputs-trainer">
                  <div className="modal-input-group-trainer">
                    <label htmlFor="firstName" className="modal-input-label-trainer">
                    <strong>ชื่อ:</strong>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="ชื่อ"
                      value={isEditing ? selectedTrainer.firstName : newTrainer.firstName}
                      onChange={(e) => {
                        isEditing
                          ? setSelectedTrainer({ ...selectedTrainer, firstName: e.target.value })
                          : handleInputChange(e);
                      }}
                      className="modal-input-field-trainer"
                    />
                  </div>
                  <div className="modal-input-group-trainer">
                    <label htmlFor="firstName" className="modal-input-label-trainer">
                    <strong>นามสกุล:</strong>
                    </label>
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
                      className="modal-input-field-trainer"
                    />
                    </div>
                    <div className="modal-input-group-trainer">
                    <label htmlFor="firstName" className="modal-input-label-trainer">
                    <strong>เบอร์โทร:</strong>
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="เบอร์โทร"
                      value={isEditing ? selectedTrainer.phoneNumber : newTrainer.phoneNumber}
                      onChange={(e) => {
                        isEditing
                          ? setSelectedTrainer({ ...selectedTrainer, phoneNumber: e.target.value })
                          : handleInputChange(e);
                      }}
                      className="modal-input-field-trainer"
                    />
                    </div>
                    <div className="modal-input-group-trainer">
                    <label htmlFor="firstName" className="modal-input-label-trainer">
                    <strong>อีเมล:</strong>
                    </label>
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
                      className="modal-input-field-trainer"
                    />
                    </div>
                    <div className="modal-input-group-trainer">
                    <label htmlFor="firstName" className="modal-input-label-trainer">
                    <strong>รหัสผ่าน:</strong>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="รหัสผ่าน"
                      value={isEditing ? selectedTrainer.password : newTrainer.password}
                      onChange={(e) => {
                        isEditing
                          ? setSelectedTrainer({ ...selectedTrainer, password: e.target.value })
                          : handleInputChange(e);
                      }}
                      className="modal-input-field-trainer"
                    />
                    </div>
                  <div className="modal-programs-trainer">
                    <strong>เลือกโปรแกรมฝึกสอน:</strong>
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
                <div className="modal-buttons-trainer">
                  <button className="close-modal-button-trainer" onClick={handleCloseModal}>
                    ปิด
                  </button>
                  {isEditing ? (
                    <button className="save-changes-button-trainer" onClick={handleSaveChanges}>
                      บันทึกการเปลี่ยนแปลง
                    </button>
                  ) : (
                    <button className="add-trainer-button-trainer" onClick={handleAddTrainer}>
                      เพิ่ม Trainer
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="back-button-container-trainer">
        <button className="back-button-trainer" onClick={handleBack}>กลับ</button>
      </div>
    </div>
  );
};

export default AdminTrainerM;
