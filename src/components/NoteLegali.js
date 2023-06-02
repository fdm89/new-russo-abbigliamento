import React, { useEffect } from 'react';
import './NoteLegali.css';
import Footer from './Footer';



 


function NoteLegali() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, [])
  return (
    <div className='container' >
      
      <h1 className='title'>Note legali</h1>
      <h2 className='subtitle'>Privacy</h2>
      <div className='text'>
      <p>R.G.S. Group SRL - con sede legale ed amministrativa in Via Vicoletto Pepi 7, 84016 Pagani (SA) , ideatore e promotore delle attività disponibili nel sito www.russoabbigliamento.com, si riserva il diritto di utilizzare i dati personali, forniti volontariamente dagli Utenti, nel rispetto delle vigenti normative (artt 13 e ss. D. Lgs. 196/2003).</p>
      <p>
Si invitano pertanto gli Utenti a visitare periodicamente questa sezione per aggiornarsi su variazioni relative a modifiche della legislazione attuale.
R.G.S. Group SRL   garantisce agli utenti che il trattamento dei dati personali sarà riservato ad utilizzi strettamente connessi e correlati alla prestazione dei propri servizi, alla facilitazione della gestione del sito e dell’evasione degli ordini.</p>
<p>
I dati volontariamente forniti dagli Utenti, non saranno in nessun caso comunicati o diffusi a terzi.
In caso di pagamento con carta di credito, le informazioni fondamentali per l’esecuzione della transazione (numero della carta di credito/debito, data di scadenza, codice di sicurezza) saranno inviate all’ente responsabile del trattamento (nella fattispecie Paypal), o eventualmente a società responsabili del controllo frodi, tramite protocollo crittografato, senza che terzi possano, in alcun modo, avervi accesso. Queste informazioni non saranno comunque mai visualizzate ne memorizzate da parte del Venditore (R.G.S. Group SRL).</p>
<p>
R.G.S. Group SRL adotta misure di sicurezza adeguate al fine di ridurre al minimo i rischi di distruzione o di perdita dei dati, di accesso non autorizzato o di trattamento non consentito o non conforme alle finalità di raccolta indicate nella nostra Privacy Policy.</p>
<p>
Tuttavia R.G.S. Group SRL  non può garantire ai propri utenti che le misure adottate per la sicurezza del sito e della trasmissione dei dati e delle informazioni sul sito siano in grado di limitare o escludere qualsiasi rischio di accesso non consentito o di dispersione dei dati da parte di dispositivi di pertinenza dell’utente.
</p>
<p> Per tale motivo, suggeriamo agli utenti del sito di assicurarsi che il proprio computer sia dotato di software adeguati per la protezione della trasmissione in rete di dati (ad esempio antivirus aggiornati) e che il proprio Internet provider abbia adottato misure idonee per la sicurezza della trasmissione di dati in rete.

</p>
<p>R.G.S. Group SRL informa che gli Utenti possono esercitare i diritti di cui all'articolo 7 D. Lgs. 196/2003, qui di seguito riportato nella sua parte essenziale. Gli Utenti hanno il diritto di richiedere a  R.G.S. Group SRL le seguenti informazioni:</p>
<p>
    <ul>
        <li>1.     la conferma dell'esistenza o meno di dati personali che lo riguardano</li>
        <li>2.     la chiara comunicazione dei dati e della loro provenienza</li>
        <li>3.     il motivo e la finalità della loro esistenza e del loro utilizzo</li>
    </ul>
La richiesta delle informazioni sopra elencate può essere rinnovata con un intervallo minimo di 90 giorni, fatta eccezione per quei casi ove sussista giusta causa: cancellazione o modifica di tali dati a causa di violazione della legge; cancellazione di quei dati che non sono utilizzabili per i motivi per i quali sono stati raccolti</p>
      </div>

      <Footer></Footer>
    </div>
    
    
  );
}

export default NoteLegali;
