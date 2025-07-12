import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import ContactMap from "./Pages/ContactMap";
import Booking from "./Pages/Booking";
import Service1Page from "./Pages/Service1Page";
import Service2Page from "./Pages/Service2Page";
import Service3Page from "./Pages/Service3Page";
import Service4Page from "./Pages/Service4Page";
import Service5Page from "./Pages/Service5Page";
import Service6Page from "./Pages/Service6Page";
import Service7Page from "./Pages/Service7Page";
import Service8Page from "./Pages/Service8Page";
import Service9Page from "./Pages/Service9Page";
import Service10Page from "./Pages/Service10Page";
import Service11Page from "./Pages/Service11Page";
import Service12Page from "./Pages/Service12Page";
import Service13Page from "./Pages/Service13Page";
import Blogs from "./Components/Blogs"

// Global Components
import ScrollUpButton from "./Components/ScrollUpButton";
import ScrollToTop from "./Components/ScrollToTop"; // ✅ NEW: Import scroll-to-top fix
import Booking2 from "./Pages/Booking2";
import Booking3 from "./Pages/Booking3";
import SinglePost from "./Components/SinglePost"

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop /> {/* ✅ Ensure scroll resets on route change */}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<ContactMap />} />
          <Route path="/regular-cleaning" element={<Service1Page />} />
          <Route path="/move-out-and-move-in" element={<Service2Page />} />
          <Route path="/deep-cleaning" element={<Service3Page />} />
          <Route path="/post-construction" element={<Service4Page />} />
          <Route path="/roof-cleaning" element={<Service5Page />} />
          <Route path="/gutter-cleaning" element={<Service6Page />} />
          <Route path="/house-washing" element={<Service7Page />} />
          <Route path="/pressure-washing" element={<Service8Page />} />
          <Route path="/carpet-and-upholstery" element={<Service9Page />} />
          <Route path="/construction" element={<Service10Page />} />
          <Route path="/corporate-office" element={<Service11Page />} />
          <Route path="/retail-space" element={<Service12Page />} />
          <Route path="/vrbo-and-airbnb" element={<Service13Page />} />
    <Route path="/blog/:id" element={<SinglePost />} />
          <Route path="/booking1" element={<Booking />} />
          <Route path="/booking2" element={<Booking2 />} />
          <Route path="/booking3" element={<Booking3 />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ScrollUpButton />
      </Router>
    </div>
  );
}

export default App;
