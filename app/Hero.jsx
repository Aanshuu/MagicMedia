'use client';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex justify-center items-center px-20 py-20">
      <div className="flex-1">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">India's best digital marketing happens here.</h1>
          <p className="text-lg text-gray-700">MagicMedia delivers growth outcomes through high-quality digital marketing services to enterprise companies, startups, and VC firms.</p>
          <div className="flex mt-8">
            <Link href="/services/outOfHome">
              <button className="px-6 py-3 bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white font-semibold rounded-md mr-4 transition duration-300 hover:opacity-80">Explore Services</button>
            </Link>
            <button className="px-6 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-md transition duration-300 hover:opacity-80">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src="/magichat.svg" alt="Magic Hat" className="w-full h-auto max-w-auto mx-auto" />
      </div>
    </div>
  );
};

export default Hero;
