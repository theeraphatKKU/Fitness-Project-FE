import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Program.css';
import Modal from './Modal';

const Program = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: 'Beginner Fitness Program',
      description: 'โปรแกรมฟิตเนสสำหรับผู้เริ่มต้น',
      trainer: 'พี่หน่วง',
      category: 'กลุ่ม',
      schedule: [
        'วันจันทร์: 8:00 - 9:00 น.',
        'วันพุธ: 9:00 - 10:00 น.',
        'วันศุกร์: 10:00 - 11:00 น.'
      ],
      details: 'โปรแกรมนี้ออกแบบมาเพื่อผู้ที่เพิ่งเริ่มต้นออกกำลังกายหรือกลับมาออกกำลังกายหลังจากพักไปนาน...',
      imageUrl: 'https://jang.com.pk/assets/uploads/updates/2024-06-24/14635_7809149_excersice_updates.jpg'
    },
    {
      id: 2,
      title: 'Weight Loss & Toning Program',
      description: 'โปรแกรมลดน้ำหนักและกระชับสัดส่วน',
      trainer: 'พี่เอก สายเต๊าะ',
      category: 'กลุ่ม',
      schedule: [
        'วันจันทร์: 8:00 - 9:30 น.',
        'วันพุธ: 9:30 - 11:00 น.',
        'วันศุกร์: 13:00 - 14:30 น.',
        'วันเสาร์: 14:30 - 16:00  น.'
      ],
      details: 'โปรแกรมนี้มุ่งเน้นไปที่การลดน้ำหนักและการกระชับสัดส่วน...',
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/toQN78jq68Q2cik7DCiKo3-970-80.jpg.webp'
    },
    {
      id: 3,
      title: 'Muscle Building Program',
      description: 'โปรแกรมสร้างกล้ามเนื้อ',
      trainer: 'พี่เก่ง พลังช้าง',
      category: 'กลุ่ม',
      schedule: [
        'วันอังคาร: 8:00 - 9:30 น.',
        'วันพฤหัส: 9:30 - 11:00 น.',
        'วันศุกร์: 13:00 - 14:30 น.',
        'วันเสาร์: 14:30 - 16:00 น.',
        'วันอาทิตย์: 8:00 - 9:30 น.'
      ],
      details: 'โปรแกรมนี้ออกแบบมาเพื่อผู้ที่ต้องการสร้างกล้ามเนื้อและเพิ่มความแข็งแกร่ง...',
      imageUrl: 'https://espressocoder.co.uk/wp-content/uploads/2024/06/Wellhealthorganic.comhow-to-build-muscle-know-tips-to-increase-muscles-1-1024x536.jpg'
    },
    {
      id: 4,
      title: 'Senior Fitness Program',
      description: 'โปรแกรมฟิตเนสสำหรับผู้สูงอายุ',
      trainer: 'พี่เพอร์ซีอุส',
      category: 'กลุ่ม',
      schedule: [
        'วันอังคาร: 9:00 - 10:00 น.',
        'วันพฤหัสบดี: 13:00 - 14:00 น.',
        'วันอาทิตย์: 15:00 - 16:00 น.'
      ],
      details: 'โปรแกรมฟิตเนสนี้เหมาะสำหรับผู้สูงอายุที่ต้องการรักษาสุขภาพและความยืดหยุ่น...',
      imageUrl: 'https://img.freepik.com/premium-photo/smiling-senior-couple-holding-dumbbells-while-exercising_107420-18511.jpg?w=900'
    },
    {
      id: 5,
      title: 'Personal Training Program',
      description: 'โปรแกรมการฝึกสอนแบบส่วนตัว',
      trainer: 'เลือกได้ทุกคน',
      category: 'เดี่ยว',
      schedule: [
        'นัดหมายตามเวลาและสถานที่ที่คุณและผู้ฝึกสะดวก'
      ],
      details: 'ออกแบบตามเป้าหมายส่วนตัวของคุณ โดยมีผู้ฝึกสอนส่วนตัวดูแลอย่างใกล้ชิด...',
      imageUrl: 'https://images.fresha.com/lead-images/placeholders/personal-trainer-2.jpg?class=venue-gallery-mobile&dpr=2'
    },
  ];

  const handleOpenModal = (program) => {
    setSelectedProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  return (
    <div className="program-container">
      <div className='wrap-breadcrumb'>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span> &gt; </span>
          <span className="breadcrumb-current">Program</span>
        </div>
        <h1 className="program-title">Program</h1>
        <p className="program-subtitle">โปรแกรมการฝึกสอน</p>
      </div>
      <div className="program-grid">
        {programs.map((program) => (
          <div className="program-card" key={program.id}>
            <img src={program.imageUrl} alt={program.title} />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <button className="program-detail-link" onClick={() => handleOpenModal(program)}>
              รายละเอียด
            </button>

          </div>
        ))}
      </div>

      {selectedProgram && (
        <Modal program={selectedProgram} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Program;
