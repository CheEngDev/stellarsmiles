import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import ClinicsPromises from "./components/clinicspromises";
import Services from "./components/services";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ClinicsPromises />
      <Services />
    </div>
  );
}

export default App;
