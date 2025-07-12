import React, { useState } from "react";
import "../Styles/Service5.css"; // Reuse shared CSS
import i1 from "../Assets/post2.jpg";
import i2 from "../Assets/post3.jpg";
import heroBg from "../Assets/post1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service4() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe after your cleaning is completed. A card must be on file—even if you plan to pay in cash. We do not accept checks or wire transfers."
    },
    {
      question: "Who performs the post-construction cleaning?",
      answer:
        "Our professionally trained team members at Ivory Standard are background-checked and specialize in detailed post-construction cleaning services."
    },
    {
      question: "How much does post-construction cleaning cost?",
      answer:
        "Pricing depends on the size of the space, amount of debris, and level of detailing needed. Contact us anytime for a free, no-obligation quote."
    },
    {
      question: "Do I need to be present during the cleaning?",
      answer:
        "No. As long as we have safe access to the property, you don’t need to be on site."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window along with a text notification when our crew is on the way."
    },
    {
      question: "What’s included in post-construction cleaning?",
      answer:
        "Our service includes removal of dust, debris, and construction residue, detailed surface wiping, floor cleaning, window cleaning, and final touch-ups for a move-in ready space."
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
          <h1>Post-Construction Cleaning</h1>
          <h2>Thorough & Reliable</h2>
          <p>
            After construction or renovation, your space deserves a meticulous final clean. Ivory Standard ensures every inch is spotless, dust-free, and ready to impress.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Post Construction Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Post-Construction Service</h2>
            <br />
            <p className="para01">
              Ivory Standard’s post-construction cleaning removes all traces of dust, debris, and leftover materials from your newly built or renovated space. We prepare the site for final inspection or immediate move-in.
            </p>
            <br />
            <p className="para01">
              From detailed surface cleaning to floors, walls, fixtures, and windows — we handle it all. Trust our insured, trained team to deliver a spotless, polished finish for any residential or commercial project.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Construction Debris Removal</div>
        <div>Detailed Dusting & Wiping</div>
        <div>Final Touch-Up Specialists</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Post-Construction Cleaning?</h2>
            <br />
            <p className="para02">
              Ivory Standard blends professional expertise with careful attention to detail. We understand the unique challenges of construction mess and provide a deep, methodical clean that leaves your new space ready to use and enjoy.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Post Construction Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Post-Construction Cleaning</h1>
        <p className="subheading">Comprehensive Final Clean</p>

        <ul className="roof-services-list">
          <li>Debris & Dust Removal</li>
          <li>Detailed Surface Wiping</li>
          <li>Floor Care & Vacuuming</li>
          <li>Window & Glass Cleaning</li>
          <li>Appliance & Fixture Polishing</li>
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
        <p>Book your post-construction clean today with Ivory Standard — we’ll make it shine like new!</p>
        <div className="buttons">
          <Link to="/booking"><button className="dark-btn">Book Now</button></Link>
        </div>
      </section>
    </div>
  );
}

export default Service4;
