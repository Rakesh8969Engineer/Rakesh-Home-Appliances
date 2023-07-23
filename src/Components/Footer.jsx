import React from "react";
import Madeinindialogo from "../images/Make in India Logo.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
function Footer() {
  return (
    <>
      <div className="Footer-container  w-screen h-screen bg-black mt-[5rem] ">
        <div className="footer-element flex justify-between pt-[7rem] m-[5rem] mobile:flex-wrap mobile:ml-[1rem]">
          <div className="footer-logos">
            <img src={Madeinindialogo} />
            <h3 className="text-white text-xl">Malron Exports</h3>
            <div className="logo-underline"></div>
            <div className="Social-icons  m-2">
              <TwitterIcon
                fontSize="large"
                className="m-1 bg-blue-500 text-white p-2 border-2 border-red-900"
              />
              <FacebookIcon
                fontSize="large"
                className="m-1 bg-[rgb(0,255,255)]  p-2 border-2 border-red-900 "
              />
              <InstagramIcon
                fontSize="large"
                className="m-1 bg-[rgb(0,255,255)] p-2  border-2 border-red-900 "
              />
            </div>
          </div>
          <div className="footer-products">
            <h3 className="text-white text-3xl font-bold  ">Our Products</h3>
            <ul className="text-white mt-4">
              <li className="p-1">
                <ArrowForwardIcon />
                Stainless Steel Cookware
              </li>
              <li className="p-1">
                <ArrowForwardIcon />
                Non Stick Cookware
              </li>
              <li className="p-1">
                <ArrowForwardIcon /> Alumunium Cookware
              </li>
              <li className="p-1">
                <ArrowForwardIcon />
                Hard Anodised Cookware
              </li>
              <li className="p-1">
                <ArrowForwardIcon /> Ceramic Cookware
              </li>
              <li className="p-1">
                <ArrowForwardIcon />
                Cast Iron Cookware
              </li>
              <li className="p-1">
                <ArrowForwardIcon /> Tripy Cookware
              </li>
            </ul>
          </div>
          <div className="Quick-links">
            <h4 className="text-white text-3xl font-bold">Quick links</h4>

            <ul className="text-white mt-4">
              <li className="p-1">
                <ArrowForwardIcon />
                Home
              </li>
              <li className="p-1">
                <ArrowForwardIcon /> About us
              </li>
              <li className="p-1">
                <ArrowForwardIcon /> Contact us
              </li>
              <li className="p-1">
                <ArrowForwardIcon /> Gift
              </li>
            </ul>
          </div>
          <div className="Connection text-white">
            <h4 className="text-white text-3xl font-bold">Get In Touch</h4>
            <ul className="mt-4">
              <li className="p-1">
                
                <EmailIcon /> malronexports@gmail.com
              </li>
              <li className="p-1">
                
                <PhoneIcon />
                +919310005892
              </li>
            </ul>
          </div>

          
        </div>
        <div className="bg-black">
        <p className="text-white ml-[10rem] mt-[11rem] text-lg ">
          ©2022 <span></span>
           <a href="#About" className="underline">Malron Exports.</a>
          All Rights Reserved.|Designed & Developed By Bloatware IT Solutions
        </p>

        </div>



      
        
      </div>
    </>
  );
}

export default Footer;
