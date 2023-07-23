import React from "react";
import Header from "../Components/Header";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { Link } from "react-router-dom";
import DraftsIcon from "@mui/icons-material/Drafts";
import VibrationIcon from '@mui/icons-material/Vibration';
import Footer from "../Components/Footer";
function ContactPage() {
  return (
    <>
      <Header />

      <div
        className="Main-ui w-full h-[280px] bg-black mobile:p-4  "
        id="Contact"
      >
        <div className="flex items-center justify-center  ">
          <p className="text-[60px] mobile:text-[30px] text-white font-bold  mt-[60px]">
            Contact Us
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
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="contact-div flex justify-center items-center mt-[4rem] mobile:flex-wrap  ">
        <div className="contact w-[500px] h-[530px] border-2 border-black pl-[3rem] ">
          <p className="md:text-xl  font-bold mt-[2rem]">
            CONTACT US <span id="about-us-line"> </span>
            <span class="about-us-line-2"></span>
          </p>

          <p className="md:text-[2rem] text-green-700 font-bold mt-[20px] text-[1.8rem] mobile:text-xl ">
            Feel Free To Contact Us
          </p>

          <div className="text-2xl text-green-900 mobile:text-xl  ">
            <DraftsIcon fontSize="large" />
            <span className="pl-3 ">Email Us</span>
            <p className="text-slate-600">info@abcde.com</p>
            <span className="contact-line"> </span>
          </div>

          <div className="text-2xl text-green-900 mobile:text-xl ">
            <VibrationIcon fontSize="large" />
            <span className="pl-3">Call Us</span>
            <p className="text-slate-600">+919876543210</p>
            <span className="contact-line"> </span>
          </div>





        </div>

        {/* ************** */}

        <div className="contact-form w-[500px] h-[530px] border-2 border-black ml-[3rem] mobile:ml-[0rem] p-1 mobile:mt-[3rem]  ">
          <div className="mt-[2.1rem]">
            <form>
              <p className="p-2 m-3  rounded-lg bg-green-100 border-4 hover:border-green-200 mobile:p-0 ">
                <input
                  type="text"
                  className="w-full h-[3rem] bg-green-100   outline-none   "
                  placeholder="Name"
                ></input>
                <br />
              </p>
              <p className="p-2  m-3  rounded-lg bg-green-100  border-4 hover:border-blue-200  mobile:p-0 ">
                <input
                  type="text"
                  className="w-full h-[3rem] bg-green-100   outline-none  "
                  placeholder=" Email"
                ></input>
                <br />
              </p>
              <p className="p-2  m-3  rounded-lg bg-green-100   border-4 hover:border-green-200 mobile:p-0  ">
                <input
                  type="tel"
                  className="w-full h-[3rem] bg-green-100     hover:border-green-200  outline-none   "
                  placeholder="Phone"
                ></input>
                <br />
              </p>
              <p className="p-2   m-3 bg-green-100  rounded-lg  border-4 hover:border-green-200  mobile:p-0   ">
                <label>Message</label>
                <input
                  type="text"
                  className="w-full h-[8rem] bg-green-100   outline-none "
                  placeholder=""
                ></input>
              </p>
            </form>
            <div className="  mb-5 bg-red-600 text-center h-full text-white p-2 font-bold border-2 border-red-600 rounded-xl mobile:text-sm ">
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
