import React from 'react'
import Nav from './Nav'
import Form from './SignupForm'
import LoginForm from './SigninForm'

function Myaccount() {
  return (
    <div className='m-auto'>
    <div className=" border-b-[1px] border-[#e2dada]">
        <Nav className="bg-white border-b-2 border-black"
        />
    </div>

    <div className='flex justify-center items-center gap-4 pt-16 pr-16'>
        <a><span>Home</span></a>
        <a><span>/</span></a>
        <a><span>My Account</span></a>
    </div>


{/* <Form/> */}

<LoginForm/>


    
    </div>
  )
}

export default Myaccount
