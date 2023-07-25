import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const PxReviews = () => {
  const [move, setMove] = useState("first");

  function handleShowReview() {
    if (move === "first") {
      setMove("second");
    } else if (move === "second") {
      setMove("third");
    } else {
      setMove("first");
    }
    console.log("hello");
  }

  useEffect(() => {
    setInterval(handleShowReview, 20000);
  });

  return (
    <div className="mt-40 px-2">
      <h2 className="text-center text-4xl font-bold mb-16">
        What Our Patients Say
      </h2>
      <div className="relative h-[850px] md:h-full  grid justify-items-center overflow-hidden ">
        <div
          className={
            move === "first"
              ? "w-full  max-h-[600px] transition-all duration-700"
              : move === "second"
              ? "w-full max-h-[600px] -translate-x-[1500px] transition-all duration-700"
              : "w-full max-h-[600px] -translate-x-[2500px] transition-all duration-700"
          }
        >
          <div className="grid md:grid-cols-2 justify-items-center h-full">
            <div className="w-3/4 mb-5">
              <div className="flex">
                <AiFillStar className="mr-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
              </div>
              <p className="ml-1 mt-3 tracking-wide">
                I can't speak highly enough of Stellar Smiles. From the moment I
                walked in, I was greeted warmly by the reception staff. The
                entire team was incredibly professional. They took the time to
                explain my treatment options thoroughly, and the procedure
                itself was painless. I'm thrilled with the results and will
                definitely be coming back for all my dental needs. Highly
                recommended!
              </p>
              <p className="text-lg mt-4 text-gray-400">
                GALLEGOS, CHRISTIAN H.
              </p>
            </div>

            <div className="w-3/4 mb-5">
              <div className="flex ">
                <AiFillStar className="mr-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
              </div>
              <p className="ml-1 mt-3 tracking-wide">
                My recent visit to Stellar Smiles was wonderful! The staff was
                so friendly and welcoming, which helped ease my dental anxiety.
                The clinic was clean and well-organized, and the overall
                experience was excellent. I'm grateful to have found such a
                fantastic dental clinic, and I'll definitely be returning for
                regular check-ups!
              </p>
              <p className="text-lg mt-4 text-gray-400">LLAMAS, KENNETH A.</p>
            </div>
          </div>
        </div>
        <div
          className={
            move === "first"
              ? "absolute w-full max-h-[1000px] translate-x-[1500px] transition-all duration-700"
              : move === "second"
              ? "absolute w-full max-h-[1000px]  translate-x-[0px] transition-all duration-700"
              : "absolute w-full max-h-[1000px]  -translate-x-[1500px] transition-all duration-700"
          }
        >
          <div className="grid md:grid-cols-2 justify-items-center h-full">
            <div className="w-3/4 mb-5">
              <div className="flex">
                <AiFillStar className="mr-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
              </div>
              <p className="ml-1 mt-3 tracking-wide">
                I had an outstanding experience at Stellar Smiles. The entire
                team was professional, and Dr. Remelyn was knowledgeable and
                skilled. They used state-of-the-art equipment, which made the
                whole process efficient and comfortable. I felt confident in
                their care and left with a brighter smile. This is definitely my
                new dental home!
              </p>
              <p className="text-lg mt-4 text-gray-400">
                LAPAAN, DEEIHL REXAIRE O.
              </p>
            </div>
            <div className="w-3/4 mb-5">
              <div className="flex">
                <AiFillStar className="mr-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
              </div>
              <p className="ml-1 mt-3 tracking-wide">
                I took my entire family to Stellar Smiles, and we were all
                extremely satisfied with the experience. The staff was excellent
                with children, making my kids feel comfortable and relaxed
                during their check-ups. Dr. Remelyn was patient with them,
                explaining oral hygiene in a fun and engaging way. This clinic
                is family-oriented and provides top-notch dental services.
              </p>
              <p className="text-lg mt-4 text-gray-400">DE VERA, REDEN R.</p>
            </div>
          </div>
        </div>
        <div
          className={
            move === "first"
              ? "absolute w-full max-h-[1000px] translate-x-[2500px] transition-all duration-700"
              : move === "second"
              ? "absolute w-full max-h-[1000px]  translate-x-[1500px] transition-all duration-700"
              : "absolute w-full max-h-[1000px]  translate-x-[0px] transition-all duration-700"
          }
        >
          <div className="grid md:grid-cols-2 justify-items-center h-full">
            <div className="w-3/4 mb-5">
              <div className="flex">
                <AiFillStar className="mr-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
              </div>
              <p className="ml-1 mt-3 tracking-wide">
                I had a dental emergency and was fortunate enough to find
                Stellar Smiles. They squeezed me in for an appointment promptly
                and took swift action to address my issue. Dr. Remelyn was
                highly skilled and reassuring throughout the procedure, which
                was painless and efficient.
              </p>
              <p className="text-lg mt-4 text-gray-400">CALICADAN, RUIGI C.</p>
            </div>
            <div className="w-3/4 mb-5">
              <div className="flex">
                <AiFillStar className="mr-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
                <AiFillStar className="mx-1" fill="#cf945f" size={25} />
              </div>
              <p className="ml-1 mt-3 tracking-wide">
                I've been going to Stellar Smiles for several years now, and
                they've always been honest and transparent with their
                recommendations. Dr. Remelyn takes the time to discuss treatment
                options and their potential outcomes, putting my mind at ease.
                They genuinely care about their patients and prioritize their
                well-being above all else.
              </p>
              <p className="text-lg mt-4 text-gray-400">DIZON, STEVEN JR.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PxReviews;
