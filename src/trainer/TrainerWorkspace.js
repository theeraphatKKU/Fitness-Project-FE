import React from 'react';
import TrainerNavbar from './TrainerNavbar';
import { Route, Routes } from 'react-router-dom'; // นำเข้า Routes ที่นี่
import './TrainerWorkspace.css';

function TrainerWorkspace() {
  return (
    <div>
      <TrainerNavbar />
      <Routes>
        <Route path="/trainer-workspace" element={<TrainerWorkspace />} /> 
      </Routes>
      <h1>หน้า Workspace</h1>
      {/* เนื้อหาของหน้า Workspace */}
    </div>
  );
}

export default TrainerWorkspace;