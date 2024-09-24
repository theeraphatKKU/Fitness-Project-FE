import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './member_cancel.css';
import axios from 'axios';

const MemberCancel = ({ user }) => {
    const [sessions, setSession] = useState([]);
    const [groupsession, setGroupSession] = useState([]);
    const [allSession, setAllSession] = useState([]);

    // Function to fetch sessions
    const fetchSessions = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/session', {
                headers: { 'Content-Type': 'application/json' },
            });
            const filteredSession = response.data && Array.isArray(response.data)
                ? response.data.filter(session => session.member && session.member.id === user.id)
                : [];
            setSession(filteredSession);
        } catch (error) {
            console.error('Error fetching sessions:', error);
        }
    };

    // Function to fetch group sessions
    const fetchGroupSessions = async () => {
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
            console.error('Error fetching group sessions:', error);
        }
    };

    useEffect(() => {
        fetchSessions();
        fetchGroupSessions();
        document.body.classList.add('mcc-page');

        return () => {
            document.body.classList.remove('mcc-page');
        };
    }, [user.id]);

    useEffect(() => {
        if (sessions.length > 0 || groupsession.length > 0) {
            // Merge sessions and groupsession into allSession
            const mergedSessions = [...sessions, ...groupsession];
    
            // Sort by sdate first and then by startTime
            mergedSessions.sort((a, b) => {
              const dateA = new Date(a.dateSession.sdate);
              const dateB = new Date(b.dateSession.sdate);
    
              if (dateA < dateB) return -1;
              if (dateA > dateB) return 1;
    
              // If dates are the same, sort by startTime
              const timeA = a.dateSession.startTime;
              const timeB = b.dateSession.startTime;
    
              return timeA.localeCompare(timeB);
            });
    
            setAllSession(mergedSessions);
          }
        }, [sessions, groupsession]);

    // Handle canceling a reservation
    const handleCancel = async (sess) => {
        const confirmed = window.confirm("คุณต้องการยกเลิกการจองนี้หรือไม่?");
        if (confirmed) {
            if (sess.program.programType === "ส่วนตัว") {
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
                    await axios.put(`http://localhost:8080/api/session/${sess.sessionId}`, sessionDetails, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    alert('ยกเลิก Session เรียบร้อย');
                    // Re-fetch sessions after successful cancellation
                    fetchSessions();
                    fetchGroupSessions();
                } catch (error) {
                    console.error("Error deleting Session:", error);
                    alert('ไม่สามารถจอง Session ได้');
                }
            } else if (sess.program.programType === "กลุ่ม") {
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
                            .filter(member => member.id !== sess.member.id) // Filter out the canceled member
                            .map(member => ({ id: member.id }))
                        : null,
                    status: "ว่าง"
                };

                try {
                    await axios.put(`http://localhost:8080/api/groupsessions/${sess.sessionId}`, sessionDetails, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    alert('ยกเลิกการจองกลุ่มเรียบร้อย');
                    // Re-fetch sessions after successful cancellation
                    fetchSessions();
                    fetchGroupSessions();
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
                            <th>ผู้ฝึกสอน</th>
                            <th>สถานะ</th>
                            <th>ยกเลิก</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSession.length > 0 ? (
                            allSession.map((reservation) => (
                                <tr key={reservation.sessionId}>
                                    <td>{new Date(reservation.dateSession.sdate).toLocaleDateString('th-TH')}</td>
                                    <td>{reservation.dateSession.startTime.substring(0, 5)} - {reservation.dateSession.endTime.substring(0, 5)}</td>
                                    <td>{reservation.program.programName}</td>
                                    <td>{reservation.trainer.name}</td>
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
