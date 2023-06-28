import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';


// template_dc4sstj
// service_ktxj0xq
// RUQMrel50iD53TH2T

function Contact() {



  
    useEffect(() => {
       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, [])

      const formRef = useRef();
      const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
      });

      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({...form, [name] : value})
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
          'service_ktxj0xq', 
          'template_dc4sstj',
          {
            from_name: form.email,
            to_name: 'Russo abbigliamento',
            from_email: form.email,
            to_email: 'info@russoabbigliamento.com',
            message: form.message,
          },
          'RUQMrel50iD53TH2T'
          )
          .then(() => {
            setLoading(false);
            alert('Thank you for your message!');

            setForm({
              name: '',
              email: '',
              message: '',
            })
          }, (error) =>{
            loading(false)
            console.log(error)
            alert('Something went wrong')

          })
      }



  
    
    return <div className="container">
      <Helmet>
          <title>Contattaci | Russo Abbigliamento</title>
          <meta name="description" content="Pagina di contatto di Russo Abbigliamento." />
          <meta name="keywords" content="abbigliamento uomo, maglieria, camiceria, pantaloni, capispalla, Made in Italy, sartoriale, abiti" />
        </Helmet>
        <h1>Contattaci</h1>
       
       <div className="form-container">
        <div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="formbold-mb-5">
        <label htmlFor="name" className="formbold-form-label"> Nome </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label htmlFor="email" className="formbold-form-label"> Indirizzo Email </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="inserisci la tua email"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label htmlFor="message" className="formbold-form-label"> Messaggio </label>
        <textarea
          rows="7"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Scrivi il tuo messaggio"
          className="formbold-form-input"
        ></textarea>
      </div>

      <div>
        <button
         type='submit' 
         className="formbold-btn">{loading ? "Inviando..." : "Invia"}</button>
      </div>
    </form>
   
  </div>
</div>
        </div>
        
        
    </div>
    
}

export default Contact;