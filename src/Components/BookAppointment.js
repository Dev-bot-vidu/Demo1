import React from "react";
import Doctor from "../Assets/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Cleaning Team" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>About Us</span>
        </h3>
        <p className="ba-description">
          Welcome to <strong>Ivory Standard – The Cleaning Company</strong>, where attention to detail meets exceptional service.
          We specialize in delivering high-quality, reliable, and eco-conscious cleaning tailored to both residential and commercial properties.
          Our commitment is simple: to create immaculate environments so you can focus on what matters most.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#b07473" }} /> Fully Trained & Verified Professionals
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#b07473" }} /> Convenient & Flexible Scheduling
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#b07473" }} /> Tailored Cleaning Plans for Every Space
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#b07473" }} /> Safe, Eco-Friendly Cleaning Products
        </p>
      </div>
    </div>
  );
}

export default BookAppointment;
