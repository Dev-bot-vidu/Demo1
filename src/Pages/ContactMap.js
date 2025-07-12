import React from "react";
import ContactMapDocs from "../Components/ContactMapDocs";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs"

function ContactMap() {
  return (
    <div>
        <Navbar/>
      <ContactMapDocs />
      {/* <ContactUs/> */}
      <Footer/>
    </div>
  );
}

export default ContactMap;
