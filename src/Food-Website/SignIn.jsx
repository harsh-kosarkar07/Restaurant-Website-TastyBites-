import React from "react";
import signin from "./assets/sign-up.png";

const SignIn = () => {
  return (
    <section className="mt-10 ">
      <div className=" w-full sm:px-5 md:px-20 py-10 mx-auto flex gap-5 md:flex-row sm:flex-col justify-between items-center ">
        <div className=" w-full md:w-1/2 ">
          <img className=" w-full" src={signin} />
        </div>
        <div className=" bg-[#cad2c5]  rounded-lg sm:p-4 md:p-8 flex flex-col md:ml-auto md:w-1/2 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">
            Sign Up
          </h2>
          <p className="leading-relaxed mb-5 text-gray-900">
            or{" "}
            <span className=" text-orange-600 font-semibold">
              login to your account
            </span>
          </p>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-lg text-gray-900 ">
              Full Name :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="mob" className="leading-7 text-lg text-gray-900 ">
              Mobile :
            </label>
            <input
              type="number"
              id="mob"
              name="mob"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-lg text-gray-900 ">
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-lg text-gray-900 "
            >
              Password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button className="text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
            Sign Up
          </button>
          <p className="text-sm text-gray-900 mt-3">
            By creating an account, I accept the
            <span className=" font-semibold">
              Terms & Conditions & Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
