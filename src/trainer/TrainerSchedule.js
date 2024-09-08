import React, { useState } from 'react';
import TrainerNavbar from './TrainerNavbar';
import './TrainerSchedule.css';

function TrainerSchedule() {
    // ข้อมูลโปรแกรมการฝึกสอนกลุ่ม
    const trainingPrograms_Group = [
        { day: 'วันอังคาร', time: '8:00 - 9:30 น.' },
        { day: 'วันพฤหัส', time: '9:30 - 11:00 น.' },
        { day: 'วันศุกร์', time: '13:00 - 14:30 น.' },
        { day: 'วันเสาร์', time: '14:30 - 16:00 น.' },
        { day: 'วันอาทิตย์', time: '8:00 - 9:30 น.' },
    ];
    ////////
    const privateTraining = [
        { member: 'น้องจอย', date: '05/08/2024', duration: '10:00 - 11:30 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว', },
        { member: 'พี่พงศ์', date: '10/08/2024', duration: '13:00 - 14:30 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว', },
        { member: 'สมชาย ชัยโย', date: '02/09/2024', duration: '09:00 - 10.00 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว' },
        { member: 'ขวัญใจ ดีมาก', date: '05/09/2024', duration: '13:00 - 14:30 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว', status: 'ยกเลิก' },
        { member: 'Chris Evans', date: '05/11/2024', duration: '09:00 - 10.00 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว' },
        { member: 'Emily Clark', date: '05/12/2024', duration: '13:00 - 14:30 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว',status: 'ยกเลิก' }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4; // จำนวนแถวที่จะแสดงต่อหน้า

    // คำนวณจำนวนหน้าทั้งหมด
    const totalPages = Math.ceil(privateTraining.length / rowsPerPage);

    // คำนวณข้อมูลที่จะแสดงในหน้าปัจจุบัน
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = privateTraining.slice(indexOfFirstRow, indexOfLastRow);

    // ฟังก์ชันเพื่อเปลี่ยนหน้า
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // ฟังก์ชันเพื่อแปลงวันที่เป็นรูปแบบ Date Object
    const parseDate = (dateString) => {
        if (!dateString) return new Date(); // ตรวจสอบให้แน่ใจว่า dateString มีค่า
        const [day, month, year] = dateString.split('/');
        if (!day || !month || !year) return new Date(); // ตรวจสอบว่า day, month, year มีค่า
        return new Date(`${year}-${month}-${day}`);
    };

    // ฟังก์ชันเพื่อกำหนดสถานะอัตโนมัติ
    const getStatusStyle = (date, status) => {
        const currentDate = new Date(); // วันที่ปัจจุบัน
        const sessionDate = parseDate(date); // เปลี่ยนรูปแบบวันที่

        // ตรวจสอบสถานะตามวันที่และสถานะที่กำหนดไว้
        if (status === 'ยกเลิก') {
            return { color: 'red' }; // สถานะยกเลิกเป็นสีแดง
        } else if (sessionDate < currentDate) {
            return { color: 'green' }; // สถานะเสร็จสิ้นหากวันที่ผ่านไปแล้วเป็นสีเขียว
        } else {
            return { color: 'blue' }; // สถานะอื่นๆ เป็นสีน้ำเงิน
        }
    };

    // ฟังก์ชันเพื่อกำหนดสถานะ
    const getTrainingStatus = (date, status) => {
        const currentDate = new Date(); // วันที่ปัจจุบัน
        const sessionDate = parseDate(date); // เปลี่ยนรูปแบบวันที่

        // กำหนดสถานะตามวันที่และสถานะที่กำหนดไว้
        if (status === 'ยกเลิก') {
            return 'ยกเลิก'; // หากสถานะเป็นยกเลิก
        } else if (sessionDate < currentDate) {
            return 'เสร็จสิ้น'; // หากวันที่ผ่านไปแล้ว
        } else {
            return 'กำลังดำเนินการ'; // สถานะกำลังดำเนินการ
        }
    };

    return (
        <div>
            <TrainerNavbar />
            <h1>ตารางการฝึกสอน</h1>
            <h4>
                โปรแกรมการสอนที่ได้รับผิดชอบ:
                <span style={{ fontWeight: 'normal' }}> โปรแกรมสร้างกล้ามเนื้อ, โปรแกรมการฝึกสอนแบบส่วนตัว</span>
            </h4>
            <h4>โปรแกรมการฝึกสอนกลุ่ม</h4>
            <div className="GroupTable-trainer">
                <table className="table">
                    <thead>
                        <tr>
                            <th>โปรแกรม</th>
                            <th>วัน</th>
                            <th>เวลา</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={trainingPrograms_Group.length}>โปรแกรมสร้างกล้ามเนื้อ</td>
                            <td>{trainingPrograms_Group[0].day}</td>
                            <td>{trainingPrograms_Group[0].time}</td>
                        </tr>
                        {trainingPrograms_Group.slice(1).map((program, index) => (
                            <tr key={index}>
                                <td>{program.day}</td>
                                <td>{program.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="PrivateTable-trainer">
                <table className="table">
                    <thead>
                        <tr>
                            <th>สมาชิก</th>
                            <th>วันที่</th>
                            <th>ระยะเวลา</th>
                            <th>โปรแกรมการฝึกสอน</th>
                            <th>สถานะ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((session, index) => (
                            <tr key={index}>
                                <td>{session.member}</td>
                                <td>{session.date}</td>
                                <td>{session.duration}</td>
                                <td>{session.program}</td>
                                <td style={getStatusStyle(session.date, session.status)}>
                                    {getTrainingStatus(session.date, session.status)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button className="pagination-btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
                    &lt;
                </button>
                <button className="pagination-btn">{currentPage}</button>
                <button className="pagination-btn" onClick={handleNextPage} disabled={currentPage === totalPages}>
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default TrainerSchedule;
