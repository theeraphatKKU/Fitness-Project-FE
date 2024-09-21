import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './member_editprofile.css';

function MemberEditProfile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate for redirection

    const handleSave = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if any field is empty
        if (!firstName || !lastName || !phoneNumber) {
            setErrorMessage('กรุณากรอกข้อมูลทุกช่อง');
            return;
        }

        // Simulate saving data (you can replace with actual API call)
        console.log('Saving:', { firstName, lastName, phoneNumber });

        // Clear the error message after successful save
        setErrorMessage('');

        // Navigate to member profile page after successful save
        navigate('/member-profile');
    };

    const handleCancel = () => {
        // Navigate back to member profile page when cancel is clicked
        navigate('/member-profile');
    };

    return (
        <div className="profile-container">
            <form className="edit-profile-form" onSubmit={handleSave}>
                <div className="profile-picture-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Profile" className="profile-picture" />
                </div>
                <h2>แก้ไขโปรไฟล์</h2>

                {/* Display error message */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className="form-group">
                    <label htmlFor="firstName">ชื่อจริง:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="ชื่อจริง"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">นามสกุล:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="นามสกุล"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">เบอร์โทรศัพท์:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="เบอร์โทรศัพท์"
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="save-button">บันทึก</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>ยกเลิก</button>
                </div>
            </form>
        </div>
    );
}

export default MemberEditProfile;
