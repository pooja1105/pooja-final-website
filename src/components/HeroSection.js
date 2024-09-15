import React from 'react';
import web from "../images/travel2.jpg";
import './HeroSection.css'; // Import the CSS file for animations

const HeroSection = () => {
  return (
    <>
      <div className="relative w-screen h-screen bg-gray-100 mt-10">
        <img
          src={web}
          alt="Hero Section"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-6 animate-bounceUpDown"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ON Spot Offer
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
