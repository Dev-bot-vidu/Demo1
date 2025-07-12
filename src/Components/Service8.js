import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/p2.png";
import i2 from "../Assets/p3.jpg";
import heroBg from "../Assets/p1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service8() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe after your pressure washing service is completed. A card must be on file—even if you plan to pay in cash. We do not accept checks or wire transfers."
    },
    {
      question: "Who performs the pressure washing?",
      answer:
        "Our trained team at Ivory Standard is fully insured, background-checked, and experienced in using safe, effective pressure washing techniques for all outdoor surfaces."
    },
    {
      question: "How much does pressure washing cost?",
      answer:
        "Pricing depends on the size of the area, surface type, and level of buildup. Contact us anytime for a free, no-obligation quote."
    },
    {
      question: "Do I need to be home during the service?",
      answer:
        "No. As long as we have safe access to the areas needing cleaning and an outdoor water source, you don’t need to be present."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window along with a text notification when our crew is on the way."
    },
    {
      question: "What surfaces can you pressure wash?",
      answer:
        "We pressure wash driveways, walkways, patios, decks, fences, and exterior walls. We always assess the surface type and adjust the pressure to avoid any damage."
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
          <h1>Pressure Washing</h1>
          <h2>Revive & Renew Outdoor Spaces</h2>
          <p>
            Ivory Standard’s professional pressure washing removes dirt, grime, algae, and stains from driveways, decks, patios, and more — restoring your outdoor surfaces safely and effectively.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Pressure Washing" />
          <div className="benefits-text">
            <h2 className="heading01">Our Pressure Washing Service</h2>
            <br />
            <p className="para01">
              Outdoor surfaces endure constant exposure to the elements. Dirt, mildew, and algae build up over time — diminishing curb appeal and even creating slip hazards.
            </p>
            <br />
            <p className="para01">
              Ivory Standard’s pressure washing service safely blasts away grime, revealing fresh, clean surfaces. We tailor our pressure levels and cleaning solutions for every surface to protect finishes and extend lifespan.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Safe & Effective Cleaning</div>
        <div>Surface-Specific Pressure Levels</div>
        <div>Experienced & Insured Crew</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Pressure Washing?</h2>
            <br />
            <p className="para02">
              We understand the balance between power and care. Our team uses the right techniques to lift away years of buildup without damaging your concrete, wood, or siding — leaving your outdoor spaces fresh and renewed.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Pressure Washing" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Pressure Washing</h1>
        <p className="subheading">Bring Back That Clean Look</p>

        <ul className="roof-services-list">
          <li>Driveway & Walkway Cleaning</li>
          <li>Deck & Patio Washing</li>
          <li>Fence Restoration</li>
          <li>Exterior Walls & Siding</li>
          <li>Stain & Mildew Removal</li>
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
        <p>Book your pressure washing today with Ivory Standard — bring your outdoor surfaces back to life!</p>
        <div className="buttons">
          <Link to="/booking">
            <button className="dark-btn">Book Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Service8;
