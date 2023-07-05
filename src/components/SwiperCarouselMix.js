import React, { } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../assets/ultimocarosello1.jpg';
import image2 from '../assets/ultimo2.jpg';
import image3 from '../assets/ultimo3.jpg';
import image4 from '../assets/ultimo4.jpg';
import image5 from '../assets/ultimo5.jpg';
import image6 from '../assets/ultimo6.jpg';
import image7 from '../assets/ultimo7.jpg';
import image8 from '../assets/ultimo10.jpg';
import image9 from '../assets/ultimo11.jpg';
import image10 from '../assets/ultimo16.jpg';
import image11 from '../assets/ultimo17.jpg';
import image12 from '../assets/ultimo23.jpg';






// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

import './SwiperCarousel.css'



function SwiperCarouselMix() {
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
        <SwiperSlide><img className='foto' src={image7} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img className='foto' src={image8} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img className='foto' src={image9} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img className='foto' src={image10} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img className='foto' src={image11} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img className='foto' src={image12} alt="Slide 1" /></SwiperSlide>

        
      </Swiper>
      
    </>
  );
}

export default SwiperCarouselMix
