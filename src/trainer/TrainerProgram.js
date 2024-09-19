import React from "react";
import './TrainerProgram.css';
import TrainerNavbar from '../trainer/TrainerNavbar';
import { Link } from 'react-router-dom';
const TrainerProgram = () => {
    return (
      <div><TrainerNavbar/>
      <div className="T-breadcrumb">
      <div className="TrainerProgram-breadcrumb">
          <Link to="/trainer-home" className="breadcrumb-link">Home</Link><span> &gt; </span>
          <Link to="/trainer-program" className="breadcrumb-link">Program</Link>
          <div className="program-container">
        </div>
        </div>
        <h1>Our Fitness Programs</h1>
        <p>Explore our range of fitness programs tailored to help you achieve your fitness goals.</p>
        <ul>
          <li>Beginner Fitness Program</li>
          <li>Weight Loss & Toning Program</li>
          <li>Muscle Building Program</li>
          <li>Senior Fitness Program</li>
          <li>Personal Training Program</li>
        </ul>
        </div>
    </div>
  );
};
export default TrainerProgram;

