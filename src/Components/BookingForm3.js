import React, { useState } from "react";
import "../Styles/BookingForm3.css";

function BookingForm3() {
  const [selectedFrequency, setSelectedFrequency] = useState("One-Time");
  const [selectedTip, setSelectedTip] = useState("0%");
  const [selectedParking, setSelectedParking] = useState("$0");
  const [couponTab, setCouponTab] = useState("Coupon Code");

  return (
    <div className="booking-form3-container">
      {/* Location and Frequency */}
      <div className="section">
        <h3>Where Will The Service Be Taking Place?</h3>
        <p>
          Using our forms you can decide if the person is coming to you, if you are coming to them or if they are
          attending a live class... You can turn this description off or modify it at anytime.
        </p>
        <div className="select-group">
          <select>
            <option>Snohomish County</option>
          </select>
        </div>
        <div className="select-buttons">
          {["Every 3 Months", "Every 6 Months", "One-Time"].map((label) => (
            <button
              key={label}
              className={selectedFrequency === label ? "selected" : ""}
              onClick={() => setSelectedFrequency(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Service Details */}
      <div className="section">
        <h3>What Needs To Be Done?</h3>
        <p>
          These options are made for you by default. You can change the pricing or set up different forms or even
          industries from your store to fit your company.
        </p>
        <div className="select-group">
          <select>
            <option>D- Rooms</option>
          </select>
          <select>
            <option>D- Staircase</option>
          </select>
        </div>
      </div>

      {/* Extras */}
      <div className="section">
        <h3>Select Extras</h3>
        <p>
          If you have extras, you can set them up here and charge a price for them or not. You can turn this description
          off or modify it at anytime.
        </p>
        <div className="extra-options">
          <div className="extra-box">Pet, Food, Drink Stain</div>
          <div className="extra-box">HAZARD ⚠️</div>
          <div className="extra-box">WINE STAIN REMOVAL</div>
          <div className="extra-box">HALLWAYS</div>
        </div>
      </div>

      {/* Provider Schedule */}
      <div className="section">
        <h3>Choose Service Provider</h3>
        <p>
          Here a customer can schedule by viewing a random provider/team’s availability or browse through someone’s
          specific schedule.
        </p>
        <input type="date" className="date-picker" />
      </div>

      {/* Customer Info */}
      <div className="section">
        <h3>Customer Details</h3>
        <p>
          If a customer booked with you before everything will be pre-filled for them and if they have multiple
          addresses they can book with any of them.
        </p>
        <div className="input-group">
          <input type="text" placeholder="Ex: James" />
          <input type="text" placeholder="Ex: Lee" />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Ex: example@xyz.com" />
          <input type="tel" placeholder="Phone No." />
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="reminder" />
          <label htmlFor="reminder">Send me reminders about my booking via text message</label>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Type Address" />
          <input type="text" placeholder="#" />
        </div>
      </div>

      {/* Job Notes */}
      <div className="section">
        <h3>Key Information & Job Notes</h3>
        <p>You can turn this description off or modify it at anytime.</p>
        <div className="button-group">
          <button className="selected">Someone Will Be At Home</button>
          <button>I Will Hide The Keys</button>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="keyProvider" />
          <label htmlFor="keyProvider">Keep Key With Provider</label>
        </div>
        <textarea className="textarea" placeholder="Special Notes And Instructions" />
      </div>

      {/* Special Notes */}
      <div className="section">
        <h3>Special Notes Or Instructions</h3>
        <p>Would You Like To Add Any Notes?</p>
        <textarea className="textarea" placeholder="Special Notes Or Instructions" />
      </div>

      {/* Coupon/Gift */}
      <div className="section coupon-section">
        <div className="coupon-tabs">
          {['Coupon Code', 'Gift Cards'].map((tab) => (
            <div
              key={tab}
              className={`coupon-tab ${couponTab === tab ? 'active' : ''}`}
              onClick={() => setCouponTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        {couponTab === "Coupon Code" && (
          <div className="coupon-input-group">
            <input type="text" placeholder="Enter Coupon Code" />
            <button>Apply</button>
          </div>
        )}
      </div>

      {/* Payment */}
      <div className="section payment-section">
        <h3>Payment Information</h3>
        <p>
          Connect a payment processor and accept credit/debit cards from clients... You can turn this description off
          or modify it at anytime.
        </p>
        <div className="checkbox-group">
          <input type="radio" name="cardOption" defaultChecked />
          <label>New Credit Card</label>
        </div>
        <input type="text" className="card-input" placeholder="Card number" />
        <img
          src="https://developer.apple.com/design/human-interface-guidelines/images/ApplePay_Mark.svg"
          alt="Card logos"
          style={{ height: "24px", marginTop: "8px" }}
        />
      </div>

      {/* Terms */}
      <div className="terms-section">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          I hereby accept the <a href="#">terms and conditions</a> and <a href="#">privacy policy</a>.
        </label>
      </div>

      {/* Submit */}
      <button className="submit-button">Save Booking</button>
    </div>
  );
}

export default BookingForm3;
