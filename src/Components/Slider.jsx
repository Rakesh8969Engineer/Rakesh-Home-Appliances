import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import React, {  useState } from "react";
import "./Slider.css";

import {SliderApi} from './ComponentsApi/SliderApi'
const Slider = () => {
  // Styles
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(SliderApi);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <div className="slider h-[540px] bg-white flex items-center justify-between ">
      {/* left Arrow */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowBackIosIcon style={{ fontSize: "50px" }} />
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div className={`wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` + slide.background} key={index}>
              <div className={slideStyle}>
                <div className="flex-1 flex justify-center items-center h-[100%]">
                <img
                  className =' h-[100%] object-cover'
                  src={slide.src}
                  alt="man"
                />
                </div>
                
              </div>
            </div>
          );
        }
      })}
      {/* Right Arrow */}

      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowForwardIosIcon style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Slider;