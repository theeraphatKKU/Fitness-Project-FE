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
        <div className="profile-container-mep">
            <form className="edit-profile-form-mep" onSubmit={handleSave}>
                <div className="profile-picture-container-mep">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f973a788df5b14c62475f3508739362688152c43702c0aa0871ff97b054f9aa?placeholderIfAbsent=true&apiKey=765867cd70bd47438cc6f11c19137da0" alt="Profile" className="profile-picture-mep" />
                </div>
                <h2>แก้ไขโปรไฟล์</h2>

                {/* Display error message */}
                {errorMessage && <p className="error-message-mep">{errorMessage}</p>}

                <div className="form-group-mep">
                    <label htmlFor="firstName">ชื่อจริง:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="ชื่อจริง"
                    />
                </div>

                <div className="form-group-mep">
                    <label htmlFor="lastName">นามสกุล:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="นามสกุล"
                    />
                </div>

                <div className="form-group-mep">
                    <label htmlFor="phoneNumber">เบอร์โทรศัพท์:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="เบอร์โทรศัพท์"
                    />
                </div>

                <div className="form-actions-mep">
                    <button type="submit" className="save-button-mep">บันทึก</button>
                    <button type="button" className="cancel-button-mep" onClick={handleCancel}>ยกเลิก</button>
                </div>
            </form>
        </div>
    );
}

export default MemberEditProfile;
