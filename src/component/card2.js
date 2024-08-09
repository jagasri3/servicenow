import React from 'react';
import './card2.css';
import Navbar from './Navbar';
import Footer from './footer';

const images = {
  flowers: 'https://t4.ftcdn.net/jpg/05/61/77/19/240_F_561771917_qzVJP1NDwG3NusyeZUSBU1MyvsbUh7gX.jpg', // 4
  river: 'https://as1.ftcdn.net/v2/jpg/08/40/55/10/1000_F_840551058_rchGoo9AWThiNxaelbV6i1ezWHcIaF0b.jpg', // 2
  record: 'https://t3.ftcdn.net/jpg/08/21/89/12/240_F_821891254_8K1w2VEmMJV36hRjW1010sQvoDOZbhr1.jpg', // 3
  fence: 'https://t3.ftcdn.net/jpg/08/34/67/18/240_F_834671871_bpn4xyucwS9Ta8ZiEylCcFTJZAdqPri4.jpg', // 1
  mountain: 'https://t4.ftcdn.net/jpg/02/59/40/21/240_F_259402106_PkhWmPpQxTrzQ3Y8dw5xmD36hO2UDfIS.jpg', // 5
  beach: 'https://t4.ftcdn.net/jpg/06/27/57/53/240_F_627575307_jvQnC1elNqvOqo7MVeXOZ8RXmqWOxVSU.jpg', // 6
};

const card2 = () => {
  return (
    <div>
      <Navbar />
      <ul className="new-cards">
        <li className="new-cards__item">
          <div className="new-card-service">
            <div
              className="new-card__image new-card__image--fence"
              style={{ backgroundImage: `url(${images.fence})` }}
            ></div>
            <div className="new-card__content">
              <div className="new-card__title">Routine Maintenance Services</div>
              <h3>$52</h3>
              <p className="new-card__text">
                Routine maintenance services ensure a car's longevity and optimal performance by regularly checking and replacing essential components like oil, filters, and brakes.
              </p>
              <a href='/bookform'>
                <button className="new-btn new-btn--block new-card__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="new-cards__item">
          <div className="new-card-service">
            <div
              className="new-card__image new-card__image--river"
              style={{ backgroundImage: `url(${images.river})` }}
            ></div>
            <div className="new-card__content">
              <div className="new-card__title">Mechanical Repairs</div>
              <h3>$29</h3>
              <p className="new-card__text">
                Mechanical repairs for cars involve diagnosing and fixing issues with the engine, transmission, or other mechanical systems to ensure optimal vehicle performance.
              </p>
              <a href='/bookform'>
                <button className="new-btn new-btn--block new-card__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="new-cards__item">
          <div className="new-card-service">
            <div
              className="new-card__image new-card__image--record"
              style={{ backgroundImage: `url(${images.record})` }}
            ></div>
            <div className="new-card__content">
              <div className="new-card__title">Electrical Services</div>
              <h3>$38</h3>
              <p className="new-card__text">
                Electrical services for cars ensure that components like the battery, alternator, and wiring are functioning properly to maintain reliable vehicle performance and prevent electrical failures.
              </p>
              <a href='/bookform'>
                <button className="new-btn new-btn--block new-card__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="new-cards__item">
          <div className="new-card-service">
            <div
              className="new-card__image new-card__image--flowers"
              style={{ backgroundImage: `url(${images.flowers})` }}
            ></div>
            <div className="new-card__content">
              <div className="new-card__title">Full Vehicle Inspections</div>
              <h3>$62</h3>
              <p className="new-card__text">
                A full vehicle inspection ensures all systems are functioning properly, helping identify issues early and maintain safety, reliability, and resale value.
              </p>
              <a href='/bookform'>
                <button className="new-btn new-btn--block new-card__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="new-cards__item">
          <div className="new-card-service">
            <div
              className="new-card__image new-card__image--mountain"
              style={{ backgroundImage: `url(${images.mountain})` }}
            ></div>
            <div className="new-card__content">
              <div className="new-card__title">Body and Interior Work</div>
              <h3>$12</h3>
              <p className="new-card__text">
                Repairing dents and scratches on a car's body and restoring or upgrading the interior upholstery and features.
              </p>
              <a href='/bookform'>
                <button className="new-btn new-btn--block new-card__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
        <li className="new-cards__item">
          <div className="new-card-service">
            <div
              className="new-card__image new-card__image--beach"
              style={{ backgroundImage: `url(${images.beach})` }}
            ></div>
            <div className="new-card__content">
              <div className="new-card__title">Inspection and Diagnostics</div>
              <h3>$10</h3>
              <p className="new-card__text">
                A mechanic checks engine performance using diagnostic tools to identify and fix issues during routine car maintenance.
              </p>
              <a href='/bookform'>
                <button className="new-btn new-btn--block new-card__btn">Book</button>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default card2;
