import { Parallax,  } from 'react-parallax';
import backgroundImage from '../assets/giacche.jpg';
import nuovaImmagine from '../assets/orizzontale-home-hd.jpg';
import './Heroone.css';

function Heroone() {
  return (
    <Parallax className='image' blur={0} bgImage={nuovaImmagine} strength={200} bgImageStyle={{minHeight:"100vh"}}>
     
      <div className='content'>
        <span className="img-txt">Collezione primavera estate</span>
      </div>
     
    </Parallax>
  );
};

export default Heroone;