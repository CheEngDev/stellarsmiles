import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ClinicsPromises from "./components/clinicspromises";
import Services from "./components/services";
import Advantages from "./components/advantages";
import PxReviews from "./components/pxreviews";
import Footer from "./components/footer";
import RealFooter from "./components/footer2";

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
      <RealFooter />
    </div>
  );
}

export default App;
