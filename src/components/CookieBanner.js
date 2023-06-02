import React from 'react';
import { useState } from 'react';
import { posthog } from 'posthog-js';
import './CookieBanner.css'

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const acceptCookies = () => { 
    posthog.opt_in_capturing();
    setShowBanner(false);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShowBanner(false);
  };
  

  return (
    <div>
     {showBanner && (
        <div className="cookie-banner">
          <p>Questo sito utilizza i cookie. Accetta per continuare.</p>
          <button className='cookie-banner-button' onClick={acceptCookies} >Accetta</button>
          <button className='cookie-banner-button' onClick={declineCookies} >Rifiuta</button>
        </div>
     )}
    </div>
  );
}

export default CookieBanner;
