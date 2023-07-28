import React from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const RealFooter = () => {
  return (
    <div className="mt-64 py-10 bg-black text-white">
      <div className="px-6 grid md:grid-cols-3">
        <div className="text-center md:text-left md:col-span-1">
          <h2 className="text-2xl font-bold ">STELLAR SMILES</h2>
          <p className="text-white font-light">
            Welcome to our dental clinic! We are committed to providing
            exceptional dental care to our patients and ensuring their oral
            health is in its best condition.
          </p>
        </div>
        <div className="text-center md:col-span-2 md:flex md:justify-evenly">
          <div className="mt-3 md:mt-0">
            <h3 className="text-xl">Quick Links</h3>
            <ul className=" font-light">
              <li>
                <a className="hover:hover:text-[#cf945f]" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:hover:text-[#cf945f]" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:hover:text-[#cf945f]" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:hover:text-[#cf945f]" href="/insurances">
                  Insurances
                </a>
              </li>
              <li>
                <a className="hover:hover:text-[#cf945f]" href="/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:hover:text-[#cf945f]" href="/login">
                  Admin Log in
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-3 md:mt-0">
            <h3 className="text-xl">Opening Hours</h3>
            <ul className=" font-light">
              <li>Monday to Saturday</li>
              <li>9:00 am to 6:00 pm</li>
              <li>Sunday Closed</li>
            </ul>
            <p></p>
          </div>
          <div className="mt-3 md:mt-0">
            <h3 className="text-xl">Get In Touch</h3>
            <ul className=" font-light">
              <li>ChEjaysdv@gmail.com</li>
              <li>Phone: 523-7569</li>
              <li className="flex justify-center">
                <a className="cursor-pointer">
                  <AiOutlineTwitter size={25} />
                </a>
                <a className="cursor-pointer">
                  <AiFillFacebook size={25} />
                </a>
                <a className="cursor-pointer">
                  <AiOutlineInstagram size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealFooter;
