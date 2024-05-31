// Hero.js
import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content"> 
        <h1>India's best digital marketing happens here.</h1>
        <p>MagicMedia delivers growth outcomes through high-quality digital marketing services to enterprise companies, startups, and VC firms.</p>
        <div className="hero-buttons">
          <button>Explore Services</button>
          <button className="contact-button">Contact Us</button> 
        </div>
      </div>
      <div className="hero-image">
        <img src="magichat.svg" alt="Magic Hat" /> 
      </div>
    </section>
  );
}

export default Hero;