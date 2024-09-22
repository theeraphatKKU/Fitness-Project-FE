import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import './AddTrainingProgram.css';
import axios from 'axios';

const AddTrainingSectionPrivate = () => {
    const [programName, setProgramName] = useState('');
    const [selectedSchedule, setSelectedSchedule] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [trainers, setTrainers] = useState([]); // Store trainers
    const [selectedProgram, setSelectedProgram] = useState([]);
    const navigate = useNavigate();

    // Load programs, trainers, and schedule data
    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/programs', {
                    headers: { 'Content-Type': 'application/json' },
                });
                setSelectedProgram(response.data);
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        };

        const fetchSchedule = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/schedule', {
                    headers: { 'Content-Type': 'application/json' },
                });

                const combinedSchedule = response.data.map(entry => ({
                    ...entry,
                    combined: `${new Date(entry.sdate).toLocaleDateString('en-GB')} ${entry.startTime} - ${entry.endTime}`
                }));

                setSchedule(combinedSchedule);
            } catch (error) {
                console.error('Error fetching schedule:', error);
            }
        };

        const fetchTrainers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/trainer', {
                    headers: { 'Content-Type': 'application/json' },
                });
                setTrainers(response.data); // Store trainers
            } catch (error) {
                console.error('Error fetching trainers:', error);
            }
        };

        fetchPrograms();
        fetchSchedule();
        fetchTrainers();
    }, []);

    const handleScheduleChange = (e) => {
        setSelectedSchedule(e.target.value);
    };

    const handleSave = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const selectedScheduleEntry = schedule.find(entry => entry.combined === selectedSchedule);

        if (!selectedScheduleEntry) {
            console.error('No matching schedule found for the selected date and time.');
            return;
        }

        // Find the trainer based on availability
        const trainer = trainers.find(trainer =>
            trainer.available.some(available =>
                new Date(available.sdate).toLocaleDateString('en-GB') === new Date(selectedScheduleEntry.sdate).toLocaleDateString('en-GB') &&
                available.startTime === selectedScheduleEntry.startTime &&
                available.endTime === selectedScheduleEntry.endTime
            )
        );

        if (!trainer) {
            console.error('No trainer available for the selected schedule.');
            return;
        }

        const newSession = {
            memberId: null, // Set this appropriately based on your application logic
            trainer: trainer.id, // Use the found trainer's ID
            schedule: selectedScheduleEntry.id, // Assuming the schedule ID is in the entry
            status: "ว่าง",
            program: selectedProgram.find(program => program.programName === programName)?.programId // Find the program ID by name
        };

        try {
            console.log(newSession)
            const response = await axios.post('http://localhost:8080/api/session', newSession, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('Session created successfully:', response.data);
        } catch (error) {
            console.error('Error Posting Session:', error);
        }

        navigate('/admin-training-section-management'); // Navigate back to Admin Program Management page
    };

    const handleCancel = () => navigate('/admin-training-section-management');

    return (
        <div className="add-training-program-container">
            {/* Breadcrumb */}
            <div className="wrap-breadcrumb">
                <div className="add-training-program-breadcrumb">
                    <Link to="/admin-home" className="breadcrumb-link-programM">Home</Link>
                    <span> &gt; </span>
                    <Link to="/admin-workspace" className="breadcrumb-link-programM">Workspace</Link>
                    <span> &gt; </span>
                    <Link to="/admin-training-section-management" className="breadcrumb-link-programM">Training Section Management</Link>
                    <span> &gt; </span>
                    <span className="breadcrumb-current-programM">Add Training Section</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="add-training-program-title">Add Training Section</h1>
            <p className="add-training-program-subtitle">เพิ่มเซคชันการฝึกสอนแบบส่วนตัว</p>

            {/* Form */}
            <form className="form-group-program" onSubmit={handleSave}>
                <div>
                    <label>เลือกโปรแกรม:</label>
                    <select value={programName} onChange={(e) => setProgramName(e.target.value)}>
                        <option value="">เลือกโปรแกรม</option>
                        {selectedProgram.map(program => (
                            <option key={program.programId} value={program.programName}>
                                {program.programName}
                            </option>
                        ))}
                    </select>
                </div>

                <label>ตารางเวลา:</label>
                <div className="time-selection-program">
                    <div>
                        <label>เลือกวันและเวลา:</label>
                        <select value={selectedSchedule} onChange={handleScheduleChange}>
                            <option value="">เลือกวันและเวลา</option>
                            {schedule.map((entry, index) => (
                                <option key={index} value={entry.combined}>
                                    {entry.combined}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" className="save-button">Save</button>
                    <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddTrainingSectionPrivate;
