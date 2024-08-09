// import React from 'react';
// import './Contact.css';
// import Navbar from './Navbar';
// import Footer from './footer';

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="contact-container">
//         <div className="contact-info">
//           <div className="contact-card">
//             <i className="fas fa-phone-alt flipped-icon"></i>
//             <p>Mobile: +91 9988776655<br/>Assistance: 0427 245 566<br/>Weekdays: +91 8645236447</p>
//           </div>
//           <div className="contact-card">
//             <i className="fas fa-map-marker-alt"></i>
//             <p>51 Cross Street, Vanakam Road<br/>Archwood Lane<br/>Coimbatore, TN</p>
//           </div>
//           <div className="contact-card">
//             <i className="fas fa-tools"></i>
//             <p>24/7 Assistance<br/>Call us and We will assist you<br/>We will be Faster than Light</p>
//           </div>
//         </div>
//         <div className="contact-form">
//           <h6>Name</h6>
//           <input type="text" placeholder="Your Name" className="form-input" />
//           <h6>Email</h6>
//           <input type="email" placeholder="Your Email" className="form-input" />
//           <h6>Phone Number</h6>
//           <input type="tel" placeholder="Your Phone" className="form-input" />
//           <h6>Message</h6>
//           <textarea placeholder="Message" className="form-textarea"></textarea>
//           <button className="form-button">Send Message</button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './footer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Contact = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSendMessage = () => {
    navigate('/confirmation'); // Navigate to the thank you page or desired route
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <i className="fas fa-phone-alt flipped-icon"></i>
            <p>Mobile: +91 9988776655<br/>Assistance: 0427 245 566<br/>Weekdays: +91 8645236447</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <p>51 Cross Street, Vanakam Road<br/>Archwood Lane<br/>Coimbatore, TN</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-tools"></i>
            <p>24/7 Assistance<br/>Call us and We will assist you<br/>We will be Faster than Light</p>
          </div>
        </div>
        <div className="contact-form">
          <h6>Name</h6>
          <input type="text" placeholder="Your Name" className="form-input" />
          <h6>Email</h6>
          <input type="email" placeholder="Your Email" className="form-input" />
          <h6>Phone Number</h6>
          <input type="tel" placeholder="Your Phone" className="form-input" />
          <h6>Message</h6>
          <textarea placeholder="Message" className="form-textarea"></textarea>
          <button className="form-button" onClick={handleSendMessage}>Send Message</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
