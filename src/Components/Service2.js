import React, { useState } from "react";
import "../Styles/Service5.css"; // Shared styles
import i1 from "../Assets/move1.jpg";
import i2 from "../Assets/move2.jpg";
import heroBg from "../Assets/move0.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service2() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe after your cleaning is completed. A card must be on file—even if you plan to pay in cash. We do not accept checks or wire transfers."
    },
    {
      question: "Who performs the cleaning?",
      answer:
        "Our professionally trained team members at Ivory Standard are background-checked and specialize in detailed move-out and move-in cleaning services."
    },
    {
      question: "How much does a move-out or move-in clean cost?",
      answer:
        "Pricing depends on your home's size, its current condition, and any specific requests. Contact us anytime for a free, no-obligation quote."
    },
    {
      question: "Do I need to be home for the cleaning?",
      answer:
        "No. As long as we have safe access to the property, you don’t need to be present during the cleaning."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window along with a text notification when our crew is on the way."
    },
    {
      question: "What’s included in move-out/move-in cleaning?",
      answer:
        "Our service includes a top-to-bottom deep clean: inside cabinets, drawers, appliances, baseboards, and more — everything needed to make the space ready for new occupants."
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
          <h1>Move Out & Move In Cleaning</h1>
          <h2>Stress-Free & Thorough</h2>
          <p>
            Make moving day easier with Ivory Standard’s detailed move-out and move-in cleaning. We ensure every corner is spotless so you or the next residents start fresh.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Move Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Move Cleaning Service</h2>
            <br />
            <p className="para01">
              Ivory Standard’s move-out and move-in cleaning provides a deep, thorough clean to help secure your deposit or welcome new residents into a fresh space. We scrub, wipe, vacuum, and disinfect every corner.
            </p>
            <br />
            <p className="para01">
              From inside cabinets and appliances to baseboards and bathrooms, we tackle areas often overlooked. Moving is stressful — let us handle the cleaning so you can focus on your next chapter.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Experienced & Professional</div>
        <div>Detailed Deep Cleaning</div>
        <div>Flexible Scheduling</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Move Out & Move In Cleaning?</h2>
            <br />
            <p className="para02">
              With Ivory Standard, you get trusted, insured, and detail-oriented professionals. We help you meet lease requirements, get deposits back, and move in without the worry of leftover mess from prior tenants.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Move Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Move Out & Move In Cleaning</h1>
        <p className="subheading">Deep & Detailed — Every Time</p>

        <ul className="roof-services-list">
          <li>Full Room Dusting & Wiping</li>
          <li>Vacuuming & Mopping Floors</li>
          <li>Inside Cabinets & Drawers</li>
          <li>Appliance Interior Cleaning</li>
          <li>Bathroom & Kitchen Deep Clean</li>
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
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Zip Code" />
              <input type="text" placeholder="Square Footage" />
            </div>
            <div className="form-row2">
              <input type="text" placeholder="Desired Services" />
              <input type="text" placeholder="How did you hear about us?" />
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
        <p>Book your move-out or move-in cleaning with Ivory Standard — and move stress-free!</p>
        <div className="buttons">
          <Link to="/booking"><button className="dark-btn">Book Now</button></Link>
        </div>
      </section>
    </div>
  );
}

export default Service2;
