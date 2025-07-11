import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const navigateToSection = (id) => {
  navigate("/"); // first, go to homepage

  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, 100); // delay just enough to let homepage load
};


  return (
    <header className="bg-[#83122A] dark:bg-[#1C1A27] text-black dark:text-white py-4 px-5 lg:px-14 flex items-center justify-between transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center gap-1.5 text-2xl font-bold text-white">
        <MdOutlineRestaurant />
        <span>InBites</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8 font-medium">
        <button  onClick={() => navigateToSection("home")}
         href="#home" className=" text-white hover:text-orange-400 transition">
          Home
        </button>
        <a href="#restaurants" className="text-white hover:text-orange-400 transition">
          Restaurants
        </a>
        <a href="#foods" className="text-white hover:text-orange-400 transition">
          Foods
        </a>
        <a href="#get-app" className=" text-white hover:text-orange-400 transition">
          Get App
        </a>
        <a href="#service" className="text-white hover:text-orange-400 transition">
          Service
        </a>
      </nav>

      {/* Cart & Button */}
      <div className="flex items-center space-x-4">
        <ThemeToggle /> 
        <button className="hidden md:flex text-gray-400  hover:text-orange-400 text-xl">
          <FaShoppingCart />
        </button>
        <button
        onClick={() => navigate("/signup")}
         className="bg-gray-400 hover:bg-orange-600 transition text-white py-2 px-4 rounded-full text-sm font-medium">
          Register Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;

