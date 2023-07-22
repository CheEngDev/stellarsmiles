import React from "react";
import stellar from "../assets/stellar.png";

const NavBar = () => {
  return (
    <div className="bg-black w-full h-[70px] flex justify-between items-center px-2 ">
      <img className="w-[210px] -translate-y-2" src={stellar} alt="" />
      <ul className=" text-white font-semibold text-xl md:hidden lg:flex">
        <li className="mx-3 cursor-pointer hover:text-[#e6d2af] ">HOME</li>
        <li className="mx-3 cursor-pointer hover:text-[#e6d2af]">ABOUT US</li>
        <li className="mx-3 cursor-pointer hover:text-[#e6d2af]">SERVICES</li>
        <li className="mx-3 cursor-pointer hover:text-[#e6d2af]">INSURANCES</li>
        <li className="mx-3 cursor-pointer hover:text-[#e6d2af]">CONTACT US</li>
      </ul>
    </div>
  );
};

export default NavBar;
