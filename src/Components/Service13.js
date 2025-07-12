import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/v2 (1).png";
import i2 from "../Assets/v3.webp";
import heroBg from "../Assets/v1.webp";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service13() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe or provide invoicing for regular hosts. A payment method must be on file."
    },
    {
      question: "Who performs the rental cleanings?",
      answer:
        "Our dedicated, background-checked team specializes in fast, detailed vacation rental turnover cleaning for VRBO, Airbnb, and similar stays."
    },
    {
      question: "How much does vacation rental cleaning cost?",
      answer:
        "Pricing depends on property size, number of bedrooms/bathrooms, and any additional services requested. Contact us for a custom host-friendly quote."
    },
    {
      question: "Do I need to meet the cleaners?",
      answer:
        "No. Most hosts provide secure access instructions or smart lock codes, so you don’t have to be present."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "We coordinate arrival with guest check-out/check-in times to ensure quick and seamless turnover."
    },
    {
      question: "What’s included in the cleaning?",
      answer:
        "Our service includes full room cleaning, fresh linen change, bathroom and kitchen sanitizing, trash removal, light restocking, and staging for a 5-star guest experience."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="cleaning-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay-content">
          <h1>VRBO & Airbnb Cleaning</h1>
          <h2>Turnover-Ready & Guest-Approved</h2>
          <p>
            Keep your vacation rental spotless, welcoming, and ready for 5-star reviews. Ivory Standard’s vacation rental cleaning service guarantees your property always shines between guests.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="VRBO & Airbnb Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Vacation Rental Cleaning</h2>
            <br />
            <p className="para01">
              We understand fast turnarounds are vital for hosts. Our team works efficiently to prepare your rental for new guests — from sparkling bathrooms and kitchens to fresh linens and tidy living areas.
            </p>
            <br />
            <p className="para01">
              Ivory Standard goes beyond basic cleaning with light restocking and thoughtful staging touches to keep your ratings high and your guests coming back.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Fast Turnaround</div>
        <div>5-Star Standards</div>
        <div>Trusted Local Team</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Vacation Rental Cleaning?</h2>
            <br />
            <p className="para02">
              We know how crucial cleanliness is to your guest experience and your reviews. Ivory Standard works with hosts to provide flexible scheduling, secure access, and dependable service that protects your reputation and maximizes occupancy.
            </p>
            <br />
          </div>
          <img src={i2} alt="About VRBO & Airbnb Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Vacation Rental Cleaning</h1>
        <p className="subheading">Turnover Ready Every Time</p>

        <ul className="roof-services-list">
          <li>Full Room Cleaning & Sanitizing</li>
          <li>Fresh Linen & Towel Change</li>
          <li>Bathroom & Kitchen Deep Clean</li>
          <li>Trash Removal & Restocking Essentials</li>
          <li>Light Staging & Guest Readiness</li>
        </ul>
      </section>

      {/* Quote Section */}
      <section
        className="quote-section"
        style={{
          backgroundImage: `url(${quoteBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="quote-overlay"></div>
        <div className="quote-form">
          <form>
            <h2 className="form-heading">Request Your Free Quote Now</h2>
            <br />
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Property Name" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Property Address" />
              <input type="text" placeholder="Number of Bedrooms" />
            </div>
            <div className="form-row2">
              <input type="text" placeholder="Preferred Cleaning Schedule" />
              <input type="text" placeholder="Special Requests" />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Agree to terms and updates</label>
            </div>

            <button className="green-btn1">SUBMIT</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header">
          <div className="faq-icon">💬</div>
          <h2>Common Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-arrow">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="final-cta"
        style={{
          backgroundImage: `url(${finalCtaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h2>LET'S DO IT!</h2>
        <p>Book your vacation rental cleaning today with Ivory Standard — 5-star reviews start with a spotless stay!</p>
        <div className="buttons">
          <Link to="/booking">
            <button className="dark-btn">Book Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Service13;

