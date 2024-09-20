import React, { useState } from 'react';
import TrainerNavbar from './TrainerNavbar';
import './TrainerAvailability.css';
import { Link } from 'react-router-dom';
function TrainerAvailability() {



  // สร้าง state สำหรับเก็บค่าที่กรอกจากฟอร์ม
  const [program, setProgram] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [entries, setEntries] = useState([]);

  // ฟังก์ชันรีเซ็ตฟอร์ม
  const handleCancel = () => {
    setProgram('');
    setDate('');
    setStartTime('');
    setEndTime('');
  };

  // ฟังก์ชันบันทึกข้อมูลที่กรอก
  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบว่ามีการกรอกข้อมูลครบ
    if (program && date && startTime && endTime) {
      const newEntry = {
        program,
        date,
        startTime,
        endTime,
      };
      setEntries([...entries, newEntry]); // เพิ่มข้อมูลลงใน state ของ entries
      handleCancel(); // รีเซ็ตฟอร์มหลังจากบันทึกข้อมูล
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  };

  return (
    <div className="Availability-container">
      <TrainerNavbar />
      <div className="T-breadcrumb">
        <div className="TrainerAvailability-breadcrumb">
          <Link to="/trainer-home" className="breadcrumb-link">Home</Link>
          <span> &gt; </span>
          <Link to="/trainer-workspace" className="breadcrumb-link">Workspace</Link>
          <span> &gt; </span>
          <Link to="/trainer-availability" className="breadcrumb-link">Availability</Link>
        </div>
      </div>
      <main className="Availability-contrainer">

        {/* ส่วนแสดงหัวข้อ */}
        <>
          <h1 className="Availability-Update">
            Availability Update {/* อัปเดตเวลาว่าง */}
          </h1>
          <p>
            อัปเดตเวลาว่าง
          </p>
        </>

        {/* ส่วนของฟอร์ม */}
        <form className="form-detail" onSubmit={handleSubmit}>

          {/* ช่องเลือกโปรแกรม */}
          <div className="Program-training">
            โปรแกรมการฝึกสอน :
          </div>
          <div className="program">
            <select value={program} onChange={(e) => setProgram(e.target.value)}>
              <option value="">   </option>

              {/* โปรแกรมแบบกลุ่ม */}
              <optgroup label="โปรแกรมแบบกลุ่ม">
                <option value="โปรแกรมฟิตเนสสำหรับผู้เริ่มต้น">โปรแกรมฟิตเนสสำหรับผู้เริ่มต้น</option>
                <option value="โปรแกรมลดน้ำหนักและกระชับสัดส่วน">โปรแกรมลดน้ำหนักและกระชับสัดส่วน</option>
                <option value="โปรแกรมสร้างกล้ามเนื้อ">โปรแกรมสร้างกล้ามเนื้อ</option>
                <option value="โปรแกรมฟิตเนสสำหรับผู้สูงอายุ">โปรแกรมฟิตเนสสำหรับผู้สูงอายุ</option>
              </optgroup>

              {/* โปรแกรมแบบส่วนตัว */}
              <optgroup label="โปรแกรมแบบส่วนตัว">
                <option value="โปรแกรมการฝึกสอนแบบส่วนตัว">โปรแกรมการฝึกสอนแบบส่วนตัว</option>
              </optgroup>
            </select>
          </div>


          {/* ช่องเลือกวันที่ */}
          <div className="select-date">
            วันที่ต้องการฝึกสอน :
          </div>
          <div className="click-date">
            <input
              type="date"
              className="my-auto bg-transparent border-none"
              value={date}
              onChange={(e) => {
                const selectedDate = new Date(e.target.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0); // ตั้งค่าเวลาเป็น 00:00 ของวันนี้
                if (selectedDate < today) {
                  alert("เลือกวันไม่ถูกต้อง");
                } else {
                  setDate(e.target.value); // อัปเดตวันที่ถ้าเลือกวันอนาคต
                }
              }}
              placeholder="วว/ดด/ปปปป"
            />
          </div>

          {/* ช่องเลือกเวลา */}
          <div className="select-time">
            เวลาที่ต้องการฝึกสอน {/* ข้อความบอกให้ผู้ใช้ระบุเวลา */}
          </div>
          <div className="click-time">
            <input
              type="time"
              id="startTime"
              className="grow shrink w-[166px] bg-transparent border-none"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              placeholder="กรุณาระบุเวลาเริ่ม"
            />
            <span className="self-start">-</span>
            <input
              type="time"
              id="endTime"
              className="grow shrink w-[753px] max-md:max-w-full bg-transparent border-none"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              placeholder="กรุณาระบุเวลาเลิก"
            />
          </div>

          {/* ปุ่มยกเลิกและบันทึก */}
          <div className="buttonSC">
            <button type="button" className="btc" onClick={handleCancel}>
              ยกเลิก {/* ปุ่มยกเลิก */}
            </button>
            <button type="submit" className="bts">
              บันทึก {/* ปุ่มบันทึก */}
            </button>
          </div>
        </form>

        {/* แสดงตารางข้อมูลที่บันทึก */}
        <div className="saved-entries">
          <h2>ตารางเวลาที่บันทึกไว้</h2>
          <table className="table">
            <thead>
              <tr>
                <th>โปรแกรมการฝึกสอน</th>
                <th>ระยะเวลาที่ต้องการฝึกสอน</th>
                <th>เวลาที่ต้องการฝึกสอน</th>
                <th>ผู้ฝึกสอน</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.program}</td>
                  <td>{entry.date}</td>
                  <td>{entry.startTime} - {entry.endTime}</td>
                  <td>ยังไม่ระบุ</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default TrainerAvailability;
