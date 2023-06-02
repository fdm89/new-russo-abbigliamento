import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    
    return <div className="footer">
    <div className="social-icons">
      <a  href="https://www.facebook.com/russo.abbigliamento1/"><FontAwesomeIcon icon={faFacebook} /></a>
      <a  href="https://www.instagram.com/russoabbigliamento/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
    <p>
       R.G.S. Group SRL P.IVA: 04884990658
    </p>
    <Link to="/NoteLegali" className='note-legali'>Note Legali</Link>
  
        
    </div>
    
}

export default Footer;