import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../component/Register.css'; // Ensure this path is correct

const Register = () => {
  const [newUser, setNewUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to your Spring Boot API
      await axios.post('http://localhost:9001/register', newUser);
      navigate('/login'); // Navigate to login on success
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Registration failed. Please try again.'); // Set error message
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className='sign-body'>
      <center>
        <div className="main-sign">
          <form onSubmit={handleRegister}>
            <br/><br/>
            <label htmlFor="register" aria-hidden="true" className="form-label">Register</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input 
                type="text" 
                name="firstname" 
                placeholder="FirstName" 
                value={newUser.firstname}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="sign-input-container">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input 
                type="text" 
                name="lastname" 
                placeholder="LastName" 
                value={newUser.lastname}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="sign-input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={newUser.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="sign-input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={newUser.password}
                onChange={handleChange}
                required 
              />
            </div>
            <button type="submit" className='button-sign'>Sign up</button>
            <button type="button" onClick={() => navigate('/login')} className='button-toggle'>Already a User? <span className="hover-login">LOGIN</span></button>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
          </form>
        </div>
      </center>
    </div>
  );
};

export default Register;
