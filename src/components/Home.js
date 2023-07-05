import React, { useRef, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import Heroone from "./Heroone";
import Herotwo from "./Herotwo";
import Herothree from "./Herothree";
import Button from "./Button";
import CookieBanner from "./CookieBanner";
import { posthog } from 'posthog-js';
import video from '../assets/RUSSOVIDEO(1).mp4';
import Video from './Video'
import SwiperCarouselHome from "./SwiperCarouselHome";


const homeContainerStyle = {
  width: '100%',
  minHeight: '120vh',
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
        
      

<Video onLoadedData={handleVideoLoad}
className={`background-video ${isVideoLoaded ? "loaded" : ""}`}  
video={video} />
        
      </div>

      <div className="banner" id="banner">
        <h1>KEEP ON MOVING</h1>
        <p>Vieni a scoprire la nostra nuova collezione s/s 2023</p>
        <Button />
      </div>
      <Heroone />
      <Herotwo />
      <Herothree />

      <h1 className="carousel-header">Collezione s/s 2023</h1>


      <SwiperCarouselHome/>

      
    </div>
  );
}

export default Home;
