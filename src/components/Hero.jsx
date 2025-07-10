import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { GiFoodTruck } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import img from "../assets/img/Hero.jpg";

const Hero = () => {
  return (
  <section className="bg-white text-black dark:text-white flex flex-col mt-28 mb-20 px-5 lg:px-14 pt-5 md:pt-0 dark:bg-black transition-colors duration-300">

  {/* Flex container for image and text */}
  <div className="flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between gap-8">
    
    {/* Right Content */}
    <div className="lg:w-1/2 w-full relative flex justify-center lg:mb-0">
      <div className="relative pt-10">
        <img
          src={img}
          alt="Delivery Guy"
          className="rounded-full w-[350px] h-[350px] md:w-[400px] md:h-[400px] object-cover"
        />
      </div>

      {/* Badges */}
      <div className="absolute top-8 right-0 md:right-10 bg-white text-black text-sm px-3 py-1 rounded-full flex items-center shadow-lg">
        <GiFoodTruck className="text-orange-500 mr-2" /> Quality Food
      </div>

      <div className="absolute bottom-10 left-0 md:left-12 bg-white text-black text-sm px-3 py-1 rounded-full flex items-center shadow-lg">
        <BsCartCheckFill className="text-green-500 mr-2" /> Easy to Order
      </div>

      <div className="absolute bottom-6 right-0 md:right-10 bg-white text-black text-sm px-3 py-1 rounded-full flex items-center shadow-lg">
        <MdDeliveryDining className="text-blue-500 mr-2" /> Fastest Delivery
      </div>
    </div>
    
    {/* Left Content */}
    <div className="lg:w-1/2 w-full text-center lg:text-left pl-2">
      <div className="inline-flex items-center mb-4 text-[#6A0A21] font-medium">
        <FaLeaf className="mr-2" /> We value you
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        <span className="text-[#6A0A21]">Freshest</span> Bites
        <br /> <span className="text-[#6A0A21]">Served</span> Anytime
      </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-left">
          From sizzling-hot street food to gourmet cravings, our flavors stay fresh — no matter the hour.
Midnight munchies or sunrise snacks, we deliver when hunger strikes.
        </p>
    </div>
  </div>


</section>

  );
};

export default Hero;
