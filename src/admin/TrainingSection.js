import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TrainingSection.css';
import axios from 'axios';
const TrainingSection = () => {
    const [programs, setPrograms] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [groupsession, setGroupSession] = useState([]);
    const [allSession, setAllSession] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchSession = async () =>{
        try {
          const response = await axios.get('http://localhost:8080/api/session', {
            headers: { 'Content-Type': 'application/json' },
        });
        setSessions(response.data)
        } catch (error) {
          
        }
      }
      const fetchGroupSession = async () =>{
        try {
          const response = await axios.get('http://localhost:8080/api/groupsessions', {
            headers: { 'Content-Type': 'application/json' },
        });
        setGroupSession(response.data)
        } catch (error) {
          
        }
      }
      fetchSession()
      fetchGroupSession()
      // setAllSession(...sessions,...groupsession)
      document.body.classList.add('programM-page');
  
      return () => {
        document.body.classList.remove('programM-page');
      };
    }, []);

    useEffect(() => {
      if (sessions.length > 0 || groupsession.length > 0) {
        // Merge sessions and groupsession into allSession
        const mergedSessions = [...sessions, ...groupsession];

        // Sort by sdate first and then by startTime
        mergedSessions.sort((a, b) => {
          const dateA = new Date(a.dateSession.sdate);
          const dateB = new Date(b.dateSession.sdate);

          if (dateA < dateB) return -1;
          if (dateA > dateB) return 1;

          // If dates are the same, sort by startTime
          const timeA = a.dateSession.startTime;
          const timeB = b.dateSession.startTime;

          return timeA.localeCompare(timeB);
        });

        setAllSession(mergedSessions);
      }
    }, [sessions, groupsession]);
  
    const handleAddProgram = () => {
      navigate('/admin-trainingS-add');
    };

    const handleAddProgramP = () => {
        navigate('/admin-trainingS-addP');
      };
  
    const handleEditProgram = (index) => {
      navigate('/admin-training-edit', { state: { programIndex: index } });
    };
  
    const handleDeleteProgram = async (id,type) => {
      console.log(id)
      const confirmDelete = window.confirm("Are you sure you want to delete this program?");
    if (confirmDelete) {
      if(type == "ส่วนตัว"){
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
      }if (type == "กลุ่ม") {
        try {
          await axios.delete(`http://localhost:8080/api/groupsessions/${id}`, {
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
      } else {
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
          <span className="breadcrumb-current-programM">Training Session Management</span>
        </div>
      </div>
      {/* Title */}
      <h1 className="page-title-programM">Training Session Management</h1>
      <p className="page-subtitle-programM">จัดการเซสชันการฝึกสอน</p>

      {/* Add Program Button */}
      <div className="add-program-container-program">
        <button className="add-program-button-program" onClick={handleAddProgramP}>
        <img src="https://cdn-icons-png.freepik.com/512/5974/5974633.png" alt="Add Icon" className="add-program-icon" />
        เพิ่มเซสชันการฝึกสอนแบบส่วนตัว
      </button>
      </div>
      <div className="add-program-container-program">
        <button className="add-program-button-program" onClick={handleAddProgram}>
        <img src="https://cdn-icons-png.freepik.com/512/5974/5974633.png" alt="Add Icon" className="add-program-icon" />
        เพิ่มเซสชันการฝึกสอนแบบกลุ่ม
      </button>
      </div>
      <div className="program-list">
        {console.log(allSession)}
        {allSession.length === 0 ? (
          <p>No training programs available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                {/* <th>Image</th> */}
                {/* <th>Program Name</th> */}
                {/* <th>Session ID</th> */}
                <th>ชื่อโปรแกรม</th>
                <th>ประเภท</th>
                <th>ตารางเวลา</th>
                <th>รายละเอียด</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allSession.map((session, index) => (
                <tr key={index}>

                  {/* Program Name */}
                  {console.log(session)}
                  <td>{session.program.programName}</td>

                  {/* Program Type */}
                  <td>{session.program.programType}</td>

                  {/* Schedule */}
                  <td>
                    {new Date(session.dateSession.sdate).toLocaleDateString('th-TH')}<br />
                    {session.dateSession.startTime.substring(0, 5)} - {session.dateSession.endTime.substring(0, 5)}
                  </td>

                  {/* Description */}
                  <td>{session.program.description}</td>

                  {/* Actions */}
                  <td>
                    <button className="delete" onClick={() => handleDeleteProgram(session.sessionId,session.program.programType)}>Delete</button>
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