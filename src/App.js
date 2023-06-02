import { useState, useEffect, } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import { PulseLoader } from "react-spinners";
import './App.css';
import NoteLegali from "./components/NoteLegali";
import DoveSiamo from "./components/DoveSiamo";




function App() {
  const [loading, setLoading] = useState(false);
    useEffect(() =>{
         setLoading(true)
         setTimeout(()=>{
           setLoading(false)
         }, 2000)
    }, [])

  return (
    <div className="App">
      {loading ? (
        
          <div className="loader">
            <PulseLoader color={'black'}
        loading={loading}
        size={20}
        />
          </div>
        
      ) : (
        <Router> 
          <Navbar />
          
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dovesiamo" element={<DoveSiamo />} />
            <Route path="/notelegali" element={<NoteLegali />} />
            <Route path="/*" element={<Navigate to="/home" replace={true} />} />
          </Routes>
          
        </Router>
      )}
    </div>
  );
}

export default App;
