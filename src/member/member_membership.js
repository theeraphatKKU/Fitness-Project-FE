import React from 'react';
import { useNavigate } from 'react-router-dom';
import './member_membership.css'; // Import your CSS here

const Membership = () => {
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate('/member-booking'); // Route to booking page
    };

    const handleScheduleClick = () => {
        navigate('/member-schedule'); // Route to schedule page
    };

    const handleCancelReservationClick = () => {
        navigate('/member-cancel'); // Route to cancel reservation page
    };

    return (
        <div className="membership-container">
            <h2 className="membership-title">Membership Options</h2>
            <div className="membership-sections">
                <div className="membership-section" onClick={handleBookingClick}>
                    <div className='membership-info'>
                        <h4>Booking</h4>
                        <p>Click here to book a class.</p>
                    </div>
                </div>
                <div className="membership-section" onClick={handleScheduleClick}>
                    <div className='membership-info'>
                        <h4>Schedule</h4>
                        <p>View your scheduled classes.</p>
                    </div>
                </div>
                <div className="membership-section" onClick={handleCancelReservationClick}>
                    <div className='membership-info'>
                        <h4>Cancel Reservation</h4>
                        <p>Cancel a class reservation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;
