import React from "react";
import NavBar from "./navbar";
import RealFooter from "./footer2";
import { CiTimer } from "react-icons/ci";
import smile from "../assets/smile.jpg";
import ClinicLoc from "./clinicLoc";

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <div className="grid md:grid-cols-2">
        <div>
          <h2 className="text-5xl text-center md:text-left md:text-6xl lg:text-7xl tracking-wider px-5 mt-5">
            CONTACT US
          </h2>
          <div className="w-[45%] border-b-2 border-black ml-5  mt-5"></div>
          <h3 className="px-5 mt-5  font-light  md:text-lg lg:text-xl">
            For more information on our services feel free to contact us.
          </h3>
          <div className="w-[30%] border-b-2 border-black ml-5  mt-5"></div>
          <div className="mt-7 px-5 flex flex-col items-center md:block">
            <div className="flex mb-2">
              <CiTimer size={40} />
              <h3 className="text-2xl ml-2">Business Hours</h3>
            </div>
            <ul>
              <li>Monday: 9am-5pm</li>
              <li>Tuesday: 9am-5pm</li>
              <li>Wednesday: 9am-5pm</li>
              <li>Thursday: 9am-5pm</li>
              <li>Friday: 9am-5pm</li>
              <li>Saturday: 9am-5pm</li>
              <li>M: 9am-5pm</li>
            </ul>
          </div>
        </div>
        <img className="mt-5" src={smile} alt="" />
      </div>
      <ClinicLoc />

      <RealFooter />
    </div>
  );
};

export default ContactUs;
