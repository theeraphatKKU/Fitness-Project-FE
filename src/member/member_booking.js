import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './member_booking.css';

const Booking = () => {
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [error, setError] = useState('');
    const [filteredClasses, setFilteredClasses] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [trainers, setTrainers] = useState([])
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        const fetchProgram = async () => {
            const response = await axios.get('http://10.153.55.214:8080/api/programs', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setPrograms(response.data)
        }
        const fetchTrainer = async () => {
            const response = await axios.get('http://10.153.55.214:8080/api/trainer', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setTrainers(response.data)
        }
        fetchProgram()
        fetchTrainer()
    }, []);


    const handleSearch = async () => {
        try {
            const fetchSession = async () => {
                const response = await axios.get('http://10.153.55.214:8080/api/session', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setSessions(response.data)
        }
        fetchSession();
    
            const filteredSessions = sessions.filter(session => {
                const matchesProgram = !selectedProgram || session.program?.programName === selectedProgram;
                const matchesDate = !selectedDate || session.dateSession?.sdate.slice(0, 10) === selectedDate;
                const matchesTrainer = !selectedTrainer || session.trainer?.name === selectedTrainer;
                return matchesProgram && matchesDate && matchesTrainer;
            }).map(session => ({
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
    const findSessionToBook = (cls) => {
        return sessions.find(session => {
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
    
        const bookingDetails = {
            program: {
                id: sessionToBook.program.programId // Assuming programId is available
            },
            dateSession: {
                id: sessionToBook.dateSession.id // Assuming dateSession ID is available
            },
            trainer: {
                id: sessionToBook.trainer.id // Assuming trainer ID is available
            },
            member: {
                id: 11
            },
            status: "จองแล้ว"
        };
        console.log(bookingDetails)

        try {
            const response = await axios.put('http://10.153.55.214:8080/api/session/${sessionToBook.sessionId}', bookingDetails, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        
            console.log('Booking successful:', response.data); // Check if this line runs
        } catch (error) {
            console.error('Error booking class:', error.response ? error.response.data : error.message);
            setError('เกิดข้อผิดพลาดในการจองคลาส');
        }
        
    };
    
    return (
        <div>
            <nav className="breadcrumb">
                <a href="#!">Home &gt; Membership &gt; Booking</a>
            </nav>

            <div className="booking-container">
                <h2>จองคลาสเรียน</h2>
                <p>กรุณาเลือกโปรแกรมและผู้ฝึกสอนที่ต้องการ</p>

                <div className="form-group">
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

                <div className="form-group">
                    <label htmlFor="bookingDate">วันที่ต้องการจอง:</label>
                    <input
                        type="date"
                        id="bookingDate"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>

                <div className="form-group">
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

                <div className="form-actions">
                    <button type="button" className="btn search" onClick={handleSearch}>ค้นหาเวลาเรียน</button>
                    <button type="reset" className="btn cancel" onClick={() => { setSelectedProgram(''); setSelectedDate(''); setSelectedTrainer(''); setFilteredClasses([]); }}>ยกเลิก</button>
                </div>

                {/* Class Time Selection */}
                <div className="class-selection">
                    <h3>เลือกเวลาเรียน:</h3>
                    {filteredClasses.length > 0 ? (
                        filteredClasses.map((cls, index) => (
                            <div className="class-option" key={index}>
                                <p>{new Date(cls.scheduleDate).toLocaleDateString('en-GB')} - {cls.programName} </p>
                                <p>({cls.trainerName})</p>
                                <p>{cls.startTime.substring(0, 5)} - {cls.endTime.substring(0, 5)}</p>
                                <button className="btn select" onClick={() => handleSelectClass(cls)}>เลือก</button>
                            </div>
                        ))
                    ) : (
                        <p className="error-message">{error || 'เลือกโปรแกรมการฝึกสอน วันที่ หรือผู้ฝึกสอนเพื่อค้นหาเวลาเรียน'}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Booking;
