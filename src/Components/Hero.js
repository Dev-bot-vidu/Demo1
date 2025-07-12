import React, { useEffect, useState } from "react";
import Background from "../Assets/herosection.png"; // Ensure this exists
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <div className="hero-wrapper" style={{ backgroundImage: `url(${Background})` }}>
      <div className="overlay"></div>
      <div className="hero-content left-aligned">
        <p className="head">Elevate Your Space with Ivory Standard</p>
        <p className="subtitle">Professional cleaning that brings clarity, comfort, and care to every corner.</p>
        <p className="description">At Ivory Standard – The Cleaning Company, spotless living starts with trusted service.</p>
        <div className="hero-buttons">
          <Link to="/booking"><button className="btn-primary">Get Started</button></Link>
        </div>
      </div>

      <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
