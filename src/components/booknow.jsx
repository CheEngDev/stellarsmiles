import React, { useState } from "react";
import NavBar from "./navbar";
import RealFooter from "./footer2";

const BookNow = () => {
  const [appointment, setAppointment] = useState({
    category: "",
    service: "",
    date: "",
    day: "",
    from: "",
    to: "",
    fullName: "",
    email: "",
    number: "",
    notes: "",
  });

  function handleBookAppointChange(e) {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;

    setAppointment((prev) => {
      return { ...prev, [name]: value };
    });
  }
  console.log(appointment);

  return (
    <div>
      <NavBar />
      <div className="mt-8">
        <div className="px-3 md:px-10">
          <h2 className="text-4xl text-center font-medium tracking-widest">
            Book an Appointment
          </h2>
          <div className="mt-9">
            <div className="flex">
              <div className="w-full mx-2">
                <h3 className="text-lg font-semibold">Category</h3>
                <select
                  className="w-full px-2 border-2 rounded-lg"
                  name="category"
                  id="category"
                  value={appointment.category}
                  onChange={handleBookAppointChange}
                >
                  <option value=""></option>
                  <option value="Dentistry">Dentistry</option>
                </select>
              </div>
              <div className="w-full mx-2">
                <h3 className="text-lg font-semibold">Service</h3>
                <select
                  className="w-full px-2 border-2 rounded-lg"
                  name="service"
                  id="service"
                  value={appointment.service}
                  onChange={handleBookAppointChange}
                >
                  <option value=""></option>
                  <option value="Orthodonctics">Orthodonctics</option>
                  <option value="Periodontics">Periodontics</option>
                  <option value="Endodontics">Endodontics</option>
                  <option value="Cosmetics">Cosmetics</option>
                  <option value="General Dentistry">General Dentistry</option>
                  <option value="Oral Surgery">Oral Surgery</option>
                </select>
              </div>
            </div>
            <div className="mt-5 md:flex">
              <div className="w-full mx-1 md:mx-2">
                <h3 className="text-lg font-semibold"> On or After</h3>
                <input
                  className="border-2 rounded-lg w-full"
                  type="date"
                  name="date"
                  value={appointment.date}
                  onChange={handleBookAppointChange}
                />
              </div>
              <div className="flex mt-5 md:mt-0">
                <div className="w-full mx-1 md:mx-2">
                  <h3 className="text-lg font-semibold">Day</h3>
                  <select
                    className="w-full px-2 border-2 rounded-lg"
                    name="day"
                    id="day"
                    value={appointment.day}
                    onChange={handleBookAppointChange}
                  >
                    <option value=""></option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>
                <div className="w-full mx-1 md:mx-2">
                  <h3 className="text-lg font-semibold">From</h3>
                  <select
                    className="w-full px-2 border-2 rounded-lg"
                    name="from"
                    id="from"
                    value={appointment.value}
                    onChange={handleBookAppointChange}
                  >
                    <option value=""></option>
                    <option value="8:00AM">8:00AM</option>
                    <option value="9:00AM">9:00AM</option>
                    <option value="10:00AM">10:00AM</option>
                    <option value="11:00AM">11:00AM</option>
                    <option value="1:00PM">1:00PM</option>
                    <option value="2:00PM">2:00PM</option>
                    <option value="3:00PM">3:00PM</option>
                    <option value="4:00PM">4:00PM</option>
                    <option value="5:00PM">5:00PM</option>
                  </select>
                </div>
                <div className="w-full mx-1 md:mx-2">
                  <h3 className="text-lg font-semibold">To</h3>
                  <select
                    className="w-full px-2 border-2 rounded-lg"
                    name="to"
                    id="to"
                    value={appointment.to}
                    onChange={handleBookAppointChange}
                  >
                    <option value=""></option>
                    <option value="8:00AM">8:00AM</option>
                    <option value="9:00AM">9:00AM</option>
                    <option value="10:00AM">10:00AM</option>
                    <option value="11:00AM">11:00AM</option>
                    <option value="1:00PM">1:00PM</option>
                    <option value="2:00PM">2:00PM</option>
                    <option value="3:00PM">3:00PM</option>
                    <option value="4:00PM">4:00PM</option>
                    <option value="5:00PM">5:00PM</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-5 flex">
              <div className="w-full mx-2">
                <h3 className="text-lg font-semibold">Full Name</h3>
                <input
                  className="w-full border-2 rounded-lg px-2"
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={appointment.fullName}
                  onChange={handleBookAppointChange}
                />
              </div>
              <div className="w-full mx-2">
                <h3 className="text-lg font-semibold">Email</h3>
                <input
                  className="w-full border-2 rounded-lg px-2"
                  type="email"
                  name="email"
                  id="email"
                  value={appointment.email}
                  onChange={handleBookAppointChange}
                />
              </div>
              <div className="w-full mx-2">
                <h3 className="text-lg font-semibold">Number</h3>
                <input
                  className="w-full border-2 rounded-lg px-2"
                  type="number"
                  name="number"
                  id="number"
                  value={appointment.number}
                  onChange={handleBookAppointChange}
                />
              </div>
            </div>
            <div className="mt-5 mx-2">
              <label htmlFor="" className="text-lg font-semibold">
                Additional Details/Message
              </label>
              <textarea
                className="w-full h-[80px] border-2"
                name="notes"
                id="notes"
                value={appointment.notes}
                onChange={handleBookAppointChange}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-20 py-2 m-auto mt-5 text-lg font-semibold rounded-2xl bg-black text-white">
            Submit{" "}
          </button>
        </div>
      </div>
      <RealFooter />
    </div>
  );
};

export default BookNow;
