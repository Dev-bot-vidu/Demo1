import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css"; // Reuse your scroll-up styling

function ScrollUpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-up ${showButton ? "show-scroll" : ""}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
  );
}

export default ScrollUpButton;
