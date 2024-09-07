// trainer/Workspace.jsx
import React from 'react';
import TrainerNavbar from '../trainer/TrainerNavbar';
import { Route } from 'react-router-dom';
import './trainer_workspace.css';

function trainer_workspace() {
  return (
    <div>
      <TrainerNavbar />
      <Routes>
        {/* ... (route อื่นๆ) */}
        <Route path="/trainer-workspace" element={<Trainer_workspace />} /> 
      </Routes>
      <h1>หน้า Workspace</h1>
      {/* เนื้อหาของหน้า Workspace */}
    </div>
  );
}

export default trainer_workspace;