import React from "react";

const Footer = () => {
  return (
    <div className=" mt-40 mx-5 ">
      <div className="grid bg-black h-[380px] px-4 py-14 md:h-[240px] md:grid-cols-2 md:px-8 content-center">
        <div className="mt-5 md:mt-0">
          <h2 className=" text-white font-bold text-center tracking-wider text-3xl md:text-left md:mx-3 lg:text-5xl lg:mx-7 ">
            READY TO BOOK AN APPOINTMENT?
          </h2>
          <div className="text-white flex justify-center md:justify-normal text-xl mt-7 md:mx-3 md:mt-3 lg:mx-7 ">
            <a
              className=" border-2 border-white px-6 py-3 cursor-pointer hover:border-[#cf945f] hover:text-[#cf945f]"
              href="/booknow"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <p className="text-white tracking-widest lg:text-xl">
            Find an appointment that fits your schedule for the services you
            actually need. Call 523-7569 or click below to book online!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
