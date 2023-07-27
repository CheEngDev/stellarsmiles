import React from "react";
import Loc from "./map";

const ClinicLoc = () => {
  return (
    <div className="bg-black  h-[620px] md:h-[550px] mt-60 ">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-2xl font-semibold px-4 pt-4">
          SEND US A MESSAGE AND GET IN TOUCH WITH US.
        </h2>
        <div className="text-white m-auto mt-5">
          <h3 className="font-light text-[#9b6f47] ">OFFICE</h3>
          <p className="font-medium">
            AB Fernandez Street Dagupan City Philippines <br />
            Inside of CSI MALL
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 px-5 py-2">
        <div className="hidden md:block md:col-span-1  h-full w-full">
          <Loc />
        </div>
        <div className="static md:z-10 md:col-span-2 justify-self-center bg-white h-full w-full px-10 py-7">
          <div>
            <h3>NAME</h3>
            <input className="border-b-4 w-full outline-none" type="text" />
          </div>
          <div className="mt-6">
            <h3>EMAIL</h3>
            <input className="border-b-4 w-full outline-none" type="email" />
          </div>
          <div className="mt-6">
            <h3>NUMBER</h3>
            <input className="border-b-4 w-full outline-none" type="number" />
          </div>
          <div className="mt-6">
            <h3>MESSAGE</h3>
            <textarea
              className="border-2 outline-none w-full h-[100px]"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicLoc;
