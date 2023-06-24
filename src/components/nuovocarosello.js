import React, { useState, useEffect, useRef } from 'react';
import './nuovocarosello.css'
import {motion} from 'framer-motion';
import image1 from '../assets/carosello-home-1.jpg';
import image2 from '../assets/carosello-home.jpg';
import image3 from '../assets/carosello-home-3.jpg';
import image4 from '../assets/carosello-home-4.jpg';
import image5 from '../assets/carosello-home-5.jpg';
import image6 from '../assets/carosello-home-6.jpg';

const images = [image2,
    image4,
    image1,
    image3,
    image5,
    image6,];

function Nuovocarosello() {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
      }, []);


    return(
        <div className='carosello-contenitore'>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                <motion.div 
                className='inner'
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}>
                    {images.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image} alt=""/>
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Nuovocarosello