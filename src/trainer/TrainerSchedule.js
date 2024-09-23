import React, { useState,useEffect } from 'react';

import './TrainerSchedule.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TrainerSchedule({user}) {
    const trainingPrograms_Group = [
        { day: 'วันอังคาร', time: '8:00 - 9:30 น.' },
        { day: 'วันพฤหัส', time: '9:30 - 11:00 น.' },
        { day: 'วันศุกร์', time: '13:00 - 14:30 น.' },
        { day: 'วันเสาร์', time: '14:30 - 16:00 น.' },
        { day: 'วันอาทิตย์', time: '8:00 - 9:30 น.' },
    ];

    const privateTraining = [
        { member: 'น้องจอย', date: '05/08/2024', duration: '10:00 - 11:30 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว' },
        { member: 'พี่พงศ์', date: '10/08/2024', duration: '13:00 - 14:30 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว' },
        { member: 'สมชาย ชัยโย', date: '02/09/2024', duration: '09:00 - 10:00 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว' },
        { member: 'ขวัญใจ ดีมาก', date: '05/09/2024', duration: '13:00 - 14:30 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว', status: 'ยกเลิก' },
        { member: 'Chris Evans', date: '05/11/2024', duration: '09:00 - 10:00 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว' },
        { member: 'Emily Clark', date: '05/12/2024', duration: '13:00 - 14:30 น.', program: 'โปรแกรมการฝึกสอนแบบส่วนตัว', status: 'ยกเลิก' }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4;
    const totalPages = Math.ceil(privateTraining.length / rowsPerPage);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = privateTraining.slice(indexOfFirstRow, indexOfLastRow);
    const [session, setSession] = useState([]);

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

    const parseDate = (dateString) => {
        if (!dateString) return new Date();
        const [day, month, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
    };

    const getStatusStyle = (date, status) => {
        const currentDate = new Date();
        const sessionDate = parseDate(date);
        if (status === 'ยกเลิก') {
            return { color: 'red' };
        } else if (sessionDate < currentDate) {
            return { color: 'green' };
        } else {
            return { color: 'blue' };
        }
    };

    const getTrainingStatus = (date, status) => {
        const currentDate = new Date();
        const sessionDate = parseDate(date);
        if (status === 'ยกเลิก') {
            return 'ยกเลิก';
        } else if (sessionDate < currentDate) {
            return 'เสร็จสิ้น';
        } else {
            return 'จอง';
        }
    };
    
    useEffect(() => {
        const fetchScheduleOfTrainer = async () =>{
            try {
                const response = await axios.get('http://localhost:8080/api/schedule', {
                    headers: { 'Content-Type': 'application/json' },
                });
                const filteredTrainer = response.data.filter(session => session.trainer.id === user);
                setSession(filteredTrainer);
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        } 
        fetchScheduleOfTrainer()
        document.body.classList.add('tschedule-page');
    
        return () => {
          document.body.classList.remove('tschedule-page');
        };
      }, []);

    return (
        <div className='TrainerSchedule-container'>
            
            <div className="wrap-breadcrumb">
                <div className="breadcrumb-ts">
                <Link to="/trainer-home" className="breadcrumb-link-ts">Home</Link>
                <span> </span>
                <span>&gt;</span>
                <Link to="/trainer-workspace" className="breadcrumb-link-ts"> Workspace</Link>
                <span> </span>
                <span>&gt;</span>
                <span className="breadcrumb-current-ts"> Schedule</span>
                </div>
                <h1 className="page-title-ts">Schedule</h1>
                <p className="page-subtitle-ts">ดูตารางฝึกสอน</p>
            </div>

            <div className='contrainer'>
                {/* <h4>
                    โปรแกรมการสอนที่ได้รับผิดชอบ:
                    <span style={{ fontWeight: 'normal' }}> โปรแกรมสร้างกล้ามเนื้อ, โปรแกรมการฝึกสอนแบบส่วนตัว</span>
                </h4> */}
                <h4>โปรแกรมการฝึกสอนกลุ่ม</h4>
                <div className="GroupTable-trainer">
                    <table className="table-ts">
                        <thead>
                            <tr>
                                <th>โปรแกรม</th>
                                <th>วัน</th>
                                <th>เวลา</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={session.length}>โปรแกรมสร้างกล้ามเนื้อ</td>
                                <td>{session}</td>
                                <td>{session}</td>
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

                <h4><br />โปรแกรมการฝึกสอนแบบส่วนตัว</h4>
                <div className="PrivateTable-trainer">
                    <table className="table-ts">
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
        </div>
    );
}

export default TrainerSchedule;
