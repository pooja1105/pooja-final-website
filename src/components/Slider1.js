import React, { useState, useEffect } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";

const Slider1 = () => {
  const [sponsors, setSponsors] = useState([]); // Initialize sponsors as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [heading, setHeading] = useState(''); // To store heading from the API

  // API call to fetch bank partners
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetch('http://buyindiahomes.in/api/banks?website=buyindiahomes.in');
        if (response.ok) {
          const data = await response.json();
          console.log("Success data from banks", data);
          
          if (data && data.bank && data.bank.banks) {
            const banks = data.bank.banks;

            // Set heading from API, with a default fallback
            setHeading(banks[0].heading || "Our Bank Partners");

            // Exclude the first element (heading) and use the rest as sponsors
            setSponsors(banks.slice(1));
          } else {
            setSponsors([]); // If data is missing, set sponsors to an empty array
          }

          setLoading(false); // Set loading to false when data is fetched
        } else {
          throw new Error('Failed to fetch bank partners');
        }
      } catch (error) {
        setError(error.message); // Set error if API call fails
        setLoading(false);
      }
    };

    fetchBanks(); // Fetch the banks on component mount
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full px-4 py-8">
      <h1
        className="text-center font-bold mb-8"
        style={{
          color: "#06a34e",
          fontSize: "30px",
          fontFamily: "Inter, sans-serif",
          marginTop: "50px",
        }}
      >
        {heading} {/* Dynamic heading from API */}
      </h1>
      <div className="relative">
        <Carousel {...carouselSettings}>
          {sponsors && sponsors.length > 0 ? (
            sponsors.map((sponsor, index) => (
              <Flippy
                key={index}
                flipOnHover={true}
                flipOnClick={true}
                flipDirection="horizontal"
                style={{ width: '300px', height: '300px' }}
              >
                <FrontSide
                  className="flex items-center justify-center h-full bg-gray-100 rounded-lg shadow-md"
                  style={{
                    border: '4px solid #06a34e',
                    backgroundImage: `url(${sponsor.property_bank_photo})`, // Display the bank image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '300px', height: '200px'
                  }}
                />
                <BackSide
                  className="flex items-center justify-center h-full bg-gray-100 rounded-lg shadow-md"
                  style={{
                    border: '4px solid #06a34e',
                    backgroundImage: `url(${sponsor.property_bank_photo})`, // Display the same image or another one here
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '300px', height: '200px',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </Flippy>
            ))
          ) : (
            <div className="text-center">No bank partners available</div>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider1;
