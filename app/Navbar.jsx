import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="text-white py-6 px-8 flex justify-between items-center">
      <div className="flex items-center">
      <Link href="/page"> {/* Wrap the image with Link component */}
            <img src="/magic_media_logo_text.png" alt="MagicMedia Logo" className="h-12" />
      </Link>
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
            <button className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg ml-8">
              Explore Services
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
