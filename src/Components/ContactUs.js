import React, { useState } from "react";
import "../Styles/ContactUs.css";

function ContactUs() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(value)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    validatePhone(value);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.525675856301!2d-122.33516768430768!3d47.608013979185714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102b0e21d27b%3A0x5a4f672cc567441!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1616459123742!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-form">
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSe2FFN6hMy76EUzKHLPgLpSBSi2vOtC7efKYbE2U4XC3KPsTw/formResponse?usp=pp_url&"
            method="POST"
            target="_blank"
          >
            <label>Your Name</label>
            <input
              type="text"
              name="entry.7645755"
              placeholder="Enter your Full Name"
              required
            />

            <div className="form-row">
              <div>
                <label>Email Address</label>
                
                <input
                  type="email"
                  name="entry.1736458666"
                  placeholder="example@domain.com"
                  required
                  style={{marginTop: "10px"}}
                />
              </div>

              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="entry.1855476598"
                  placeholder="Required for Updates"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  style={{marginTop: "10px"}}
                />
              </div>
            </div>

            {phoneError && (
              <p style={{ color: "white", fontSize: "0.9rem", marginTop: "4px" }}>
                {phoneError}
              </p>
            )}

            <label>Your Message</label>
            <textarea
              name="entry.2033202038"
              placeholder="Tell us how we can help..."
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              style={{ marginTop: "20px" }}
              disabled={phoneError !== ""}
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
