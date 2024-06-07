'use client';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col px-5 py-5 items-center lg:justify-between lg:flex-row lg:p-16 lg:m-2 lg:py-6 min-h-[85%]">
      <div className="max-w-lg lg:flex-1">
        <h1 className="text-2xl text-gray-800 mb-4 text-center lg:text-start md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[40px] tracking-[0.1em] font-bold">India's best digital marketing happens here.</h1>
        <div className="flex lg:hidden">
          <img src="/magichat.svg" alt="Magic Hat" className="w-full h-auto max-w-auto mx-auto" />
        </div>
        <p className="text-sm text-gray-700 text-center mt-4 lg:text-start md:text-lg lg:text-xl xl:text-xl 2xl:text-[22px] tracking-[-0.01em] font-normal">MagicMedia delivers growth outcomes through high-quality marketing and Out of Home (OOH) services to enterprise companies and startups.</p>
        <div className="flex flex-col mt-6 lg:flex-row items-center">
          <Link href="/services/outOfHome">
            <button className="lg:px-6 lg:py-3 px-4 py-2 bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white font-normal rounded-md transition duration-300 hover:opacity-80 mb-2 lg:mr-4 lg:mb-0 w-full lg:w-auto lg:text-xl">Explore Services</button>
          </Link>
          <Link href="/contactUs">
            <button className="lg:px-6 lg:py-3 px-3 py-1.5 border-2 border-red-600 text-red-600 font-normal rounded-md transition duration-300 hover:opacity-80 w-full lg:w-auto lg:text-xl">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="lg:flex lg:flex-1 lg:justify-end hidden">
        <img src="/magichat.svg" alt="Magic Hat" className="w-full h-auto max-w-auto lg:max-w-2xl 2xl:w-[70%]" />
      </div>
    </div>
  );
};

export default Hero;
