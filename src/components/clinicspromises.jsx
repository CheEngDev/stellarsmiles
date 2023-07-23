import React from "react";
import clinic from "../assets/Clinic.jpg";
import { LiaToothSolid } from "react-icons/lia";

const ClinicsPromises = () => {
  return (
    <div className="">
      <h2 className="mt-28 mb-5 text-2xl tracking-wider text-center font-semibold md:text-3xl lg:text-4xl">
        Why Choose Us?
      </h2>
      <div className="mx-4 md:grid md:grid-cols-2 md:mx-4 lg:grid-cols-5">
        <div className="relative lg:col-span-3">
          <div className="max-w-[90%] max-h-full w-full h-full bg-[#e3d2b3] absolute -z-10 -translate-y-5 -translate-x-4 md:-translate-y-2 "></div>
          <img
            src={clinic}
            alt=""
            className="md:translate-y-7 md:translate-x-7 "
          />
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl text-center mb-2 font-medium tracking-widest md:text-left md:ml-16">
            <span className="text-4xl font-semibold">7</span> Reasons
          </h2>
          <div className="w-full">
            <ul className="w-[300px] m-auto pl-4 md:pl-0 md:ml-20 lg:text-lg lg:w-[320px]">
              <li className="flex items-center py-1">
                <LiaToothSolid />
                Experienced and Skilled Dental Team
              </li>
              <li className="flex items-center py-1">
                <LiaToothSolid /> Comprehensive Range of Services
              </li>

              <li className="flex items-center py-1">
                <LiaToothSolid />
                State-of-the-Art Technology
              </li>
              <li className="flex items-center py-1">
                <LiaToothSolid />
                Patient-Centered Approach
              </li>

              <li className="flex items-center py-1">
                <LiaToothSolid />
                Positive Reviews and Testimonials
              </li>
              <li className="flex items-center py-1">
                <LiaToothSolid />
                Flexible Payment Options
              </li>
              <li className="flex items-center py-1">
                <LiaToothSolid />
                Insurance Support
              </li>
              <li className="flex items-center py-1">
                <LiaToothSolid />
                Convenient Location and Hours
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicsPromises;
