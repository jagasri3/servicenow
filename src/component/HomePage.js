// // src/component/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file
import PageContent from './card1';
import Footer from './footer';
import Card from './card3';
import Navbar from './Navbar'; // Correct import for Navbar
import Card2 from './card2';
import Carousel from './Carousel';

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <div>
        {/* Carousel wrapper */}
        <div
          id="carouselDarkVariant"
          className="carousel slide carousel-fade carousel-dark"
          data-mdb-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              data-mdb-target="#carouselDarkVariant"
              data-mdb-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-mdb-target="#carouselDarkVariant"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              data-mdb-target="#carouselDarkVariant"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Inner */}
          <div className="carousel-inner">
            {/* Single item */}
            <div className="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/1412904827/photo/riding-a-motorcycle.jpg?s=612x612&w=0&k=20&c=1VpwV3FNHTDMVzkVIR3wnTHA5Iz9cgmrU-pSzHdKqUA="
                className="d-block w-100 carousel-image"
                alt="Periodic Services"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>PERIODIC SERVICES</h5>
                <p>
                  Scheduled maintenance ensures vehicle reliability, safety, and
                  optimal performance.
                </p>
              </div>
            </div>

            {/* Single item */}
            <div className="carousel-item">
              <img
                src="https://media.istockphoto.com/id/966859036/photo/futuristic-instrument-panel-of-vehicle.jpg?s=612x612&w=0&k=20&c=e4ue2tgQ5_2KqrjvOF24eFvULiknBYTo5SHoC1mqMx0="
                className="d-block w-100 carousel-image"
                alt="Detailing Services"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>DETAILING SERVICES</h5>
                <p>
                  Track and manage specific vehicle services for personalized
                  customer care.
                </p>
              </div>
            </div>

            {/* Single item */}
            <div className="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1162856846/photo/auto-mechanic-working-on-car-engine-in-mechanics-garage-repair-service-authentic-close-up-shot.jpg?s=612x612&w=0&k=20&c=jCd_iRrP9DYJiRoGkwFGQqX7L69fFlTqJT4cv3AFiVA="
                className="d-block w-100 carousel-image"
                alt="Car Maintenance"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>CAR MAINTENANCE</h5>
                <p>
                  Keep your vehicle in top shape with our expert maintenance
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>      <br></br>
      <div className="cards-container">
        {/* <Carousel/> */}
        <PageContent />
        <br></br><br></br>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;