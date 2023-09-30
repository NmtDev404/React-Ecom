import React from 'react'
import Cards from './Cards'
import Light  from '/Images/lamp-1-310x310.jpg'
import Chair  from '/Images/chair-1-310x310.jpg'
import Bed  from '/Images/bed-310x310.jpg'
import Table  from '/Images/table-310x310.jpg'




const Cetagory= () => {

  


  return (
    <section>

<div  className='max-w-[1480px] bg-white text-black m-auto pt-20 mb-24' >
  <div className='ml-16'>

        <div>
        <h2 className='text-2xl font-bold'>SHOP BY CATEGORY</h2>
      </div>   
      
        </div>

      <div className='max-w-[1410px] m-auto grid grid-cols-2 pt-10 '>


          <Cards proName = 'Lights'
                      proCount = '7'
                      imageSrc = {Light}
                      alttext = 'Lights'
                      
                />

          <Cards proName = 'Lights'
                      proCount = '7'
                      imageSrc = {Chair}
                      alttext = 'Lights'
                      
                />



          <Cards proName = 'Lights'
                      proCount = '7'
                      imageSrc = {Bed}
                      alttext = 'Lights'
                      
                />

          <Cards proName = 'Lights'
                      proCount = '7'
                      imageSrc = {Table}
                      alttext = 'Lights'
                      
                />
         
                  
      </div> 

</div>

    </section>
  )
}

export default Cetagory