import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { motion } from 'framer-motion';
import image1 from '../assets/carosello-home-1.jpg';
import image2 from '../assets/carosello-home.jpg';
import image3 from '../assets/carosello-home-3.jpg';
import image4 from '../assets/carosello-home-4.jpg';
import image5 from '../assets/carosello-home-5.jpg';
import image6 from '../assets/carosello-home-6.jpg';


const images = [
  
  image2,
  image4,
  image1,
  image3,
  image5,
  image6,
  
];

function CarouselHome() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const updateWidth = () => {
      setWidth(carouselElement?.scrollWidth - carouselElement?.offsetWidth);
    };
    updateWidth();

    const handleScroll = () => {
      // Handle scroll event if needed
    };

    carouselElement.addEventListener('scroll', handleScroll);

    return () => {
      carouselElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWheel = (event) => {
    if (event.deltaX !== 0) {
      carouselRef.current.scrollLeft += event.deltaX;
    }
  };

  return (
    <div className="carousel-container" onWheel={handleWheel}>
      <motion.div ref={carouselRef} className="carousel">
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="nuova collezione" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CarouselHome;
