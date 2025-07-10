import React from "react";
import img1 from "../assets/img/process1.png";
import img2 from "../assets/img/process2.png";
import img3 from "../assets/img/process3.png";
import ProcessCard from "../layouts/ProcessCard";

const processSteps = [
  {
    img: img1,
    title: "Easy To Order",
    desc: "You only need to follow a few steps to order food.",
  },
  {
    img: img2,
    title: "Fastest Delivery",
    desc: "Delivery that is always on time and even faster.",
  },
  {
    img: img3,
    title: "Best Quality",
    desc: "Not only fast, for us quality is also a priority.",
  },
];

const Process = () => {
  return (
    <section className="bg-[#83122A] dark:bg-black text-black dark:text-white mb-33 py-10 px-5 lg:px-14 transition-colors duration-300">
      <div className="text-center mb-12">
        <p className="text-gray-400 font-medium uppercase tracking-wider mb-2">
          Our Service
        </p>
        <h2 className="text-3xl md:text-4xl text-white font-bold">What Are The Perks?</h2>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {processSteps.map((step, index) => (
          <ProcessCard key={index} {...step} /> // JS This is Spread Operator or in react props spread syntax
        ))}
      </div>
    </section>
  );
};

export default Process;
