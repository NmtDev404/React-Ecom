import React from 'react'
import {HiOutlineChevronDown} from "react-icons/hi2";

const Navtop = () => {
  return (
    <div  className=' bg-black '>

        <div className='flex max-w-[1480px] m-auto text-[12px] px-[100px] py-[10px] text-white justify-between items-center '>
 
 <div className='p-[9px 20px 9px 0px]'>
      <p>UP TO 40% OFF BEST-SELLING FURNITURE. <span className='underline'>SHOP NOW</span></p>
 </div>
<div className='p-[9px 0px 9px 12px]'>
<ul className='flex list-none w-full '>
<li>ENGLISH <HiOutlineChevronDown className='inline-block mr-2 text-[15px]'/></li>
<li>USD <HiOutlineChevronDown className='inline-block text-[15px]'/></li>
</ul>
</div>

</div>

    </div>
  )
}

export default Navtop