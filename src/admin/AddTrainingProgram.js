import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddTrainingProgram.css';
import axios from 'axios'


const AddTrainingProgram = () => {

    const [programName, setProgramName] = useState('');
    const [programType, setProgramType] = useState('');

    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('memberM-page');

        return () => {
            document.body.classList.remove('memberM-page');
        };
    }, []);

    const handleSave = async() => {
        const newProgram = {
            programName,
            description,
            programType
        };
        try {  
              const response = await axios.post('http://localhost:8080/api/programs', newProgram, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
        
              // localStorage.setItem('token', response.data.accessToken);
              // console.log('Stored token:', localStorage.getItem('token'));
        
              // Call the ok function if login is successful
        
            } catch (error) {
              console.error('Error:', error);
              // Handle error (show error message to the user, etc.)
            }

        // let existingPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
        // existingPrograms.push(newSection);
        // localStorage.setItem('trainingPrograms', JSON.stringify(existingPrograms));

        navigate('/admin-training-add'); // Navigate back to Admin Program Management page
    };

    const handleCancel = () => {
        navigate('/admin-training-program-management');
    };


    return (
        <div className="add-training-program-container">
            {/* Breadcrumb */}
            <div className="wrap-breadcrumb">
                <div className="add-training-program-breadcrumb">
                    <Link to="/admin-home" className="breadcrumb-link-programM">Home</Link>
                    <span> &gt; </span>
                    <Link to="/admin-workspace" className="breadcrumb-link-programM">Workspace</Link>
                    <span> &gt; </span>
                    <Link to="/admin-training-program-management" className="breadcrumb-link-programM">Training Program Management</Link>
                    <span> &gt; </span>
                    <span className="breadcrumb-current-programM">Add Training Program</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="add-training-program-title">Add Training Program</h1>
            <p className="add-training-program-subtitle">เพิ่มโปรแกรมการฝึกสอน</p>

            {/* form */}
            <div className="form-group-program">
                <label>ชื่อโปรแกรม:</label>
                <input
                    type="text"
                    value={programName}
                    onChange={(e) => setProgramName(e.target.value)}
                />

                <label>ประเภท:</label>
                <select value={programType} onChange={(e) => setProgramType(e.target.value)}>
                    <option value="">-- เลือกประเภท --</option>
                    <option value="กลุ่ม">กลุ่ม</option>
                    <option value="ส่วนตัว">ส่วนตัว</option>
                </select>


                <label>รายละเอียด:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="button-container">
                <button onClick={handleSave} className="save-button">Save</button>
                <button onClick={handleCancel} className="cancel-button">Cancel</button>
            </div>
        </div>
    );
};

export default AddTrainingProgram;
