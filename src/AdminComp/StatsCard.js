// src/AdminComp/StatsCard.js
import React, { useEffect, useState } from 'react';
import './StatsCard.css';
import barChartIcon from '../assets/bar-chart-icon.png';

const StatsCard = () => {
  const [stats, setStats] = useState({
    tweets: 0,
    shares: 0,
    likes: 0,
    googlePlus: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => ({
        tweets: prevStats.tweets + Math.floor(Math.random() * 10),
        shares: prevStats.shares + Math.floor(Math.random() * 10),
        likes: prevStats.likes + Math.floor(Math.random() * 10),
        googlePlus: prevStats.googlePlus + Math.floor(Math.random() * 9000)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stats-cards-container">
      <div className="stats-card blue">
        <h3>{stats.tweets.toLocaleString()}</h3>
        <p>
          <img src={barChartIcon} alt="Bar Chart Icon" className="icon" />
        </p>
        <p className="social">Users</p>
      </div>
      <div className="stats-card red">
        <h3>{stats.shares.toLocaleString()}</h3>
        <p>
          <img src={barChartIcon} alt="Bar Chart Icon" className="icon" />
        </p>
        <p className="social">Booking</p>
      </div>
      <div className="stats-card green">
        <h3>{stats.likes.toLocaleString()}</h3>
        <p>
          <img src={barChartIcon} alt="Bar Chart Icon" className="icon" />
        </p>
        <p className="social">Viewers</p>
      </div>
      <div className="stats-card black">
        <h3>{stats.googlePlus.toLocaleString()}</h3>
        <p>
          <img src={barChartIcon} alt="Bar Chart Icon" className="icon" />
        </p>
        <p className="social">Revenue</p>
      </div>
    </div>
  );
};

export default StatsCard;
