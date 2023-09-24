import React from 'react'
import Banner from '/Images/banner-0.jpg';
import Banner1 from '/Images/banner-1.jpg';
import Banner2 from '/Images/banner-2.jpg';
import Banner3 from '/Images/banner-3.jpg';


const Offers = () => {
  return (
    
     <section>

       <div className=" max-w-[1480px] flex m-auto xl:flex-row md:flex-row flex-col-reverse items-center justify-center text-black">

        <div>
              <div className='relative'>
              
              <div className=' absolute tracking-widest li xl:text-5xl text-[15px] pt-10 pr-10 pb-14'>
               <p>Up To 40% Off <br/> Top Lamp Brands</p>
         <div className='text-[15px] font-bold mt-16 underline  md:text-base  sm:text-sm'><a >SHOP NOW</a></div>
          
          </div>
              <div><img src={Banner}/></div>
               </div>

                  <div className='relative '>

              <div className=' absolute tracking-widest pl-14 pt-10 pr-10 pb-14 '>
               <div><p className='text-[15px] mb-1 '>NEW PRODUCTS</p></div>
          <h1 className='font-bold text-[20px] xl:text-3xl pt-1'> Up To 25% Off Cabinets</h1>

          <div className='text-[15px] font-bold mt-8 underline  md:text-base  sm:text-sm'><a >SHOP NOW</a></div>
          </div>
              <div><img src={Banner1}/></div>
               </div>
              
           
        </div>      
       
          <div className=' relative ml-8   flex flex-col items-center' >

          <div className=' p-10 text-white absolute tracking-widest flex flex-col items-center content-center justify-center w-[100%] py-11 '>
          <div className='w-full text-center mb-3'><p className='text-[15px]  '>BIG SALE</p></div>
          <div className='w-full' ><h1 className='text-[20px] xl:text-5xl p-5 text-center' > Up to 70% Off<br/> Furniture & Decor </h1></div>
          <div className='w-full text-center text-[15px] font-bold mt-8 underline  md:text-base  sm:text-sm'><a >SHOP NOW</a></div>
          </div>

        
          <img src={Banner2}/>
          
          </div>


          
   
      </div>
      
          <div >

          <div className=' relative max-w-[1420px] flex justify-center contents-center  mt-10 m-auto'>
          <div className=' px-9 h-full w-full  absolute tracking-widest flex items-center  content-center'>
          
          <div className='text-[15px] xl:text-6xl font-bold text-center px-3'><div ><p >10%</p></div></div>

          <div className='ml-9'>
          <div className='text-[20px] xl:text-4xl'><p>Get More Pay Less</p></div>
          <div className='text-[20px] xl:text-xl'><p>On orders $500 + Use Coupon Code:<span className='font-bold ml-1'>WSD10</span></p></div>
          </div>

          </div>
          
          <img src={Banner3} className=' w-full h-44 object-cover'/>
          </div>
          </div>

{/* <div >

  <div className='max-w-[1480px] m-auto mt-16'><Furniture/></div>
</div> */}

     </section>
    
  );
}

export default Offers