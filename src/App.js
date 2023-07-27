import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import AboutUs from "./components/aboutus";
import OurServices from "./components/servicespage";
import Insurances from "./components/insurances";
import ContactUs from "./components/contactus";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/insurances" element={<Insurances />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
