import React, { useRef, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import backgroundImage1 from '../assets/russo-1328422806574-43.jpg';
import backgroundImage2 from '../assets/russo-2803540072784-28.jpg';
import backgroundImage3 from '../assets/russo-1328422806574-41.jpg';
import './Home.css';
import Heroone from "./Heroone";
import Herotwo from "./Herotwo";
import Footer from "./Footer";
import Button from "./Button";
import CookieBanner from "./CookieBanner";
import { posthog } from 'posthog-js';

const homeContainerStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
  transition: 'background-image 0.7s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '3rem',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

const images = [
  {
    backgroundImage: backgroundImage1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    backgroundImage: backgroundImage2,
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    backgroundImage: backgroundImage3,
    text: "Nullam non nisl id dolor efficitur volutpat.",
  },
];
const imageChangeInterval = 5000; // Change image every 5 seconds

function Home() {
  const homeRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    homeRef.current.style.backgroundImage = `url(${images[currentImageIndex].backgroundImage})`;
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

      <div
        style={{ ...homeContainerStyle, backgroundImage: `url(${images[currentImageIndex].backgroundImage})` }}
        onLoad={handleImageLoad}
        alt="Background image description"
      >
        {images[currentImageIndex].text}
      </div>

      <div className="banner" id="banner">
        <p>Outerwear</p>
        <h1>KEEP ON MOVING</h1>
        <p>Vieni a scoprire la nostra nuova collezione primavera estate 2023</p>
        <Button />
      </div>
      <Heroone />
      <Herotwo />

      <h1 className="carousel-header">Collezione primavera estate 2023</h1>
      {/* Add your carousel component here */}

      <Footer></Footer>
    </div>
  );
}

export default Home;
