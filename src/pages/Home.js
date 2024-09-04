import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <nav className="home-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#program">Program</a></li>
                    <li><a href="#membership">Membership</a></li>
                    <li><a href="#contact">Contact us</a></li>
                    <li><input type="text" placeholder="Search..."/></li>
                </ul>
            </nav>
            <header className="home-header">
                <h1>Welcome to CS Fitness</h1>
                <p>Join us and start your fitness journey today!</p>
            </header>
            <h2 id="about">About us</h2>
            <section className="home-AboutUs">
                <ul>
                    ยินดีต้อนรับสู่ CS Fitness 
                    จุดหมายปลายทางสำหรับสุขภาพและการออกกำลังกายที่สมบูรณ์แบบของคุณ ที่ CS Fitness 
                    เราเชื่อมั่นในการสร้างชุมชนที่ทุกคนไม่ว่าจะมีระดับความฟิตเนสแค่ไหนก็สามารถมาร่วมกันเพื่อบรรลุเป้าหมายด้านสุขภาพของตนเองได้
                </ul>
            </section>
            <h2 id="programs">Our Programs</h2>
            <section className="home-programs">
                <p>Choose from our programs to get started:</p>
                <ul>
                    <li>Beginner Fitness Program</li>
                    <li>Weight Loss & Toning Program</li>
                    <li>Muscle Building Program</li>
                    <li>Senior Fitness Program</li>
                    <li>Personal Training Program </li>
                </ul>
            </section>
            <footer className="home-footer">
                <p>Contact us: info@csfitness.com</p>
            </footer>
        </div>
    );
}

export default Home;