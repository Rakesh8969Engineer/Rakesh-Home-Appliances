import React from "react";
import FrontMsg from "../Components/FrontMsg";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import SatyamevJayate from "../images/SatyamevJayate.png";
import Footer from "../Components/Footer";
function About() {
  return (
    <>
      <FrontMsg />
      <Navbar />
      <div className="Main-ui w-full h-[280px] bg-black mobile:p-4  " id="About">
        <div className="flex items-center justify-center  ">
          <p className="text-[60px] mobile:text-[30px] text-white font-bold  mt-[60px]">
            About Us
          </p>
        </div>
        <div className="flex items-center justify-center  mobile:text-[20px]   ">
          <div className="text-white text-[25px] font-bold ">
            <Link to="/" className="mr-2">
              Home
            </Link>

            <PanoramaFishEyeIcon />
          </div>
          <div className="text-white text-[25px] font-bold ml-3 ">
            <Link to="/About">About</Link>
          </div>
        </div>
      </div>
      <div className="mt-[20px] ">
        <div className="about-content mt-[5.25rem] ml-[7.25rem] mr-[7.25rem] mobile:ml-[1.5rem] mobile:mr-[1.5rem]">
          <p className="md:text-xl text-blue-500 font-bold ">
            ABOUT US <span id="about-us-line"> </span>
            <span class="about-us-line-2"></span>
          </p>
          <p className="md:text-[3rem] text-orange-700 font-semibold mt-[20px] text-[1.75rem] ">
            Malron Exports
          </p>

          <p className="italic md:text-2xl text-xl text-lime-800 mt-[20px] about-text font-bold">
            Malron Exports was established in 2017 as the Supplier and Exporter
            of Kitchenware Products.We are also Associated with Engineering
            Export Promotion Council of India. <br />
            Our Main Product Lines are Kitchen Ware, Cook Ware, Hotel ware and
            other types of Utensils. We also deal in Corporate Gifting for
            Popular Brands. <br />
            We are associated with various Manufacturers to Ensure Premium
            Quality Products and Timely supply to our buyers. We have
            Specialization in developing new items as per Specification provided
            by our Buyers. This helps us Expanding our Portfolio of products and
            also gives us Satisfaction of providing Quality products to our
            Customers.
            <br /> As part of our dedication to supply chain management we
            strive to establish and improve customer relations by supplying them
            with the best. Our philosophy strives not only on customer
            acquisition but also on customer retention. Our aim is to increase
            the happiness, monetary value and satisfaction mutually.
          </p>

          <div className="about-section-image mt-[80px]">
            <img src={SatyamevJayate} alt="Logo" />
          </div>

          <div className="about-section-buttons flex  items-center justify-center mr-[20rem] mt-[3rem] mobile:mr-[1rem] mobile:ml-[1rem]">
            <div>
              <button class="bg-black hover:bg-blue-700 text-white  font-bold py-3 border-amber-700 px-4 rounded ">
                <a href="https://wa.me/+918969949025">Enquiry Now</a>
              </button>
            </div>

            <div className="ml-[20px]">
              <button class="bg-black hover:bg-blue-700 text-white border-2  border-red-700 shadow-2xl font-bold py-3 px-4 rounded ">
              
                <a href="tel:2348101234567">Call Us</a>


              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
