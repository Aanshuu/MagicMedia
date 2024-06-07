'use client';
import React from 'react';
import Navbar from '../Navbar';
import Link from "next/link";

const Clients = () => {
  return (
    <div className="">
        <Navbar />
        <div className="relative text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:-mt-24 lg:pl-16 lg:ml-2 ">
          <div className="absolute top-0 w-full lg:relative lg:w-1/2 z-10 p-4 lg:p-0 text-center">
            <h1 className="text-3xl lg:text-6xl mb-4 text-center font-medium flex-wrap lg:max-w-xl lg:text-start tracking-wider">
              Creating campaigns that spark success.
            </h1>
            <p className="mb-8 lg:max-w-xl lg:text-2xl font-normal lg:text-start">
              At MagicMedia, we fuel the growth of top tech startups and enterprises across India with our creative marketing solutions. Discover how our strategic expertise transforms brands and drives their success.
            </p>
            <Link href="/contactUs">
              <div className="lg:text-start">
                <button className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg font-normal lg:text-lg">
                  Let's Talk
                </button>
              </div>
            </Link>
          </div>
          <div className="lg:hidden lg:w-[48%] top-0 lg:mt-0 flex justify-center z-0 relative bg-[#F1DAA7]">
            <img src="/Clients_handshake.svg" alt="Team Illustration" className="max-w-full h-auto  mt-56"/>
          </div>
          <div className="hidden top-0 lg:mt-0 lg:flex justify-center z-0 relative">
            <img src="/Clients_handshake.svg" alt="Team Illustration" className="max-w-full h-screen"/>
          </div>
        </div>
      {/* Clients Section */}
      <div className="py-8 sm:py-16">
        <h2 className="text-center text-3xl font-medium lg:text-6xl tracking-[-0.01em]">You're joining a league of trailblazers.</h2>
        <div className="mt-8 flex justify-center flex-wrap">
          {/* Desktop view */}
          <div className="hidden md:flex flex-wrap justify-center items-center space-x-6 p-10 w-[85%]">
            <img src="/Clients_desktop.svg" alt="Clients logos" className="w-full h-auto"/>
          </div>
          {/* Mobile view */}
          <div className="md:hidden flex justify-center p-10">
            <img src="/Clients_mobile.svg" alt="Clients logos" className="max-w-full"/>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-8 sm:py-16 text-center">
        <h2 className="text-3xl lg:text-6xl font-medium tracking-[-0.01em]">Like What We Do?</h2>
        <Link href="/contactUs">
          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white lg:text-2xl font-normal lg:mt-12 lg:py-3 lg:px-5 rounded-lg">Let's Talk</button>
        </Link>
      </div>
    </div>
  );
}

export default Clients;
