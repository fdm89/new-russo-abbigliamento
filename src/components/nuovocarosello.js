import React, { useState, useEffect, useRef } from 'react';
import './nuovocarosello.css'
import {motion} from 'framer-motion';
import image1 from '../assets/abito-beige-1.jpg';
import image2 from '../assets/abito-beige-2.jpg';
import image3 from '../assets/abito-blu-1.jpg';
import image4 from '../assets/abito-blu-2.jpg';

const images = [image1, image2, image3, image4];

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