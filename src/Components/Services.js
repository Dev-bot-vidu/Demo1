import React from "react";
import "../Styles/Services.css";
import DeepClean from "../Assets/service1.jpg";
import RegularClean from "../Assets/service2.jpg";
import MoveOut from "../Assets/service3.jpg";

function Services() {
  const services = [
    {
      title: 'House Cleaning',
      image: DeepClean,
      subServices: [
        "Regular Cleaning",
        "Move Out/In",
        "Deep Cleaning",
        "Post Construction"
      ]
    },
    {
      title: "Exterior Cleaning",
      image: RegularClean,
      subServices: [
        "Roof Cleaning",
        "Gutter Cleaning",
        "House Washing",
        "Pressure Washing"
      ]
    },
    {
      title: "Carpet & Upholstery Cleaning",
      image: MoveOut,
      subServices: []
    }
  ];

  return (
    
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-overlay">
              <h3>{service.title}</h3>
              {service.subServices.length > 0 && (
                <ul className="sub-service-list">
                  {service.subServices.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              )}
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
