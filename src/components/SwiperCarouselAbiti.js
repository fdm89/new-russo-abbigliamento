import React, { } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../assets/abito1.jpg';
import image2 from '../assets/abito2.jpg';
import image3 from '../assets/abito3.jpg';
import image4 from '../assets/abito4.jpg';






// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

import './SwiperCarousel.css'



function SwiperCarouselAbiti() {
  return (
    <>
    
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='foto' src={image1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img className='foto' src={image2} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img className='foto' src={image3} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img className='foto' src={image4} alt="Slide 1" /></SwiperSlide>


        
      </Swiper>
      
    </>
  );
}

export default SwiperCarouselAbiti
