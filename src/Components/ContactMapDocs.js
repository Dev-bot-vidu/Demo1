import React, { useState } from "react";
import "../Styles/ContactMapDocs.css";
import contactImg from "../Assets/map.png";

function ContactMapDocs() {
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (e) => {
    const phone = e.target.value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  return (
    <div className="contact-full-wrap"><div className="contact-wrapper1">
      <section className="contact-section1">
        <div className="contact-left1">
          <h1>Get in Contact</h1>
          <p><span>📞</span> (425) 410–4589</p>
          <p><span>📧</span> ivorystandardcleaning@gmail.com</p>
          <p><span>🌐</span> www.ivorystandardcleaning.com</p>
          <img src={contactImg} alt="Contact Visual" className="contact-image1" />
        </div>

        <form
          className="contact-form1"
          action="https://docs.google.com/forms/d/e/1FAIpQLSe2FFN6hMy76EUzKHLPgLpSBSi2vOtC7efKYbE2U4XC3KPsTw/formResponse?usp=pp_url&"
          method="POST"
          target="_blank"
        >
          <div className="form-wrap1">
            <input
              type="text"
              name="entry.7645755"
              placeholder="Name"
              required
            />

            <div className="form-row1">
              <input
                type="email"
                name="entry.1736458666"
                placeholder="Email"
                required
              />

              <input
                type="tel"
                name="entry.1855476598"
                placeholder="Cell phone"
                pattern="[0-9]{10}"
                onBlur={validatePhone}
                required
              />
            </div>

            {phoneError && (
              <p style={{ color: "white", fontSize: "0.9rem" }}>{phoneError}</p>
            )}

            <textarea
              name="entry.2033202038"
              placeholder="Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" disabled={phoneError !== ""}>
              Complete & Send
            </button>
          </div>
        </form>
      </section>

      <div className="map-container1">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610017335!2d72.74109975073869!3d19.082197839337444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b00000001%3A0x8f77163cf965df84!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1662187304700!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div></div>
  );
}

export default ContactMapDocs;
