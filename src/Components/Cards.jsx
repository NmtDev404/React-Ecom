import React from 'react'


const Cards = (props) => {

  const {imageSrc, alttext, proName, proCount} = props;
  
  return (
    <div className='flex justify-center items-center  w-[350px] h-[170px] gap-10 mx-5'>


        
        <div className='rounded-full'><img className='rounded-full' 
            src={imageSrc} alt={alttext}
            width="120" height="120"
           /></div>

    


    <div className=''> <h2 className='font-bold'>{proName}</h2>
    <p>{proCount} products</p></div>
   
    

   

    </div>
    
    
  )
}

export default Cards