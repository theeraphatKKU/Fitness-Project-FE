import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TrainingSection.css';
import axios from 'axios';
const TrainingSection = () => {
    const [programs, setPrograms] = useState([]);
    const [sessions, setSessions] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchSession = async () =>{
        try {
          const response = await axios.get('http://localhost:8080/api/session', {
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response.data)
        setSessions(response.data)
        } catch (error) {
          
        }
      }
      fetchSession()
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
  
    const handleDeleteProgram = async (id) => {
      console.log(id)
      const confirmDelete = window.confirm("Are you sure you want to delete this program?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/session/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // setSessions(sessions.filter((program) => program.id !== id)); // Update programs list
        alert('ลบข้อมูล Session เรียบร้อย');
      } catch (error) {
        console.error("Error deleting Session:", error);
        alert('ไม่สามารถลบ Session ได้');
      }
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
        {sessions.length === 0 ? (
          <p>No training programs available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                {/* <th>Image</th> */}
                {/* <th>Program Name</th> */}
                <th>Session ID</th>
                <th>ชื่อโปรแกรม</th>
                <th>ประเภท</th>
                <th>ตารางเวลา</th>
                <th>รายละเอียด</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr key={index}>
                  {/* Session ID */}
                  <td>{session.sessionId}</td> {/* Displaying session ID */}

                  {/* Program Name */}
                  <td>{session.program.programName}</td>

                  {/* Program Type */}
                  <td>{session.program.programType}</td>

                  {/* Schedule */}
                  <td>
                    {new Date(session.dateSession.sdate).toLocaleDateString('th-TH')}<br />
                    {session.dateSession.startTime} - {session.dateSession.endTime}
                  </td>

                  {/* Description */}
                  <td>{session.program.description}</td>

                  {/* Actions */}
                  <td>
                    <button className="delete" onClick={() => handleDeleteProgram(session.sessionId)}>Delete</button>
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