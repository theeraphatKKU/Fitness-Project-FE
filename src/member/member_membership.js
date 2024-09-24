import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './member_membership.css'; // Import your CSS here

const MemberMembership = () => {
    const navigate = useNavigate();

      // Function to handle navigation
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        // <div className="membership-container">
        //     <h2 className="membership-title">Membership Options</h2>
        //     <div className="membership-sections">
        //         <div className="membership-section" onClick={handleBookingClick}>
        //             <div className='membership-info'>
        //                 <h4>Booking</h4>
        //                 <p>Click here to book a class.</p>
        //             </div>
        //         </div>
        //         <div className="membership-section" onClick={handleScheduleClick}>
        //             <div className='membership-info'>
        //                 <h4>Schedule</h4>
        //                 <p>View your scheduled classes.</p>
        //             </div>
        //         </div>
        //         <div className="membership-section" onClick={handleCancelReservationClick}>
        //             <div className='membership-info'>
        //                 <h4>Cancel Reservation</h4>
        //                 <p>Cancel a class reservation.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="admin-workspace-container">
      <div className="wrap-breadcrumb">
        <div className="admin-breadcrumb">
          <Link to="/member-home" className="breadcrumb-link">Home</Link>
          <span> </span>
          <span>&gt;</span>
          <span className="breadcrumb-current"> Membership</span>
        </div>
        <h1 className="admin-title">Membership</h1>
        <p className="admin-subtitle">สำหรับสมาชิก</p>
      </div>

      <div className="admin-sections">
        <div className="admin-card" onClick={() => handleNavigation('/member-booking')}>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/mouse-click-icon.png" alt="Member Management" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Booking</h2>
            <p>จองการฝึกสอนหรือใช้งาน</p>
          </div>
        </div>

        <div className="admin-card" onClick={() => handleNavigation('/member-schedule')}>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/daily-schedule-icon.png" alt="Trainer Management" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Schedule</h2>
            <p>ดูตารางการฝึกสอน</p>
          </div>
        </div>

        <div className="admin-card" onClick={() => handleNavigation('/member-cancel')}>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/booking-cancel-icon.png" alt="Training Program Management" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Cancel reservation</h2>
            <p>ยกเลิกการจอง</p>
          </div>
        </div>
      </div>
    </div>

    );
};

export default MemberMembership;
