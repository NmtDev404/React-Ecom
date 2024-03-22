
import React, { useState } from "react";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { HiOutlineBars3} from "react-icons/hi2";
import { PiHeartStraightLight,PiShoppingCartThin } from "react-icons/pi";
import { TfiClose } from "react-icons/tfi";
import Navtop from "./Navtop";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";


const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
    setIsBackgroundBlurred(!isBackgroundBlurred);
  };

  return (
    <div className="relative">
      {isBackgroundBlurred && (
        <div className="fixed inset-0 w-full h-screen bg-[rgba(0,0,0,0.41)] backdrop-blur z-30"></div>
      )}

      <div className="relative z-40">
        <div
          className={`${
            isNavVisible ? "translate-x-0" : "-translate-x-full"
          } flotNav fixed  h-screen bg-white w-1/4 z-50 capitalize flex flex-col items-start p-8 text-3xl font-normal gap-8 transition-transform duration-500`}
        >
          <span className="w-full flex justify-end pr-5 hover:text-red-500">
            <TfiClose onClick={toggleNavVisibility} />
          </span>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
      </div>

      <div className="mNav max-w-[1400px] bg-transparent m-auto sticky top-0  z-20 ">
        <div className=" m-auto py-[15px] px-[30px]   flex items-center justify-between">
          <div>
            <ul className="flex list-none text-[24px] ml-10 gap-8">
              <li>
                <a onClick={toggleNavVisibility}>
                  <HiOutlineBars3 className="inline-block font-extralight cursor-pointer" />
                </a>
              </li>
              <li className="">
                <a>
                  <PiMagnifyingGlassThin className="inline-block" />
                </a>
              </li>
            </ul>
          </div>

          <div className="font-light cursor-pointer text-5xl">
           <Link to="/"><h1>Demo</h1></Link>
          </div>

          <div>
            <ul className="flex m-auto list-none text-[24px]">
              <li className="p-4 cursor-pointer">
                <Link to="/login">
                  <CiUser />
                </Link>
              </li>
              <li className="p-4">
                <a>
                  <PiHeartStraightLight />
                </a>
              </li>
              <li className="p-4">
                <a>
                  <PiShoppingCartThin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

