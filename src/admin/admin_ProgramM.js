import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin_ProgramM.css';

const AdminProgramM = () => {
  const [programs, setPrograms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // โหลดข้อมูลโปรแกรมจาก localStorage
    const savedPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
    setPrograms(savedPrograms);
  }, []);

  const handleAddProgram = () => {
    navigate('/admin-training-add');
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

  return (
    <div className="admin-ProgramM">
      <h1>Training Program Management</h1>
      <button onClick={handleAddProgram}>Add Training Program</button>
      <div className="program-list">
        {programs.length === 0 ? (
          <p>No training programs available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Program Name</th>
                <th>ชื่อโปรแกรม</th>
                <th>ระยะเวลา</th>
                <th>ประเภท</th>
                <th>ตารางเวลา</th>
                <th>รายละเอียด</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index}>
                  <td><img src={program.image} alt="Program" style={{ maxWidth: '100px' }} /></td>
                  <td>{program.programHName}</td>
                  <td>{program.programName}</td>
                  <td>{program.duration} สัปดาห์</td>
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

export default AdminProgramM;
