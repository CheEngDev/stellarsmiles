import React from "react";
import ad from "../assets/dental.mp4";

const Hero = () => {
  return (
    <div className="mt-2 md:grid md:grid-cols-4  md:gap-2 ">
      <div className="">
        <h1 className=" text-4xl text-center font-medium tracking-wider mt-4 ml-2 md:text-left md:text-4xl lg:text-6xl">
          STELLAR SMILES
        </h1>
        <div className="border-b-2 mx-8 mt-2 border-black md:ml-3 md:mr-12 md:mt-2 lg:mt-4 lg:ml-4 lg:mr-8"></div>
        <p className="text-2xl text-center px-6 mt-3 lg:text-2xl lg:mt-8 lg:px-2 md:text-lg md:mt-6 md:px-2 md:text-left">
          Radiant Smiles, One Appointment at a Time!
        </p>
        <p className="px-2 font-light text-center mt-3 lg:text-lg lg:mt-5 md:text-base md:mt-4 md:text-left">
          Call or Text to Book <br /> 523-7569 or book online
        </p>
        <div className="text-center mt-4 mb-4 md:ml-7 md:text-left lg:mt-8 md:mt-5 ">
          <a
            className="px-4 py-2 border-2 border-black cursor-pointer hover:border-[#cf945f] hover:text-[#cf945f] lg:px-7 lg:py-3 md:px-5 md:py-2"
            href="/booknow"
          >
            BOOK NOW
          </a>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        src={ad}
        className="max-w-full col-span-3  mt-2 md:pl-2"
      ></video>
    </div>
  );
};

export default Hero;
