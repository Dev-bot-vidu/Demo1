import React from "react";
import "../Styles/Reviews.css";

// Import images
import user1 from "../Assets/testimonial1.jpg";
import user2 from "../Assets/testimonial2.jpg";
import user3 from "../Assets/testimonial3.jpg";

const testimonials = [
  {
    quoteTitle: "Impeccable Results",
    quoteText:
      "Ivory Standard exceeded our expectations. The team was punctual, professional, and left our home sparkling. We've already booked our next service!",
    userImage: user1,
    name: "Neha Sharma",
    position: "Homeowner, Bengaluru",
  },
  {
    quoteTitle: "Reliable & Trustworthy",
    quoteText:
      "As a business owner, I value efficiency and trust. Ivory Standard delivers spotless cleaning with zero hassle. Highly dependable crew!",
    userImage: user2,
    name: "Ravi Malhotra",
    position: "Café Owner, Pune",
  },
  {
    quoteTitle: "Professional from Start to Finish",
    quoteText:
      "From the first call to the final sweep, everything was handled with care and precision. My apartment has never looked better. Highly recommend!",
    userImage: user3,
    name: "Anita Desai",
    position: "Interior Designer, Mumbai",
  },
];

function Testimonial() {
  return (
    <section className="section__container testimonial-section" style={{ backgroundColor: "white" }}>
      <h2>Testimonials</h2>
      <h1>What Our Customers Say</h1>
      <div className="section__grid">
        {testimonials.map((item, index) => (
          <div className="section__card" key={index}>
            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
            <h4>{item.quoteTitle}</h4>
            <p>{item.quoteText}</p>
            <img src={item.userImage} alt={`User ${index + 1}`} />
            <h5>{item.name}</h5>
            <h6>{item.position}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
