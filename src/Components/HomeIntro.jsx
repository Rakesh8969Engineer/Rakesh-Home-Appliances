import React from "react";

function HomeIntro() {
  return (
    <>
      <div className="flex flex-col mt-[2rem] ml-[5rem] mr-[5rem]">
        <p className="text-3xl font-bold text-center ">Welcome To Malron Exports</p>
        <p className="md:text-xl  font-bold mt-[5rem] ">
            OUR PRODUCTS <span id="about-us-line"> </span>
            <span class="about-us-line-2"></span>
          </p>

<p className="italic md:text-[25px] text-lg font-semibold text-lime-800 Home-text mt-[4rem] ">Malron Exports was established in 2017 as the Supplier and Exporter of Kitchenware Products.We are also Associated with Engineering Export Promotion Council of India. Our Main Product Lines are Kitchen Ware, Cook Ware, Hotel ware and other types of Utensils. We also deal in Corporate Gifting for Popular Brands.</p>

      </div>
    </>
  );
}

export default HomeIntro;
