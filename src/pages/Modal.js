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
          <div className="modal-text">
            <h2>{program.programHName}</h2>
            <h3>{program.programName}</h3>
            <p><strong>Type:</strong> {program.programType}</p>
    
            <p>{program.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
