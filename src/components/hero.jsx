import React from "react";
import ad from "../assets/dental.mp4";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 auto-cols-auto gap-2 ">
      <div className="c ">
        <h1 className="text-6xl font-medium tracking-wider mt-4 ml-2">
          STELLAR SMILES
        </h1>
        <div className="border-b-2 border-black ml-4 mr-8 mt-4"></div>
        <p className="text-2xl mt-8 px-2 ">
          Radiant Smiles, One Appointment at a Time!
        </p>
        <p className="text-lg font-light mt-5 px-2 ">
          Call or Text to Book <br /> 523-7569 or book online
        </p>
        <div className="mt-8 ml-7">
          <a className="px-7 py-3 border-2 border-black cursor-pointer hover:border-[#cf945f] hover:text-[#cf945f]">
            BOOK NOW
          </a>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        src={ad}
        className="max-w-full col-span-3 rounded-lg mt-2 pl-2"
      ></video>
    </div>
  );
};

export default Hero;
