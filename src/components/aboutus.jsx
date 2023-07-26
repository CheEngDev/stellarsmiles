import React from "react";
import NavBar from "./navbar";
import about from "../assets/About.jpg";
import head from "../assets/HeadDent.png";
import assoc from "../assets/Assoc.png";
import Footer from "../components/footer2";

const AboutUs = () => {
  return (
    <div>
      <NavBar />

      <div className="grid md:grid-cols-6 lg:grid-cols-5">
        <div className="md:col-span-2 lg:col-span-2">
          <h2 className=" tracking-wide mt-4 mx-4 text-5xl text-center md:text-left lg:text-7xl">
            ABOUT OUR PRACTICE
          </h2>
          <p className="mx-4 mt-2 font-light text-center md:text-left lg:text-lg ">
            Welcome to our reputable dental clinic, where we prioritize your
            oral health and satisfaction above all else. Our experienced team of
            skilled dentists and state-of-the-art technology ensures you receive
            personalized, effective, and comfortable dental care. From routine
            check-ups to advanced treatments, we are committed to delivering
            exceptional services that leave you with a confident and healthy
            smile.
          </p>
        </div>
        <img
          className="md:col-span-4 lg:col-span-3 mt-4 px-2 "
          src={about}
          alt=""
        />
      </div>
      <div className="mt-52 bg-[#f3f2ef] pb-16">
        <h2 className="text-center text-7xl -translate-y-8">OUR DENTAL TEAM</h2>
        <div className="mt-10 mx-10 py-5 h-full rounded-lg bg-black">
          <div className="grid md:grid-cols-2 h-full py-5 px-5 justify-items-center content-center">
            <img className="w-[150px] md:w-[250px] " src={head} alt="" />
            <div>
              <h3 className="text-[#a78049] text-center text-lg tracking-widest">
                HEAD DENTIST
              </h3>
              <h4 className="text-white text-center text-2xl font-semibold">
                DR. REMELYN LASTNAME
              </h4>
              <p className="text-white mt-5 px-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                quibusdam placeat laborum qui error reiciendis atque dignissimos
                praesentium! Unde sapiente voluptate aperiam eius! Quidem animi
                culpa repellendus soluta explicabo iusto. Provident vitae quod
                unde, iusto veritatis qui obcaecati eaque consequatur at culpa
                voluptatibus rem, mollitia quae doloribus ad officia quasi
                praesentium voluptatem voluptatum in sit accusamus recusandae
                neque deleniti. Quam, cum itaque? Nam voluptatem neque nulla
                quos accusantium tempora hic.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-28 mx-10 py-5 h-full  rounded-lg bg-white">
          <div className="grid md:grid-cols-2 h-full py-5 px-5 justify-items-center content-center">
            <img className="w-[150px] md:w-[250px] " src={assoc} alt="" />
            <div>
              <h3 className="text-[#a78049] text-center text-lg tracking-widest">
                ASSOCIATE DENTIST
              </h3>
              <h4 className="text-black text-center text-2xl font-semibold">
                DR. FIRSTNAME LASTNAME
              </h4>
              <p className="text-black mt-5 px-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                quibusdam placeat laborum qui error reiciendis atque dignissimos
                praesentium! Unde sapiente voluptate aperiam eius! Quidem animi
                culpa repellendus soluta explicabo iusto. Provident vitae quod
                unde, iusto veritatis qui obcaecati eaque consequatur at culpa
                voluptatibus rem, mollitia quae doloribus ad officia quasi
                praesentium voluptatem voluptatum in sit accusamus recusandae
                neque deleniti. Quam, cum itaque? Nam voluptatem neque nulla
                quos accusantium tempora hic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44 px-5">
        <h2 className="text-5xl text-center pb-5 font-semibold">
          WHAT WE OFFER
        </h2>
        <p className="text-lg font-light tracking-wider">
          At our state-of-the-art dental clinic, we take immense pride in
          providing unparalleled dental care and services to our valued
          patients, catering to individuals of all ages and backgrounds, with a
          dedicated team of highly skilled and compassionate dental
          professionals who utilize the latest advancements in dental technology
          and techniques to ensure each visit is an exceptional experience,
          encompassing a comprehensive range of treatments including routine
          check-ups, thorough cleanings, advanced cosmetic dentistry,
          orthodontics, oral surgery, and dental implants, all delivered in a
          warm and welcoming environment where patient comfort and safety are
          our top priorities, striving relentlessly to exceed expectations and
          promote optimal oral health, leaving our patients with brighter smiles
          and a renewed sense of confidence in their dental well-being.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
