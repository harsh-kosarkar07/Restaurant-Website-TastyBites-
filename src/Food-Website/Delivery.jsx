import React from "react";
import DeliveryImg from "./assets/delivery-img.jpg";

const Delivery = () => {
  return (
    <div className=" w-full sm:px-5 md:px-20 mt-12 mb-12 ">
      <h1 className=" text-orange-600 sm:text-3xl md:text-4xl font-bold text-center ">
        Fastest Delivery App
      </h1>
      <div className=" flex sm:flex-col sm:gap-8 md:gap-0 md:flex-row w-full items-center ">
        <div className=" md:w-[70%] ">
          <img src={DeliveryImg} className="w-[960px]" />
        </div>
        <div className=" flex flex-col justify-center sm:items-center md:items-start  gap-2 ">
          <h1 className="text-3xl font-semibold">Get the App </h1>
          <p className="text-2xl md:text-start sm:text-center ">
            We are ready to bring our service to your door.
          </p>

          <button className="w-28 mt-2 text-lg bg-black text-white hover:text-orange-500  rounded-md px-2 py-1">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
