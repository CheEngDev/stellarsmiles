import React, { useState } from "react";
import stellar from "../assets/stellar.png";
import { BiMenu } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [navopen, setnavopen] = useState(false);

  function handleOpenNav() {
    setnavopen(!navopen);
  }
  return (
    <div>
      <div className="bg-black w-full flex justify-between items-center px-2 h-[50px] lg:h-[70px] md:h-[50px]">
        <img
          className="w-[155px] -translate-y-2 lg:w-[210px]  md:w-[170px]"
          src={stellar}
          alt=""
        />
        <ul className=" text-white font-semibold hidden md:flex md:text-lg lg:text-xl">
          <li className="mx-3 cursor-pointer hover:text-[#e6d2af] ">HOME</li>
          <li className="mx-3 cursor-pointer hover:text-[#e6d2af]">ABOUT US</li>
          <li className="mx-3 cursor-pointer hover:text-[#e6d2af]">SERVICES</li>
          <li className="mx-3 cursor-pointer hover:text-[#e6d2af]">
            INSURANCES
          </li>
          <li className="mx-3 cursor-pointer hover:text-[#e6d2af]">
            CONTACT US
          </li>
        </ul>
        <div className="flex items-center">
          <FaFacebookSquare
            className="lg:mr-10 cursor-pointer"
            fill="white"
            size={25}
          />
          {!navopen ? (
            <BiMenu
              className="block mx-1 cursor-pointer md:hidden "
              onClick={handleOpenNav}
              fill="white"
              size={35}
            />
          ) : (
            <AiOutlineClose
              className="block mx-1 cursor-pointer md:hidden "
              onClick={handleOpenNav}
              fill="white"
              size={25}
            />
          )}
        </div>
      </div>
      <div
        className={
          navopen
            ? "bg-black opacity-80 absolute z-20 text-center w-full max-h-full overflow-hidden transition-all duration-1000 md:hidden"
            : "bg-black opacity-80 absolute z-20 text-center w-full max-h-0 overflow-hidden transition-all duration-500"
        }
      >
        <ul className=" text-white text-xl font-semibold static  z-10">
          <li className="mx-3 my-2 cursor-pointer hover:text-[#e6d2af] ">
            HOME
          </li>
          <li className="mx-3 my-2 cursor-pointer hover:text-[#e6d2af]">
            ABOUT US
          </li>
          <li className="mx-3 my-2 cursor-pointer hover:text-[#e6d2af]">
            SERVICES
          </li>
          <li className="mx-3 my-2 cursor-pointer hover:text-[#e6d2af]">
            INSURANCES
          </li>
          <li className="mx-3 my-2 cursor-pointer hover:text-[#e6d2af]">
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
