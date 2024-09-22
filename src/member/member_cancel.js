import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './member_cancel.css';

const MemberCancel = () => {

    useEffect(() => {
        document.body.classList.add('mcc-page');
    
        return () => {
          document.body.classList.remove('mcc-page');
        };
    }, []);

    // Mock data for reservations (this could be fetched from an API)
    const [reservations, setReservations] = useState([
        { id: 1, date: '2024-09-22', time: '10:00 - 11:00', activity: 'โปรแกรมพัฒนาสำหรับผู้สูงอายุ', status: 'จองแล้ว' },
        { id: 2, date: '2024-09-23', time: '13:00 - 14:00', activity: 'โปรแกรมสร้างกล้ามเนื้อ', status: 'กำลังดำเนินการ' },
        { id: 3, date: '2024-09-24', time: '08:00 - 09:00', activity: 'โปรแกรมพัฒนาสำหรับผู้เริ่มต้น', status: 'จองแล้ว' },
    ]);

    // Handle canceling a reservation
    const handleCancel = (id) => {
        const confirmed = window.confirm("คุณต้องการยกเลิกการจองนี้หรือไม่?");
        if (confirmed) {
            // Filter out the reservation that was cancelled
            const updatedReservations = reservations.filter((reservation) => reservation.id !== id);
            setReservations(updatedReservations);
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
                        {reservations.length > 0 ? (
                            reservations.map((reservation) => (
                                <tr key={reservation.id}>
                                    <td>{reservation.date}</td>
                                    <td>{reservation.time}</td>
                                    <td>{reservation.activity}</td>
                                    <td>{reservation.status}</td>
                                    <td>
                                        <button className="cancel-button" onClick={() => handleCancel(reservation.id)}>
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
