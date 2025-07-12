import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/roofcleaning1.jpg";
import i2 from "../Assets/roofcleaning2.jpg";
import heroBg from "../Assets/roof1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service5() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe after your cleaning is completed. A card must be on file—even if you plan to pay in cash. We do not accept checks or wire transfers."
    },
    {
      question: "Who performs the roof cleaning?",
      answer:
        "Our professionally trained team members at Ivory Standard are background-checked and specialize in safe, non-invasive soft wash roof cleaning techniques."
    },
    {
      question: "How much does roof cleaning cost?",
      answer:
        "Every roof is different. Pricing depends on size, material, and current condition. Contact us anytime for a free, no-obligation quote."
    },
    {
      question: "Do I need to be home for the cleaning?",
      answer:
        "No. As long as we have safe access to your roof and an external water source, you don't need to be present."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window along with a text notification before our crew is en route."
    },
    {
      question: "What don’t you clean?",
      answer:
        "We avoid roofs with major structural damage, areas requiring mold remediation, or hazardous material exposure."
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
          <h1>Roof Cleaning</h1>
          <h2>Gentle & Trusted by Professionals</h2>
          <p>
            At Ivory Standard, our soft wash roof cleaning helps extend your roof's life and enhances curb appeal. We eliminate harmful moss, algae, and debris—safely and efficiently.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Roof Cleaning Service</h2>
            <br />
            <p className="para01">
              Ivory Standard’s roof cleaning service thoroughly removes moss, algae, and surface staining—restoring your roof’s natural beauty. Our crew uses specialized methods that avoid costly scaffolding while ensuring deep, even cleaning across all roof types.
            </p>
            <br />
            <p className="para01">
              We rely on eco-friendly treatments and modern steam-based techniques that are both safe and long-lasting. Whether it's a historic home or a modern flat roof, our experienced cleaners handle each property with the care and professionalism you deserve.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Experienced & Professional</div>
        <div>Background Checked</div>
        <div>In-Person Evaluations</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01"> Why Choose Us for Roof Cleaning?</h2>
            <br />
            <p className="para02">
              At Ivory Standard, we blend modern cleaning science with hands-on experience. Every roof receives a customized cleaning approach that suits its specific condition and material. Our technicians work meticulously to remove all buildup, ensuring lasting results and a like-new finish.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>See What's Included In Roof Cleaning Services</h1>
        <p className="subheading">Customization Options Available!</p>

        <ul className="roof-services-list">
          <li>Removal of Moss, Algae, and Lichen</li>
          <li>Gentle Cleaning of Roof Shingles</li>
          <li>Debris Removal from Roof Valleys and Flashing</li>
          <li>Application of Preventative Treatment</li>
          <li>Optional Gutter Debris Removal</li>
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
        <p>Book your roof cleaning today with Ivory Standard—where quality always comes first.</p>
        <div className="buttons">
          <Link to="/booking">
            <button className="dark-btn">Book Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Service5;
