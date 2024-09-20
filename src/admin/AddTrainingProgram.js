import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './AddTrainingProgram.css';

const daysOfWeek = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];
const timeSlots60 = [
    '08:00-09:00', '09:00-10:00', '10:00-11:00', '13:00-14:00', '14:00-15:00', '15:00-16:00'
];
const timeSlots90 = ['08:00-09:30', '09:30-11:00', '13:00-14:30', '14:30-16:00'];

const AddTrainingProgram = () => {
    const [image, setImage] = useState(null);
    const [programHName, setProgramHName] = useState('');
    const [programName, setProgramName] = useState('');
    const [programType, setProgramType] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [selectedEntries, setSelectedEntries] = useState([]);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleSelect = (entry) => {
        setSelectedEntries(prevSelectedEntries => {
            if (prevSelectedEntries.includes(entry)) {
                return prevSelectedEntries.filter(e => e !== entry);
            } else {
                return [...prevSelectedEntries, entry];
            }
        });
    };

    const handleDeleteSelected = () => {
        setSchedule(prevSchedule => prevSchedule.filter(entry => !selectedEntries.includes(entry)));
        setSelectedEntries([]);  // เคลียร์การเลือกหลังจากลบ
    };

    React.useEffect(() => {
        if (selectedDay && selectedTime) {
            setSchedule(prevSchedule => [
                ...prevSchedule.filter(entry => entry.day !== selectedDay || entry.time !== selectedTime),
                { day: selectedDay, time: selectedTime }
            ]);
            setSelectedDay('');  // รีเซ็ตช่องเลือกวัน
            setSelectedTime(''); // รีเซ็ตช่องเลือกเวลา
        }
    }, [selectedDay, selectedTime]);

    useEffect(() => {
        document.body.classList.add('memberM-page');
    
        return () => {
          document.body.classList.remove('memberM-page');
        };
      }, []);

    const handleSave = () => {
        const newProgram = {
          image,
          programHName,
          programName,
          programType,
          schedule,
          description,
        };
      
        let existingPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
        existingPrograms.push(newProgram);
        localStorage.setItem('trainingPrograms', JSON.stringify(existingPrograms));
      
        navigate('/admin-training-program-management'); // กลับไปหน้า Admin Program Management
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
                <label>Image:</label>
                <input type="file" onChange={handleImageChange} />
                {image && <img src={image} alt="Program" className="program-image" />}
            
                <label>Program Name:</label>
                <input
                    type="text"
                    value={programHName}
                    onChange={(e) => setProgramHName(e.target.value)}
                />

                <label>ชื่อโปรแกรม:</label>
                <input
                    type="text"
                    value={programName}
                    onChange={(e) => setProgramName(e.target.value)}
                />
        
                <label>ประเภท:</label>
                <select
                    value={programType}
                    onChange={(e) => setProgramType(e.target.value)}
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
                            {schedule.map((entry, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleSelect(entry)}
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: selectedEntries.includes(entry) ? '#f0f0f0' : 'transparent'
                                    }}
                                >
                                    <td>{entry.day}</td>
                                    <td>{entry.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="delete-program" onClick={handleDeleteSelected} disabled={selectedEntries.length === 0}>
                    ลบรายการที่เลือก
                </button>
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
