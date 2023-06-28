import React, { useEffect, } from 'react';
import { Helmet } from 'react-helmet';
import './About.css';
import image1 from '../assets/logo.png';



 


function About() {
    useEffect(() => {
       window.scrollTo({ top: 0, behavior: "instant" });
      }, [])
  return (
    <div className="about-container">
      <Helmet>
                <title>Chi Siamo - Russo abbigliamento</title>
                <meta name="description" content="Russo abbigliamento, un'eccellenza nell'abbigliamento maschile dal cuore italiano. Dagli anni '80, siamo orgogliosi di offrire prodotti di alta qualità, caratterizzati da un'attenzione meticolosa per i dettagli e dalla ricerca dei tessuti." />
                <meta name="keywords" content="abbigliamento uomo, maglieria, camiceria, pantaloni, capispalla, Made in Italy, sartoriale, abiti" />
            </Helmet>
        
      <header>
        <h1>About Us</h1>
        <p><strong>Russo abbigliamento</strong>, un'eccellenza nell'abbigliamento maschile dal cuore italiano. Dagli anni '80, siamo orgogliosi di offrire prodotti di alta qualità, caratterizzati da un'attenzione meticolosa per i dettagli e dalla ricerca dei tessuti.</p>
        <p>Ci dedichiamo con passione alla produzione di <strong>maglieria, camiceria, pantaloni e capispalla</strong> realizzati secondo la tradizione partenopea utilizzando tessuti di pregio e ricercati. Ogni capo che realizziamo è una testimonianza dell'arte <strong>sartoriale</strong>, confezionato con cura e precisione per garantire un'eleganza senza tempo e una vestibilità confortevole.</p>
        <p>Siamo profondamente orgogliosi di promuovere il <strong>"Made in Italy"</strong> e di preservare la <strong>tradizione sartoriale</strong> che contraddistingue il nostro Belpaese. Ogni capo viene realizzato con passione e dedizione per soddisfare le esigenze dell'uomo contemporaneo che cerca un'eleganza senza tempo.</p>
        <p>Negli anni, abbiamo ampliato la nostra presenza con diversi punti vendita situati strategicamente in Campania nelle città  di <strong>Cava de' Tirreni, Nocera Inferiore, Battipaglia, Mercato San Severino ed Atena Lucana</strong> fino alle ultime aperture in <strong>Sardegna in Costa Smeralda precisamente Golfo Aranci e Porto Cervo nella splendida cornice della Promenade du Port</strong>. Questa rete di punti vendita ci consente di essere vicini ai nostri clienti, offrendo un servizio personalizzato e un'esperienza di acquisto unica.</p>
         </header>
      <section className="photo-gallery">
        <img src={image1} alt="team member 1" />
      </section>
      

      
      
      
    </div>
    
  );
}

export default About;
