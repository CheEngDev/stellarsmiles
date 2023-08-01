import React from "react";
import NavBar from "./navbar";
import Ortho from "../assets/Ortho.jpg";
import perio from "../assets/perio.jpg";
import endo from "../assets/endo.jpg";
import cosme from "../assets/cosme.jpg";
import gendent from "../assets/gendent.jpg";
import oralsurg from "../assets/oralsurg.jpg";
import RealFooter from "./footer2";

const OurServices = () => {
  console.log("hello");
  return (
    <div>
      <NavBar />
      <div>
        <h2 className="text-5xl md:text-7xl tracking-wider px-5 mt-5">
          OUR SERVICES
        </h2>
        <div className="w-[45%] border-b-2 border-black ml-5  mt-5"></div>
        <h3 className="px-5 mt-5 text-xl font-light">
          Dental Care with Patient Care
        </h3>
        <div className="w-[30%] border-b-2 border-black ml-5  mt-5"></div>
        <div className="mt-20 px-5 grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-2xl">ORTHODONTICS</h4>
            <p className="mt-3">
              Orthodontics is a specialized branch of dentistry that deals with
              the diagnosis, prevention, and treatment of dental and facial
              irregularities. This field primarily focuses on correcting
              misaligned teeth and jaw discrepancies, such as overbites,
              underbites, and crowded teeth, through various methods, including
              braces, aligners, and retainers. By realigning teeth and jaws,
              orthodontics not only enhances the appearance of a person's smile
              but also improves their overall oral health and functionality.
              Skilled orthodontists play a vital role in providing patients with
              improved chewing abilities, speech clarity, and boosted
              self-confidence.
            </p>
          </div>
          <img src={Ortho} alt="" />
        </div>
        <div className="mt-32 px-5 grid md:grid-cols-2 gap-4">
          <img src={perio} alt="" />
          <div className="row-start-1 md:row-auto">
            <h4 className="text-2xl">PERIODONTICS</h4>
            <p className="mt-3">
              Periodontics is a specialized area of dentistry that concentrates
              on the prevention, diagnosis, and treatment of diseases affecting
              the supporting structures of the teeth. This field primarily deals
              with gum-related issues, such as gingivitis and periodontitis, as
              well as conditions affecting the bone and tissues surrounding the
              teeth. Periodontists utilize various techniques, including
              scaling, root planing, and surgical procedures, to maintain
              healthy gums, preserve the dentition, and promote overall oral
              well-being. By addressing periodontal problems, periodontics plays
              a crucial role in ensuring the long-term health and stability of a
              patient's teeth and gums.
            </p>
          </div>
        </div>
        <div className="mt-32 px-5 grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-2xl">ENDODONTICS</h4>
            <p className="mt-3">
              Endodontics is a specialized branch of dentistry that focuses on
              the diagnosis, treatment, and prevention of diseases and
              conditions affecting the dental pulp and tissues within the root
              canal system. This field primarily deals with issues like dental
              pain, infections, and necrosis within the tooth, commonly treated
              through root canal therapy. Skilled endodontists use advanced
              techniques and technologies to clean and disinfect the root
              canals, shaping them to facilitate the placement of dental
              fillings, ensuring the preservation of natural teeth and relieving
              patients from discomfort. By saving compromised teeth, endodontics
              plays a critical role in maintaining oral health and
              functionality.
            </p>
          </div>
          <img src={endo} alt="" />
        </div>
        <div className="mt-32 px-5 grid md:grid-cols-2 gap-4">
          <img src={cosme} alt="" />
          <div className="row-start-1 md:row-auto">
            <h4 className="text-2xl">COSMETIC DENTISTRY</h4>
            <p className="mt-3">
              Cosmetic dentistry is a specialized area of dental practice that
              focuses on improving the aesthetics of a person's smile. This
              field offers a wide range of treatments and procedures, such as
              teeth whitening, dental veneers, dental bonding, and orthodontic
              interventions, to enhance the appearance of teeth and gums.
              Skilled cosmetic dentists blend artistry and technical expertise
              to create natural-looking, harmonious smiles tailored to each
              patient's unique facial features and preferences. By transforming
              smiles, cosmetic dentistry not only boosts self-confidence but
              also contributes to overall oral health and a more radiant,
              captivating appearance.
            </p>
          </div>
        </div>
        <div className="mt-32 px-5 grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-2xl">GENERAL DENTISTRY</h4>
            <p className="mt-3">
              General dentistry is the foundation of oral healthcare, providing
              a comprehensive range of preventive, diagnostic, and restorative
              treatments for patients of all ages. Skilled general dentists
              perform routine dental check-ups, oral examinations, cleanings,
              and X-rays to monitor oral health and detect any issues early on.
              They also offer essential patient education on oral hygiene
              practices and lifestyle factors to promote optimal oral wellness.
              By providing a wide array of dental services, general dentistry
              plays a critical role in maintaining healthy teeth and gums,
              preventing dental problems, and supporting overall oral health for
              individuals worldwide.
            </p>
          </div>
          <img src={gendent} alt="" />
        </div>
        <div className="mt-32 px-5 grid md:grid-cols-2 gap-4">
          <img src={oralsurg} alt="" />
          <div className="row-start-1 md:row-auto">
            <h4 className="text-2xl">ORAL SURGERY</h4>
            <p className="mt-3">
              Oral surgery is a specialized field of dentistry that involves
              surgical procedures on the teeth, jaws, and surrounding tissues.
              Skilled oral surgeons perform a variety of surgeries, including
              tooth extractions, dental implant placements, corrective jaw
              surgeries, and treatment of oral and facial tumors. These
              procedures are often carried out to address dental and facial
              irregularities, relieve pain, restore oral function, and improve
              overall oral health. With the use of advanced techniques and
              technology, oral surgery plays a crucial role in providing
              effective and long-lasting solutions for complex dental and
              maxillofacial issues.
            </p>
          </div>
        </div>
      </div>
      <RealFooter />
    </div>
  );
};

export default OurServices;
