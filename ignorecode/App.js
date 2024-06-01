import React from 'react';
import './App.css';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="magic_media_logo_text.png" alt="MagicMedia Logo" /> {/* Add your logo */}
        </div>
        <nav className="nav">
          <ul>
            <button className="explore-button">Explore Services</button>
          </ul>
            <li><button>About Us</button></li>
            <li><button>Contact Us</button></li>
            <li><button>Clients</button></li>
        </nav>
      </header>
      <Hero />
    </div>
  );
}

export default App;
