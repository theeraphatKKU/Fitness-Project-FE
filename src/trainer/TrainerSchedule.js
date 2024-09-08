import React from 'react';
import TrainerNavbar from './TrainerNavbar';
import './TrainerSchedule.css';
import './TrainerSchedule.css';
function TrainerSchedule() {
    // ข้อมูลโปรแกรมการฝึกสอนกลุ่ม ทำงี้ไปก่อนนะเตงไม่รู้จะหาเชื่อมจากไหน
    const trainingPrograms_Group = [
        { day: 'วันอังคาร', time: '8:00 - 9:30 น.' },
        { day: 'วันพฤหัส', time: '9:30 - 11:00 น.' },
        { day: 'วันศุกร์', time: '13:00 - 14:30 น.' },
        { day: 'วันเสาร์', time: '14:30 - 16:00 น.' },
        { day: 'วันอาทิตย์', time: '8:00 - 9:30 น.' },
    ];

    return (
        <div>
            <TrainerNavbar />
            <h1>Schedule</h1>ดูตารางการฝึกสอน
            <h4>
                โปรแกรมการสอนที่ได้รับผิดชอบ:
                <span style={{ fontWeight: 'normal' }}> โปรแกรมสร้างกล้ามเนื้อ, โปรแกรมการฝึกสอนแบบส่วนตัว</span>
            </h4>
            <h4>โปรแกรมการฝึกสอนกลุ่ม</h4>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>โปรแกรม</th>
                            <th>วัน</th>
                            <th>เวลา</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* แถวแรกจะแสดงชื่อโปรแกรมครั้งเดียว */}
                        <tr>
                            <td rowSpan={trainingPrograms_Group.length}>โปรแกรมสร้างกล้ามเนื้อ</td>
                            <td>{trainingPrograms_Group[0].day}</td>
                            <td>{trainingPrograms_Group[0].time}</td>
                        </tr>

                        {/* ส่วนที่เหลือจะแสดงวันและเวลา */}
                        {trainingPrograms_Group.slice(1).map((program, index) => (
                            <tr key={index}>
                                <td>{program.day}</td>
                                <td>{program.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TrainerSchedule;
