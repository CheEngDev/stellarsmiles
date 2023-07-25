import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ClinicsPromises from "./components/clinicspromises";
import Services from "./components/services";
import Advantages from "./components/advantages";
import PxReviews from "./components/pxreviews";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ClinicsPromises />
      <Services />
      <Advantages />
      <PxReviews />
    </div>
  );
}

export default App;
