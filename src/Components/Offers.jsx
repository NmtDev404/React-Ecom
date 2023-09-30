import React from "react";
import Banner from "/Images/banner-0.jpg";
import Banner1 from "/Images/banner-1.jpg";
import Banner2 from "/Images/banner-2.jpg";
import Banner3 from "/Images/banner-3.jpg";

const Offers = () => {
  return (
    <section>
      <div className=" max-w-[1480px] flex m-auto xl:flex-row md:flex-row flex-col-reverse items-center justify-center text-black p-2 md:p-0 xl:p-0">
        <div>
          <div className="relative group">
            <div className=" absolute z-[2] text-xl md:text-3xl  xl:text-5xl tracking-widest  text-[15px] pt-10 pr-10  pb-14 pl-5  ">
              <p>
                Up To 40% Off 
              </p>
              <p className="leading-[1.5]">
                Top Lamp Brands
              </p>
              <div className="text-[15px] font-bold mt-16 underline  md:text-base  sm:text-sm">
                <a>SHOP NOW</a>
              </div>
            </div>
            <div className="z-0 w-full h-full overflow-hidden" >
              <img src={Banner} className="group-hover:scale-[115%] transition-all ease-linear duration-200 " />
            </div>
          </div>

          <div className="relative w-full">
            <div className=" absolute z-[1] tracking-widest pl-14 pt-10 pr-10 pb-14 ">
              <div>
                <p className="text-[15px] mb-1 ">NEW PRODUCTS</p>
              </div>
              <h1 className="font-bold text-[20px] xl:text-3xl pt-1">
                
                Up To 25% Off Cabinets
              </h1>

              <div className="text-[15px] font-bold mt-8 underline  md:text-base  sm:text-sm">
                <a>SHOP NOW</a>
              </div>
            </div>

            <div className="absolute h-full w-full z-[2] box-border p-5">
              <div className="relative h-full w-full box-border Border-animation "></div>
            </div>

            <div className="z-0">
              <img src={Banner1} />
            </div>
          </div>
        </div>

        <div className=" relative md:ml-8 flex flex-col items-center  ">
          <div className=" p-10 w-full text-white z-[1] absolute tracking-widest flex flex-col items-center content-center justify-center py-11 ">
            <div className="w-full text-center mb-3">
              <p className="text-[15px] md:text-xl  ">BIG SALE</p>
            </div>
            <div className="text-xl xl:text-5xl text-center w-full ">
              <p>Up to 70% Off</p>
                <p className="leading-[2]">Furniture & Decor</p>
              
            </div>
            <div className="w-full text-center text-[15px] font-bold mt-8 underline  md:text-base  sm:text-sm">
              <a>SHOP NOW</a>
            </div>
          </div>

          <div className="absolute w-full h-full p-5 z-[2] box-border">
            <div  className="relative w-full h-full box-border Border-animationtwo"></div>
          </div>

          <div className="z-[0]"><img src={Banner2} /></div>
        </div>
      </div>

      <div>
        <div className=" relative max-w-[1420px] flex justify-center contents-center  mt-10 m-auto p-2 ">
          <div className=" px-9 h-full w-full md:mt-16 absolute tracking-widest flex flex-col md:flex-row xl:flex-row md:item-center md:text-justify  text-center">
            <div className="text-[15px] xl:text-6xl font-bold text-center px-3">
              <div className="text-3xl md:text-5xl m-3 md:m-0">
                <p>10%</p>
              </div>
            </div>

            <div className="md:ml-9">
              <div className="text-xl xl:text-4xl">
                <p>Get More Pay Less</p>
              </div>
              <div className="text-base xl:text-xl">
                <p>
                  On orders $500 + Use Coupon Code:
                  <span className="font-bold ml-1">WSD10</span>
                </p>
              </div>
            </div>
          </div>

          <img src={Banner3} className=" w-full h-full md:h-44 xl:h-44 object-cover" />
        </div>
      </div>

      
    </section>
  );
};

export default Offers;
