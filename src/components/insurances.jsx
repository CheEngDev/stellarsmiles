import React from "react";
import NavBar from "./navbar";
import RealFooter from "./footer2";
import insurance from "../assets/insurance.jpg";
import smiles from "../assets/smiles.jpeg";

const Insurances = () => {
  return (
    <div>
      <NavBar />
      <div className="">
        <h2 className="text-5xl md:text-7xl tracking-wider px-5 mt-5">
          INSURANCES
        </h2>
        <div className="w-[45%] border-b-2 border-black ml-5  mt-5"></div>
        <h3 className="px-5 mt-5 text-xl font-light">
          "Protecting Your Smile, Ensuring Your Peace of Mind: Dental Clinic
          Insurance Done Right!"
        </h3>
        <div className="w-[30%] border-b-2 border-black ml-5  mt-5"></div>
        <div className="mt-20 px-5 grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-3xl font-semibold">
              Getting to know what Insurance is.
            </h4>
            <p className="mt-3">
              "Comprehensive dental insurance provides invaluable financial
              security by covering a wide range of oral healthcare needs, from
              routine check-ups and cleanings to essential treatments like
              fillings, root canals, and crowns, ensuring that you and your
              family can confidently maintain optimal oral health without
              worrying about the burden of unexpected dental expenses."
            </p>
            <h5 className="mt-12 text-xl font-bold">
              Stellar Smiles Partners with alot of Insurance companies{" "}
            </h5>
          </div>
          <img src={insurance} alt="" />
        </div>
        <div className="mt-40 px-5 grid lg:grid-cols-2 gap-4">
          <img className="m-auto lg:m-0" src={smiles} alt="" />
          <div className="row-start-1 md:row-auto">
            <h4 className="text-2xl text-center font-semibold lg:text-left">
              Services Covered By Insurances
            </h4>
            <p className="mt-3 text-lg text-center lg:text-left">
              Preventive care exams are usually covered in full by most
              insurance providers. While routine dental check-ups and cleanings
              are important for maintaining your oral health, there are other
              services that insurance can help you afford as well. These
              services include: <br />
              <span className="text-xl font-light tracking-widest">
                {" "}
                Cavity fillings, Teeth whitening, Root canals, Dental implants,
                Orthodontics, Oral surgery.{" "}
              </span>
              <br />
              Don’t let the cost of dental care keep you from taking care of
              your teeth. Find out how affordable dental care can be by
              contacting our office today. Let us help you navigate your
              insurance coverage so that you can get the dental services you
              need at a price you can afford.
            </p>
          </div>
        </div>
      </div>
      <RealFooter />
    </div>
  );
};

export default Insurances;
