import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/office3.webp";
import i2 from "../Assets/office2.png";
import heroBg from "../Assets/office1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service11() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe or invoicing for corporate clients. A payment method must be on file. We do not accept checks or wire transfers without prior arrangement."
    },
    {
      question: "Who performs the office cleaning?",
      answer:
        "Our trained, background-checked team members at Ivory Standard specialize in thorough and discreet corporate office cleaning during or after business hours."
    },
    {
      question: "How much does office cleaning cost?",
      answer:
        "Pricing depends on office size, layout, cleaning frequency, and any custom requirements. Contact us for a tailored quote and plan."
    },
    {
      question: "Do I need to be present during the cleaning?",
      answer:
        "No. Most corporate clients provide secure access so our crew can clean outside of business hours for minimal disruption."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "We work around your schedule — before, during, or after hours. Arrival times are agreed upon during setup and confirmed in advance."
    },
    {
      question: "What’s included in corporate office cleaning?",
      answer:
        "We handle dusting, surface disinfection, trash removal, restrooms, break rooms, floors, glass, and more — ensuring your workspace stays fresh and healthy."
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
          <h1>Corporate Office Cleaning</h1>
          <h2>Professional & Reliable</h2>
          <p>
            Keep your workplace spotless and inviting with Ivory Standard’s professional corporate office cleaning — customized to fit your team’s needs and schedule.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Corporate Office Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Corporate Office Cleaning</h2>
            <br />
            <p className="para01">
              We help maintain a healthy, productive work environment with consistent, detail-oriented cleaning. From open workspaces and conference rooms to restrooms and break areas — every corner gets our full attention.
            </p>
            <br />
            <p className="para01">
              Ivory Standard’s team works around your office hours, using safe, eco-friendly products and proven systems to deliver a clean your staff and clients can trust.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Flexible Scheduling</div>
        <div>Background-Checked Staff</div>
        <div>Trusted by Businesses</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Office Cleaning?</h2>
            <br />
            <p className="para02">
              Ivory Standard combines reliable staff, quality products, and flexible plans to keep your office looking professional day after day. We build lasting relationships with our corporate clients by delivering consistent results.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Corporate Office Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Office Cleaning</h1>
        <p className="subheading">Healthy & Professional Spaces</p>

        <ul className="roof-services-list">
          <li>Desk & Workspace Dusting</li>
          <li>Trash & Recycling Removal</li>
          <li>Restroom Sanitation</li>
          <li>Break Room Cleaning</li>
          <li>Floor Care & Vacuuming</li>
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
            <h2 className="form-heading">Request Your Custom Quote Now</h2>
            <br />
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Office Location" />
              <input type="text" placeholder="Office Square Footage" />
            </div>
            <div className="form-row2">
              <input type="text" placeholder="Cleaning Frequency" />
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
        <p>Book your corporate office cleaning with Ivory Standard — and keep your workspace fresh and inspiring.</p>
        <div className="buttons">
          <Link to="/booking">
            <button className="dark-btn">Book Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Service11;
