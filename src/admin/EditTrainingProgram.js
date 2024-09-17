import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AddTrainingProgram.css';

const EditTrainingProgram = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { programIndex } = location.state || {};
  const [program, setProgram] = useState({
    image: '',
    programHName: '',
    programName: '',
    programType: '',
    duration: '',
    schedule: [],
    description: ''
  });

  useEffect(() => {
    const savedPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
    if (programIndex !== undefined && savedPrograms[programIndex]) {
      setProgram(savedPrograms[programIndex]);
    }
  }, [programIndex]);

  const handleImageChange = (e) => {
    setProgram({ ...program, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProgram({ ...program, [name]: value });
  };

  const handleSave = () => {
    let existingPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
    existingPrograms[programIndex] = program;
    localStorage.setItem('trainingPrograms', JSON.stringify(existingPrograms));
    navigate('/admin-program-m');
  };

  const handleCancel = () => {
    navigate('/admin-program-m');
  };

  return (
    <div className="add-TrainingProgram">
      <h1>Edit Training Program</h1>
      <div className="form-group">
        <label>Image:</label>
        <input type="file" onChange={handleImageChange} />
        {program.image && <img src={program.image} alt="Program" />}
      </div>
      <div className="form-group">
        <label>Program Name:</label>
        <input
          type="text"
          name="programHName"
          value={program.programHName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>ชื่อโปรแกรม:</label>
        <input
          type="text"
          name="programName"
          value={program.programName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>ระยะเวลา:</label>
        <input
          type="number"
          name="duration"
          value={program.duration}
          onChange={handleInputChange}
        />{' '}
        สัปดาห์
      </div>
      <div className="form-group">
        <label>ประเภท:</label>
        <select
          name="programType"
          value={program.programType}
          onChange={handleInputChange}
        >
          <option value="กลุ่ม">กลุ่ม</option>
          <option value="ส่วนตัว">ส่วนตัว</option>
        </select>
      </div>
      <div className="form-group">
        <label>ตารางเวลา:</label>
        <ul>
          {program.schedule.map((entry, index) => (
            <li key={index}>{entry.day} {entry.time}</li>
          ))}
        </ul>
      </div>
      <div className="form-group">
        <label>รายละเอียด:</label>
        <textarea
          name="description"
          value={program.description}
          onChange={handleInputChange}
        />
      </div>
      <button className="save" onClick={handleSave}>Save</button>
      <button className="cancel" onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditTrainingProgram;
