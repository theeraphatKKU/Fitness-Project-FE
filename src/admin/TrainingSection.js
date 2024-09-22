import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TrainingSection.css';
import axios from 'axios';
const TrainingSection = () => {
    const [programs, setPrograms] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      // โหลดข้อมูลโปรแกรมจาก localStorage
      const savedPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
      setPrograms(savedPrograms);
    }, []);
  
    useEffect(() => {
      document.body.classList.add('programM-page');
  
      return () => {
        document.body.classList.remove('programM-page');
      };
    }, []);
  
    const handleAddProgram = () => {
      navigate('/admin-trainingS-add');
    };

    const handleAddProgramP = () => {
        navigate('/admin-trainingS-addP');
      };
  
    const handleEditProgram = (index) => {
      navigate('/admin-training-edit', { state: { programIndex: index } });
    };
  
    const handleDeleteProgram = (index) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this program?");
      if (confirmDelete) {
        let existingPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
        existingPrograms.splice(index, 1);
        localStorage.setItem('trainingPrograms', JSON.stringify(existingPrograms));
        setPrograms(existingPrograms);
      }
    };
return(
      <div className="admin-ProgramM">
      {/* Breadcrumb */}
      <div className="wrap-breadcrumb">
        <div className="program-management-breadcrumb">
          <Link to="/admin-home" className="breadcrumb-link-programM">Home</Link>
          <span> &gt; </span>
          <Link to="/admin-workspace" className="breadcrumb-link-programM">Workspace</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current-programM">Training Section Management</span>
        </div>
      </div>
      {/* Title */}
      <h1 className="page-title-programM">Training section Management</h1>
      <p className="page-subtitle-programM">จัดการเซคชันการฝึกสอน</p>

      {/* Add Program Button */}
      <div className="add-program-container-program">
        <button className="add-program-button-program" onClick={handleAddProgramP}>
        <img src="https://cdn-icons-png.freepik.com/512/5974/5974633.png" alt="Add Icon" className="add-program-icon" />
        เพิ่มเซคชันการฝึกสอนแบบส่วนตัว
      </button>
      </div>
      <div className="add-program-container-program">
        <button className="add-program-button-program" onClick={handleAddProgram}>
        <img src="https://cdn-icons-png.freepik.com/512/5974/5974633.png" alt="Add Icon" className="add-program-icon" />
        เพิ่มเซคชันการฝึกสอนแบบกลุ่ม
      </button>
      </div>
      <div className="program-list">
        {programs.length === 0 ? (
          <p>No training programs available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                {/* <th>Image</th> */}
                {/* <th>Program Name</th> */}
                <th>ชื่อโปรแกรม</th>
                <th>ประเภท</th>
                <th>ตารางเวลา</th>
                <th>รายละเอียด</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index}>
                  {/* <td><img src={program.image} alt="Program" style={{ maxWidth: '100px' }} /></td>
                  <td>{program.programHName}</td> */}
                  <td>{program.programName}</td>
                  <td>{program.programType}</td>
                  <td>
                    <ul>
                      {program.schedule.map((entry, i) => (
                        <li key={i}>{entry.day} {entry.time}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{program.description}</td>
                  <td>
                    <button onClick={() => handleEditProgram(index)}>Edit</button>
                    <button className="delete" onClick={() => handleDeleteProgram(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        )}
      </div>
    </div>   
);
};
export default TrainingSection;