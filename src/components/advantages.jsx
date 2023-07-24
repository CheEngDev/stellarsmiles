import React from "react";
import { BiLeaf } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";

const Advantages = () => {
  return (
    <div className="mt-36">
      <h2 className="text-center text-4xl font-bold">
        What Makes Us Different?
      </h2>
      <div className="mt-16 md:mt-20 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-2 md:px-2 lg:gap-2  lg:grid-cols-4  ">
        <div className="flex flex-col items-center">
          <BiLeaf className="mb-2" size={60} fill="#cf945f" />
          <h3 className="text-xl font-medium tracking-wide">
            Environmentally Friendly
          </h3>
          <p className="text-center font-light">
            An environmentally conscious dental clinic that adopts eco-friendly
            practices can appeal to patients who prioritize sustainability.
          </p>
        </div>
        <div className="mt-5 md:mt-0 flex flex-col items-center">
          <MdOutlineDiscount className="mb-2" size={60} fill="#cf945f" />
          <h3 className="text-xl font-medium tracking-wide">
            Affordable Rates
          </h3>
          <p className="text-center font-light">
            When dental care is more affordable, patients may be more inclined
            to seek preventive and regular treatments rather than postponing or
            avoiding dental visits due to cost concerns.
          </p>
        </div>
        <div className="mt-5 md:mt-0 flex flex-col items-center md:mt-4 lg:mt-0">
          <PiCertificateLight className="mb-2" size={60} fill="#cf945f" />
          <h3 className="text-xl font-medium tracking-wide">
            Certified & Experienced
          </h3>
          <p className="text-center font-light">
            The expertise and qualifications of the dental professionals working
            in the clinic play a crucial role in making it the best.
          </p>
        </div>
        <div className="mt-5 md:mt-0 flex flex-col items-center md:mt-4 lg:mt-0">
          <CiFaceSmile className="mb-2" size={60} fill="#cf945f" />
          <h3 className="text-xl font-medium tracking-wide">
            Exceptional Patient Care
          </h3>
          <p className="text-center font-light">
            Providing excellent customer service, a friendly and compassionate
            environment, and addressing patient concerns with care and
            attention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
