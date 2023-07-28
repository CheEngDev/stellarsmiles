import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/homepage";
import AboutUs from "./components/aboutus";
import OurServices from "./components/servicespage";
import Insurances from "./components/insurances";
import ContactUs from "./components/contactus";
import BookNow from "./components/booknow";
import Login from "./components/adminlogin";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/insurances" element={<Insurances />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
