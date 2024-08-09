import React, { useState } from 'react';
import './PaymentSettings.css';

const PaymentSetting = () => {
  const [form, setForm] = useState({
    fullName: '',
    nickName: '',
    email: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    paymentMethod: 'Credit Card',
    cardNumber: '',
    cardCVC: '',
    expMonth: '',
    expYear: ''
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <div className="payment-form-container">
      <h2 className="payment-form-title">Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-form-section">
          <h3>Account</h3>
          <div className="payment-form-row">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleInputChange}
              className="payment-form-input"
            />
            <input
              type="text"
              name="nickName"
              placeholder="Nick Name"
              value={form.nickName}
              onChange={handleInputChange}
              className="payment-form-input"
            />
          </div>
          <div className="payment-form-row">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleInputChange}
              className="payment-form-input"
            />
          </div>
        </div>

        <div className="payment-form-section">
          <h3>Date of Birth</h3>
          <div className="payment-form-row">
            <input
              type="text"
              name="dobDay"
              placeholder="DD"
              value={form.dobDay}
              onChange={handleInputChange}
              className="payment-form-input"
            />
            <input
              type="text"
              name="dobMonth"
              placeholder="MM"
              value={form.dobMonth}
              onChange={handleInputChange}
              className="payment-form-input"
            />
            <input
              type="text"
              name="dobYear"
              placeholder="YYYY"
              value={form.dobYear}
              onChange={handleInputChange}
              className="payment-form-input"
            />
          </div>
        </div>
        <div className="payment-form-section">
          <h3>Payment Details</h3>
          <div className="payment-form-row">
            <button
              type="button"
              className={`payment-form-button ${form.paymentMethod === 'Credit Card' ? 'active' : ''}`}
              onClick={() => setForm({ ...form, paymentMethod: 'Credit Card' })}
            >
              Credit Card
            </button>
            <button
              type="button"
              className={`payment-form-button ${form.paymentMethod === 'Paypal' ? 'active' : ''}`}
              onClick={() => setForm({ ...form, paymentMethod: 'Paypal' })}
            >
              Paypal
            </button>
          </div>
          {form.paymentMethod === 'Credit Card' && (
            <>
              <div className="payment-form-row">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={form.cardNumber}
                  onChange={handleInputChange}
                  className="payment-form-input"
                />
              </div>
              <div className="payment-form-row">
                <input
                  type="text"
                  name="cardCVC"
                  placeholder="Card CVC"
                  value={form.cardCVC}
                  onChange={handleInputChange}
                  className="payment-form-input"
                />
              </div>
              <div className="payment-form-row">
              {/* <h3>Payment Details</h3> */}
                <select
                  name="expMonth"
                  value={form.expMonth}
                  onChange={handleInputChange}
                  className="payment-form-select"
                >
                  <option value="">Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name="expYear"
                  value={form.expYear}
                  onChange={handleInputChange}
                  className="payment-form-select"
                >
                  <option value="">Year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>
            </>
          )}
        </div>

        <div className="payment-form-row">
          <button type="submit" className="payment-form-submit">PAY NOW</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentSetting;
