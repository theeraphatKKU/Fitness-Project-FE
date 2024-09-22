import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'; // For navigating between routes
import './member_booking.css';

const MemberBooking = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [error, setError] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    useEffect(() => {
        document.body.classList.add('mcc-page');
    
        return () => {
          document.body.classList.remove('mcc-page');
        };
    }, []);

    const navigate = useNavigate(); // For navigation

    const handleDateChange = (event) => {
        const selected = new Date(event.target.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time part for comparison

        if (selected < today) {
            setError('คุณไม่สามารถจองวันย้อนหลังได้');
            setAvailableTimes([]);
        } else {
            setError('');
            setSelectedDate(event.target.value);
            // Simulating class times based on date selected (you can customize based on your backend response)
            setAvailableTimes(['08:00 - 09:00', '10:00 - 11:00', '13:00 - 14:00']);
        }
    };

    const handleProgramChange = (event) => {
        setSelectedProgram(event.target.value);
    };

    const handleTrainerChange = (event) => {
        setSelectedTrainer(event.target.value);
    };

    const handleReset = () => {
        setSelectedDate('');
        setSelectedProgram('');
        setSelectedTrainer('');
        setError('');
        setAvailableTimes([]);
    };

    const handleSchedule = () => {
        if (selectedProgram && selectedTrainer && selectedDate) {
            // Navigate to schedule page and pass program, trainer, and date as query parameters
            navigate(`/member-schedule?program=${encodeURIComponent(selectedProgram)}&trainer=${encodeURIComponent(selectedTrainer)}&date=${encodeURIComponent(selectedDate)}`);
        } else {
            setError('กรุณาเลือกโปรแกรม ผู้ฝึกสอน และวันที่ก่อนค้นหา');
        }
    };

    return (
        <div className ="member-booking-page">
            {/* Breadcrumb */}
            <div className="wrap-breadcrumb">
                <div className="breadcrumb-trainer">
                    <Link to="/member-home" className="breadcrumb-link-trainer">Home</Link>
                    <span> &gt; </span>
                    <Link to="/member-membership" className="breadcrumb-link-trainer">Membership</Link>
                    <span> &gt; </span>
                    <span className="breadcrumb-current-trainer">Booking</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="page-title-trainer">Booking</h1>
            <p className="page-subtitle-trainer">จองการฝึกสอนหรือใช้งาน</p>

            {/* booking table */}
            <main className="booking-container-mbk">
                <h2>จองคลาสเรียน</h2>
                <p>กรุณาเลือกโปรแกรมและผู้ฝึกสอนที่ต้องการ</p>

                <div className="form-group-mbk">
                    <label htmlFor="program">โปรแกรมการฝึกสอน:</label>
                    <select id="program" value={selectedProgram} onChange={handleProgramChange} required>
                        <option value="">-- เลือกโปรแกรม --</option>
                        <option value="program1">โปรแกรมฟิตเนสสำหรับผู้เริ่มต้น</option>
                        <option value="program2">โปรแกรมสร้างกล้ามเนื้อ</option>
                        <option value="program3">โปรแกรมลดน้ำหนักและกระชับสัดส่วน</option>
                        <option value="program4">โปรแกรมฟิตเนสสำหรับผู้สูงอายุ</option>
                        <option value="program5">โปรแกรมการฝึกสอนแบบตัวต่อตัว</option>
                    </select>
                </div>

                <div className="form-group-mbk">
                    <label htmlFor="trainer">ผู้ฝึกสอน:</label>
                    <select id="trainer" value={selectedTrainer} onChange={handleTrainerChange} required>
                        <option value="">-- เลือกผู้ฝึกสอน --</option>
                        <option value="trainer1">พี่หน่วง</option>
                        <option value="trainer2">พี่เอก สายเต๊าะ</option>
                        <option value="trainer3">พี่เก่ง พลังช้าง</option>
                        <option value="trainer4">พี่เพอร์ซีอุส</option>
                    </select>
                </div>

                <div className="form-group-mbk">
                    <label htmlFor="bookingDate">วันที่ต้องการจอง:</label>
                    <input type="date" id="bookingDate" value={selectedDate} onChange={handleDateChange} required />
                    {error && <p className="error-message">{error}</p>}
                </div>

                {/* Class Time Selection */}
                {availableTimes.length > 0 && (
                    <div className="form-group-mbk">
                        <label htmlFor="classTime">เลือกเวลาเรียน:</label>
                        <select id="classTime" required>
                            <option value="">-- เลือกเวลาเรียน --</option>
                            {availableTimes.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                )}

                <div className="form-actions-mbk">
                    <button type="button" className="btn save-mbk" onClick={handleSchedule}>ค้นหาเวลาเรียน</button>
                    <button type="reset" className="btn cancel-mbk" onClick={handleReset}>ยกเลิก</button>
                </div>
            </main>
        </div>
    );
};

export default MemberBooking;
