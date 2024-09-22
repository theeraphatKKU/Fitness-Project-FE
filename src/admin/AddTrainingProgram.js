import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddTrainingProgram.css';


const AddTrainingProgram = () => {

    const [programName, setProgramName] = useState('');
    const [programType, setProgramType] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [selectedEntries, setSelectedEntries] = useState([]);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const [sectionType, setSectionType] = useState('');  // ประกาศ state สำหรับ sectionType

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
        const newSection = {
            programName,
            schedule,
            sectionType, // เพิ่ม sectionType ที่นี่
        };

        let existingPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
        existingPrograms.push(newSection);
        localStorage.setItem('trainingPrograms', JSON.stringify(existingPrograms));

        navigate('/admin-training-section-management'); // Navigate back to Admin Program Management page
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
                <select value={sectionType} onChange={(e) => setSectionType(e.target.value)}>
                    <option value="">-- เลือกเซคชัน --</option>
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
