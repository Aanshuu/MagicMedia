'use client';
import React from "react";
import Navbar from "../../Navbar";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const HomeMarketing = () => {
  return (
    <div className="overflow-hidden min-h-screen">
      <Navbar/>
      <div className="h-screen flex flex-col lg:flex-row justify-center items-start lg:items-center p-8">
        {/* Text Portion */}
        <div className="w-full lg:w-3/5 p-4">
          <h1 className="text-2xl mb-2 font-Poppins-600 text-[#00000099]">SERVICES</h1>
          <h1 className="text-6xl mb-2 font-Poppins-600 flex-wrap">Out of Home Marketing</h1>
          <h1 className="text-2xl mb-4 font-Poppins-400">Impactful Outdoor Advertising</h1>
          <p className="text-2xl mb-4 font-Poppins-400 flex-wrap">Reach a broad audience with eye-catching, strategic outdoor advertisements.</p>
          <div className="flex items-center mb-4">
            <span className="mr-4 text-gradient font-Poppins-600 text-2xl">150+ Projects Done</span>
            <span className="text-gradient font-Poppins-600 text-2xl">100+ Testimonials</span>
          </div>
          <Link href="/services/digitalMarketing">
            <button className="flex justify-center items-center">
                <div className="flex items-center border-2 rounded-md border-black px-0 py-0 hover:bg-black hover:text-white transition">
                  <MdKeyboardArrowRight className="text-4xl"/>
                </div>
                <h1 className="text-2xl font-Poppins-400 ml-3">Next</h1>
            </button>
          </Link>
        </div>
        {/* Image Portion */}
        <div className="w-full lg:w-2/5 p-4 bg-[#F1C767] min-h-screen flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="w-full p-2">
              <img src="/Out_Of_Home_Marketing.png" alt="OOH Marketing" className="object-cover" />
              <p className="text-center mt-2 text-3xl font-Poppins-500 text-white tracking-widest">OOH MARKETING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMarketing;
