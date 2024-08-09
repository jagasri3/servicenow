import React from 'react';
import './card3.css';
import Navbar from './Navbar';
import Footer from './footer';

const images = {
  flowers: 'https://media.zigcdn.com/media/model/2022/Nov/front-right-view-711763862_600x400.jpg',
  river: 'https://media.istockphoto.com/id/1268935532/photo/motorcycle-car-wash-motorcycle-big-bike-cleaning-with-foam-injection-make-more-clean.jpg?s=612x612&w=0&k=20&c=YEu3zOfrrJEblevUv79hwcFeU3xN72xM75aaqxAv5YI=',
  record: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsOr60cozY3-0BPeAAQZ77DHRXiRkmhzy0Q&s',
  fence: 'https://media.istockphoto.com/id/453259541/photo/bike-chainset-with-chain-on-black-background.jpg?s=612x612&w=0&k=20&c=ZugNF25CZsbs-5aA_MhwdFLKE1kQwMrIagj06-XvYt8=',
  mountain: 'https://t3.ftcdn.net/jpg/08/04/70/16/240_F_804701625_UZn7ZyuCYhnsogjEYlAaKiuM94sDF22U.jpg',
  beach: 'https://media.istockphoto.com/id/626375286/photo/work-of-welder.jpg?s=612x612&w=0&k=20&c=4fjnJaG3FeiQMb8aRtmp7nEZebdBiMfbMbWI871avNs=',
};

const Card = () => {
  return (
    <div>
      <Navbar />
      <ul className="cards3">
        <li className="cards3__item">
          <div className="card3-service">
            <div
              className="card3__image card3__image--fence"
              style={{ backgroundImage: `url(${images.fence})` }}
            ></div>
            <div className="card3__content">
              <div className="card3__title">Basic Tune-Up</div>
              <h3>$30</h3>
              <p className="card3__text">
                A Basic Tune-Up for bike service includes adjusting brakes and gears, lubricating the chain, checking tire pressure, and ensuring all bolts are tightened for optimal performance.
              </p>
              <a href='/bookform'>
                <button className="btn3 btn3--block card3__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="cards3__item">
          <div className="card3-service">
            <div
              className="card3__image card3__image--river"
              style={{ backgroundImage: `url(${images.river})` }}
            ></div>
            <div className="card3__content">
              <div className="card3__title">Full Service</div>
              <h3>$40</h3>
              <p className="card3__text">
                A full service ensures comprehensive maintenance of a bike, including cleaning, adjusting, and inspecting all components for optimal performance and longevity.
              </p>
              <a href='/bookform'>
                <button className="btn3 btn3--block card3__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="cards3__item">
          <div className="card3-service">
            <div
              className="card3__image card3__image--record"
              style={{ backgroundImage: `url(${images.record})` }}
            ></div>
            <div className="card3__content">
              <div className="card3__title">Brake Service</div>
              <h3>$12</h3>
              <p className="card3__text">
                Electrical services for cars ensure that components like the battery, alternator, and wiring are functioning properly to maintain reliable vehicle performance and prevent electrical failures.
              </p>
              <a href='/bookform'>
                <button className="btn3 btn3--block card3__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="cards3__item">
          <div className="card3-service">
            <div
              className="card3__image card3__image--flowers"
              style={{ backgroundImage: `url(${images.flowers})` }}
            ></div>
            <div className="card3__content">
              <div className="card3__title">Suspension Service</div>
              <h3>$25</h3>
              <p className="card3__text">
                Suspension service ensures a smooth and controlled ride by maintaining optimal performance and safety of the bike's suspension system.
              </p>
              <a href='/bookform'>
                <button className="btn3 btn3--block card3__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="cards3__item">
          <div className="card3-service">
            <div
              className="card3__image card3__image--mountain"
              style={{ backgroundImage: `url(${images.mountain})` }}
            ></div>
            <div className="card3__content">
              <div className="card3__title">Wheel and Tire Service</div>
              <h3>$13</h3>
              <p className="card3__text">
                A cyclist brings their bike in for a Wheel and Tire Service to address a wobbling wheel and replace a punctured tire, ensuring a safe and smooth ride.
              </p>
              <a href='/bookform'>
                <button className="btn3 btn3--block card3__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="cards3__item">
          <div className="card3-service">
            <div
              className="card3__image card3__image--beach"
              style={{ backgroundImage: `url(${images.beach})` }}
            ></div>
            <div className="card3__content">
              <div className="card3__title">Gear Service</div>
              <h3>$28</h3>
              <p className="card3__text">
                A mechanic checks engine performance using diagnostic tools to identify and fix issues during routine car maintenance.
              </p>
              <a href='/bookform'>
                <button className="btn3 btn3--block card3__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Card;
