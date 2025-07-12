import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq"
import Services from "../Components/Services"
import ContactUs from "../Components/ContactUs";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      {/* <Info /> */}
      {/* <About /> */}
      <BookAppointment />
      <Services/>
      
      <Reviews />
      {/* <Doctors /> */}
      <Faq/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default Home;
