import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/gutter2.png";
import i2 from "../Assets/gutter3.png";
import heroBg from "../Assets/gutter1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service6() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe after your gutter cleaning is completed. A card must be on file—even if you plan to pay in cash. We do not accept checks or wire transfers."
    },
    {
      question: "Who performs the gutter cleaning?",
      answer:
        "Our professionally trained team members at Ivory Standard are background-checked and specialize in safe, thorough gutter cleaning for all types of properties."
    },
    {
      question: "How much does gutter cleaning cost?",
      answer:
        "Pricing depends on the size of your home, number of stories, and the current condition of your gutters. Contact us anytime for a free, no-obligation quote."
    },
    {
      question: "Do I need to be home during the service?",
      answer:
        "No. As long as we have safe access to your gutters and an external water source if needed, you don’t need to be present."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window along with a text notification before our crew is on the way."
    },
    {
      question: "What’s included in gutter cleaning?",
      answer:
        "Our service includes removal of leaves and debris, flushing downspouts to ensure proper drainage, and a final inspection to make sure everything is clear and functional."
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
          <h1>Gutter Cleaning</h1>
          <h2>Protect Your Home from Water Damage</h2>
          <p>
            Ivory Standard’s gutter cleaning service removes debris and buildup that can cause leaks and structural damage. Keep your home safe with our reliable and thorough team.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Gutter Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Gutter Cleaning Service</h2>
            <br />
            <p className="para01">
              Blocked gutters can lead to water overflow, foundation damage, and costly repairs. Ivory Standard’s expert team clears out debris, checks downspouts, and ensures your system flows properly.
            </p>
            <br />
            <p className="para01">
              Our process is safe and efficient — no mess left behind, just clear gutters ready to protect your home. We use proven methods and proper safety equipment for every job.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Safe & Thorough</div>
        <div>Trusted Professionals</div>
        <div>Downspout Flushing</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Gutter Cleaning?</h2>
            <br />
            <p className="para02">
              Ivory Standard’s reliable gutter cleaning keeps your home safe from water damage. With our trained, insured team, you can rest easy knowing your gutters are clear and functional season after season.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Gutter Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Gutter Cleaning</h1>
        <p className="subheading">Clear & Protect Your Home</p>

        <ul className="roof-services-list">
          <li>Removal of Leaves & Debris</li>
          <li>Flushing of Downspouts</li>
          <li>Inspection for Blockages</li>
          <li>Gutter Condition Report</li>
          <li>Safe Cleanup & Disposal</li>
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
        <p>Book your gutter cleaning with Ivory Standard — keep your home safe and dry!</p>
        <div className="buttons">
          <Link to="/booking">
            <button className="dark-btn">Book Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Service6;
