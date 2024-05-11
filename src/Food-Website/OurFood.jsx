import React from "react";
import { mealData } from "./Data";

const OurFood = ({handleAddtoCart}) => {
  return (
    <div className=" w-full md:px-20 pt-5 mt-20 ">
      <h1 className=" text-orange-600 sm:text-3xl md:text-4xl font-bold text-center">
        Our Food
      </h1>
      <div className=" py-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        {mealData.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col gap-2 sm:m-3 md:m-5 items-center "
          >
            <div>
              <img
                className="w-[200px] h-[200px] object-cover rounded-2xl "
                src={item.image}
              />
            </div>
            <div className=" text-center">
              <p className=" uppercase text-lg">{item.name}</p>
              <p className=" text-lg">{item.price}</p>
              <button onClick={handleAddtoCart} className="w-28 mt-2 text-lg bg-black text-white hover:text-orange-500  rounded-md px-2 py-1">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFood;
