"use client";
import React, { useState } from "react";
import Link from "next/link";
import { login } from "@/redux/hooks/useAuth";

const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    login({
      email: email,
      password: password,
    });
  };
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <div className="flex justify-center items-center flex-col  bg-slate-400 w-2/4 h-2/4 rounded-lg">
        <h2 className="text-red-900 font-bold text-2xl">Login</h2>
        <div className="flex flex-col justify-center mt-5 mb-3 w-2/4  ">
          <label htmlFor="email">Email </label>

          <input
            name="email"
            type="text"
            placeholder=" "
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-center mt-2 mb-3 w-2/4">
          <label htmlFor="password">Password </label>

          <input
            name="password"
            type="text"
            placeholder=" "
            required
            onChange={(e) => setPassword(e.password.value)}
          />
        </div>
        <button
          className="bg-red-900 p-2 mt-3 rounded-lg w-1/4  mb-4 "
          onClick={handleSubmit}
        >
          Sing in
        </button>
        <Link passHref className="text-blue-800" href="/register">
          Don't you have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default login;
