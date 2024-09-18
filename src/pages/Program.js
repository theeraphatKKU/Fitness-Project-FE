import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Program.css';
import Modal from './Modal';  // ใช้ Modal เดิม

const Program = ({ userRole }) => {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    // ดึงข้อมูลโปรแกรมจาก localStorage
    const savedPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
    setPrograms(savedPrograms);
  }, []);

  const handleOpenModal = (program) => {
    setSelectedProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  // กำหนดเส้นทาง Home ตามบทบาทผู้ใช้
  const homeRoute = userRole === 'admin' 
    ? '/admin-home' 
    : userRole === 'member'
    ? '/member-home'
    : userRole === 'trainer'
    ? '/trainer-home'
    : '/';  // fallback ไปที่ '/' หาก userRole เป็น undefined

  return (
    <div className="program-container">
      <div className='wrap-breadcrumb'>
        <div className="breadcrumb">
          <Link to={homeRoute} className="breadcrumb-link">Home</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current">Program</span>
        </div>
        <h1 className="program-title">Program</h1>
        <p className="program-subtitle">โปรแกรมการฝึกสอน</p>
      </div>
      <div className="program-grid">
        {programs.length === 0 ? (
          <p>No programs available.</p>
        ) : (
          programs.map((program, index) => (
            <div className="program-card" key={index}>
              <img src={program.image} alt={program.programName} />
              <h3>{program.programHName}</h3>
              <p>{program.programName}</p>
              <button className="program-detail-link" onClick={() => handleOpenModal(program)}>
                รายละเอียด
              </button>
            </div>
          ))
        )}
      </div>

      {selectedProgram && (
        <Modal program={selectedProgram} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Program;
