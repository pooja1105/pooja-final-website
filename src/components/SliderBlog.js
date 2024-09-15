// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import { Navigation, Pagination } from 'swiper';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const SliderBlog = () => {
//   // Sample data for demonstration
//   const data = [
//     {
//       id: 1,
//       thumbnail_image: 'image1.jpg',
//       asset_type: 'Type 1',
//       asset_title: 'Title 1',
//       clientName: 'Client 1',
//       client_name: 'Client Name 1',
//     },
//     {
//       id: 2,
//       thumbnail_image: 'image2.jpg',
//       asset_type: 'Type 2',
//       asset_title: 'Title 2',
//       clientName: 'Client 2',
//       client_name: 'Client Name 2',
//     },
//     // Add more sample items as needed
//   ];

//   return (
//     <div className="relative w-full mt-5 overflow-hidden">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={20}
//         slidesPerView={1}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         pagination={{
//           el: '.swiper-pagination',
//           clickable: true,
//         }}
//         className="mySwiper"
//       >
//         {data.map((item, index) => (
//           <SwiperSlide key={item.id}>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div
//                 className="h-40 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(http://localhost:5000/uploads/${item.thumbnail_image})`,
//                 }}
//               ></div>
//               <div className="p-4">
//                 <p className="text-gray-600 font-bold">{item.asset_type}</p>
//                 <h3 className="text-lg sm:text-xl font-semibold">{item.asset_title}</h3>
//                 <p className="text-blue-500">{item.clientName}</p>
//               </div>
//               <div className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-200">
//                 <p className="font-bold">{item.client_name}</p>
//                 <div className="flex space-x-2">
//                   <i className="fas fa-arrow-down text-green-500"></i>
//                   <i className="fas fa-bookmark text-green-500"></i>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="swiper-button-prev absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
//         <i className="fas fa-chevron-left"></i>
//       </div>
//       <div className="swiper-button-next absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
//         <i className="fas fa-chevron-right"></i>
//       </div>
//       <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2"></div>
//     </div>
//   );
// };

// export default SliderBlog;
