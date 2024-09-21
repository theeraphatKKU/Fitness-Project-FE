import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './member_schedule.css';

const Schedule = () => {
    const location = useLocation();
    const [scheduleData, setScheduleData] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        // Parse query parameters
        const params = new URLSearchParams(location.search);
        const program = params.get('program');
        const trainer = params.get('trainer');
        const date = params.get('date');

        setSelectedProgram(program);
        setSelectedTrainer(trainer);
        setSelectedDate(date);

        // Fetch or simulate fetching schedule data based on selected program and trainer
        const data = [
            { date: '2024-09-21', time: '08:00 - 09:00', activity: 'โปรแกรมสร้างกล้ามเนื้อ', status: 'กำลังดำเนินการ' },
            { date: '2024-09-22', time: '10:00 - 11:00', activity: 'โปรแกรมลดน้ำหนักและกระชับสัดส่วน', status: 'จองแล้ว' },
            { date: '2024-09-23', time: '13:00 - 14:00', activity: 'โปรแกรมสร้างกล้ามเนื้อ', status: 'ยกเลิก' },
        ];

        setScheduleData(data);
    }, [location.search]);

    return (
        <div>
            <main className="schedule-container">
                <nav>
                    <a href="#!">Home &gt; Membership &gt; Schedule</a>
                </nav>
                <h2>ตารางการฝึกสอนสำหรับโปรแกรม: {selectedProgram}, ผู้ฝึกสอน: {selectedTrainer}</h2>
                <p>วันที่เลือก: {selectedDate}</p>

                <table>
                    <thead>
                        <tr>
                            <th>วันที่</th>
                            <th>เวลา</th>
                            <th>การฝึกสอนหรือใช้งาน</th>
                            <th>สถานะ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData.length > 0 ? (
                            scheduleData.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.date}</td>
                                    <td>{entry.time}</td>
                                    <td>{entry.activity}</td>
                                    <td>{entry.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">ไม่มีข้อมูล</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Schedule;
