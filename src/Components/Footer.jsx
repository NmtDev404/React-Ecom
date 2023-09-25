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
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center">
          <div className="w-full text-center xl:text-start xl:flex  ">
            <div className=" my-10 xl:w-2/5">
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

            <div className="flex xl:flex-row-reverse w-full py-10">
              <div className="w-1/2 ml-4 xl:w-full">
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

              <div className="w-1/2 ml-5 xl:w-1/3 xl:mx-24">
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

          <div className="w-full ml-5 xl:pl-10 xl:pt-14">
            <div className="text-center xl:text-left">
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

            <div className="icons flex justify-center text-2xl mt-5 sm:my-16 mb-12 xl:justify-start">
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

      <div className="max-w-[1410px] w-full m-auto flex flex-col sm:flex-row content-center justify-center text-center xl:justify-between px-5 py-10">
        <div className=" flex flex-col md:flex-row content-center justify-center text-center w-full">
          <div className="flex sm:flex-row-reverse justify-center xl:justify-normal w-full">
            <div className=" mb-2 text-[15px] text-[#848484] xl:pl-10">
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

          <div className=" flex justify-center content-center pt-2 mt-3 xl:mt-0 xl:pt-0 w-full">
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
