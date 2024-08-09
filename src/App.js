import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './component/HomePage';
import AboutUs from './component/AboutUs';
import './App.css';
import LoginPage from './component/Login';
import Card2 from './component/card2';
import BookingForm from './component/BookingForm';
import Card from './component/card3';
import Contact from './component/Contact';
import AdminSidebar from './AdminComp/AdminSidebar';
import MechanicsManagement from './AdminComp/MechanicsManagement';
import BookingConfirmation from './component/BookingConfirmation';
import Profile from './component/Profile';
import BookingDetails from './AdminComp/BookingDetails';
import AdminDashboad from './AdminComp/AdminDashboad';
import ContactDetails from './AdminComp/ContactDetails';
import PaymentSettings from './component/PaymentSettings';
import Register from './component/Register';






function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path='/register' element = {<Register />}/>
    <Route path='/services' element={<Card2 />} />
    <Route path='/bookform' element={<BookingForm />} />
    <Route path='/bike' element={<Card/>} />
    <Route path='/about' element={<AboutUs />} />
    <Route path='/contact' element={<Contact />} />
    <Route path = '/sidebar' element={<AdminSidebar/>} />v
    <Route path='/mechanics-management' element={<MechanicsManagement/>} />
    <Route path='/booking-details' element={<BookingDetails/>} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/dashboad' element={<AdminDashboad />} />
    <Route path = "/payment" element = {<PaymentSettings />} />
    <Route path = "/Confirmation" element={<BookingConfirmation/>}/>
  </Routes>
  </BrowserRouter>
  // <FeedbackForm/>
  );
}

export default App;
