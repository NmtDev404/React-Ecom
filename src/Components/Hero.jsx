import React from 'react'
import Lamp  from '/Images/slide-2.png';
import {GoDot,GoDotFill} from "react-icons/go";
const Hero = () => {
  return (
    <div className='bg-[#f2f2f2]'>

      <div className='grid grid-cols-2 sm:grid-flow-row px-10 tracking-wider max-w-[1480px] m-auto '>

      <div className='flex flex-col justify-center '>
      <p className='pb-5 text-[16px]  xl:text-[16px]  md:text-base  sm:text-sm'>SALE OFF 30%</p>
      <h1 className='text-xl xl:text-7xl tracking-widest md:text-5xl  sm:text-3xl  '>Lamp  & Lighting<br/><span className='top-5'>Great Low Prices</span></h1>
      <p className='text-[14px] pt-5'>Free Standerd shipping <span className='font-bold'>with $35</span></p>

      <div className='text-[15px] font-bold mt-16 underline  md:text-base  sm:text-sm'><a >SHOP NOW</a></div>



      </div>
   
      <div className='flex justify-end pt-10'>
        <img src={Lamp} className='animate-Float'/>
      </div>

      </div>

      
      <div className='flex pl-[4.5rem] text-[35px] mb-14 max-w-[1480px] m-auto '>
        <GoDot className='hover:hidden'/><GoDotFill className='hidden hover:block '/>
        <GoDot className='ml-2 transition-all hover:hidden'/><GoDotFill className='transition-all hidden hover:block'/>
        <GoDot className='ml-2 transition-all hover:hidden'/><GoDotFill className='transition-all hidden hover:block'/>
      </div>

    </div>
  )
}

export default Hero