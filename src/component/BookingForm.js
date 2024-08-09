import React, { useState } from 'react';
import './BookingForm.css';
import { IonIcon } from '@ionic/react';
import Navbar from './Navbar';
import Footer from './footer';
import { useNavigate } from 'react-router-dom'; // Correct import

const BookingForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    MobileNumber: '',
    vehicleModel: '',
    VehichleNumber: '',
    PickupDate: '',
    DeliveryDate: '',
    Address: '',
    City: '',
    State: '',
    action: 'upcoming' // Add default action
  });

  const navigate = useNavigate(); // Use useNavigate hook

  const handleBook = () => {
    navigate('/payment'); // Use navigate function
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(formData);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert('Booking saved successfully!');
    setFormData({
      FirstName: '',
      LastName: '',
      MobileNumber: '',
      vehicleModel: '',
      VehichleNumber: '',
      PickupDate: '',
      DeliveryDate: '',
      Address: '',
      City: '',
      State: '',
      action: 'upcoming'
    });
  };

  return (
    <div>
      <Navbar />
      <br></br><br></br>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <div className="input-box">
              <h4>First Name</h4>
              <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange} placeholder="First Name" className="name" required />
              <IonIcon icon="person" className="icon" />
            </div>
            <div className="input-box">
              <h4>Last Name</h4>
              <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} placeholder="Last Name" className="name" required />
              <IonIcon icon="person" className="icon" />
            </div>
          </div>

          <div className="input">
            <div className="input-box">
              <h4>Mobile Number</h4>
              <input type="text" name="MobileNumber" value={formData.MobileNumber} onChange={handleChange} placeholder="Enter your mobile number" className="name" required />
              <IonIcon icon="mail" className="icon" />
            </div>
          </div>

          <div className="input">
            <div className="input-box">
              <h4>Vehicle Model</h4>
              <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} placeholder="Vehicle Name" className="name" required />
              <IonIcon icon="car" className="icon" />
            </div>
            <div className="input-box">
              <h4>Vehicle Number</h4>
              <input type="text" name="VehichleNumber" value={formData.VehichleNumber} onChange={handleChange} placeholder="Vehicle Number" className="name" required />
              <IonIcon icon="car" className="icon" />
            </div>
          </div>

          <div className="input">
            <div className="input-box">
              <h4>Pickup Date</h4>
              <input type="date" name="PickupDate" value={formData.PickupDate} onChange={handleChange} className="dob pl-2" />
            </div>
            <div className="input-box">
              <h4>Delivery Date</h4>
              <input type="date" name="DeliveryDate" value={formData.DeliveryDate} onChange={handleChange} className="dob" />
            </div>
          </div>

          <div className="input">
            <div className="input-box">
              <h4>Address</h4>
              <input type="text" name="Address" value={formData.Address} onChange={handleChange} placeholder="Address" className="name" required />
              <IonIcon icon="home" className="icon" />
            </div>
          </div>

          <div className="input">
            <div className="input-box">
              <h4>City</h4>
              <input type="text" name="City" value={formData.City} onChange={handleChange} placeholder="City" className="name" required />
              <IonIcon icon="location" className="icon" />
            </div>
            <div className="input-box">
              <h4>State</h4>
              <input type="text" name="State" value={formData.State} onChange={handleChange} placeholder="State" className="name" required />
              <IonIcon icon="location" className="icon" />
            </div>
          </div>

          <div className="input">
            <div className="input-box">
              <button type="submit" className='button-form' onClick={handleBook}>BOOK NOW</button>
            </div>
          </div>
        </form>
      </div>
      <br></br><br></br><br></br>
      <Footer />
    </div>
  );
};

export default BookingForm;
