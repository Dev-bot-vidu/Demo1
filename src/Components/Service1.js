import React, { useState } from "react";
import "../Styles/Service5.css";
import i1 from "../Assets/House-cleaning1.jpg";
import i2 from "../Assets/House-cleaning2.webp";
import heroBg from "../Assets/house-1.jpg";
import quoteBg from "../Assets/sofa.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";

function Service1() {
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
        "Our professionally trained team members at Ivory Standard are background-checked and specialize in residential cleaning services. They follow a detailed checklist to ensure your home stays fresh and spotless."
    },
    {
      question: "How much does regular cleaning cost?",
      answer:
        "Pricing depends on your home's size, frequency of cleaning, and any special requests. Contact us anytime for a free, no-obligation quote tailored to your home."
    },
    {
      question: "Do I need to be home for the cleaning?",
      answer:
        "No. Many clients provide us secure entry instructions. As long as we have safe access to your home, you don’t need to be present during the cleaning."
    },
    {
      question: "What time does the team arrive?",
      answer:
        "You’ll receive a 2-hour arrival window along with a text notification when our crew is en route to your home."
    },
    {
      question: "What doesn’t regular cleaning include?",
      answer:
        "Our standard service doesn’t include heavy decluttering, extreme hoarding cleanups, mold remediation, or hazardous material removal. We focus on keeping your space fresh, clean, and tidy on a regular basis."
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
          backgroundImage: `url(${heroBg})`
        }}
      >
        <div className="overlay-content">
          <h1>Regular House Cleaning</h1>
          <h2>Consistent & Reliable</h2>
          <p>
            Keep your home fresh and inviting year-round with Ivory Standard’s trusted regular cleaning services. Enjoy a spotless living space without lifting a finger.
          </p>
          <button className="dark-btn">Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <img src={i1} alt="Regular Cleaning" />
          <div className="benefits-text">
            <h2 className="heading01">Our Regular Cleaning Service</h2>
            <br />
            <p className="para01">
              Ivory Standard’s regular house cleaning service covers every essential task to maintain a neat, healthy home environment. From dusting and vacuuming to bathroom sanitizing and kitchen wipe-downs, we handle the chores so you don’t have to.
            </p>
            <br />
            <p className="para01">
              Choose from weekly, biweekly, or monthly plans to match your lifestyle. Our professional team uses safe, eco-friendly products to deliver a sparkling clean you can feel good about.
            </p>
            <br />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div>Experienced & Professional</div>
        <div>Background Checked</div>
        <div>Customizable Plans</div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2 className="heading01">Why Choose Us for Regular Cleaning?</h2>
            <br />
            <p className="para02">
              With Ivory Standard, you get reliable, consistent service from trusted professionals who care about your home as much as you do. Our flexible plans, eco-friendly approach, and attention to detail make us the smart choice for busy households.
            </p>
            <br />
          </div>
          <img src={i2} alt="About Regular Cleaning" />
        </div>
      </section>

      {/* Services List */}
      <section className="roof-services-section">
        <h1>See What's Included in Regular House Cleaning</h1>
        <p className="subheading">Customize to fit your needs!</p>

        <ul className="roof-services-list">
          <li>Dusting & Wiping Surfaces</li>
          <li>Vacuuming & Mopping Floors</li>
          <li>Bathroom Cleaning & Sanitizing</li>
          <li>Kitchen Surface Cleaning</li>
          <li>Trash Removal</li>
        </ul>
      </section>

      {/* Quote Section */}
      <section
        className="quote-section"
        style={{
          backgroundImage: `url(${quoteBg})`
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
          backgroundImage: `url(${finalCtaBg})`
        }}
      >
        <h2>LET'S DO IT!</h2>
        <p>Book your regular cleaning today with Ivory Standard—keeping your home fresh and beautiful.</p>
        <div className="buttons">
          <Link to="/booking"><button className="dark-btn">Book Now</button></Link>
        </div>
      </section>
    </div>
  );
}

export default Service1;
