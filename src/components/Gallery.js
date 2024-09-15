// import React from 'react';
// import Slider from 'react-slick';
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import image from "../images/dinner.jpg";
// import image1 from "../images/hotel.jpg";
// import image3 from "../images/room.jpg";
// import image4 from "../images/corporate1.jpeg";
// import image5 from "../images/corporate.jpg";

// // Sample location highlights data
// const locationHighlights = [
//   {
//     id: 1,
//     heading: 'Prime City Center',
//     image: image,
//     content: 'Located in the heart of the city with easy access to malls, offices, and entertainment.',
//   },
//   {
//     id: 2,
//     heading: 'Scenic Views',
//     image: image1,
//     content: 'Experience breathtaking views of the surrounding landscapes and waterfront.',
//   },
//   {
//     id: 3,
//     heading: 'Well Connected',
//     image: image3,
//     content: 'Nearby metro stations and highways make commuting a breeze.',
//   },
//   {
//     id: 4,
//     heading: 'Lush Green Surroundings',
//     image: image4,
//     content: 'A peaceful environment surrounded by greenery and parks.',
//   },
//   {
//     id: 5,
//     heading: 'Corporate Excellence',
//     image: image5,
//     content: 'Top-notch corporate facilities for business needs and events.',
//   },
// ];

// // Custom arrow components
// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} text-black bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition`}
//       style={{ ...style, right: '10px', zIndex: 1 }}
//       onClick={onClick}
//     >
//       <FaArrowRight />
//     </div>
//   );
// };

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} text-black bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition`}
//       style={{ ...style, left: '10px', zIndex: 1 }}
//       onClick={onClick}
//     >
//       <FaArrowLeft />
//     </div>
//   );
// };

// const Location = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center font-bold mb-8"
//           style={{
//             color: "#06a34e",
//             fontSize: "30px",
//             fontFamily: "Inter, sans-serif",
//             marginTop: "50px",
//           }}>Location Advance / Key Distance - Near to MAP</h2>
//         <Slider {...settings}>
//           {locationHighlights.map((highlight) => (
//             <div key={highlight.id} className="relative overflow-hidden rounded-lg">
//               <div
//                 className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 z-10 text-pop-up transition-transform hover:scale-110 hover:bg-opacity-70"
//                 style={{ backdropFilter: 'blur(5px)' }}
//               >
//                 <h3
//                   className="text-white font-semibold mb-4 md:text-5xl lg:text-6xl transition-all duration-300 hover:text-green-400"
//                   style={{ fontSize: '25px', fontFamily: 'Inter, sans-serif' }}
//                 >
//                   {highlight.heading}
//                 </h3>
//                 <p
//                   className="text-white text-center max-w-2xl md:text-xl lg:text-2xl transition-opacity duration-300 hover:opacity-90"
//                   style={{ fontSize: '15px', fontFamily: 'Inter, sans-serif' }}
//                 >
//                   {highlight.content}
//                 </p>
//               </div>
//               <img
//                 src={highlight.image}
//                 alt={highlight.heading}
//                 className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover transition-transform duration-500 hover:scale-110"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Location;



import React from 'react';

const testimonials = [
  {
    img: 'assets/img/testimonial-1.jpg',
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    img: 'assets/img/testimonial-2.jpg',
    name: 'Sara Wilsson',
    role: 'Designer',
    quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    img: 'assets/img/testimonial-3.jpg',
    name: 'Jena Karlis',
    role: 'Store Owner',
    quote: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
  },
  {
    img: 'assets/img/testimonial-4.jpg',
    name: 'Matt Brandon',
    role: 'Freelancer',
    quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
  },
  {
    img: 'assets/img/testimonial-5.jpg',
    name: 'John Larson',
    role: 'Entrepreneur',
    quote: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
  },
];

const Gallery = () => {
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Gallery </h3>
        </header>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 p-4 snap-start"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img
                    src={testimonial.img}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                    alt={testimonial.name}
                  />
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <h4 className="text-sm text-gray-600 mb-4">{testimonial.role}</h4>
                  <p className="text-gray-700">
                    <span className="inline-block w-6 h-6 mb-2 text-gray-500">“</span>
                    {testimonial.quote}
                    <span className="inline-block w-6 h-6 mb-2 text-gray-500">”</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={scrollLeft}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              &lt;
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
