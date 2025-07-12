import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/car2.webp";
import i2 from "../Assets/car3.png";
import heroBg from "../Assets/car1.png";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service9() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe after your carpet or upholstery cleaning is completed. A card must be on file—even if you plan to pay in cash. We do not accept checks or wire transfers."
    },
    {
      question: "Who does the carpet and upholstery cleaning?",
      answer:
        "Our trained team at Ivory Standard specializes in fabric-safe techniques and advanced equipment to deep clean carpets, sofas, chairs, and more."
    },
    {
      question: "How much does carpet or upholstery cleaning cost?",
      answer:
        "Pricing depends on the number of rooms, furniture pieces, and their current condition. Contact us anytime for a free, no-obligation quote."
    },
    {
      question: "Do I need to move furniture myself?",
      answer:
        "Light furniture moving is included. For larger items, we’ll discuss safe handling during scheduling."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window and a text notification when our crew is on the way."
    },
    {
      question: "How long does drying take?",
      answer:
        "Drying times vary based on material and weather — typically between 4 to 8 hours for carpets and upholstery."
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
          <h1>Carpet & Upholstery Cleaning</h1>
          <h2>Deep Clean & Freshen Your Home</h2>
          <p>
            Ivory Standard’s carpet and upholstery cleaning lifts away deep-set dirt, allergens, and odors — leaving your fabrics soft, fresh, and revitalized.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Carpet Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Carpet & Upholstery Service</h2>
            <br />
            <p className="para01">
              Everyday life brings in dirt, allergens, and spills that settle deep into your carpets and furniture. Our safe, powerful cleaning methods restore freshness without harsh chemicals.
            </p>
            <br />
            <p className="para01">
              From living room sofas to area rugs, we tackle tough stains, eliminate odors, and extend the life of your textiles. Enjoy a healthier, cleaner home with Ivory Standard.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Eco-Friendly Solutions</div>
        <div>Advanced Stain Removal</div>
        <div>Safe for Kids & Pets</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Carpet & Upholstery?</h2>
            <br />
            <p className="para02">
              Our trained specialists use the best equipment and techniques to protect your carpets and furniture while delivering a deep, thorough clean. We treat your home with care — so you can relax on fresh, clean fabrics.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Carpet Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Carpet & Upholstery Cleaning</h1>
        <p className="subheading">Clean, Fresh & Soft Every Time</p>

        <ul className="roof-services-list">
          <li>Deep Carpet Cleaning</li>
          <li>Spot & Stain Treatment</li>
          <li>Upholstery Cleaning (Sofas & Chairs)</li>
          <li>Odor & Allergen Removal</li>
          <li>Optional Fabric Protection</li>
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
        <p>Book your carpet and upholstery cleaning today with Ivory Standard — and enjoy a fresher, cleaner home!</p>
        <div className="buttons">
          <Link to="/booking">
            <button className="dark-btn">Book Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Service9;
