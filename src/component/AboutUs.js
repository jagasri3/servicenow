// import React from 'react';
// import './AboutUs.css';
// import Navbar from './Navbar';
// import Footer from './footer';

// import logo from '../assets/servicenowlogo.png'; // Import the logo image

// const AboutUs = () => {
//   return (
//     <div >
//       <Navbar />

//       <div className="about-us">
//         <div className="container-about">
//           <div className="row-about">
//             <div className="flex">
//               <h2>About Us</h2>
//               <h3>Discover Our Team's Story</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nesciunt accusantium exercitationem, laborum harum aliquam sit, eligendi in ratione veritatis nihil fugiat tempore provident repellendus accusamus. Ducimus amet unde deleniti?</p>
//               <div className="social-links">
//                 <a href="#"><i className="fab fa-facebook-f social-links" ></i></a>
//                 <a href="#"><i className="fab fa-twitter"></i></a>
//                 <a href="#"><i className="fab fa-instagram"></i></a>
//               </div>
//               <a href="#" className="btn">Learn More</a>
//             </div>
//             <div className="flex">
//               <img src="https://t3.ftcdn.net/jpg/06/72/72/16/240_F_672721631_zhseAc2R2MnFgF1L4dj96R7E1wRZG60s.jpg" alt="Car" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AboutUs;

// src/pages/AboutUs.js
import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './footer';


const AboutUs = () => {
  const [stats, setStats] = useState({
    satisfaction: 0,
    carsRepaired: 0,
    tiresRepaired: 0,
    boltsTightened: 0,
  });

  useEffect(() => {
    const satisfactionInterval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        satisfaction: prevStats.satisfaction < 100 ? prevStats.satisfaction + 1 : 100,
      }));
    }, 20);

    const carsRepairedInterval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        carsRepaired: prevStats.carsRepaired < 15 ? prevStats.carsRepaired + 1 : 15,
      }));
    }, 150);

    const tiresRepairedInterval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        tiresRepaired: prevStats.tiresRepaired < 702 ? prevStats.tiresRepaired + 1 : 702,
      }));
    }, 10);

    const boltsTightenedInterval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        boltsTightened: prevStats.boltsTightened < 5125 ? prevStats.boltsTightened + 5 : 5125,
      }));
    }, 1);

    return () => {
      clearInterval(satisfactionInterval);
      clearInterval(carsRepairedInterval);
      clearInterval(tiresRepairedInterval);
      clearInterval(boltsTightenedInterval);
    };
  }, []);

  return (
    
    <div>
      <Navbar/>

      <div className='image-bg'>
        <div className="about-us-container">
        <section className="section-1">
            <h1 className="title-1">About Us</h1>
            <div className="content-1">
              <div className="text-1">
                <p>We offer a full range of garage services to vehicle owners located in Tucson area. All mechanic services are performed by highly qualified mechanics. We can handle any car problem.</p>
                <p>We offer full range of garage services to vehicle owners in Tucson. Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop. Whether you drive a medium sized truck or passenger car or SUV, our mechanics strive to ensure.</p>
                <h2 className="subtitle-1">Why Choose Us</h2>
                <ul className="list-1">
                  <li>We make auto repair and maintenance more convenient for you</li>
                  <li>We are a friendly, helpful and professional group of people</li>
                  <li>Our professionals know how to handle a wide range of car services</li>
                  <li>We get the job done right — the first time</li>
                  <li>Same day service for most repairs and maintenance</li>
                </ul>
                <h2 className="subtitle-1">24/7 Roadside Assistance</h2>
                <ul className="list-1">
                <li>Tyre Puncture</li>
                <li>Flat Tire Change</li>
                <li>Battery Jump Start</li>
                <li>Fuel Delivery</li>
                <li>Winching/Extrication</li>
              </ul>
                <button className="button-2">Our Services</button>
              </div>
              <div className="images">
                <img className="large-image" src="https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=" alt="Car Repair" />
                <div className="small-images">
                  <img src="https://media.istockphoto.com/id/1364951753/photo/auto-service-interior-background-with-cars-on-the-lift.jpg?s=612x612&w=0&k=20&c=jd3IpV-koWUZrSHkwSwSdcA-s7bCRwcY233pSQafUJ4=" alt="Car Repair" />
                  <img src="https://media.istockphoto.com/id/626375286/photo/work-of-welder.jpg?s=612x612&w=0&k=20&c=4fjnJaG3FeiQMb8aRtmp7nEZebdBiMfbMbWI871avNs=" alt="Car Repair" />
                </div>
              </div>
            </div>
          </section>
          <section className="stats">
            <div className="stat">
              <h3>{stats.satisfaction}%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat">
              <h3>{stats.carsRepaired}</h3>
              <p>Cars Repaired Per Day</p>
            </div>
            <div className="stat">
              <h3>{stats.tiresRepaired}</h3>
              <p>Tires Repaired a Year</p>
            </div>
            <div className="stat">
              <h3>{stats.boltsTightened}</h3>
              <p>Tightened Bolts</p>
            </div>
          </section>
          <section className='trans'>
          <center><h1>Our Goal</h1>
          <h3>Our dedicated team strives to deliver exceptional customer satisfaction and peace of mind on the road.</h3></center>
          </section>
          <section className="company-overview">
            <center><h2>Company Overview</h2>
            <p>We can help you with everything from an oil change to an engine change. We can handle any problem on both foreign and domestic vehicles.</p></center>
            <div className="services-1">
              <div className="service-1">
                <i className="fas fa-music"></i>
                <h3>CAR AUDIO SERVICE</h3>
                <p>We provide expert installation and repair of car audio systems, ensuring high-quality sound and seamless integration with your vehicle.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-oil-can"></i>
                <h3>FREE OIL CHANGE</h3>
                <p>Enjoy a complimentary oil change with your service, ensuring your engine runs smoothly and efficiently.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-laptop-code"></i>
                <h3>ENGINE DIAGNOSTICS</h3>
                <p>Our advanced engine diagnostics services help identify and fix issues quickly to keep your vehicle running at its best.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-snowflake"></i>
                <h3>A/C RECHARGE</h3>
                <p>Keep your vehicle's air conditioning system in top condition with our professional A/C recharge service.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-parking"></i>
                <h3>PARKING SENSORS CALIBRATION</h3>
                <p>Ensure your parking sensors are accurately calibrated for optimal performance and safety.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-car-battery"></i>
                <h3>CAR BATTERY REPAIRS</h3>
                <p>Get your car battery checked and repaired to ensure your vehicle starts reliably every time.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
