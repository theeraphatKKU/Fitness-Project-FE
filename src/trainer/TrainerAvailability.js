import React, { useState, useEffect } from 'react';
import './TrainerAvailability.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

function TrainerAvailability({ user }) {
    const [entries, setEntries] = useState([]);

    // สร้าง state สำหรับเก็บค่าที่กรอกจากฟอร์ม
    const [sdate, setSdate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [trainer, setTrainer] = useState({ id: user.id });

    const [available, setAvailable] = useState([]);

    // ฟังก์ชันรีเซ็ตฟอร์ม
    const handleCancel = () => {
        setSdate('');
        setStartTime('');
        setEndTime('');
    };

    // ฟังก์ชันบันทึกข้อมูลที่กรอก
    const handleSubmit = async (e) => {
        e.preventDefault();

        // ตรวจสอบว่ามีการกรอกข้อมูลครบ
        if (sdate && startTime && endTime) {
            console.log(trainer)
            const newEntry = {
                sdate,
                startTime,
                endTime,
                trainer,
                status:"ว่าง"
            };
            console.log(newEntry)
            try {
                const response = await axios.post('http://localhost:8080/api/schedule', newEntry, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                alert('เพิ่มสำเร็จ');
            } catch (error) {
                console.error("Error adding trainer:", error);
                alert('ไม่สามารถเพิ่มได้');
            }
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
    };

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('http://localhost:8080/api/trainer', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setAvailable(response.data);
            console.log(response.data)
        }
        fetch()
        document.body.classList.add('tAvailable-page');

        return () => {
            document.body.classList.remove('tAvailable-page');
        };
    }, [available]);

    return (
        <div className="Availability-container">

            <div className="wrap-breadcrumb">
                <div className="breadcrumb-tav">
                    <Link to="/trainer-home" className="breadcrumb-link-tav">Home</Link>
                    <span> </span>
                    <span>&gt;</span>
                    <Link to="/trainer-workspace" className="breadcrumb-link-tav"> Workspace</Link>
                    <span> </span>
                    <span>&gt;</span>
                    <span className="breadcrumb-current-tav"> Availability Update</span>
                </div>
                <h1 className="page-title-tav">Availability Update</h1>
                <p className="page-subtitle-tav">อัพเดตเวลาว่าง</p>
            </div>


            <main className="Availability-contrainer2">

                <form className="form-detail-Availability" onSubmit={handleSubmit}>


                    <div className="select-date-Availability">วันที่ต้องการฝึกสอน :</div>
                    <div className="click-date-Availability">
                        <input
                            type="date"
                            className="my-auto bg-transparent border-none"
                            value={sdate}
                            onChange={(e) => {
                                const selectedDate = new Date(e.target.value);
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                if (selectedDate < today) {
                                    alert("เลือกวันไม่ถูกต้อง");
                                } else {
                                    setSdate(e.target.value);
                                }
                            }}
                            placeholder="วว/ดด/ปปปป"
                        />
                    </div>

                    <div className="select-time-Availability">เวลาที่ต้องการฝึกสอน :</div>
                    <div className="click-time-Availability">
                        <input
                            type="time"
                            id="startTime"
                            className="grow shrink w-[166px] bg-transparent border-none"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            placeholder="กรุณาระบุเวลาเริ่ม"
                        />
                        <span className="self-start-Availability">-</span>
                        <input
                            type="time"
                            id="endTime"
                            className="grow shrink w-[753px] max-md:max-w-full bg-transparent border-none"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            placeholder="กรุณาระบุเวลาเลิก"
                        />
                    </div>

                    <div className="buttonSC-Availability">
                        <button type="button" className="btc-Availability" onClick={handleCancel}>
                            ยกเลิก
                        </button>
                        <button type="submit" className="bts-Availability">
                            บันทึก
                        </button>
                    </div>
                </form>

                <div className="saved-entries-Availability">
                    <h2>ตารางเวลาที่บันทึกไว้</h2>
                    <table className="table-Availability">
                        <thead>
                            <tr>
                                <th>ระยะเวลาที่ต้องการฝึกสอน</th>
                                <th>เวลาที่ต้องการฝึกสอน</th>
                                <th>ผู้ฝึกสอน</th>
                            </tr>
                        </thead>
                        <tbody>
                            {available.map((trainer, index) => (
                                trainer.available.map((entry, i) => (
                                    <tr key={`${index}-${i}`}>
                                        <td>{new Date(entry.sdate).toLocaleDateString('en-GB')}</td> {/* Formats as dd/mm/yyyy */}
                                        <td>{entry.startTime.substring(0, 5)} - {entry.endTime.substring(0, 5)}</td> {/* Formats time as HH:mm */}
                                        <td>{trainer.name}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>


                    </table>
                </div>
            </main>
        </div>
    );
}

export default TrainerAvailability;
