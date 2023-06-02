import React from 'react';
import { Parallax } from 'react-parallax';
import { useMediaQuery } from 'react-responsive';
import backgroundImage from '../assets/8.jpg';
import backgroundImageMobile from '../assets/image05.jpeg';
import './Herotwo.css';

function Herotwo() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const background = isMobile ? backgroundImageMobile : backgroundImage;

  return (
    <Parallax className="image" blur={0} bgImage={background} strength={800} bgImageStyle={{minHeight: "100vh"}}>
      <div className="content">
        <span className="img-txt">Collezione primavera estate</span>
      </div>
    </Parallax>
  );
}

export default Herotwo;
