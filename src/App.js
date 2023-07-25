import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ClinicsPromises from "./components/clinicspromises";
import Services from "./components/services";
import Advantages from "./components/advantages";
import PxReviews from "./components/pxreviews";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ClinicsPromises />
      <Services />
      <Advantages />
      <PxReviews />
      <Footer />
    </div>
  );
}

export default App;
