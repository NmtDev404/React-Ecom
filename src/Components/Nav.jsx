import React from 'react'
import {HiOutlineBars3,HiMagnifyingGlass} from "react-icons/hi2";
import {LuUser} from "react-icons/lu";
import {PiHeartStraightLight,PiShoppingCartLight} from "react-icons/pi";

const Nav = () => {
  return (
    <div className='bg-[#f2f2f2] sticky top-0 w-full z-10 '>
<div className='max-w-[1480px] m-auto py-[15px] px-[30px] flex items-center justify-between '>

<div>
<ul className='flex list-none text-[24px] '>
<li className= 'pr-[17px]'><a ><HiOutlineBars3 className='inline-block font-extralight'/></a></li>
<li className= ''><a ><HiMagnifyingGlass className='inline-block'/></a></li>
</ul>
</div>

<div className='font-extralight  text-5xl'>
<h1>Demo</h1>
</div>

<div>

<ul className='flex m-auto list-none text-[24px]'>  
 <li className= 'p-4'><a><LuUser/></a></li>
 <li className= 'p-4'><a><PiHeartStraightLight/></a></li>
 <li className= 'p-4'><a><PiShoppingCartLight/></a></li>
</ul>


</div>

</div>

</div>

    
  )
}

export default Nav