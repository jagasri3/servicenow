import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../component/Login.css'; // Ensure this path is correct

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (email === '') {
      setEmailError('Email must be provided');
      return;
    }
    
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      return;
    }
    
    setEmailError(null);
    
    try {
      // Make a POST request to your Spring Boot API
      const response = await axios.post('http://localhost:9001/login', { email, password });

      const user = response.data;

      const regex = new RegExp(`^[\\w.-]+@[\\w.-]+\\.${'in'}$`, 'i');
      
      if (regex.test(email)) {
        navigate('/sidebar');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setEmailError('Invalid email or password');
    }
  };

  return (
    <div className='login-body'>
      <center>
        <div className="main-login">
          <form>
            <br/><br/><br/>
            <label htmlFor="login" aria-hidden="true" className="form-label">Login</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            {emailError && <div className="error">{emailError}</div>}
            <button type="button" onClick={handleLogin} className='button-login'>Login</button>
            <button onClick={() => navigate('/register')} className='button-toggle'>New User? <span className="hover-register">REGISTER</span></button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default LoginPage;
