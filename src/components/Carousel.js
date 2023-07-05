import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { motion } from 'framer-motion';
import image1 from '../assets/abito1.jpg';
import image2 from '../assets/abito2.jpg';
import image3 from '../assets/abito3.jpg';
import image4 from '../assets/abito4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';





const images = [image1, image2, image3, image4];

function Carousel() {
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
    
    <div>
      <button
        className="carousel-button"
        onClick={() => {
          carousel.current.scrollLeft -= 100; // Modifica la quantità di scroll come preferisci
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="carousel-button"
        onClick={() => {
          carousel.current.scrollLeft += 200; // Modifica la quantità di scroll come preferisci
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
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
    </div>
  );
}

export default Carousel;









