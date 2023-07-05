import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import './Collection.css';
import SwiperCarouselAbiti from './SwiperCarouselAbiti';
import SwiperCarouselOutfits from './SwiperCarouselOutfits';
import SwiperCarouselMix from './SwiperCarouselMix';

function Collection() {
    useEffect(() => {
        window.scrollTo({ top: 0, left:0, behavior: "instant" });
      }, [])
    
    return <div className="container">
        <Helmet>
                <title>Collezione - Russo Abbigliamento</title>
                <meta name="description" content="Scopri la nostra collezione di abiti, camicie e maglieria." />
                <meta name="keywords" content="collezione, abiti, camicie, maglieria, abbigliamento uomo, maglieria, camiceria, pantaloni, capispalla, Made in Italy, sartoriale, abiti" />
            </Helmet>
        <h1>Collection</h1>
        <h2>Outfits</h2>
        <SwiperCarouselOutfits/>
        <h2>Abiti</h2>
        <SwiperCarouselAbiti/>
        <br></br>
        <SwiperCarouselMix/>
     
    </div>
    
}

export default Collection;