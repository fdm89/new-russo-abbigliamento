import React, { useRef, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from '../assets/10.jpg';
import './Home.css';
import Heroone from "./Heroone";
import Herotwo from "./Herotwo";
import Footer from "./Footer";
import Button from "./Button";
import CookieBanner from "./CookieBanner";
import { posthog } from 'posthog-js';
import CarouselHome from "./CarouselHome";




const homeContainerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
};

function Home() {


  const homeRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="home-container" ref={homeRef}>
      <Helmet>
        <title>Home - Russo Abbigliamento</title>
        <meta name="description" content="Vieni a scoprire la nostra nuova collezione primavera estate 2023" />
        <meta name="keywords" content="abbigliamento, collezione, primavera, estate, 2023, abbigliamento uomo, maglieria, camiceria, pantaloni, capispalla, Made in Italy, sartoriale, abiti" />
      </Helmet>
      
      <div style={homeContainerStyle} alt="Background image description">
      
      <a href="#banner">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="double-arrow-icon" />
        </a>
        {posthog.has_opted_out_capturing() 
      ||posthog.has_opted_in_capturing() 
        ? null 
        :<CookieBanner/>}
      </div>
  <div className="banner" id="banner">
        <p>Outerweare</p>
        <h1>KEEP ON MOVING</h1>
        <p>Vieni a scoprire la nostra nuova collezione primavera estate 2023</p>
        <Button/>
      </div>
      <Heroone />
      <Herotwo />
      
      <h1 className="carousel-header">Collezione primavera estate 2023</h1>
      <CarouselHome/> 
      
    
      <Footer></Footer>
    </div>
  );
}

export default Home;
