import React, { useState,useEffect } from 'react';
import './TrainerAvailability.css';
import { Link } from 'react-router-dom';

function TrainerAvailability() {
    const [entries, setEntries] = useState([]);
    
    // สร้าง state สำหรับเก็บค่าที่กรอกจากฟอร์ม
    const [program, setProgram] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    // ฟังก์ชันรีเซ็ตฟอร์ม
    const handleCancel = () => {
        setProgram('');
        setDate('');
        setStartTime('');
        setEndTime('');
    };

    // ฟังก์ชันบันทึกข้อมูลที่กรอก
    const handleSubmit = (e) => {
        e.preventDefault();

        // ตรวจสอบว่ามีการกรอกข้อมูลครบ
        if (program && date && startTime && endTime) {
            const newEntry = {
                program,
                date,
                startTime,
                endTime,
            };
            setEntries([...entries, newEntry]); // เพิ่มข้อมูลลงใน state ของ entries
            handleCancel(); // รีเซ็ตฟอร์มหลังจากบันทึกข้อมูล
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
    };

    useEffect(() => {
        document.body.classList.add('tAvailable-page');
    
        return () => {
          document.body.classList.remove('tAvailable-page');
        };
      }, []);

    return (
        <div className="Availability-container">
            
            <div className="wrap-breadcrumb">
                <div className="breadcrumb-tav">
                <Link to="/trainer-home" className="breadcrumb-link-tav">Home</Link>
                <span> </span>
                <span>&gt;</span>
                <Link to="/trainer-workspace" className="breadcrumb-link-tav"> Workspace</Link>
                <span> </span>
                <span>&gt;</span>
                <span className="breadcrumb-current-tav"> Availability Update</span>
                </div>
                <h1 className="page-title-tav">Availability Update</h1>
                <p className="page-subtitle-tav">อัพเดตเวลาว่าง</p>
            </div>


            <main className="Availability-contrainer2">

                <form className="form-detail-Availability" onSubmit={handleSubmit}>
                    <div className="Program-training-Availability">โปรแกรมการฝึกสอน :</div>
                    <div className="program-Availability">
                        <select value={program} onChange={(e) => setProgram(e.target.value)}>
                            <option value=""></option>
                            {/* <optgroup label="โปรแกรมแบบกลุ่ม">
                                <option value="โปรแกรมฟิตเนสสำหรับผู้เริ่มต้น">โปรแกรมฟิตเนสสำหรับผู้เริ่มต้น</option>
                                <option value="โปรแกรมลดน้ำหนักและกระชับสัดส่วน">โปรแกรมลดน้ำหนักและกระชับสัดส่วน</option>
                                <option value="โปรแกรมสร้างกล้ามเนื้อ">โปรแกรมสร้างกล้ามเนื้อ</option>
                                <option value="โปรแกรมฟิตเนสสำหรับผู้สูงอายุ">โปรแกรมฟิตเนสสำหรับผู้สูงอายุ</option>
                            </optgroup> */}
                            <optgroup label="โปรแกรมแบบส่วนตัว">
                                <option value="โปรแกรมการฝึกสอนแบบส่วนตัว">โปรแกรมการฝึกสอนแบบส่วนตัว</option>
                            </optgroup>
                        </select>
                    </div>

                    <div className="select-date-Availability">วันที่ต้องการฝึกสอน :</div>
                    <div className="click-date-Availability">
                        <input
                            type="date"
                            className="my-auto bg-transparent border-none"
                            value={date}
                            onChange={(e) => {
                                const selectedDate = new Date(e.target.value);
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                if (selectedDate < today) {
                                    alert("เลือกวันไม่ถูกต้อง");
                                } else {
                                    setDate(e.target.value);
                                }
                            }}
                            placeholder="วว/ดด/ปปปป"
                        />
                    </div>

                    <div className="select-time-Availability">เวลาที่ต้องการฝึกสอน :</div>
                    <div className="click-time-Availability">
                        <input
                            type="time"
                            id="startTime"
                            className="grow shrink w-[166px] bg-transparent border-none"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            placeholder="กรุณาระบุเวลาเริ่ม"
                        />
                        <span className="self-start-Availability">-</span>
                        <input
                            type="time"
                            id="endTime"
                            className="grow shrink w-[753px] max-md:max-w-full bg-transparent border-none"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            placeholder="กรุณาระบุเวลาเลิก"
                        />
                    </div>

                    <div className="buttonSC-Availability">
                        <button type="button" className="btc-Availability" onClick={handleCancel}>
                            ยกเลิก
                        </button>
                        <button type="submit" className="bts-Availability">
                            บันทึก
                        </button>
                    </div>
                </form>

                <div className="saved-entries-Availability">
                    <h2>ตารางเวลาที่บันทึกไว้</h2>
                    <table className="table-Availability">
                        <thead>
                            <tr>
                                <th>โปรแกรมการฝึกสอน</th>
                                <th>ระยะเวลาที่ต้องการฝึกสอน</th>
                                <th>เวลาที่ต้องการฝึกสอน</th>
                                <th>ผู้ฝึกสอน</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.program}</td>
                                    <td>{entry.date}</td>
                                    <td>{entry.startTime} - {entry.endTime}</td>
                                    <td>ยังไม่ระบุ</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default TrainerAvailability;
