import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './member_cancel.css';
import axios from 'axios';


const MemberCancel = ({user}) => {
    const [session, setSession] = useState([]);
    const [groupSession, setGroupSession] = useState([]);
    const [allSession, setAllSession] = useState([]);
    useEffect(() => {
        const fetchSession= async () =>{
            try {
                const response = await axios.get('http://localhost:8080/api/session', {
                    headers: { 'Content-Type': 'application/json' },
                });
                const filteredSession = response.data && Array.isArray(response.data)
                ? response.data.filter(session => session.member && session.member.id === user.id)
                : null;                setSession(filteredSession);
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        }
        const fetchGroupSession= async () =>{
            try {
                const response = await axios.get('http://localhost:8080/api/groupsessions', {
                    headers: { 'Content-Type': 'application/json' },
                });
                const filteredSession = response.data && Array.isArray(response.data)
            ? response.data.filter(session => 
                session.members && session.members.some(member => member.id === user.id)
              )
            : [];
                setGroupSession(filteredSession);
                
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        }  
        fetchSession()
        fetchGroupSession()
        document.body.classList.add('mcc-page');
    
        return () => {
          document.body.classList.remove('mcc-page');
        };
    }, [user.id]);

    useEffect(() => {
        if (session.length > 0 || groupSession.length > 0) {
            setAllSession([...session, ...groupSession]);
        }
    }, [session, groupSession]);

    // Mock data for reservations (this could be fetched from an API)
    // const [reservations, setReservations] = useState([
    //     { id: 1, date: '2024-09-22', time: '10:00 - 11:00', activity: 'โปรแกรมพัฒนาสำหรับผู้สูงอายุ', status: 'จองแล้ว' },
    //     { id: 2, date: '2024-09-23', time: '13:00 - 14:00', activity: 'โปรแกรมสร้างกล้ามเนื้อ', status: 'กำลังดำเนินการ' },
    //     { id: 3, date: '2024-09-24', time: '08:00 - 09:00', activity: 'โปรแกรมพัฒนาสำหรับผู้เริ่มต้น', status: 'จองแล้ว' },
    // ]);

    // Handle canceling a reservation
    const handleCancel = async (sess) => {
        const confirmed = window.confirm("คุณต้องการยกเลิกการจองนี้หรือไม่?");
        if (confirmed) {
            if (sess.program.programType == "ส่วนตัว") {
                const sessionDetails = {
                    program: {
                        programId: sess.program.programId // Assuming programId is available
                    },
                    dateSession: {
                        id: sess.dateSession.id // Assuming dateSession ID is available
                    },
                    trainer: {
                        id: sess.trainer.id // Assuming trainer ID is available
                    },
                    members: [
                        {
                            id: sess.member.id
                        }
                    ],
                    status: "ว่าง"
                };
                try {
                    const response = await axios.put(`http://localhost:8080/api/session/${sess.sessionId}`, sessionDetails,{
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    alert('ยกเลิก Session เรียบร้อย');
                } catch (error) {
                    console.error("Error deleting Session:", error);
                    alert('ไม่สามารถจอง Session ได้');
                }
            } if (sess.program.programType == "กลุ่ม") {
                const sessionDetails = {
                    program: {
                        programId: sess.program.programId
                    },
                    dateSession: {
                        id: sess.dateSession.id
                    },
                    trainer: {
                        id: sess.trainer.id
                    },
                    members: (sess.members && sess.member)
        ? sess.members
            .filter(member => member.id !== sess.member.id) // กรองสมาชิกที่ถูกยกเลิกออก
            .map(member => ({ id: member.id }))
            : null,
                    status: "ว่าง"
                };
                console.log(sessionDetails);
    
                try {
                    const response = await axios.put(`http://localhost:8080/api/groupsessions/${sess.sessionId}`, sessionDetails, { // Use correct endpoint for group sessions
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    alert('ยกเลิกการจองกลุ่มเรียบร้อย');
                } catch (error) {
                    console.error("Error canceling group Session:", error);
                    alert('ไม่สามารถยกเลิกการจองกลุ่มได้');
                }
            }
        }
    };


    return (
        <div className="member-cancel-page">
            {/* Breadcrumb */}
            <div className="wrap-breadcrumb">
                <div className="breadcrumb-trainer">
                    <Link to="/member-home" className="breadcrumb-link-trainer">Home</Link>
                    <span> &gt; </span>
                    <Link to="/member-membership" className="breadcrumb-link-trainer">Membership</Link>
                    <span> &gt; </span>
                    <span className="breadcrumb-current-trainer">Cancel Reservation</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="page-title-trainer">Cancel Reservation</h1>
            <p className="page-subtitle-trainer">ยกเลิกการจองที่มีอยู่</p>

            {/* Reservation Table */}
            <main className="cancel-reservation-container-mcc">
                <table className="reservation-table-mcc">
                    <thead>
                        <tr>
                            <th>วันที่</th>
                            <th>เวลา</th>
                            <th>การฝึกสอนหรือใช้งาน</th>
                            <th>สถานะ</th>
                            <th>ยกเลิก</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSession.length > 0 ? (
                            allSession.map((reservation) => (
                                <tr key={reservation.sessionId}>
                                    <td>{new Date(reservation.dateSession.sdate).toLocaleDateString('th-TH')}</td>
                                    <td>{reservation.dateSession.startTime.substring(0,5)} - {reservation.dateSession.endTime.substring(0,5)}</td>
                                    <td>{reservation.program.programName}</td>
                                    <td>จองแล้ว</td> 
                                    {/* จองแล้วสำหรับมุมมองสมาชิกเท่านั้น  */}
                                    <td>
                                        <button className="cancel-button" onClick={() => handleCancel(reservation)}>
                                            ยกเลิก
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">ไม่มีการจองที่สามารถยกเลิกได้</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
        </div>
        
    );
};

export default MemberCancel;
