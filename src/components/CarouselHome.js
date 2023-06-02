import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { motion } from 'framer-motion';
import image1 from '../assets/russo-1328422806574-41.jpg';
import image2 from '../assets/russo-1328422806574-43.jpg';
import image3 from '../assets/russo-2403403555531-23.jpg';
import image4 from '../assets/russo-2803540072784-28.jpg';
import image5 from '../assets/russo-6813003337042-23.jpg';
import image6 from '../assets/russo-6813003337042-24.jpg';
import image7 from '../assets/russo-6813003337042-25.jpg';
import image8 from '../assets/russo-2032010636342-24.jpg';
import image9 from '../assets/russo-2032010636342-35.jpg';
import image10 from '../assets/russo-5558586822004.jpg';
import image11 from '../assets/russo-6766051011740-21.jpg';
import image12 from '../assets/russo-6766051011740-23.jpg';
import image13 from '../assets/russo-6813003337042-24.jpg';


const images = [image8, image9, image10, image11, image12, image13, image1, image2, image3, image4, image5, image6, image7];

function CarouselHome() {
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

export default CarouselHome;





