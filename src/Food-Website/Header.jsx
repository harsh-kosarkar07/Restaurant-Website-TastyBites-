import  { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  
  const items = useSelector((state)=> state);
  const total = items.cart.reduce((a,b)=> a + b.price,0)
  console.log(total)




  const handleToggle = () => {
    settoggleMenu(!toggleMenu);
  };

  return (
    <div className=" fixed top-0 left-0 z-[999] w-full bg-white ">
      <div className=" flex justify-between sm:px-5 md:px-20 py-5 items-center font-semibold border-b-2 ">
        <div>
          <Link to={'/'}><p className="text-2xl cursor-pointer">
            Tasty<span className=" text-orange-600 ">Bites </span>
          </p></Link>
        </div>
        <div>
          <ul className=" flex  gap-5 text-lg  sm:hidden md:flex  ">
            <Link to="/">
              <li className="cursor-pointer">Home </li>
            </Link>
            <Link to="/aboutus">
              <li className="cursor-pointer"> About Us </li>
            </Link>
            <Link to="/ourfood">
              <li className="cursor-pointer"> Our Food </li>
            </Link>
            <Link to="/signin">
              <li className="cursor-pointer"> Sign In</li>
            </Link>
          </ul>
        </div>
        {/* ^^^^^ */}

        {toggleMenu ? (
          <div>
            <ul className=" absolute top-0 right-0 w-[60%] h-[100vh] bg-gray-200  flex flex-col items-center justify-center  gap-12 text-xl  z-[999]">
              <Link to="/">
                <li
                  onClick={handleToggle}
                  className=" hover:text-orange-600 cursor-pointer"
                >
                  Home{" "}
                </li>
              </Link>
              <Link to="/aboutus">
                <li
                  onClick={handleToggle}
                  className=" hover:text-orange-600 cursor-pointer"
                >
                  {" "}
                  About Us{" "}
                </li>
              </Link>
              <Link to="/ourfood">
                <li
                  onClick={handleToggle}
                  className=" hover:text-orange-600 cursor-pointer"
                >
                  {" "}
                  Our Food{" "}
                </li>
              </Link>
              <Link to="/signin">
                <li
                  onClick={handleToggle}
                  className=" hover:text-orange-600 cursor-pointer"
                >
                  {" "}
                  Sign In
                </li>
              </Link>
              <div
                onClick={handleToggle}
                className="absolute top-0 right-0 p-5  cursor-pointer"
              >
                <FaXmark size={30} />
              </div>
            </ul>
          </div>
        ) : (
          ""
        )}
        {/* ^^^^^ */}

        <div className="flex gap-5  items-center ">
          <div onClick={handleToggle} className=" md:hidden cursor-pointer">
            <GiHamburgerMenu size={30} />
          </div>
          <div className="cursor-pointer flex flex-col items-center">
            <p className=" -mt-4 -mb-1.5">{items.cart.length}</p>
            <FaCartShopping size={20} />
            <p className="  font-bold text-[10px]">{total}/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
