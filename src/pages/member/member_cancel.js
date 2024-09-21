import React, { useState } from 'react';
import './member_cancel.css';

const CancelReservation = () => {
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
        <div>
            {/* Breadcrumb */}
            <nav>
                <a href="#!">Home &gt; Membership &gt; Cancel Reservation</a>
            </nav>

            <main className="cancel-reservation-container">
                <h2>ยกเลิกการจอง</h2>
                <p>ยกเลิกการจอง</p>
                
                <table>
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

export default CancelReservation;
