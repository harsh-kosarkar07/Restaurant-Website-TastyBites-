import React from "react";

const AboutUs = () => {
  return (
    <div className=" w-full sm:px-5 md:px-20 py-10 mt-20">
      <div>
        <h1 className=" text-3xl mb-2">
          Driving the force of
          <span className="text-orange-600"> assortment </span>
        </h1>
        <p className=" text-lg">
          For over a decade now, we’ve been empowering our customers in
          discovering new tastes and experiences across countries. By putting
          together meticulous information for our customers, we enable them to
          make an informed choice.
        </p>
      </div>
      <div className="my-10  ">
        <h1 className=" sm:text-4xl md:text-5xl font-semibold sm:mb-10 md:mb-4 ">
          <span className=" border-b-4 border-orange-600 ">Who</span> are we?
        </h1>

        <div className="my-0 flex sm:flex-col-reverse sm:flex md:flex-row justify-between  items-center gap-10 w-full ">
          <div className=" md:w-1/2  ">
            <p className=" text-lg">
              Launched in 2010, Our technology platform connects customers,
              restaurant partners and delivery partners, serving their multiple
              needs. Customers use our platform to search and discover
              restaurants, read and write customer generated reviews and view
              and upload photos, order food delivery, book a table and make
              payments while dining-out at restaurants. On the other hand, we
              provide restaurant partners with industry-specific marketing tools
              which enable them to engage and acquire customers to grow their
              business while also providing a reliable and efficient last mile
              delivery service. We also operate a one-stop procurement solution,
              Hyperpure, which supplies high quality ingredients and kitchen
              products to restaurant partners. We also provide our delivery
              partners with transparent and flexible earning opportunities.
            </p>
          </div>
          <div className="md:w-1/2 ">
            <img
              className=" md:h-[400px] w-full rounded-2xl "
              src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
