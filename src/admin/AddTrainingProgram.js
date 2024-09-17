import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [duration, setDuration] = useState('');
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

    const handleSave = () => {
        const newProgram = {
          image,
          programHName,
          programName,
          duration,
          programType,
          schedule,
          description,
        };
    
        // ดึงข้อมูลโปรแกรมที่มีอยู่จาก localStorage
        let existingPrograms = JSON.parse(localStorage.getItem('trainingPrograms')) || [];
        existingPrograms.push(newProgram);
        
        // บันทึกข้อมูลใหม่ลงใน localStorage
        localStorage.setItem('trainingPrograms', JSON.stringify(existingPrograms));
    
        // นำทางไปยังหน้า AdminProgramM
        navigate('/admin-program-m');
      };
      
    const handleCancel = () => {
        navigate('/admin-program-m'); // เปลี่ยนเส้นทางไปยังหน้าอื่น
    };

    return (
        <div className="add-TrainingProgram">
            <h1>Add Training Program</h1>
            <div className="form-group">
                <label>Image:</label>
                <input type="file" onChange={handleImageChange} />
                {image && <img src={image} alt="Program" />}
            </div>
            <div className="form-group">
                <label>Program Name:</label>
                <input
                    type="text"
                    value={programHName}
                    onChange={(e) => setProgramHName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>ชื่อโปรแกรม:</label>
                <input
                    type="text"
                    value={programName}
                    onChange={(e) => setProgramName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>ระยะเวลา:</label>
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />{' '}
                สัปดาห์
            </div>
            <div className="form-group">
                <label>ประเภท:</label>
                <select
                    value={programType}
                    onChange={(e) => setProgramType(e.target.value)}
                >
                    <option value="กลุ่ม">กลุ่ม</option>
                    <option value="ส่วนตัว">ส่วนตัว</option>
                </select>
            </div>
            <div className="form-group">
                <label>ตารางเวลา:</label>
                <div className="time-selection">
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
                <div className="table-container">
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
                <button className="delete" onClick={handleDeleteSelected} disabled={selectedEntries.length === 0}>
                    ลบรายการที่เลือก
                </button>
            </div>
            <div className="form-group">
                <label>รายละเอียด:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button onClick={handleSave} className="save">Save</button>
            <button onClick={handleCancel} className="cancel">Cancel</button>
        </div>
    );
};

export default AddTrainingProgram;
