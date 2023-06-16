import React, { useRef, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import Heroone from "./Heroone";
import Herotwo from "./Herotwo";
import Footer from "./Footer";
import Button from "./Button";
import CookieBanner from "./CookieBanner";
import { posthog } from 'posthog-js';
import video from '../assets/man_-_62550 (1080p).mp4';
import CarouselHome from "./CarouselHome";

const homeContainerStyle = {
  width: '100%',
  height: '120vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
};

function Home() {
  const homeRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
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

      <div  style={homeContainerStyle}>
        <video onLoadedData={handleVideoLoad} className={`background-video ${isVideoLoaded ? "loaded" : ""}`} src={video} autoPlay loop muted/>
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
      <CarouselHome></CarouselHome>

      <Footer></Footer>
    </div>
  );
}

export default Home;
