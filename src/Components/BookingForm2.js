import React, { useState } from "react";
import "../Styles/BookingForm2.css";
import mossIcon from "../Assets/doctor-picture.png"; // Use your own icon

function BookingForm2() {
  const [frequency, setFrequency] = useState("One-Time");
  const [tip, setTip] = useState("0%");
  const [parking, setParking] = useState("$0");

  return (
    <div className="booking-form2">
      {/* Services */}
      <div className="form-group">
        <label className="section-title">Services</label>
        <select>
          <option>Soft Roof/Gutter Cleaning</option>
        </select>
      </div>

      {/* Frequency */}
      <div className="form-group">
        <label className="section-title">Frequency</label>
        <div className="button-group">
          {["Every 3 Months", "Every 6 Months", "One-Time"].map((item) => (
            <button
              key={item}
              className={`button-group-button ${frequency === item ? "button-selected" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setFrequency(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="info-block">
        <h4>What Needs To Be Done?</h4>
        <p>
          If you're choosing house washing, roof, or gutter cleaning, please provide the size of your home. For pressure washing, just give an estimated size, and we’ll take precise measurements when we arrive.
        </p>
        <p>
          The price given is an estimate and may be adjusted based on the actual size, but we will always inform you of any changes before proceeding.
        </p>
        <p><strong>In most cases (about 90%), the quoted price is accurate.</strong></p>
      </div>

      {/* Area Size */}
      <div className="area-row">
        <input type="text" placeholder="Area Size in SQFT" />
        <select>
          <option>Roof Cleaning</option>
        </select>
      </div>

      {/* Extras */}
      <div className="form-group">
        <label className="section-title">Select Extras</label>
        <p className="subheading">If you have extras, you can set them up here and charge a price for them or not.</p>
        <div className="extras-section">
          <img src={mossIcon} alt="Heavy Moss" />
          <span>Heavy Moss Removal</span>
        </div>
      </div>

      {/* Date Selection */}
      <div className="form-group">
        <label className="section-title">Select Date</label>
        <input type="date" />
      </div>

      {/* Tips & Parking */}
      <div className="form-group">
        <label className="section-title">Tips (Optional)</label>
        <div className="button-group">
          {["0%", "10%", "15%", "20%", "Other"].map((item) => (
            <button
              key={item}
              className={`button-group-button ${tip === item ? "button-selected" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setTip(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="section-title">Parking (Optional)</label>
        <div className="button-group">
          {["$0", "$5", "$10", "$20", "Other"].map((item) => (
            <button
              key={item}
              className={`button-group-button ${parking === item ? "button-selected" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setParking(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Customer Details */}
      <div className="form-group">
        <label className="section-title">Customer Details</label>
        <div className="area-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Phone Number" />
        <div className="checkbox-container">
          <input type="checkbox" id="reminder" />
          <label htmlFor="reminder">Send me reminders about my booking via text message</label>
        </div>
        <div className="area-row">
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Apt. No." />
        </div>
      </div>

      {/* Key Info */}
      <div className="form-group">
        <label className="section-title">Key Information & Job Notes</label>
        <div className="button-group">
          <button className="button-selected">Someone Will Be At Home</button>
          <button>I Will Hide The Keys</button>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="keepKey" />
          <label htmlFor="keepKey">Keep Key With Provider</label>
        </div>
        <textarea className="note-textarea" placeholder="Customer Note For Provider"></textarea>
        <textarea className="note-textarea" placeholder="Would You Like To Add Any Notes?"></textarea>
      </div>

      {/* Coupon Code */}
      <div className="form-group">
        <label className="section-title">Coupon Code / Gift Card</label>
        <div className="coupon-section">
          <input type="text" placeholder="Enter Coupon Code" />
          <button className="apply-button">Apply</button>
        </div>
      </div>

      {/* Payment Section */}
      <div className="form-group">
        <label className="section-title">Payment Information</label>
        <p className="subheading">Your card is charged AFTER the appointment is completed.</p>
        <div className="radio-options">
          <label>
            <input type="radio" name="payment" checked readOnly />
            New Credit Card
          </label>
        </div>
        <div className="card-input">
          <input type="text" placeholder="Card Number" />
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Card logos" height="28" />
        </div>
        <div className="final-checkbox">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree to the Terms of Service and Privacy Policy</label>
        </div>
      </div>

      <button className="submit-button">Save Booking</button>
    </div>
  );
}

export default BookingForm2;
