import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('http://buyindiahomes.in/api/testimonials?website=buyindiahomes.in');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Log the entire data object to understand its structure
        console.log('API Response:', data);
        
        // Check if the `testimonial` key exists and is an array
        if (Array.isArray(data.testimonial)) {
          // Map the data to match the expected format
          setTestimonials(data.testimonial.map(item => ({
            img: item.image_url || '',  // Update this key to match the API response
            name: item.name || 'Anonymous',  // Update this key to match the API response
            role: item.role || 'Role not specified',  // Update this key to match the API response
            quote: item.quote || 'No comment available'  // Update this key to match the API response
          })));
        } else {
          console.error('Expected array in `testimonial` but got:', data.testimonial);
          setTestimonials([]);
        }
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  const scrollLeft = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, testimonials.length - 1));
  };

  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Testimonials</h3>
        </header>

        <div className="relative flex flex-col items-center">
          {testimonials.length > 0 ? (
            <div className="flex-shrink-0 w-full lg:w-4/5 xl:w-3/4 p-4 transition-transform duration-500 ease-in-out">
              <div
                className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
                style={{ transition: 'transform 0.3s ease-in-out' }}
              >
                <img
                  src={testimonials[currentIndex].img}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                  alt={testimonials[currentIndex].name}
                />
                <h3 className="text-xl font-semibold mb-2">{testimonials[currentIndex].name}</h3>
                <h4 className="text-sm text-gray-600 mb-4">{testimonials[currentIndex].role}</h4>
                <p className="text-gray-700">
                  <span className="inline-block w-6 h-6 mb-2 text-gray-500">“</span>
                  {testimonials[currentIndex].quote}
                  <span className="inline-block w-6 h-6 mb-2 text-gray-500">”</span>
                </p>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">Loading testimonials...</p>
          )}

          <div className="flex space-x-4 mt-6">
            <button
              onClick={scrollLeft}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              &lt;
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 disabled:opacity-50"
              disabled={currentIndex === testimonials.length - 1}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
