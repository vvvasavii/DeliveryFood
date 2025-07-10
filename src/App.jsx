import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Menu from "./components/Menu";
import Testimonial from "./components/Testimonial";
import GetApp from "./components/GetApp";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import LocationSection from "./components/LocationSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <LocationSection />
      <Process />
      <Testimonial />
      <GetApp />
      <Newsletter />
      <Footer />
      
    </>
  );
};

export default App;
