'use client';
import React from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="top-0 text-white py-6 px-8 flex justify-between items-center z-50 relative lg:ml-10 lg:mr-10">
      <div className="flex items-center">
      <Link href="/page"> {/* Wrap the image with Link component */}
          <img src="/magic_media_logo_text.png" alt="MagicMedia Logo" className="h-12" />
      </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <ul className="list-none flex">
          <Link href="/aboutUs">
            <li>
              <button className="text-black py-2 px-4 rounded-lg">About Us</button>
            </li>
          </Link>
          <Link href="/contactUs">
            <li>
              <button className="text-black py-2 px-4 rounded-lg">Contact Us</button>
            </li>
          </Link>
          <Link href="/clients">
            <li>
              <button className="text-black py-2 px-4 rounded-lg">Clients</button>
            </li>
          </Link>
          <Link href="/services/outOfHome">
          <li>
            <button className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg ml-8">
              Explore Services
            </button>
          </li>
          </Link>
        </ul>
      </nav>
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <RxHamburgerMenu className="w-8 h-10 mt-2 text-black"/>
        </button>
      </div>
      {/* Mobile view */}
      {isOpen && (
        <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-start pt-16 px-8 z-50">
          <button onClick={() => setIsOpen(false)} className="item-start mb-6 ml-2">
            <RxHamburgerMenu className="w-6 h-6" /> {/* Use RxHamburgerMenu icon for closing */}
          </button>
          <ul className="list-none flex flex-col gap-6">
            <Link href="/aboutUs">
              <li>
                <button className="text-black py-2 px-4 rounded-lg">About Us</button>
              </li>
            </Link>
            <Link href="/contactUs">
              <li>
                <button className="text-black py-2 px-4 rounded-lg">Contact Us</button>
              </li>
            </Link>
            <Link href="/clients">
              <li>
                <button className="text-black py-2 px-4 rounded-lg">Clients</button>
              </li>
            </Link>
            <Link href="/services/outOfHome">
              <li>
                <button className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg">
                  Explore Services
                </button>
              </li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
