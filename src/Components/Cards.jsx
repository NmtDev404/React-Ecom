import React from 'react'


const Cards = (props) => {

  const {imageSrc, alttext, proName,proCount} = props;
  
  return (
    
    <div className='grid grid-cols-2 mx-14'>

    <div>
      <a href='#'>
        <img className='rounded-full' 
            src={imageSrc} alt={alttext}
            width='400' height= '400'
           />
    </a>

    </div>

    <div className='flex flex-col pl-10 justify-center'>
    
    <h2 className='font-bold'><a href='#'>{proName}</a></h2>
    <p><a href='#'>{proCount} products</a></p>
    </div>

    </div>
  )
}

export default Cards