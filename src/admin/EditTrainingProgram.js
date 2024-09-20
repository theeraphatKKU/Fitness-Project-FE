import React, { useState, useEffect } from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import './AddTrainingProgram.css';

const daysOfWeek = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];
const timeSlots60 = [
    '08:00-09:00', '09:00-10:00', '10:00-11:00', '13:00-14:00', '14:00-15:00', '15:00-16:00'
];
const timeSlots90 = ['08:00-09:30', '09:30-11:00', '13:00-14:30', '14:30-16:00'];

const EditTrainingProgram = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { programIndex } = location.state || {};
    const [program, setProgram] = useState({
        image: '',
        programHName: '',
        programName: '',
        programType: '',
        schedule: [],
        description: ''
    });
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        const savedPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
        if (programIndex !== undefined && savedPrograms[programIndex]) {
            setProgram(savedPrograms[programIndex]);
        }
    }, [programIndex]);

    useEffect(() => {
        document.body.classList.add('programM-page');
    
        return () => {
          document.body.classList.remove('programM-page');
        };
      }, []);

    const handleImageChange = (e) => {
        setProgram({ ...program, image: URL.createObjectURL(e.target.files[0]) });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProgram({ ...program, [name]: value });
    };

    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    useEffect(() => {
        if (selectedDay && selectedTime) {
            setProgram(prevProgram => ({
                ...prevProgram,
                schedule: [
                    ...prevProgram.schedule.filter(entry => entry.day !== selectedDay || entry.time !== selectedTime),
                    { day: selectedDay, time: selectedTime }
                ]
            }));
            setSelectedDay(''); // รีเซ็ตช่องเลือกวัน
            setSelectedTime(''); // รีเซ็ตช่องเลือกเวลา
        }
    }, [selectedDay, selectedTime]);

    const handleSave = () => {
        let existingPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
        existingPrograms[programIndex] = program; // อัปเดตโปรแกรมที่แก้ไข
        localStorage.setItem('trainingPrograms', JSON.stringify(existingPrograms));
    
        navigate('/admin-training-program-management'); // กลับไปหน้า Admin Program Management
    };

    const handleCancel = () => {
        navigate('/admin-training-program-management');
    };

    return (
        <div className="add-training-program-container">
            <div className="wrap-breadcrumb">
                <div className="add-training-program-breadcrumb">
                    <Link to="/admin-home" className="breadcrumb-link-programM">Home</Link>
                    <span> &gt; </span>
                    <Link to="/admin-workspace" className="breadcrumb-link-programM">Workspace</Link>
                    <span> &gt; </span>
                    <Link to="/admin-training-program-management" className="breadcrumb-link-programM">Training Program Management</Link>
                    <span> &gt; </span>
                    <span className="breadcrumb-current-programM">Edit Training Program</span>
                </div>
            </div>

            <h1 className="add-training-program-title">Edit Training Program</h1>
            <p className="add-training-program-subtitle">แก้ไขโปรแกรมการฝึกอบรม</p>

            <div className="form-group-program">
                <label>Image:</label>
                <input type="file" onChange={handleImageChange} />
                {program.image && <img src={program.image} alt="Program" className="program-image" />}
                
                <label>Program Name:</label>
                <input
                    type="text"
                    name="programHName"
                    value={program.programHName}
                    onChange={handleInputChange}
                />

                <label>ชื่อโปรแกรม:</label>
                <input
                    type="text"
                    name="programName"
                    value={program.programName}
                    onChange={handleInputChange}
                />
        
                <label>ประเภท:</label>
                <select
                    name="programType"
                    value={program.programType}
                    onChange={handleInputChange}
                >
                    <option value="กลุ่ม">กลุ่ม</option>
                    <option value="ส่วนตัว">ส่วนตัว</option>
                </select>
   
                <label>ตารางเวลา:</label>
                <div className="time-selection-program">
                    <div>
                        <label>วัน:</label>
                        <select value={selectedDay} onChange={handleDayChange}>
                            <option value="">เลือกวัน</option>
                            {daysOfWeek.map((day, index) => (
                                <option key={index} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>เวลา:</label>
                        <select value={selectedTime} onChange={handleTimeChange}>
                            <option value="">เลือกเวลา</option>
                            <optgroup label="60 นาที">
                                {timeSlots60.map((time, i) => (
                                    <option key={i} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </optgroup>
                            <optgroup label="90 นาที">
                                {timeSlots90.map((time, i) => (
                                    <option key={i} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className="table-container-program">
                    <table>
                        <thead>
                            <tr>
                                <th>วัน</th>
                                <th>เวลา</th>
                            </tr>
                        </thead>
                        <tbody>
                            {program.schedule.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.day}</td>
                                    <td>{entry.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <label>รายละเอียด:</label>
                <textarea
                    name="description"
                    value={program.description}
                    onChange={handleInputChange}
                />
            </div>
            <div className="button-container">
                <button onClick={handleSave} className="save-button">Save</button>
                <button onClick={handleCancel} className="cancel-button">Cancel</button>
            </div>
        </div>
    );
};

export default EditTrainingProgram;
