import React, { useRef, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import backgroundImage1 from '../assets/home1.jpg';
import backgroundImage2 from '../assets/home2.jpg';
import backgroundImage3 from '../assets/home3.jpg';
import './Home.css';
import Heroone from "./Heroone";
import Herotwo from "./Herotwo";
import Herothree from "./Herothree";
import Footer from "./Footer";
import Button from "./Button";
import CookieBanner from "./CookieBanner";
import { posthog } from 'posthog-js';
import CarouselHome from "./CarouselHome";
import Carousel from "./Carousel";

const homeContainerStyle = {
  width: '100%',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const images = [
  {
    url: backgroundImage1
    
  },
  {
    url: backgroundImage2
    
  },
  {
    url: backgroundImage3
    
  },
];
const imageChangeInterval = 5000; // Change image every 5 seconds


function Home() {
  const homeRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const imageChangeTimer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, imageChangeInterval);

    return () => {
      clearInterval(imageChangeTimer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="home-container" ref={homeRef}>
      <Helmet>
        <title>Home - Russo Abbigliamento</title>
        <meta name="description" content="Vieni a scoprire la nostra nuova collezione primavera estate 2023" />
        <meta
          name="keywords"
          content="abbigliamento, collezione, primavera, estate, 2023, abbigliamento uomo, maglieria, camiceria, pantaloni, capispalla, Made in Italy, sartoriale, abiti"
        />
      </Helmet>

      <a href="#banner">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="double-arrow-icon" />
      </a>
      {posthog.has_opted_out_capturing() || posthog.has_opted_in_capturing() ? null : <CookieBanner />}

      <div className="background-image" style={homeContainerStyle}>
      <img
  className={`test ${isImageLoaded ? "loaded" : ""}`}
  src={images[currentImageIndex].url}
  alt="Back"
  onLoad={handleImageLoad}
/>
      </div>

      <div className="banner" id="banner">
        <p>Outerwear</p>
        <h1>KEEP ON MOVING</h1>
        <p>Vieni a scoprire la nostra nuova collezione primavera estate 2023</p>
        <Button />
      </div>
      <Heroone />
      <Herotwo />
      <Herothree />

      <h1 className="carousel-header">Collezione primavera estate 2023</h1>
      <CarouselHome/>
      <Carousel />

      <Footer></Footer>
    </div>
  );
}

export default Home;