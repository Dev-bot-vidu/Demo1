import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/final2.png";
import i2 from "../Assets/final3.png";
import heroBg from "../Assets/final1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service10() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pay?",
      answer:
        "We process payments securely through Stripe once your final construction clean is completed. A card must be on file—even if you plan to pay in cash. We do not accept checks or wire transfers."
    },
    {
      question: "Who does the construction final cleaning?",
      answer:
        "Our trained and insured team at Ivory Standard specializes in post-construction final cleaning for residential and commercial spaces, ensuring every surface is move-in ready."
    },
    {
      question: "How much does a final construction clean cost?",
      answer:
        "Pricing depends on square footage, debris level, and any special requirements. Contact us for a custom, no-obligation quote."
    },
    {
      question: "Do I need to be on site during the clean?",
      answer:
        "No — as long as we have safe access to the property, you don’t need to be there."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window plus a text update when our crew is en route."
    },
    {
      question: "What’s included in the final construction clean?",
      answer:
        "Our thorough service removes leftover dust, debris, adhesive, paint splatters, and construction residue to prepare your new build or renovation for handover."
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
          <h1>Construction Final Clean</h1>
          <h2>Spotless & Ready for Handover</h2>
          <p>
            Ivory Standard’s construction final clean removes all dust, debris, and residue so your new build or remodel shines and is ready for move-in or inspection.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Construction Clean" />
          <div className="benefits-text">
            <h2 className="heading01">Our Construction Final Cleaning</h2>
            <br />
            <p className="para01">
              After contractors finish, dust and debris remain. Ivory Standard’s professional final clean targets all surfaces — walls, floors, windows, fixtures, and more — so your space is truly ready.
            </p>
            <br />
            <p className="para01">
              We remove construction dust, stickers, paint splatters, and leftover materials, paying close attention to details other crews miss. Trust us to prepare your property for handover with a polished, move-in-ready finish.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Debris & Dust Removal</div>
        <div>Detailed Surface Wipe Down</div>
        <div>Move-In Ready Finish</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Final Cleaning?</h2>
            <br />
            <p className="para02">
              Ivory Standard combines skilled cleaners, commercial-grade tools, and strict attention to detail to guarantee a spotless result. Our construction final clean is trusted by builders, property managers, and homeowners alike.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Final Clean" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>What’s Included in Construction Final Cleaning</h1>
        <p className="subheading">A Polished Finish — Every Time</p>

        <ul className="roof-services-list">
          <li>Dust & Debris Removal</li>
          <li>Detailed Surface Cleaning</li>
          <li>Adhesive & Sticker Removal</li>
          <li>Paint & Grout Residue Cleaning</li>
          <li>Window & Glass Polishing</li>
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
        <p>Book your construction final clean with Ivory Standard — and open the doors to a spotless, ready-to-enjoy space!</p>
        <div className="buttons">
          <Link to="/booking">
            <button className="dark-btn">Book Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Service10;
