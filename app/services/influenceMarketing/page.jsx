'use client';
import React from "react";
import Navbar from "../../Navbar";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const PrintMedia = () => {
  return (
    <div className="overflow-hidden min-h-screen relative">
      <Navbar className="relative z-100"/>
      <div className="h-screen flex flex-col lg:flex-row lg:justify-between items-start lg:items-center lg:p-14 lg:-mt-24 z-0">
        {/* Image Portion */}
        <div className="order-1 lg:order-2 w-full lg:w-[48%] p-4 bg-[#F1C767] lg:min-h-screen flex justify-center items-center -mr-16 overflow-hidden">
          <div className="flex justify-center items-center gap-10">
            <Link href="/services/printMedia">
              <button className="lg:hidden flex justify-center items-center">
                  <div className="flex items-center border-2 rounded-md border-black px-0 py-0 hover:bg-black hover:text-white transition">
                    <MdKeyboardArrowLeft className="text-4xl"/>
                  </div>
              </button>
            </Link>
            <div className="w-full lg:p-24 lg:pt-40 over-hidden">
              <img src="/Influencer_Marketing.svg" alt="OOH Marketing" className="object-cover w-full h-auto max-w-full max-h-full" />
              <p className="text-center mt-6 lg:text-3xl text-xl font-medium text-white flex-nowrap tracking-[0.15em]">INFLUENCER MARKETING</p>
            </div>
            <Link href="/services/tvCommercialProduction">
              <button className="lg:hidden flex justify-center items-center">
                  <div className="flex items-center border-2 rounded-md border-black px-0 py-0 hover:bg-black hover:text-white transition">
                    <MdKeyboardArrowRight className="text-4xl"/>
                  </div>
              </button>
            </Link>
          </div>
        </div>
        {/* Text Portion */}
        <div className="order-2 lg:order-1 w-full lg:w-3/5 p-4 max-w-xl">
          <h1 className="text-xl lg:text-2xl mb-2.5 mt-9 lg:mb-10 font-medium text-[#00000099]">SERVICES</h1>
          <h1 className="text-3xl lg:text-6xl mb-2.5 lg:mb-3 font-medium flex-wrap tracking-[-0.01em]">Influencer Marketing</h1>
          <h1 className="text-xl lg:text-2xl mb-4 lg:mb-7 font-normal">Amplify your Brand with Influencers</h1>
          <p className="text-lg lg:text-2xl mb-2.5 lg:mb-6 font-normal flex-wrap text-[#000000B2] lg:text-black">Leverage influencer partnerships to expand and strengthen your brand's message.</p>
          <div className="flex items-center lg:mb-12">
            <span className="mr-4 text-gradient font-semibold text-lg lg:text-2xl">150+ Projects Done</span>
            <span className="text-gradient font-semibold text-lg lg:text-2xl">100+ Testimonials</span>
          </div>
          <Link href="/services/tvCommercialProduction">
            <button className="hidden lg:flex justify-center items-center">
                <div className="flex items-center border-2 rounded-md border-black px-0 py-0 hover:bg-black hover:text-white transition">
                  <MdKeyboardArrowRight className="text-4xl"/>
                </div>
                <h1 className="text-2xl font-normal ml-3">Next</h1>
            </button>
          </Link>
          <Link href="/services/printMedia">
            <button className="hidden lg:flex justify-center items-center mt-3">
                <div className="flex items-center border-2 rounded-md border-black px-0 py-0 hover:bg-black hover:text-white transition">
                  <MdKeyboardArrowLeft className="text-4xl"/>
                </div>
                <h1 className="text-2xl font-normal ml-3">Previous</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrintMedia;
