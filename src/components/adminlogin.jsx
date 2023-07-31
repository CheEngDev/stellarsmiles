import React, { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";
import NavBar from "./navbar";
import RealFooter from "./footer2";
import authService from "../services/authService";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleloginChange(e) {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;

    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function handleLogin() {
    const errors = validate();
    setErrors(errors || {});
    setTimeout(() => {
      setErrors({});
    }, 3000);
    if (errors) return;

    try {
      await authService.login(login);
      window.location = "/dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  }

  //   Validationg
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(3).max(50),
  });

  function validate() {
    const result = schema.validate(login, { abortEarly: false });
    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  }
  return (
    <div>
      <NavBar />
      <div className="mt-14">
        <h2 className="text-4xl text-center font-bold tracking-wider">
          Admin Login
        </h2>
        <div className="mt-5 max-w-[500px] m-auto px-5  flex flex-col justify-center">
          <label className="text-xl font-medium" htmlFor="email">
            Email{" "}
            <span className={errors.email ? "text-red-600 text-xl" : "hidden"}>
              *
            </span>
          </label>
          <input
            className="outline-none border-2 border-black px-2 rounded-lg mx-1"
            type="text"
            name="email"
            id="email"
            value={login.email}
            onChange={handleloginChange}
          />
        </div>
        <div className="mt-5 max-w-[500px] m-auto px-5 flex flex-col justify-center">
          <label className="text-xl font-medium" htmlFor="password">
            Password{" "}
            <span
              className={errors.password ? "text-red-600 text-xl" : "hidden"}
            >
              *
            </span>
          </label>
          <input
            className="outline-none border-2 border-black px-2 rounded-lg mx-1"
            type="text"
            name="password"
            id="password"
            value={login.password}
            onChange={handleloginChange}
          />
        </div>
        <div className="flex text-white justify-center mt-10">
          <button
            className="bg-black px-16 py-1 rounded-full text-xl font-semibold"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      <RealFooter />
    </div>
  );
};

export default Login;
