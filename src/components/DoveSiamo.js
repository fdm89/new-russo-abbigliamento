import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './DoveSiamo.css';
import Footer from './Footer';



 


function DoveSiamo() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, [])
  return (
    <div className='container' >
        <Helmet>
                <title>Dove Siamo - Russo Abbigliamento</title>
                <meta name="description" content="Scopri dove si trovano i nostri negozi. Abbiamo punti vendita in diverse città." />
                <meta name="keywords" content="negozi, punti vendita, Russo Abbigliamento, indirizzi, abbigliamento uomo, maglieria, camiceria, pantaloni, capispalla, Made in Italy, sartoriale, abiti " />
            </Helmet>
            
      <h2>I nostri store</h2>
      
         <div className='list-container'>
         <ul className='lista-negozi'>
          <li><a rel='canonical' target="blank" href={encodeURI('https://www.google.com/maps/dir//Corso+Umberto+I,+233,+Corso+Umberto+I,+161,+84013+Cava+de+Tirreni+SA/@40.6997574,14.638299,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x133bc182a77979ad:0x100519f280c933ef!2m2!1d14.7083389!2d40.6997786?entry=ttu')}>
          <strong>Cava De' Tirreni</strong> (SA) in Corso Umberto I, 161
</a></li>
          <li><a rel='canonical' target="blank" href={encodeURI('https://www.google.com/maps/dir//Russo+Abbigliamento,+Corso+Umberto+I,+84013+Cava+de+Tirreni,+SA/@40.6997493,14.6259378,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x133bc182a77979ad:0x100519f280c933ef!2m2!1d14.7083389!2d40.6997786?entry=ttu')}><strong>Cava De' Tirreni</strong> (SA) in Corso Umberto I, 233</a></li>
          <li><a rel='canonical' target="blank" href={encodeURI('https://www.google.com/maps/dir//Via+Giuseppe+Mazzini,+65%2F67,+84091+Battipaglia+SA/@40.6084827,14.9017039,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x133be0886cb84855:0x5bba3a1f5150da25!2m2!1d14.984105!2d40.608512?entry=ttu')}> <strong>Battipaglia</strong> (SA) in Via Giuseppe Mazzini, 65/67</a></li>
          <li><a rel='canonical' target="blank" href={encodeURI('https://www.google.com/maps/dir//Russo+Abbigliamento,+Corso+Armando+Diaz,+148,+84085+Mercato+San+Severino+SA/@40.7844905,14.673126,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x133bc5dedd871df9:0x72c76873307b6863!2m2!1d14.7555271!2d40.7845198?entry=ttu')}> <strong>Mercato San Severino</strong> (SA) in Corso Armando Diaz, 148</a> </li>
          <li><a rel='canonical' target="blank" href={encodeURI('https://www.google.com/maps/dir//Russo+Abbigliamento,+Via+Attilio+Barbarulo,+19,+84014+Nocera+inferiore+SA/@40.7422132,14.5571638,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x133bbf4b1476b40b:0xde26dc0a637090a7!2m2!1d14.6396158!2d40.7422403?entry=ttu')}> <strong>Nocera Inferiore</strong> (SA) in Via Barbarulo, 19</a></li>
          <li><a rel='canonical' target="blank" href={encodeURI('https://www.google.com/maps/place/Russo+Abbigliamento/@40.4344034,15.546895,17z/data=!3m1!4b1!4m6!3m5!1s0x13393b52eec74d0b:0x7f674048b8db3f43!8m2!3d40.4344034!4d15.5494699!16s%2Fg%2F11qp1z6_6r?entry=ttu')}> <strong>Atena Lucana</strong> (SA) in Via Pantoni - Presso C/C Diano</a></li>
          <li><a rel='canonical' target="blank" href={encodeURI('https://www.google.com/maps/place/Promenade+du+Port/@41.1331702,9.5354699,17z/data=!3m1!4b1!4m6!3m5!1s0x12d940af6d8d2ab1:0xf61008165e37051a!8m2!3d41.1331702!4d9.5380448!16s%2Fg%2F11c1ndxjrv?entry=ttu')}> <strong>Porto Cervo</strong> (SS) - Promenade Du Port, in via Aga Khan 1</a></li>

         </ul>
         </div>
         

      <Footer></Footer>
    </div>
    
    
  );
}

export default DoveSiamo;



