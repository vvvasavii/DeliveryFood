import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Menu from "./components/Menu";
import Testimonial from "./components/Testimonial";
import GetApp from "./components/GetApp";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import LocationSection from "./components/LocationSection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <section id="home"><Hero /></section>
              <section id="foods"><Menu /></section>
              <section id="restaurants"><LocationSection /></section>
              <section id="service"><Process /></section>
              <section><Testimonial /></section>
              <section id="get-app"><GetApp /></section>
              <section><Newsletter /></section>
              <Footer />
            </>
          }
        />

        {/* Sign Up */}
        <Route path="/signup" element={<SignUp />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
