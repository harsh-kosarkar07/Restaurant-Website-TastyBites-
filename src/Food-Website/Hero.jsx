import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672322922/NetflixApp/chicken-wings_lv3zc9.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672322923/NetflixApp/chicken_tenders_quel6y.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672324456/NetflixApp/pepperoni_pizza_axwdat.jpg",
    },
  ];

  const [slider, setSlider] = useState(0);
  const handleMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };
  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };
  useEffect(() => {
    const sliderClear = setInterval(() => {
      handlePlus();
    }, 2000);

    return () => {
      clearInterval(sliderClear);
    };
  }, [slider]);

  return (
    <div  className="mt-24">
      <div className=" w-[90%] mx-auto h-[80vh] my-5  relative ">
        {imgData.map((item, i) => (
          <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
            <img src={item.url} className=" w-full h-[80vh]  rounded-2xl  " />
          </div>
        ))}
        <div className="  w-full mx-auto h-[80vh] bg-black absolute top-0 left-0 opacity-50 rounded-2xl "></div>

        <div className=" absolute top-[45%] w-full text-center text-white sm:text-2xl md:text-4xl font-semibold ">
          <p>
            Welcome to our cozy spot, where every dish is a flavor adventure!
          </p>
        </div>
        <div className=" flex justify-between w-full absolute md:px-5 top-[45%] text-white  ">
          <FaChevronLeft
            size={30}
            className=" cursor-pointer"
            onClick={handleMinus}
          />
          <FaChevronRight
            size={30}
            className=" cursor-pointer"
            onClick={handlePlus}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
