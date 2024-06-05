'use client';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col px-10 py-5 items-center lg:justify-between lg:flex-row lg:px-20 lg:py-10">
      <div className="max-w-lg lg:flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-start md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">India's best digital marketing happens here.</h1>
        <div className="flex lg:hidden">
          <img src="/magichat.png" alt="Magic Hat" className="w-full h-auto max-w-auto mx-auto" />
        </div>
        <p className="text-lg text-gray-700 text-center mt-6 lg:text-start md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">MagicMedia delivers growth outcomes through high-quality digital marketing services to enterprise companies, startups, and VC firms.</p>
        <div className="flex flex-col mt-8 lg:flex-row items-center">
          <Link href="/services/outOfHome">
            <button className="px-6 py-3 bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white font-semibold rounded-md transition duration-300 hover:opacity-80 mb-4 lg:mr-4 lg:mb-0">Explore Services</button>
          </Link>
          <Link href="/contactUs">
            <button className="px-6 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-md transition duration-300 hover:opacity-80">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="lg:flex lg:flex-1 lg:justify-end hidden">
        <img src="/magichat.png" alt="Magic Hat" className="w-full h-auto max-w-auto 2xl:w-[70%]" />
      </div>
    </div>
  );
};

export default Hero;
