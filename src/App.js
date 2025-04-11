import React, { useState } from 'react';
import './style.css';

const App = () => {
  const hairTotal = 3;
  const dressTotal = 4;

  const [hairIndex, setHairIndex] = useState(1); 
  const [dressIndex, setDressIndex] = useState(1); 
  const [dressChanged, setDressChanged] = useState(false); 
  const [hairChanged, setHairChanged] = useState(false); 
  
  const handleNextHair = () => {
    setHairIndex((prev) => {
      const newHairIndex = (prev % hairTotal) + 1;
      setHairChanged(newHairIndex !== 1); 
      return newHairIndex;
    });
  };

  const handleBackHair = () => {
    setHairIndex((prev) => {
      const newHairIndex = prev === 1 ? hairTotal : prev - 1;
      setHairChanged(newHairIndex !== 1); 
      return newHairIndex;
    });
  };

  const handleNextDress = () => {
    setDressIndex((prev) => {
      const newDressIndex = (prev % dressTotal) + 1;
      setDressChanged(true); 
      return newDressIndex;
    });
  };

  const handleBackDress = () => {
    setDressIndex((prev) => {
      const newDressIndex = prev === 1 ? dressTotal : prev - 1;
      setDressChanged(true); 
      return newDressIndex;
    });
  };

  const randomize = () => {
    setHairIndex(Math.floor(Math.random() * hairTotal) + 1);
    setDressIndex(Math.floor(Math.random() * dressTotal) + 1);
    setHairChanged(true); 
    setDressChanged(true); 
  };

  return (
    <div id="container">
      {/* Background layer */}
      <div id="background" />

      {/* Character layers */}
      <div id={dressChanged ? 'body-hidden' : 'body'} />
      
      {/* Hair part */}
      <div className={`avatar-part ${hairChanged ? `hair${hairIndex}` : 'hair1'}`} />
      
      {/* Dress part */}
      <div className={`avatar-part dress${dressIndex}`} />

      {/* Control buttons */}
      <div id="controls">
        {/* Hair controls */}
        <div id="hair-controls">
          <button className="arrow-btn back-btn" onClick={handleBackHair} style={{ color: '#ffffff' }}>&#10094;</button>
          <button className="arrow-btn next-btn" onClick={handleNextHair} style={{ color: '#ffffff' }}>&#10095;</button>
        </div>

        {/* Dress controls */}
        <div id="dress-controls">
          <button className="arrow-btn back-btn" onClick={handleBackDress} style={{ color: '#ffffff' }}>&#10094;</button>
          <button className="arrow-btn next-btn" onClick={handleNextDress} style={{ color: '#ffffff' }}>&#10095;</button>
        </div>

        {/* Randomize button */}
        <button id="randomize" onClick={randomize}>Random</button>
      </div>
    </div>
  );
};

export default App;