import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubscribeNewsletter() {
  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      emailRegex.test(inputEmail)
        ? toast.success("Subscribed to Newsletter !", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => {
              setIsButtonDisabled(true);
              setInputEmail("");
            },
            onClose: () => setIsButtonDisabled(false),
          })
        : toast.error("Invalid Email Address !", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsButtonDisabled(true),
            onClose: () => setIsButtonDisabled(false),
          });
    }
  };

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Stay Update to our Newsletter</p>
      <input
  type="text"
  inputMode="email"
  className="ft-input"
  placeholder="Enter your Email"
  name="email"
  value={inputEmail}
  onChange={handleEmailInput}
  autoComplete="true"
  style={{
    backgroundColor: "black", // your custom color
    color: "white",              // optional: improves contrast
    border: "none",
    borderRadius: "6px",
    padding: "12px",
    fontSize: "16px"
  }}
/>

      <button
  style={{
    backgroundColor: isButtonDisabled ? "black" : "black",
    color: "white",
    margin : "0px 20px",
    padding: "15px 28px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontFamily: "Rubik, sans-serif",
    cursor: isButtonDisabled ? "not-allowed" : "pointer",
    opacity: isButtonDisabled ? 0.7 : 1,
    transition: "all 0.3s ease"
  }}
  type="button"
  disabled={isButtonDisabled}
  onClick={handleBookAppointmentClick}
>
  Subscribe
</button>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default SubscribeNewsletter;
