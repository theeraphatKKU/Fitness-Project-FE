import React from 'react';
import './Modal.css';

const Modal = ({ program, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <img src={program.imageUrl} alt={program.title} className="modal-image" />
          <div className="modal-text">
            <h2>{program.title}</h2>
            <p>{program.description}</p>
            <p><strong>Trainer:</strong> {program.trainer}</p> {/* แสดงชื่อเทรนเนอร์ */}
            <p><strong>ประเภท:</strong> {program.category}</p>
            <p><strong>วันและเวลา:</strong></p>
            <ul>
              {program.schedule.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
            <p>{program.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
