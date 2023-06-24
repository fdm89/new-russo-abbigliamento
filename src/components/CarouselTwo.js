import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { motion } from 'framer-motion';
import image1 from '../assets/outfit-1.jpg';
import image2 from '../assets/outfit-2.jpg';
import image3 from '../assets/outfit-3.jpg';
import image4 from '../assets/outfit-4.jpg';
import image5 from '../assets/outfit-5.jpg';
import image6 from '../assets/outfit-6.jpg';


const images = [image1, image2, image3, image4, image5, image6];

function CarouselTwo() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);


 
  

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const handleWheel = (event) => {
    if (event.deltaX !== 0) {
      carousel.current.scrollLeft += event.deltaX;
    }
  };


  return (
    <div className="carousel-container" onWheel={handleWheel}>
      <motion.div ref={carousel} className="carousel">
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
              <img 
               src={image}
               alt="nuova collezione"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CarouselTwo;





