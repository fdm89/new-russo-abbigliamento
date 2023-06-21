import React from 'react';
import { Parallax } from 'react-parallax';
import { useMediaQuery } from 'react-responsive';
import nuovaImmagine from '../assets/orizzontale-home-hd.jpg';
import backgroundImageMobile from '../assets/manichino.jpg';
import './Herotwo.css';

function Herotwo() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const background = isMobile ? backgroundImageMobile : nuovaImmagine;

  return (
    <Parallax className="image" blur={0} bgImage={background} strength={200} bgImageStyle={{minHeight: "100vh"}}>
      <div className="content">
        <span className="img-txt">Collezione primavera estate</span>
      </div>
    </Parallax>
  );
}

export default Herotwo;
