import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { motion } from 'framer-motion';
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


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

function CarouselThree() {
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

export default CarouselThree;





