import React from "react";
import Cards from "./Cards";
import Light from "/Images/lamp-1-310x310.jpg";
import Chair from "/Images/chair-1-310x310.jpg";
import Bed from "/Images/bed-310x310.jpg";
import Table from "/Images/table-310x310.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
const Cetagory = () => {
  return (
    <div>
      <div className="max-w-[1400px] bg-white text-black m-auto mt-36 mb-24 ">
        <div className="">
          <div>
            <h2 className="text-2xl font-bold">SHOP BY CATEGORY</h2>
          </div>
        </div>

       
        <div className="swiperCon m-auto pt-10">

        
            <Swiper 
             slidesPerView={3}
          
        centeredSlides={true}
         loop = {true}
        autoplay={{
          delay: 800,
     
        }}
      
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
        >
        <div>
          <SwiperSlide>
          
          <div >
          
            <Cards
              proName="Lights"
              proCount="7"
              imageSrc={Light}
              alttext="Lights"
            />
          </div></SwiperSlide>
        <SwiperSlide><div>
            <Cards
              proName="Lights"
              proCount="7"
              imageSrc={Chair}
              alttext="Lights"
            />
          </div></SwiperSlide>
        <SwiperSlide>  <div>
      
            <Cards
              proName="Lights"
              proCount="7"
              imageSrc={Bed}
              alttext="Lights"
            />
          </div></SwiperSlide>
        <SwiperSlide> <div>
            <Cards
              proName="Lights"
              proCount="7"
              imageSrc={Table}
              alttext="Lights"
            />
          </div></SwiperSlide>
        </div>
        

        </Swiper> 
        
          
        </div>
       
      </div>
    </div>
  );
};

export default Cetagory;
