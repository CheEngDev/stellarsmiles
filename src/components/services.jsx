import React, { useState } from "react";

const Services = () => {
  const [ortho, setortho] = useState(false);
  const [prostho, setprospho] = useState(false);
  const [endo, setendo] = useState(false);
  const [cosme, setcosme] = useState(false);
  const [gendent, setgendent] = useState(false);
  const [oralsurg, setoralsurg] = useState(false);

  function handleOrthoHover() {
    setortho(!ortho);
  }

  function handleProsthoHover() {
    setprospho(!prostho);
  }

  function handleEndoHover() {
    setendo(!endo);
  }

  function handleCosmeHover() {
    setcosme(!cosme);
  }

  function handleGenDentHover() {
    setgendent(!gendent);
  }

  function handleOralSurgHover() {
    setoralsurg(!oralsurg);
  }

  return (
    <div className="mt-36 bg-[#f3f2ef] pb-7">
      <h2 className=" mb-5 text-3xl tracking-wider text-center font-semibold -translate-y-5 md:-translate-y-7 md:text-4xl lg:text-6xl">
        OUR SERVICES
      </h2>
      <div className=" md:grid lg:grid-cols-2 md:grid-cols-3 ">
        <div className="mb-12 md:mb-0 md:col-span-1 md:justify-self-center lg:col-span-1">
          <h3 className="text-3xl font-bold mb-3 underline text-center md:text-left md:mt-0 md:mx-2 md:text-2xl lg:mx-4 lg:text-3xl lg:mt-16">
            Not Your Ordinary Dental Clinic
          </h3>
          <p className="mx-4 tracking-wide mt-2 text-center md:text-left md:mx-2 lg:mx-4">
            Our dental clinic offers a comprehensive range of services,
            including routine check-ups, cosmetic dentistry, orthodontics, and
            restorative procedures, all delivered by a team of skilled
            professionals dedicated to enhancing your oral health and creating
            beautiful smiles.
          </p>
          <div className=" text-center mt-7 md:text-left md:mx-2 md:mt-8 lg:mt-14 lg:mx-4">
            <a className="cursor-pointer border-2 border-black px-7 py-3 hover:border-[#cf945f] hover:text-[#cf945f] ">
              VIEW ALL SERVICES
            </a>
          </div>
        </div>

        <div className=" md:col-span-2 lg:col-span-1 md:justify-self-center lg:justify-self-auto">
          <div className="flex flex-col bg-[#f3f2ef] md:flex-row ">
            <div
              className="relative flex justify-center overflow-hidden max-w-full mx-7 my-2 h-[190px] md:mx-1 md:my-1 md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px]"
              onMouseEnter={handleOrthoHover}
              onMouseLeave={handleOrthoHover}
            >
              <div
                className={
                  !ortho
                    ? "absolute bg-black w-full h-full transition-all duration-700"
                    : "absolute bg-black w-full h-full -translate-x-full transition-all duration-700"
                }
              >
                <h3 className="text-white text-2xl md:text-xl font-bold flex justify-center items-center h-full ">
                  ORTHODONTICS
                </h3>
              </div>
              <div
                className={
                  !ortho
                    ? "absolute bg-white  w-full h-full translate-x-full transition-all duration-700"
                    : "absolute bg-white w-full h-full transition-all duration-700"
                }
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <h3 className="font-light text-lg">ORTHODONTICS</h3>
                  <div className="mt-2">
                    <a className="border-[1px] rounded-lg px-2 py-1 border-black cursor-pointer hover:font-semibold">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative flex justify-center   overflow-hidden max-w-full mx-7 my-2 h-[190px] md:mx-1 md:my-1 md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px]"
              onMouseEnter={handleProsthoHover}
              onMouseLeave={handleProsthoHover}
            >
              <div
                className={
                  !prostho
                    ? "absolute bg-black w-full h-full transition-all duration-700"
                    : "absolute bg-black w-full h-full -translate-x-full transition-all duration-700"
                }
              >
                <h3 className="text-white text-2xl md:text-xl font-bold flex justify-center items-center h-full ">
                  PERIODONTICS
                </h3>
              </div>
              <div
                className={
                  !prostho
                    ? "absolute bg-white w-full h-full translate-x-full transition-all duration-700"
                    : "absolut bg-white w-full h-full transition-all duration-700"
                }
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <h3 className="font-light text-lg">PERIODONTICS</h3>
                  <div className="mt-2">
                    <a className="border-[1px] rounded-lg px-2 py-1 border-black cursor-pointer hover:font-semibold">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative flex justify-center overflow-hidden max-w-full mx-7 my-2 h-[190px] md:mx-1 md:my-1 md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px]"
              onMouseEnter={handleEndoHover}
              onMouseLeave={handleEndoHover}
            >
              <div
                className={
                  !endo
                    ? "absolute bg-black w-full h-full transition-all duration-700"
                    : "absolute bg-black w-full h-full -translate-x-full transition-all duration-700"
                }
              >
                <h3 className="text-white text-2xl md:text-xl font-bold flex justify-center items-center h-full ">
                  ENDODONTICS
                </h3>
              </div>
              <div
                className={
                  !endo
                    ? "absolute bg-white w-full h-full translate-x-full transition-all duration-700"
                    : "absolute bg-white w-full h-full transition-all duration-700"
                }
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <h3 className="font-light text-lg">ENDODONTICS</h3>
                  <div className="mt-2">
                    <a className="border-[1px] rounded-lg px-2 py-1 border-black cursor-pointer hover:font-semibold">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div
              className="relative flex justify-center  overflow-hidden max-w-full mx-7 my-2 h-[190px] md:mx-1 md:my-1 md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px]"
              onMouseEnter={handleCosmeHover}
              onMouseLeave={handleCosmeHover}
            >
              <div
                className={
                  !cosme
                    ? "absolute bg-black w-full h-full transition-all duration-700"
                    : "absolute bg-black w-full h-full -translate-x-full transition-all duration-700 "
                }
              >
                <h3 className="text-white text-2xl md:text-xl font-bold flex justify-center items-center h-full ">
                  COSMETICS
                </h3>
              </div>
              <div
                className={
                  !cosme
                    ? "absolute bg-white w-full h-full translate-x-full transition-all duration-700"
                    : "absolute bg-white w-full h-full transition-all duration-700 "
                }
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <h3 className="font-light text-lg">COSMETICS</h3>
                  <div className="mt-2">
                    <a className="border-[1px] rounded-lg px-2 py-1 border-black cursor-pointer hover:font-semibold">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative flex justify-center overflow-hidden max-w-full mx-7 my-2 h-[190px] md:mx-1 md:my-1 md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px]"
              onMouseEnter={handleGenDentHover}
              onMouseLeave={handleGenDentHover}
            >
              <div
                className={
                  !gendent
                    ? "absolute bg-black w-full h-full transition-all duration-700"
                    : "absolute bg-black w-full h-full -translate-x-full transition-all duration-700"
                }
              >
                <h3 className="text-white text-center text-2xl md:text-xl font-bold flex justify-center items-center h-full ">
                  GENERAL <br /> DENTISTRY
                </h3>
              </div>
              <div
                className={
                  !gendent
                    ? "absolute bg-white w-full h-full translate-x-full transition-all duration-700"
                    : "absolute bg-white w-full h-full transition-all duration-700"
                }
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <h3 className="font-light text-lg text-center">
                    GENERAL <br /> DENTISTRY
                  </h3>
                  <div className="mt-2">
                    <a className="border-[1px] rounded-lg px-2 py-1 border-black cursor-pointer hover:font-semibold">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative flex justify-center overflow-hidden max-w-full mx-7 my-2 h-[190px] md:mx-1 md:my-1 md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px]"
              onMouseEnter={handleOralSurgHover}
              onMouseLeave={handleOralSurgHover}
            >
              <div
                className={
                  !oralsurg
                    ? "absolute bg-black w-full h-full transition-all duration-700"
                    : "absolute bg-black w-full h-full -translate-x-full transition-all duration-700"
                }
              >
                <h3 className="text-white text-center text-2xl md:text-xl  font-bold flex justify-center items-center h-full ">
                  ORAL <br /> SURGERY
                </h3>
              </div>
              <div
                className={
                  !oralsurg
                    ? "absolute bg-white  w-full h-full translate-x-full transition-all duration-700"
                    : "absolute bg-white  w-full h-full transition-all duration-700"
                }
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <h3 className="font-light text-lg text-center">
                    ORAL <br /> SURGERY
                  </h3>
                  <div className="mt-2">
                    <a className="border-[1px] rounded-lg px-2 py-1 border-black cursor-pointer hover:font-semibold">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
