import React, { useState } from 'react';
import './member_booking.css';

const Booking = () => {
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [error, setError] = useState('');
    const [filteredClasses, setFilteredClasses] = useState([]);

    const bookingClasses = [
        {
            program: 'program2',
            date: '2024-09-22',
            trainer: 'trainer1',
            time: '08:00 - 09:00',
            name: 'โปรแกรมสร้างกล้ามเนื้อ',
            trainerName: 'พี่หน่วง'
        },
        {
            program: 'program2',
            date: '2024-09-22',
            trainer: 'trainer3',
            time: '16:00 - 17:00',
            name: 'โปรแกรมสร้างกล้ามเนื้อ',
            trainerName: 'พี่เก่ง พลังช้าง'
        },
        {
            program: 'program1',
            date: '2024-09-24',
            trainer: 'trainer2',
            time: '10:00 - 11:00',
            name: 'โปรแกรมฟิตเนสสำหรับผู้เริ่มต้น',
            trainerName: 'พี่เอก สายเต๊าะ'
        }
        // Add more classes as needed
    ];

    const handleSearch = () => {
        const searchResults = [];

        // Check for matching conditions
        bookingClasses.forEach((bookingClass) => {
            const isProgramMatch = !selectedProgram || bookingClass.program === selectedProgram;
            const isDateMatch = !selectedDate || bookingClass.date === selectedDate;
            const isTrainerMatch = !selectedTrainer || bookingClass.trainer === selectedTrainer;

            // If any condition is met, add to the results
            if (isProgramMatch && isDateMatch && isTrainerMatch) {
                searchResults.push(bookingClass);
            }
        });

        if (searchResults.length > 0) {
            setFilteredClasses(searchResults);
            setError('');
        } else {
            setFilteredClasses([]);
            setError('ไม่พบเวลาเรียนที่ต้องการ');
        }
    };

    return (
        <div>
            <nav className="breadcrumb">
                <a href="#!">Home &gt; Membership &gt; Booking</a>
            </nav>

            <div className="booking-container">
                <h2>จองคลาสเรียน</h2>
                <p>กรุณาเลือกโปรแกรมและผู้ฝึกสอนที่ต้องการ</p>

                <div className="form-group">
                    <label htmlFor="program">โปรแกรมการฝึกสอน:</label>
                    <select id="program" value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}>
                        <option value="">-- เลือกโปรแกรม --</option>
                        <option value="program1">โปรแกรมฟิตเนสสำหรับผู้เริ่มต้น</option>
                        <option value="program2">โปรแกรมสร้างกล้ามเนื้อ</option>
                        <option value="program3">โปรแกรมลดน้ำหนักและกระชับสัดส่วน</option>
                        <option value="program4">โปรแกรมฟิตเนสสำหรับผู้สูงอายุ</option>
                        <option value="program5">โปรแกรมการฝึกสอนแบบตัวต่อตัว</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="bookingDate">วันที่ต้องการจอง:</label>
                    <input
                        type="date"
                        id="bookingDate"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="trainer">ผู้ฝึกสอน:</label>
                    <select id="trainer" value={selectedTrainer} onChange={(e) => setSelectedTrainer(e.target.value)}>
                        <option value="">-- เลือกผู้ฝึกสอน --</option>
                        <option value="trainer1">พี่หน่วง</option>
                        <option value="trainer2">พี่เอก สายเต๊าะ</option>
                        <option value="trainer3">พี่เก่ง พลังช้าง</option>
                        <option value="trainer4">พี่เพอร์ซีอุส</option>
                    </select>
                </div>

                <div className="form-actions">
                    <button type="button" className="btn search" onClick={handleSearch}>ค้นหาเวลาเรียน</button>
                    <button type="reset" className="btn cancel" onClick={() => { setSelectedProgram(''); setSelectedDate(''); setSelectedTrainer(''); setFilteredClasses([]); }}>ยกเลิก</button>
                </div>

                {/* Class Time Selection */}
                <div className="class-selection">
                    <h3>เลือกเวลาเรียน:</h3>
                    {filteredClasses.length > 0 ? (
                        filteredClasses.map((cls, index) => (
                            <div className="class-option" key={index}>
                                <p>{cls.date} - {cls.name} ({cls.trainerName})</p>
                                <p>{cls.time}</p>
                                <button className="btn select">เลือก</button>
                            </div>
                        ))
                    ) : (
                        <p className="error-message">{error || 'เลือกโปรแกรมการฝึกสอน วันที่ หรือผู้ฝึกสอนเพื่อค้นหาเวลาเรียน'}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Booking;
