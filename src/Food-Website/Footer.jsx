import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-black text-white flex  justify-between flex-wrap gap-10 sm:px-5 md:px-20 py-10">
      <div>
        <Link to="/">
          <p className="text-2xl font-semibold mb-2">
            Tasty<span className=" text-orange-600 ">Bites </span>
          </p>
        </Link>
        <p>&copy; 2024 Bundl Technologies Pvt. Ltd</p>
      </div>

      <div className=" flex flex-col gap-2 ">
        <h1 className=" text-lg">Company</h1>
        <p className=" text-sm">About</p>
        <p className=" text-sm">Careers</p>
        <p className=" text-sm">Team</p>
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className=" text-lg">Contact us</h1>
        <p className=" text-sm">Help & Support</p>
        <p className=" text-sm">Partner with us</p>
        <p className=" text-sm">Ride with us</p>
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className=" text-lg">Legal</h1>
        <p className=" text-sm">Terms & Conditions</p>
        <p className=" text-sm">Cookie Policy</p>
        <p className=" text-sm">Privacy Policy</p>
        <p className=" text-sm">Investor Relations</p>
      </div>
    </div>
  );
};

export default Footer;
