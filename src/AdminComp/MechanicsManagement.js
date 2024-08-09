import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faEnvelope, faPhone, faUser, faTasks } from '@fortawesome/free-solid-svg-icons';
import './MechanicsManagement.css';
import AdminSidebar from './AdminSidebar';

const mechanics = [
  {
    id: 'M001',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    name: 'John Doe',
    status: 'Engaged with customer'
  },
  {
    id: 'M002',
    email: 'janesmith@example.com',
    phone: '987-654-3210',
    name: 'Jane Smith',
    status: 'Available'
  },
  {
    id: 'M003',
    email: 'mikejohnson@example.com',
    phone: '456-789-0123',
    name: 'Mike Johnson',
    status: 'On break'
  },
  {
    id: 'M004',
    email: 'emilydavis@example.com',
    phone: '789-012-3456',
    name: 'Emily Davis',
    status: 'Engaged with customer'
  },
  {
    id: 'M005',
    email: 'davidsmith@example.com',
    phone: '012-345-6789',
    name: 'David Smith',
    status: 'Available'
  },
  {
    id: 'M006',
    email: 'sarajones@example.com',
    phone: '345-678-9012',
    name: 'Sara Jones',
    status: 'On break'
  }
];

const MechanicsManagement = () => {
  return (
    <div>
      <AdminSidebar />
    <div className="mechanics-management">
      <h1>Mechanics Management</h1>
      <h2>List of Mechanics</h2>
      {mechanics.map(mechanic => (
        <div key={mechanic.id} className="mechanic-card">
          <p><FontAwesomeIcon icon={faIdBadge} /> <b>ID:</b> {mechanic.id}</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> <b>Email:</b> {mechanic.email}</p>
          <p><FontAwesomeIcon icon={faPhone} /> <b>Phone:</b> {mechanic.phone}</p>
          <p><FontAwesomeIcon icon={faUser} /> <b>Name:</b> {mechanic.name}</p>
          <p><FontAwesomeIcon icon={faTasks} /> <b>Status:</b> {mechanic.status}</p>
          <button className="unassign-button">Unassign</button>
        </div>
       
      ))}
    </div>
    </div>
  );
};

export default MechanicsManagement;
