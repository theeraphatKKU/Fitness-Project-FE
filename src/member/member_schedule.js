import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import './member_schedule.css';
import axios from 'axios';

const MemberSchedule = ({user}) => {
    const location = useLocation();
    const [scheduleData, setScheduleData] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [session, setSession] = useState([]);
    const [groupSession, setGroupSession] = useState([]);
    const [allSession, setAllSession] = useState([]);

    useEffect(() => {
        document.body.classList.add('mcc-page');
    
        return () => {
          document.body.classList.remove('mcc-page');
        };
    }, []);

    useEffect(() => {
        // Parse query parameters
        // const params = new URLSearchParams(location.search);
        // const program = params.get('program');
        // const trainer = params.get('trainer');
        // const date = params.get('date');

        // setSelectedProgram(program);
        // setSelectedTrainer(trainer);
        // setSelectedDate(date);

        // Fetch or simulate fetching schedule data based on selected program and trainer
        // const data = [
        //     { date: '2024-09-21', time: '08:00 - 09:00', activity: 'โปรแกรมสร้างกล้ามเนื้อ', status: 'กำลังดำเนินการ' },
        //     { date: '2024-09-22', time: '10:00 - 11:00', activity: 'โปรแกรมลดน้ำหนักและกระชับสัดส่วน', status: 'จองแล้ว' },
        //     { date: '2024-09-23', time: '13:00 - 14:00', activity: 'โปรแกรมสร้างกล้ามเนื้อ', status: 'ยกเลิก' },
        // ];
        const fetchSession= async () =>{
            try {
                const response = await axios.get('http://localhost:8080/api/session', {
                    headers: { 'Content-Type': 'application/json' },
                });
                const filteredSession = response.data.filter(session => session.member.id === user.id);
                setSession(filteredSession);
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        }
        const fetchGroupSession= async () =>{
            try {
                const response = await axios.get('http://localhost:8080/api/groupsessions', {
                    headers: { 'Content-Type': 'application/json' },
                });
                const filteredSession = response.data.filter(session => 
                    session.members.some(member => member.id === user.id)
                );
                setGroupSession(filteredSession);
                
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        }  
        fetchSession()
        fetchGroupSession()
    }, [user.id]);

    useEffect(() => {
        if (session.length > 0 || groupSession.length > 0) {
            setAllSession([...session, ...groupSession]);
        }
    }, [session, groupSession]);

    return (
        <div className="member-cancel-page">
            {/* Breadcrumb */}
            <div className="wrap-breadcrumb">
                <div className="breadcrumb-trainer">
                    <Link to="/member-home" className="breadcrumb-link-trainer">Home</Link>
                    <span> &gt; </span>
                    <Link to="/member-membership" className="breadcrumb-link-trainer">Membership</Link>
                    <span> &gt; </span>
                    <span className="breadcrumb-current-trainer">Schedule</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="page-title-trainer">Schedule</h1>
            <p className="page-subtitle-trainer">ดูตารางการฝึกสอน</p>


            
            <main className="schedule-container-msc">
                
                {/* <h2>ตารางการฝึกสอนสำหรับโปรแกรม: {selectedProgram}, ผู้ฝึกสอน: {selectedTrainer}</h2>
                <p>วันที่เลือก: {selectedDate}</p> */}

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
                        {console.log(allSession)}
                        {allSession.length > 0 ? (
                            allSession.map((entry,index) => (
                                <tr key={index}>
                                    <td>{new Date(entry.dateSession.sdate).toLocaleDateString('th-TH')}</td>
                                    <td>{entry.dateSession.startTime.substring(0,5)} - {entry.dateSession.endTime.substring(0,5)}</td>
                                    <td>{entry.program.programName}</td>
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

export default MemberSchedule;
