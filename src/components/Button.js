import React from 'react';

import './Button.css';
import { Link } from 'react-router-dom';

function Button() {
  

  return (
    <Link rel='canonical' to="/collection" className="button">VAI ALLA COLLEZIONE</Link>
  );
}

export default Button;
