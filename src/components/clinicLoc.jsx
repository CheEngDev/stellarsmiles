import React, { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";
import Loc from "./map";
import messageService from "../services/messagesService";

const ClinicLoc = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    number: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  function handleMessageChange(e) {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;

    setMessage((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function addMessage() {
    const errors = validate();
    setErrors(errors || {});
    setTimeout(() => {
      setErrors({});
    }, 3000);
    if (errors) return;
    toast("Thank you for Sending us a message");
    const data = await messageService.addMessage(message);
    console.log(data);
    setMessage({ name: "", email: "", number: "", notes: "" });
  }

  // Validation for Message

  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    number: Joi.number().required(),
    notes: Joi.string(),
  });

  function validate() {
    const result = schema.validate(message, { abortEarly: false });
    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  }

  return (
    <div className="bg-black  h-[700px] md:h-[650px] mt-60 ">
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
            <h3>
              NAME{" "}
              <span className={errors.name ? "text-red-600 text-xl" : "hidden"}>
                *
              </span>
            </h3>
            <input
              className="border-b-4 w-full outline-none"
              type="text"
              name="name"
              value={message.name}
              onChange={handleMessageChange}
            />
          </div>
          <div className="mt-6">
            <h3>
              EMAIL{" "}
              <span
                className={errors.email ? "text-red-600 text-xl" : "hidden"}
              >
                *
              </span>
            </h3>
            <input
              className="border-b-4 w-full outline-none"
              type="email"
              name="email"
              value={message.email}
              onChange={handleMessageChange}
            />
          </div>
          <div className="mt-6">
            <h3>
              NUMBER{" "}
              <span
                className={errors.number ? "text-red-600 text-xl" : "hidden"}
              >
                *
              </span>
            </h3>
            <input
              className="border-b-4 w-full outline-none"
              type="number"
              name="number"
              value={message.number}
              onChange={handleMessageChange}
            />
          </div>
          <div className="mt-6">
            <h3>MESSAGE</h3>
            <textarea
              className="border-2 outline-none w-full h-[100px]"
              name="notes"
              id="notes"
              value={message.notes}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <button
            className="w-full mt-5 py-3 bg-black text-white text-xl"
            onClick={addMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicLoc;
