import React, { useState } from 'react';
import './BookingConfirmation.css';
import bookingIcon from '../assets/booking-confirmation-icon.png'; // Adjust the path if necessary

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const BookingConfirmation = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onClose={handleClose}>
        <div className="booking-success">
          <div className="booking-icon">
            <img src={bookingIcon} alt="Booking Confirmation" width="100" height="100" />
            <div className="checkmark">
              
                <path d="M9 12.5L11.5 15L15 10.5" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              
            </div>
          </div>
          <h2>Message Send Successful</h2>
          <p>Your booking has been successfully processed. You can pick up your ride by your designated delivery location.</p>
        </div>
      </Modal>
    </>
  );
};

export default BookingConfirmation;
