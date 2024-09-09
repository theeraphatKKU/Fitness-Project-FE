import React from 'react';
import TrainerNavbar from './TrainerNavbar';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import './TrainerWorkspace.css';



function TrainerWorkspace() {
  const navigate = useNavigate(); // ประกาศ navigate
  return (
    <div className='Workspace-container'>
      <TrainerNavbar />

      <header>
        <h1 className="text-6xl font-bold text-black max-md:max-w-full max-md:text-4xl">
          Workspace : Trainer
        </h1>
        <p className="mt-4 text-4xl text-black">สำหรับครูฝึก</p>
      </header>
      <button className="schedule-button" onClick={() => navigate('/trainer-schedule')}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc38f2fbfe96599f0074185f50a435fe16c5c0bb15900128c518d62750b76cbf?placeholderIfAbsent=true&apiKey=765867cd70bd47438cc6f11c19137da0"
          alt="Schedule"
          className="button-image-s"
        />
        <span className="button-text-s">
          Schedule<br />ดูตารางการฝึกสอน
        </span>
      </button>

      <button className="availability-button" onClick={() => navigate('/trainer-availability')}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb13fad4f99ae42930bf1c68eb5b6955019fd42b7500b2f42ab784f89fac3d17?placeholderIfAbsent=true&apiKey=765867cd70bd47438cc6f11c19137da0"
          alt="Availability"
          className="button-image-a"
        />
        <span className="button-text-a">
          Availability Update<br />อัปเดตเวลาว่าง
        </span>
      </button>

    </div>
  );
}

export default TrainerWorkspace;