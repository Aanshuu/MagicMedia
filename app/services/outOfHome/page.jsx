'use client';
import React from "react";
import Navbar from "../../Navbar";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const HomeMarketing = () => {
  return (
    <div className="overflow-hidden min-h-screen relative">
      <Navbar className="relative z-100"/>
      <div className="h-screen flex flex-col lg:flex-row lg:justify-between items-start lg:items-center lg:p-14 lg:-mt-24 z-0">
        {/* Image Portion */}
        <div className="order-1 lg:order-2 w-full lg:w-[48%] p-4 bg-[#F1C767] lg:min-h-screen min-h-[46%] flex justify-center items-center -mr-16 overflow-hidden">
          <div className="flex justify-center items-center gap-10">
            <Link href="/services/reBranding">
              <button className="lg:hidden flex justify-center items-center">
                  <div className="flex items-center border-2 rounded-md border-black px-0 py-0 hover:bg-black hover:text-white transition">
                    <MdKeyboardArrowLeft className="text-4xl"/>
                  </div>
              </button>
            </Link>
            <div className="w-full lg:p-24 lg:pt-36 overflow-hidden">
              <img src="/Out_Of_Home_Marketing.svg" alt="OOH Marketing" className="object-cover w-full h-auto max-w-full max-h-full"/>
              <p className="text-center mt-6 text-xl font-medium text-white tracking-[0.15em] lg:text-3xl">OOH MARKETING</p>
            </div>
            <Link href="/services/digitalMarketing">
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
          <h1 className="text-base lg:text-2xl mb-2.5 mt-9 lg:mb-10 font-medium text-[#00000099] leading-[39px]">SERVICES</h1>
          <h1 className="lg:hidden text-[26px] lg:text-6xl mb-2.5 lg:mb-3 flex-wrap font-medium tracking-[-0.01em] leading-[28.6px]">Out of Home (OOH)</h1>
          <h1 className="hidden text-3xl lg:text-6xl mb-2.5 lg:mb-3 flex-wrap font-medium lg:flex tracking-[-0.01em]">Out Of Home Marketing</h1>
          <h1 className="text-base lg:text-2xl mb-4 lg:mb-7 font-normal leading-[20.8px]">Impactful Outdoor Advertising</h1>
          <p className="text-base lg:text-2xl mb-4 lg:mb-6 font-normal flex-wrap text-[#000000B2] lg:text-black leading-[20.8px]">Reach a broad audience with eye-catching, strategic outdoor advertisements.</p>
          <div className="flex items-center lg:mb-12">
            <span className="mr-4 text-gradient font-semibold text-base lg:text-2xl leading-[20.8px]">150+ Projects Done</span>
            <span className="text-gradient font-semibold text-base lg:text-2xl leading-[20.8px]">100+ Testimonials</span>
          </div>
          <Link href="/services/digitalMarketing">
            <button className="hidden lg:flex justify-center items-center">
                <div className="flex items-center border-2 rounded-md border-black px-0 py-0 hover:bg-black hover:text-white transition">
                  <MdKeyboardArrowRight className="text-4xl"/>
                </div>
                <h1 className="text-2xl font-normal ml-3">Next</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMarketing;
