import React from "react";
import Navtop from "../Components/Navtop";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import Offers from "../Components/Offers";
import Furnitures from "../Components/Furnitures";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navtop />
      <Nav />

      <Hero />
      <Category />
      <Offers/>
      <Furnitures/>
      <Footer/>
    </>
  );
}

export default Home;
