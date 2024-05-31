import React from 'react';

const Navbar = () => {
  return (
    <header className="text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/magic_media_logo_text.png" alt="MagicMedia Logo" className="h-10" /> {/* Add your logo */}
      </div>
      <nav className="flex items-center gap-6">
        <ul className="list-none flex">
          
          <li>
            <button className="text-black py-2 px-4 rounded-lg">About Us</button>
          </li>
          <li>
            <button className="text-black py-2 px-4 rounded-lg">Contact Us</button>
          </li>
          <li>
            <button className="text-black py-2 px-4 rounded-lg">Clients</button>
          </li>
          <li>
            <button className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg">
              Explore Services
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
