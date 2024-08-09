import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from './component/HomePage';
// import Card2 from './component/card2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  {/* <Card2/> */}
  {/* <HomePage/> */}
  </React.StrictMode>
);
