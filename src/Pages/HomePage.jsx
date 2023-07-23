import React from "react";
import FrontMsg from "../Components/FrontMsg";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Products from "../Components/ProductsMap";
import HomeIntro from "../Components/HomeIntro";
import Footer from "../Components/Footer";


function HomePage() {
  return (
    <>
      

      <FrontMsg />
      <Navbar />
      <Slider/>
      <HomeIntro/>
      <Products/>
<Footer/>
      
    </>
  );
}

export default HomePage;
