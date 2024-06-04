import React from 'react';
import Navbar from '../Navbar';

const Clients = () => {
  return (
    <div className="font-sans">
        <Navbar />
      {/* Header Section */}
      <div className="bg-white px-4 py-8 sm:py-16 flex flex-col sm:flex-row justify-between items-center">
        <div className="max-w-md sm:pr-8">
          <h1 className="text-4xl font-bold">Creating campaigns that spark success.</h1>
          <p className="mt-4 text-lg">
            At MagicMedia, we fuel the growth of top tech startups and enterprises across India with our creative marketing solutions. Discover how our strategic expertise transforms brands and drives their success.
          </p>
          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white font-semibold rounded">Let's Talk</button>
        </div>
        <div className="mt-8 sm:mt-0">
          <img src="/Clients_handshake.png" alt="Shaking hands illustration" className="w-full max-w-md"/>
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-gray-50 py-8 sm:py-16">
        <h2 className="text-center text-2xl font-bold">You're joining a league of trailblazers.</h2>
        <div className="mt-8 flex justify-center flex-wrap">
          {/* Desktop view */}
          <div className="hidden md:flex flex-wrap justify-center items-center space-x-6">
            <img src="/Clients_desktop.png" alt="Clients logos" className="max-w-full"/>
          </div>
          {/* Mobile view */}
          <div className="md:hidden flex justify-center">
            <img src="/Clients_mobile.png" alt="Clients logos" className="max-w-full"/>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-8 sm:py-16 text-center">
        <h2 className="text-2xl font-bold">Like What We Do?</h2>
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white font-semibold rounded">Let's Talk</button>
      </div>
    </div>
  );
}

export default Clients;
