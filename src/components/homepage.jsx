import React from "react";
import NavBar from "./navbar";
import Hero from "./hero";
import ClinicsPromises from "./clinicspromises";
import Services from "./services";
import Advantages from "./advantages";
import PxReviews from "./pxreviews";
import Footer from "./footer";
import RealFooter from "./footer2";
import ClinicLoc from "./clinicLoc";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ClinicsPromises />
      <Services />
      <Advantages />
      <PxReviews />
      <Footer />
      <ClinicLoc />
      <RealFooter />
    </div>
  );
};

export default HomePage;
