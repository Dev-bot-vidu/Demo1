import React from "react";
import BookingForm from "../Components/BookingForm";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BookingForm2 from "../Components/BookingForm2";
import BookingForm3 from "../Components/BookingForm3";
import Tab from "../Components/Tab"

function Booking() {
    return (
    <div>
        <Navbar/>
        <Tab/>
      <BookingForm/>  
      <Footer/>
    </div>
  );

}

export default Booking;
