import React, { useState } from "react";
import "../Styles/Service5.css"; // Reuse same CSS if shared
import i1 from "../Assets/deep2.jpg";
import i2 from "../Assets/deep3.jpg";
import heroBg from "../Assets/deep1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service3() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe after your cleaning is completed. A card must be on file—even if you plan to pay in cash. We do not accept checks or wire transfers."
    },
    {
      question: "Who performs the deep cleaning?",
      answer:
        "Our professionally trained team members at Ivory Standard are background-checked and specialize in top-to-bottom deep cleaning for residential spaces."
    },
    {
      question: "How much does deep cleaning cost?",
      answer:
        "Pricing depends on the size and condition of your home, as well as any special areas you’d like us to tackle. Contact us anytime for a free, no-obligation quote."
    },
    {
      question: "Do I need to be home for the cleaning?",
      answer:
        "No. As long as we have safe access to your home, you don’t need to be present during the cleaning."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window along with a text notification when our crew is on the way."
    },
    {
      question: "What’s included in deep cleaning?",
      answer:
        "Deep cleaning covers areas that standard cleaning doesn’t, including baseboards, vents, behind appliances, inside cabinets, and detailed scrubbing of high-touch areas."
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
          <h1>Deep Cleaning</h1>
          <h2>Thorough & Detailed</h2>
          <p>
            Bring your home back to pristine condition with Ivory Standard’s deep cleaning service. We handle what regular cleaning misses, reaching every corner and hidden spot.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Deep Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Deep Cleaning Service</h2>
            <br />
            <p className="para01">
              Ivory Standard’s deep cleaning is designed to tackle dirt, dust, and grime that builds up over time. We go beyond routine tasks to scrub baseboards, sanitize behind appliances, and refresh neglected spaces.
            </p>
            <br />
            <p className="para01">
              Ideal for seasonal cleanups, post-renovation, or simply a fresh start, our detail-focused approach uses safe, eco-friendly products and proven techniques to get your entire home spotless.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Detailed & Meticulous</div>
        <div>Experienced & Insured</div>
        <div>Safe & Eco-Friendly</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Deep Cleaning?</h2>
            <br />
            <p className="para02">
              Ivory Standard combines a careful, proven deep cleaning process with friendly, trained professionals you can trust. Whether it’s spring cleaning or a pre-event refresh, we leave your space looking and feeling brand new.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Deep Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Deep Cleaning</h1>
        <p className="subheading">A Deeper Clean, Every Time</p>

        <ul className="roof-services-list">
          <li>Detailed Dusting & Wiping</li>
          <li>Baseboards & Vents</li>
          <li>Behind & Under Appliances</li>
          <li>Inside Cabinets & Drawers</li>
          <li>Full Bathroom & Kitchen Scrub</li>
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
        <p>Book your deep cleaning today with Ivory Standard — and enjoy a spotless home again!</p>
        <div className="buttons">
          <Link to="/booking"><button className="dark-btn">Book Now</button></Link>
        </div>
      </section>
    </div>
  );
}

export default Service3;
