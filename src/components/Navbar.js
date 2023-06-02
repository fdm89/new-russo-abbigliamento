import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <nav className={`navbar ${scroll ? 'navbar--scroll' : ''}`}>
      <Link to="/">
      <img className='logo-russo' src={logo} alt='logo'></img>
      </Link>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className={`navbar-close ${scroll ? 'navbar-close--scroll' : ''}`} onClick={toggleMenu}>
        </button>
        <Link rel='canonical' to="/" className="navbar-item underline-link" onClick={toggleMenu}>Home</Link>
        <Link rel="canonical" to="/about" className="navbar-item underline-link" onClick={toggleMenu}>About</Link>
        <Link rel="canonical" to="/collection" className="navbar-item underline-link" onClick={toggleMenu}>Collection</Link>
        <Link rel="canonical" to="/dovesiamo" className="navbar-item underline-link" onClick={toggleMenu}>Dove Siamo</Link>
        <Link rel="canonical" to="/contact" className="navbar-item underline-link" onClick={toggleMenu}>Contact</Link>
      </div>
      <button className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className={`navbar-span ${scroll ? 'navbar-span--scroll' : ''}`}></span>
        <span className={`navbar-span ${scroll ? 'navbar-span--scroll' : ''}`}></span>
        <span className={`navbar-span ${scroll ? 'navbar-span--scroll' : ''}`}></span>
      </button>
    </nav>
  );
}

export default Navbar;