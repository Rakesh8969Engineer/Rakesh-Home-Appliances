import React, { useState } from "react";
import brandimage from "../images/updalogo1.png";
import { Link } from "react-router-dom";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import "react-dropdown/style.css";
function Navbar() {
  const [toggle, SetToggle] = useState(false);
  return (
    <>
      <div className="">
        <div className="Navbar flex justify-between w-full h-full  bg-white ">
          <div className="Main-logo ml-[50px] mt-3 mobile:w-[3.25rem]">

          <Link to="/">
          <img src={brandimage} alt="" />

          </Link>

            
          </div>

          <div className="nav-links p-5 font-bold text-lg   ">
            <ul className=" hidden md:flex ">
              <li className="m-5 hover:cursor-pointer hover:text-red-600 text-red-600">
                <Link to="/">Home</Link>
              </li>
              <li className="m-5 hover:cursor-pointer  hover:text-red-600">
                <Link to="/About">About</Link>
              </li>

              {/* try something new  */}



 


              {/* <li className="m-5 hover:cursor-pointer hover:text-red-600   dropdowns ">
                Our Products
              </li> */}


<li className="dropdown">
  <button className="dropbtn">Our Products</button>
  <div className="dropdown-content">
    <a href="#">Stainless Stell Cookware</a>
    <a href="#">Non Stick Cookware</a>
    <a href="#">Home Appliances</a>
    <a href="#">Cooler</a>
    <a href="#">Air Conditioner</a>
    <a href="#">Fridge</a>
  </div>
</li>

              <li className="m-5 hover:cursor-pointer hover:text-red-600">
                Enquiry Now
              </li>
              <li className="m-5 hover:cursor-pointer hover:text-red-600">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>

            {/* Responsive Menu Part  */}

            <ul
              className={`md:hidden z-40    fixed w-[90%] bg-white ${
                toggle ? `left-[0]` : `left-[-100%]`
              }`}
            >
              <li className="m-5 hover:cursor-pointer hover:text-red-600 text-red p-3 ">
                <Link to="/">Home</Link>
              </li>
              <li className="m-5 hover:cursor-pointer  hover:text-red-600 p-3  mt-[-20px]">
                <Link to="/About">About</Link>
              </li>




              <li className="dropdown">
  <button className="dropbtn ml-[2rem] mt-[-20px]">Our Products</button>
  <div className="dropdown-content">
    <a href="#">Stainless Stell Cookware</a>
    <a href="#">Non Stick Cookware</a>
    <a href="#">Home Appliances</a>
    <a href="#">Cooler</a>
    <a href="#">Air Conditioner</a>
    <a href="#">Fridge</a>
  </div>
</li>


              <li className="m-5 hover:cursor-pointer hover:text-red-600 p-3 ">
                Enquiry Now
              </li>
              <li className="m-5 hover:cursor-pointer hover:text-red-600 p-3  mt-[-20px]">
              <Link to="/Contact">Contact</Link>
              </li>
            </ul>

            <div className="text-xl md:hidden block">
              {toggle ? (
                <CloseIcon onClick={() => SetToggle(!toggle)} />
              ) : (
                <DensityMediumIcon onClick={() => SetToggle(!toggle)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
