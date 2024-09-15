import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from "../images/hero22.png";
import image44 from "../images/hero6.jpg";
import Box from './Box';
import footer2 from "../images/footer2.webp";
import Information from './Information';
import Amenities from './Amenities';
import BusinessSolutions from './BusinessSolutions';
import Coming from './Coming';
import ContactUs from './ContactUs';
import EMICalculator from './EMICalculator';
import Faq from './Faq';
import Footer from './Footer';
import Footer2 from './Footer2';
import HeroSection from './HeroSection';
import Imagegrid from './Imagegrid';
import Map from './Map';
import MastertPlan from './MastertPlan';
import Slider1 from './Slider1';
import Testimonial from './Testimonial';
import UnitPlan from './UnitPlan';
import YouTubeVideo from './YouTubeVideo';
import Property from './Property';
import Gallery from './Gallery';
import PropertyPrice from './PropertyPrice';

const locationHighlights = [
  {
    id: 1,
    heading: 'Prime City Center',
    image: image,
    content: 'Located in the heart of the city with easy access to malls, offices, and entertainment.',
  },
  {
    id: 2,
    heading: 'Scenic Views',
    image: image44,
    content: 'Experience breathtaking views of the surrounding landscapes and waterfront.',
  },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition`}
      style={{ ...style, right: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition`}
      style={{ ...style, left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Slider {...settings}>
            {locationHighlights.map((highlight) => (
              <div key={highlight.id} className="relative w-full h-full">
                <img
                  src={highlight.image}
                  alt={highlight.heading}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 bg-black bg-opacity-50" // Black background with transparency
                >
                  <h3
                    className="text-white font-semibold mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-transform duration-300 transform hover:scale-105 mt-8 sm:mt-12 md:mt-16 lg:mt-20"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {highlight.heading}
                  </h3>
                  <p
                    className="text-white max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl transition-opacity duration-300 transform hover:scale-105 mt-4 sm:mt-6 md:mt-8"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {highlight.content}
                  </p>
                  <div className="flex flex-col items-center mt-8 sm:mt-12 lg:mt-16">
                    <button
                      className="bg-[#06a34e] text-white py-2 px-4 rounded-md text-base sm:text-lg font-semibold"
                    >
                      Enquire Now
                    </button>
                    <div className="mt-6 w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                        <Box type="logo" content={footer2} />
                        <Box type="text" text="Punawale-Hinjewadi-Pune" />
                        <Box type="text" text="3 & 4 BHK 1,330 SQ FT To 1,700 SQ FT" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <Property />
      <Information />
      <PropertyPrice />
      <HeroSection />
      <Imagegrid />
      <YouTubeVideo />
      <BusinessSolutions />
      <Amenities />
      <UnitPlan />
      <Coming />
      <MastertPlan />
      <Gallery />
      <Map />
      <ContactUs />
      <Faq />
      <EMICalculator />
      <Slider1 />
      <Testimonial />
      <Footer />
      <Footer2 />
    </>
  );
};

export default Banner;
