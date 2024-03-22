import React from "react";
import Myaccount from "./Components/Myaccount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Layouts/Home";
import LoginPage from "./Layouts/LoginPage";
import SignupPage from "./Layouts/SignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>

      {/* <div className='home'>
      <Nav/> 
     <Hero/>
     <Catagory/>
     <Offers/>
     <Furnitures/>
      <Footer/>
    </div>
     <Myaccount/>
       */}
    </>
  );
}

export default App;
