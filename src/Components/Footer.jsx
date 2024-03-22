import React from "react";
import Payment from "/Images/payment.png";
import {
  RiFacebookLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiPinterestLine,
} from "react-icons/ri";
const Footer = () => {
  return (
    <section>
      <div className="max-w-[1410px] m-auto mt-32">
        <div className="flex flex-col-reverse xl:flex-row max-w-[1200px]:flex-row items-center justify-center">
          <div className="w-full text-center md:text-center sm:flex sm:justify-center md:flex md:justify-evenly  ">
            <div className=" my-10 md:w-max sm:">
              <div className="mb-3">
                <h1 className="text-3xl">Demo</h1>
              </div>

              <div className="text-[#848484] text-[16px] leading-10">
                <p className="mt-5">
                  Text: +00(234)23-45-666
                  <br />
                  Mon - Fri: 8 am - 8 pm
                  <br />
                  Sat - Sun: 8 am - 7 pm
                </p>
              </div>
            </div>

            <div className="flex md:flex-row-reverse w-full sm:w-max  sm:content-center sm:justify-evenly md:justify-evenly justify-evenly  py-10">
              <div className="ml-4 md:w-max ">
                <div className="mb-3">
                  <h1 className="font-bold">CUSTOMER SERVICES</h1>
                </div>

                <div className="text-[#848484] text-[15px]  leading-10">
                  <p>Contact Us</p>
                  <p>Customer Servic</p>
                  <p>Find Store</p>
                  <p>Book appoinment</p>
                  <p>Shipping & Returns</p>
                </div>
              </div>

              <div className="ml-5 md:w-max md:mr-14">
                <div className="mb-3">
                  <h1 className="font-bold">ABOUT</h1>
                </div>

                <div className="text-[#848484] text-[15px]  leading-10">
                  <p>Our Story</p>
                  <p>Careers</p>
                  <p>Influncers</p>
                  <p>Join our team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full xl:ml-5 md:pl-10 md:pt-14 sm:w-max md:w-9/12">
            <div className="text-center md:text-center px-5 md:px-0 xl:px-0 ">
              <div className="mb-4">
                <h1 className="font-bold">SIGN UP FOR EMAILS</h1>
              </div>
              <div className="text-[15px] mb-6">
                <p className="text-[#848484]">
                  Enjoy 15% off* your first order when sign up to our newsletter
                </p>
              </div>
              <div className="flex justify-center">
                <input
                  type="email"
                  placeholder="Your e-mail address"
                  className="bg-[#EDEDED] py-3 px-[26px] w-full"
                />
                <button
                  type="submit"
                  className="font-bold text-white text-center text-[12px] tracking-widest bg-black py-3 px-[26px]"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>

            <div className="icons flex justify-center text-2xl mt-5 sm:my-16 mb-12 md:justify-center">
              <a className="hover:text-red-600">
                <RiFacebookLine />
              </a>
              <a className="ml-3 hover:text-red-600">
                <RiTwitterXLine />
              </a>
              <a className="ml-3 hover:text-red-600">
                <RiInstagramLine />
              </a>
              <a className="ml-3 hover:text-red-600">
                <RiPinterestLine />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1410px] w-full m-auto flex flex-col sm:flex-row content-center justify-center text-center md:justify-between px-5 py-10">
        <div className=" flex flex-col md:flex-row content-center justify-center text-center w-full">
          <div className="flex sm:flex-row-reverse justify-center md:justify-normal w-full">
            <div className=" mb-2 text-[15px] text-[#848484] md:pl-10">
              <p>© Demo. All Rights Reserved.</p>
            </div>
            <div className="text-[15px] text-[#887474]">
              <span className="pl-5">
                <a>Privacy Policy</a>
              </span>{" "}
              <span className="pl-3">
                <a> Help</a>
              </span>{" "}
              <span className="pl-3">
                <a>FAQs</a>
              </span>
            </div>
          </div>

          <div className=" flex justify-center content-center pt-2 mt-3 md:mt-0 md:pt-0 w-full">
            <a>
              <img src={Payment} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
