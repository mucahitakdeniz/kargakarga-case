"use client";
import React, { useState } from "react";

const register = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {};
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <div className="flex justify-center items-center flex-col  bg-slate-400 w-2/4 h-2/4 rounded-lg">
        <h2 className="text-red-900 font-bold text-2xl">Register</h2>
        <div className="flex flex-col justify-center mt-5 mb-2 w-2/4 ">
          <label htmlFor="email">Full Name </label>

          <input
            name="fullName"
            type="text"
            placeholder=" "
            required
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center mt-5 mb-2 w-2/4 ">
          <label htmlFor="email">Email </label>

          <input
            name="email"
            type="text"
            placeholder=" "
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-center mt-2 mb-2 w-2/4">
          <label htmlFor="password">Password </label>

          <input
            name="password"
            type="text"
            placeholder=" "
            required
            onChange={(e) => setPassword(e.password.value)}
          />
        </div>
        <button className="bg-red-900 p-2 mt-3 rounded-lg w-1/4 mb-3  ">
          Register
        </button>
        <a className="text-blue-800" href="/login">Do you have an account? Sign in</a>
      </div>
    </div>
  );
};

export default register;
