import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Program.css';
import Modal from './Modal';

const Program = ({ userRole }) => {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/programs', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data); // Log response data to check image URLs
        setPrograms(response.data);
      } catch (err) {
        setError('Failed to fetch programs. Please try again later.');
        console.error(err);
      }
    };

    fetchPrograms();
  }, []);

  const handleOpenModal = (program) => {
    setSelectedProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  const homeRoute = userRole === 'admin' 
    ? '/admin-home' 
    : userRole === 'member'
    ? '/member-home'
    : userRole === 'trainer'
    ? '/trainer-home'
    : '/';

  return (
    <div className="program-container">
      <div className='wrap-breadcrumb'>
        <div className="membership-breadcrumb">
          <Link to={homeRoute} className="breadcrumb-link">Home</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current">Program</span>
        </div>
        <h1 className="program-title">Program</h1>
        <p className="program-subtitle">โปรแกรมการฝึกสอน</p>
      </div>
      <div className="program-grid">
        {error && <p className="error-message">{error}</p>}
        {programs.length === 0 ? (
          <p>No programs available.</p>
        ) : (
          programs.map((program, index) => (
            <div className="program-card" key={index}>

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
