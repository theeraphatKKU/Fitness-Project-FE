import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin_ProgramM.css';
import axios from "axios";

const AdminProgramM = () => {
  const [programs, setPrograms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/programs', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setPrograms(response.data);
      } catch (error) {
        console.error('Error:', error);
        // Handle error (show error message to the user, etc.)
      }
    };

    fetch();
    document.body.classList.add('programM-page');

    return () => {
      document.body.classList.remove('programM-page');
    };
  }, []);

  const handleAddProgram = () => {
    navigate('/admin-training-add');
  };

  const handleEditProgram = (index) => {
    navigate('/admin-training-edit', { state: { programIndex: index } });
  };

  const handleDeleteProgram = async (programId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this program?");
    if (confirmDelete) {
      console.log(programId)
      try {
        await axios.delete(`http://localhost:8080/api/programs/${programId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Remove the deleted program from the local state
        setPrograms(programs.filter((program) => program.id !== programId)); // Update programs list
        alert('ลบข้อมูลโปรแกรมเรียบร้อย');
      } catch (error) {
        console.error("Error deleting program:", error);
        alert('ไม่สามารถลบโปรแกรมได้');
      }
    }
  };

  return (
    <div className="admin-ProgramM">
      {/* Breadcrumb */}
      <div className="wrap-breadcrumb">
        <div className="program-management-breadcrumb">
          <Link to="/admin-home" className="breadcrumb-link-programM">Home</Link>
          <span> &gt; </span>
          <Link to="/admin-workspace" className="breadcrumb-link-programM">Workspace</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current-programM">Training Program Management</span>
        </div>
      </div>
      {/* Title */}
      <h1 className="page-title-programM">Training Program Management</h1>
      <p className="page-subtitle-programM">จัดการโปรแกรมการฝึกสอน</p>

      {/* Add Program Button */}
      <div className="add-program-container-program">
        <button className="add-program-button-program" onClick={handleAddProgram}>
          <img src="https://cdn-icons-png.freepik.com/512/5974/5974633.png" alt="Add Icon" className="add-program-icon" />
          เพิ่มโปรแกรมการฝึกสอน
        </button>
      </div>
      <div className="program-list">
        {programs.length === 0 ? (
          <p>No training programs available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ชื่อโปรแกรม</th>
                <th>ประเภท</th>
                <th>รายละเอียด</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
  {programs.map((program) => (
    <tr key={program.programId}>
      <td>{program.programName}</td>
      <td>{program.programType}</td>
      <td>{program.description}</td>
      <td>
        {/* <button onClick={() => handleEditProgram(program.programId)}>Edit</button> */}
        <button className="delete" onClick={() => handleDeleteProgram(program.programId)}>Delete</button>
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
