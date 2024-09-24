import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './member_booking.css';

const Booking = ({ user }) => {
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [error, setError] = useState('');
    const [filteredClasses, setFilteredClasses] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [groupsession, setGroupSession] = useState([]);
    const [allSession, setAllSession] = useState([]);

    useEffect(() => {
        const fetchProgram = async () => {
            const response = await axios.get('http://localhost:8080/api/programs', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setPrograms(response.data)
        }
        const fetchTrainer = async () => {
            const response = await axios.get('http://localhost:8080/api/trainer', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setTrainers(response.data)
        }
        fetchProgram()
        fetchTrainer()
    }, []);

            // Add or Remove class to body for styling the page
    useEffect(() => {
        // เพิ่มคลาส 'full-page-background' ให้กับ body เมื่อคอมโพเนนต์นี้ถูกแสดงผล
        document.body.classList.add('full-page-background');

        // ลบคลาสออกเมื่อคอมโพเนนต์นี้ถูกทำลาย
        return () => {
            document.body.classList.remove('full-page-background');
        };
    }, []);


    const handleSearch = async () => {
        try {
            const fetchSession = async () => {
                const response = await axios.get('http://localhost:8080/api/session', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setSessions(response.data)
            }
            const fetchGroupSession = async () => {
                try {
                    const response = await axios.get('http://localhost:8080/api/groupsessions', {
                        headers: { 'Content-Type': 'application/json' },
                    });
                    setGroupSession(response.data)
                } catch (error) {

                }
            }
            fetchGroupSession();
            fetchSession();

            const filteredSessions = allSession.filter(session => {
                const matchesProgram = !selectedProgram || session.program?.programName === selectedProgram;
                const matchesDate = !selectedDate || session.dateSession?.sdate.slice(0, 10) === selectedDate;
                const matchesTrainer = !selectedTrainer || session.trainer?.name === selectedTrainer;
                const notReservered = session.status === "ว่าง";
                return matchesProgram && matchesDate && matchesTrainer && notReservered;
            }).map(session => ({
                type: session.program ? session.program.programType : 'N/A',
                programName: session.program ? session.program.programName : 'N/A',
                trainerName: session.trainer ? session.trainer.name : 'N/A',
                scheduleDate: session.dateSession ? session.dateSession.sdate : 'N/A',
                startTime: session.dateSession ? session.dateSession.startTime : 'N/A',
                endTime: session.dateSession ? session.dateSession.endTime : 'N/A',
            }));

            setFilteredClasses(filteredSessions);
            setError('');
        } catch (error) {
            console.error('Error fetching session data:', error);
            setError('เกิดข้อผิดพลาดในการดึงข้อมูลเวลาเรียน');
        }
    };
    useEffect(() => {
        if (sessions.length > 0 && groupsession.length > 0) {
            setAllSession([...sessions, ...groupsession]);
        }
    }, [sessions, groupsession]);

    const findSessionToBook = (cls) => {
        return allSession.find(session => {
            const isProgramMatch = session.program?.programName === cls.programName;
            const isDateMatch = session.dateSession?.sdate === cls.scheduleDate;
            const isStartTimeMatch = session.dateSession?.startTime === cls.startTime;
            const isEndTimeMatch = session.dateSession?.endTime === cls.endTime;
            const isTrainerMatch = session.trainer?.name === cls.trainerName;

            // Log comparisons for debugging
            console.log('Comparing session:', {
                programMatch: isProgramMatch,
                dateMatch: isDateMatch,
                startTimeMatch: isStartTimeMatch,
                endTimeMatch: isEndTimeMatch,
                trainerMatch: isTrainerMatch,
            });

            return isProgramMatch && isDateMatch && isStartTimeMatch && isEndTimeMatch && isTrainerMatch;
        });
    };

    const handleSelectClass = async (cls) => {
        console.log(cls)


        const sessionToBook = findSessionToBook(cls);
        console.log(sessionToBook)
        if (!sessionToBook) {
            setError('ไม่พบการจองที่ตรงกัน');
            return;
        }
        const confirmReserve = window.confirm("Are you sure you want to Reserve this program?");
        if (confirmReserve) {
            if (cls.type == "ส่วนตัว") {
                const bookingDetails = {
                    program: {
                        programId: sessionToBook.program.programId // Assuming programId is available
                    },
                    dateSession: {
                        id: sessionToBook.dateSession.id // Assuming dateSession ID is available
                    },
                    trainer: {
                        id: sessionToBook.trainer.id // Assuming trainer ID is available
                    },
                    member: {
                        id: user.id
                    },
                    status: "จองแล้ว"
                };
                console.log(bookingDetails)

                try {
                    const response = await axios.put('http://localhost:8080/api/session/' + sessionToBook.sessionId, bookingDetails, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    alert('จอง Session เรียบร้อย');
                } catch (error) {
                    console.error("Error deleting Session:", error);
                    alert('ไม่สามารถจอง Session ได้');
                }
            } if (cls.type == "กลุ่ม") {
                const bookingDetails = {
                    program: {
                        programId: sessionToBook.program.programId // Assuming programId is available
                    },
                    dateSession: {
                        id: sessionToBook.dateSession.id // Assuming dateSession ID is available
                    },
                    trainer: {
                        id: sessionToBook.trainer.id // Assuming trainer ID is available
                    },
                    members: [
                        {
                            id: user.id
                        }
                    ],
                    status: "ว่าง"
                };
                console.log(bookingDetails)

                try {
                    const response = await axios.put('http://localhost:8080/api/groupsessions/' + sessionToBook.sessionId, bookingDetails, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    alert('จอง Session เรียบร้อย');
                } catch (error) {
                    console.error("Error deleting Session:", error);
                    alert('ไม่สามารถจอง Session ได้');
                }
            } else {
                alert('ไม่สามารถจอง Session ได้');
            }
        }
    };

    return (
        <div className ="member-booking-page">
            {/* Breadcrumb */}
            <div className="wrap-breadcrumb">
                <div className="breadcrumb-trainer">
                    <Link to="/member-home" className="breadcrumb-link-trainer">Home</Link>
                    <span> &gt; </span>
                    <Link to="/member-membership" className="breadcrumb-link-trainer">Membership</Link>
                    <span> &gt; </span>
                    <span className="breadcrumb-current-trainer">Booking</span>
                </div>
            </div>

             {/* Title */}
             <h1 className="page-title-trainer">Booking</h1>
            <p className="page-subtitle-trainer">จองการฝึกสอนหรือใช้งาน</p>

            {/* booking table */}
            <main className="booking-container-mbk">
                {/* <h2>จองคลาสเรียน</h2> */}
                <p>กรุณาเลือกโปรแกรมและผู้ฝึกสอนที่ต้องการ</p>

                <div className="form-group-mbk">
                    <label htmlFor="program">โปรแกรมการฝึกสอน:</label>
                    <select id="program" value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}>
                        <option value="">-- เลือกโปรแกรม --</option>
                        {programs.map((program) => (
                            <option key={program.programId} value={program.programName}>
                                {program.programName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group-mbk">
                    <label htmlFor="bookingDate">วันที่ต้องการจอง:</label>
                    <input
                        type="date"
                        id="bookingDate"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>

                <div className="form-group-mbk">
                    <label htmlFor="trainer">ผู้ฝึกสอน:</label>
                    <select id="trainer" value={selectedTrainer} onChange={(e) => setSelectedTrainer(e.target.value)}>
                        <option value="">-- เลือกผู้ฝึกสอน --</option>
                        {trainers.map((trainer) => (
                            <option key={trainer.id} value={trainer.name}>
                                {trainer.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-actions-mbk">
                    <button type="button" className="btn-search-mbk" onClick={handleSearch}>ค้นหาเวลาเรียน</button>
                    <button type="reset" className="btn-cancel-mbk" onClick={() => { setSelectedProgram(''); setSelectedDate(''); setSelectedTrainer(''); setFilteredClasses([]); }}>ยกเลิก</button>
                </div>

                {/* Class Time Selection */}
<div className="class-selection-mbk">
    <h3>เลือกเวลาเรียน:</h3>
    {filteredClasses.length > 0 ? (
        <table className="class-table">
            <thead>
                <tr>
                    <th>วันที่</th>
                    <th>เวลา</th>
                    <th>โปรแกรม</th>
                    <th>ผู้ฝึกสอน</th>
                    <th>สถานะ</th>
                    <th>เลือก</th>
                </tr>
            </thead>
            <tbody>
                {filteredClasses
                    .sort((a, b) => new Date(a.scheduleDate) - new Date(b.scheduleDate)) // Sort by date
                    .map((cls, index) => (
                        <tr key={index}>
                            <td>{new Date(cls.scheduleDate).toLocaleDateString('en-GB')}</td>
                            <td>{cls.startTime.substring(0, 5)} - {cls.endTime.substring(0, 5)}</td>
                            <td>{cls.programName}</td>
                            <td>{cls.trainerName}</td>
                            <td>
                                <span className="status-available">
                                    ว่าง
                                </span>
                            </td>
                            <td>
                                <button className="btn-select-mbk" onClick={() => handleSelectClass(cls)}>จอง</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    ) : (
        <p className="error-message">{error || 'เลือกโปรแกรมการฝึกสอน วันที่ หรือผู้ฝึกสอนเพื่อค้นหาเวลาเรียน'}</p>
    )}
</div>

            </main>
        </div>
    );
};

export default Booking;
