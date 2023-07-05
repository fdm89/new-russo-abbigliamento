import React, { } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../assets/outfit-1.jpg';
import image2 from '../assets/outfit-2.jpg';
import image3 from '../assets/outfit-3.jpg';
import image4 from '../assets/outfit-4.jpg';
import image5 from '../assets/outfit-5.jpg';
import image6 from '../assets/outfit-6.jpg';






// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

import './SwiperCarousel.css'



function SwiperCarouselOutfits() {
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
        <SwiperSlide><img className='foto' src={image5} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img className='foto' src={image6} alt="Slide 1" /></SwiperSlide>

        
      </Swiper>
      
    </>
  );
}

export default SwiperCarouselOutfits
