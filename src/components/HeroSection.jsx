import React from "react";
import rbc from "../assets/images/rbc.jpg";

const HeroSection = () => (
  <div
    className="relative bg-cover bg-center h-auto md:h-80 w-full mb-5"
    style={{ backgroundImage: `url(${rbc})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 container mx-auto px-4 py-12">
      <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Meet our Brave Donors
        </h2>
        <p className="text-base md:text-lg text-white text-opacity-90 max-w-2xl text-justify">
          The real-life heroes who selflessly give the gift of life. With every
          donation, they bring hope, strength, and a second chance to those in
          need.
        </p>
      </div>
    </div>
  </div>
);

export default HeroSection;
