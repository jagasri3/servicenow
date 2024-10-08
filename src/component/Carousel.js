// import React, { useEffect } from 'react';
// import { Carousel } from 'mdb-ui-kit';
// function CarouselComponent() {
//   useEffect(() => {
//     // Initialize the carousel
//     const carouselElement = document.getElementById('carouselDarkVariant');
//     if (carouselElement) {
//       const carouselInstance = new Carousel(carouselElement);
//       return () => carouselInstance.destroy(); // Cleanup on unmount
//     }
//   }, []);
import React from 'react';
import 'mdb-ui-kit/css/mdb.min.css'; // Import MDB CSS
import './Carousel.css'; // Import your custom CSS

export default function Carousel() {
  return (
    <div>
      {/* Carousel wrapper */}
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark"
        data-mdb-ride="carousel"
        data-mdb-carousel-init
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
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
              className="d-block w-100"
              alt="Motorbike Smoke"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>

          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
              className="d-block w-100"
              alt="Mountaintop"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
              className="d-block w-100"
              alt="Woman Reading a Book"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        {/* Inner */}

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel wrapper */}
    </div>
  );
}
