import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../Styles/BookingForm.css";
import visa from "../Assets/visa.png";
import mastercard from "../Assets/mastercard.webp";
import amex from "../Assets/amex.png";
import discover from "../Assets/discover.jpg";
import { supabase } from "../supabaseClient";

function BookingForm() {
  const frequencyOptions = ["Weekly", "Every Other Week", "Monthly", "One-Time"];
  const tipsOptions = ["0%", "10%", "15%", "20%", "Other"];
  const parkingOptions = ["$0", "$5", "$10", "$20", "Other"];
  const extrasList = ["Extra Heavy Duty", "Blinds", "Interior Windows", "Oven", "Garage"];

  const instructionQuestions = [
    "How Clean Is Your Home?",
    "How Will We Get Inside?",
    "Where Can We Park?",
  ];

  const instructionOptions = {
    "How Clean Is Your Home?": [
      "Very Dirty",
      "Needs Extra Attention",
      "Mostly Clean",
      "Regularly Cleaned and Maintained",
      "Almost Spotless",
    ],
    "How Will We Get Inside?": [
      "I will be Home",
      "I will Leave the Key (Leave the Instructions on the Notes)",
      "I will provide an Access Code (Leave the Code on the Notes)",
      "Other (Leave the Instruction on the Notes)",
    ],
    "Where Can We Park?": [
      "Park in my Driveway (Leave the stall number if applicable on the notes)",
      "Paid Parking Available Nearby",
      "There is Street Parking",
      "Parking in the Park Garage (Leave the instructions on the Notes)",
    ],
  };

  const [formState, setFormState] = useState({
    location: "Snohomish County",
    service: "Maintenance Cleaning",
    frequency: null,
    bedrooms: 1,
    bathrooms: 1,
    halfBath: 1,
    den: 1,
    extras: [],
    instructions: {},
    date: "",
    tip: null,
    parkingFee: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    coupon: "",
    amount: 0,
    cardNumber: "", // ✅ used for check only
    cardExpiry: "",
    cardCvc: "",
  });

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const toggleExtra = (item) => {
    setFormState((prev) => ({
      ...prev,
      extras: prev.extras.includes(item)
        ? prev.extras.filter((e) => e !== item)
        : [...prev.extras, item],
    }));
  };

  const handleInstructionChange = (question, value) => {
    setFormState((prev) => ({
      ...prev,
      instructions: {
        ...prev.instructions,
        [question]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate required fields including card details
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "frequency",
      "date",
      "cardNumber",
      "cardExpiry",
      "cardCvc",
    ];

    for (const field of requiredFields) {
      if (!formState[field] || formState[field].toString().trim() === "") {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }

    for (const question of instructionQuestions) {
      if (!formState.instructions[question]) {
        alert(`Please select an option for "${question}".`);
        return;
      }
    }

    // ✅ Exclude card details from DB insert
    const {
      firstName,
      lastName,
      halfBath,
      parkingFee,
      cardNumber,
      cardExpiry,
      cardCvc,
      ...rest
    } = formState;

    const formData = {
      ...rest,
      half_bath: halfBath,
      parking_fee: parkingFee,
      first_name: firstName,
      last_name: lastName,
      payment_status: "pending",
    };

    // ✅ Save booking to Supabase
    const { data, error } = await supabase
      .from("bookings1")
      .insert([formData])
      .select();

    if (error) {
      console.error("Error saving booking:", error);
      alert("Booking failed: " + error.message);
      return;
    }

    const bookingId = data[0].id;

    try {
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 999, // Replace with real calc
          bookingId,
          email: formState.email,
        }),
      });

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      } else {
        alert("Failed to redirect to payment.");
      }
    } catch (err) {
      console.error("Stripe redirect error:", err);
      alert("Payment error occurred.");
    }
  };

  return (
    <div className="booking-form">
      <div className="form-layout">
        <div className="form-wrapper">
          <div className="booking-container">
            {/* ✅ Same JSX as yours, unchanged below */}

            {/* Location */}
            <h2>Where Will The Service Be Taking Place?</h2>
            <div className="form-row">
              <label>Location</label>
              <select
                className="custom-select"
                value={formState.location}
                onChange={(e) => handleChange("location", e.target.value)}
              >
                <option>Snohomish County</option>
                <option>King County</option>
              </select>
            </div>

            {/* Service */}
            <div className="form-row">
              <label>Services</label>
              <select
                className="custom-select"
                value={formState.service}
                onChange={(e) => handleChange("service", e.target.value)}
              >
                <option>Maintenance Cleaning</option>
                <option>Deep Clean</option>
                <option>Post Construction</option>
                <option>Move in/out Cleaning</option>
              </select>
            </div>

            {/* Frequency */}
            <div className="form-row">
              <label>Frequency</label>
              <div className="button-group">
                {frequencyOptions.map((freq, i) => (
                  <button
                    key={i}
                    className={formState.frequency === freq ? "active" : ""}
                    onClick={() => handleChange("frequency", freq)}
                    type="button"
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            {/* Rooms */}
            <h2>What Needs To Be Done?</h2>
            <div className="form-grid">
              {/* Bedrooms */}
              <div>
                <label>Bedrooms</label>
                <select
                  value={formState.bedrooms}
                  onChange={(e) => handleChange("bedrooms", +e.target.value)}
                  className="custom-select"
                >
                  {[...Array(7)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} Bedrooms</option>
                  ))}
                </select>
              </div>

              {/* Bathrooms */}
              <div>
                <label>Bathrooms</label>
                <select
                  value={formState.bathrooms}
                  onChange={(e) => handleChange("bathrooms", +e.target.value)}
                  className="custom-select"
                >
                  {[...Array(5)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} Bathrooms</option>
                  ))}
                </select>
              </div>

              {/* Half Bath */}
              <div>
                <label>Half Bath</label>
                <select
                  value={formState.halfBath}
                  onChange={(e) => handleChange("halfBath", +e.target.value)}
                  className="custom-select"
                >
                  {[...Array(5)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} Half Baths</option>
                  ))}
                </select>
              </div>

              {/* Den */}
              <div>
                <label>Den</label>
                <select
                  value={formState.den}
                  onChange={(e) => handleChange("den", +e.target.value)}
                  className="custom-select"
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} Dens</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Extras */}
            <h2>Select Extras</h2>
            <div className="extras-grid">
              {extrasList.map((extra, i) => (
                <div
                  key={i}
                  className={`extra-box ${formState.extras.includes(extra) ? "active" : ""}`}
                  onClick={() => toggleExtra(extra)}
                >
                  <div className="icon">📦</div>
                  <p>{extra}</p>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <h2>Instructions for Providers</h2>
            {instructionQuestions.map((question, i) => (
              <div key={i} className="form-row">
                <label>{question}</label>
                <select
                  className="custom-select"
                  value={formState.instructions[question] || ""}
                  onChange={(e) => handleInstructionChange(question, e.target.value)}
                >
                  <option value="">Select Option</option>
                  {instructionOptions[question].map((option, j) => (
                    <option key={j} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}

            {/* Date */}
            <h2>Select Date</h2>
            <div className="form-row">
              <label>Date</label>
              <input
                type="date"
                value={formState.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
            </div>

            {/* Tips & Parking */}
            <h2>Tips & Parking (Optional)</h2>
            <div className="form-row">
              <label>Tips</label>
              <div className="button-group">
                {tipsOptions.map((tipOption, i) => (
                  <button
                    key={i}
                    className={formState.tip === tipOption ? "active" : ""}
                    onClick={() => handleChange("tip", tipOption)}
                    type="button"
                  >
                    {tipOption}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row">
              <label>Parking</label>
              <div className="button-group">
                {parkingOptions.map((price, i) => (
                  <button
                    key={i}
                    className={formState.parkingFee === price ? "active" : ""}
                    onClick={() => handleChange("parkingFee", price)}
                    type="button"
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer */}
            <h2>Customer Details</h2>
            <div className="form-grid">
              <input
                type="text"
                placeholder="First Name"
                value={formState.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formState.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formState.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={formState.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                value={formState.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>

            {/* Notes */}
            <h2>Special Notes Or Instructions</h2>
            <textarea
              placeholder="Special Notes or Instructions"
              value={formState.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
            />

            {/* Coupon */}
            <h2>Coupon Code</h2>
            <div className="form-row">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={formState.coupon}
                onChange={(e) => handleChange("coupon", e.target.value)}
              />
              <button className="apply-btn" type="button">Apply</button>
            </div>

            {/* Card */}
            <h2>Payment Information</h2>
            <div className="card-box">
              <label>Add new card</label>
              <div className="card-input-group">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="card-number"
                  value={formState.cardNumber}
                  onChange={(e) => handleChange("cardNumber", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="card-exp"
                  value={formState.cardExpiry}
                  onChange={(e) => handleChange("cardExpiry", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="card-cvc"
                  value={formState.cardCvc}
                  onChange={(e) => handleChange("cardCvc", e.target.value)}
                />
              </div>
              <div className="card-icons">
                <img src={mastercard} alt="mastercard" />
                <img src={visa} alt="visa" />
                <img src={discover} alt="discover" />
                <img src={amex} alt="amex" />
              </div>
            </div>

            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Confirm & Pay
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
