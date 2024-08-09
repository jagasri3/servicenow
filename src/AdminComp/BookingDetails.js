import React, { useEffect, useState } from 'react';
import './BookingDetails.css';
import AdminSidebar from './AdminSidebar';

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div>
      <AdminSidebar />
      <div className="event-table-container">
        <h1>All Bookings</h1>
        <input type="text" placeholder="Search by Action..." className="search-input" />
        <table className="event-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile Number</th>
              <th>Vehicle Model</th>
              <th>Vehicle Number</th>
              <th>Pickup Date</th>
              <th>Delivery Date</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.FirstName}</td>
                <td>{booking.LastName}</td>
                <td>{booking.MobileNumber}</td>
                <td>{booking.vehicleModel}</td>
                <td>{booking.VehichleNumber}</td>
                <td>{booking.PickupDate}</td>
                <td>{booking.DeliveryDate}</td>
                <td>{booking.Address}</td>
                <td>{booking.City}</td>
                <td>{booking.State}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDetails;
