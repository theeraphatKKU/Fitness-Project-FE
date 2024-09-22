import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import './AddTrainingProgram.css';

const AddTrainingSectionPrivate = () => {
    const daysOfWeek = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];
    const timeSlots60 = ['08:00-09:00', '09:00-10:00', '10:00-11:00', '13:00-14:00', '14:00-15:00', '15:00-16:00'];
    const timeSlots90 = ['08:00-09:30', '09:30-11:00', '13:00-14:30', '14:30-16:00'];

    const [programName, setProgramName] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [selectedEntries, setSelectedEntries] = useState([]);
    const [groupPrograms, setGroupPrograms] = useState([]);
    const navigate = useNavigate();

    // Load programs from localStorage and filter both group and private programs
    useEffect(() => {
        const existingPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
        const filteredPrograms = existingPrograms.filter(program => program.type === 'ส่วนตัว');
        setGroupPrograms(filteredPrograms);
    }, []);
    

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
        setSelectedEntries([]);  // Clear selections after deleting
    };

    useEffect(() => {
        if (selectedDay && selectedTime) {
            setSchedule(prevSchedule => [
                ...prevSchedule.filter(entry => entry.day !== selectedDay || entry.time !== selectedTime),
                { day: selectedDay, time: selectedTime }
            ]);
            setSelectedDay('');  // Reset day selection
            setSelectedTime(''); // Reset time selection
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
            type: 'ส่วนตัว' // เพิ่มชนิดเป็นส่วนตัว
        };

        let existingPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
        existingPrograms.push(newSection);
        localStorage.setItem('trainingPrograms', JSON.stringify(existingPrograms));

        navigate('/admin-training-section-management'); // Navigate back to Admin Program Management page
    };

    const handleCancel = () => {
        navigate('/admin-training-section-management');
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
                    <Link to="/admin-training-section-management" className="breadcrumb-link-programM">Training Section Management</Link>
                    <span> &gt; </span>
                    <span className="breadcrumb-current-programM">Add Training Section</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="add-training-program-title">Add Training Section</h1>
            <p className="add-training-program-subtitle">เพิ่มเซคชันการฝึกสอนแบบส่วนตัว</p>

            {/* form */}
            <div className="form-group-program">
                <div><label>เลือกโปรแกรม:</label>
                    <select value={programName} onChange={(e) => setProgramName(e.target.value)}>
                        <option value="">เลือกโปรแกรม</option>
                        {groupPrograms.map(program => (
                            <option key={program.id} value={program.name}>
                                {program.name}
                            </option>
                        ))}
                    </select>
                </div>

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
            </div>

            <div className="button-container">
                <button onClick={handleSave} className="save-button">Save</button>
                <button onClick={handleCancel} className="cancel-button">Cancel</button>
            </div>
        </div>
    );
};

export default AddTrainingSectionPrivate;
