'use client';
import React from 'react';
import Navbar from '../Navbar';
import Link from "next/link";


const AboutUs = () => {
  return (
    <div className="">
      <Navbar/>
      <div className="relative text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:-mt-24 lg:pl-16 lg:ml-2 ">
        <div className="absolute top-0 w-full lg:relative lg:w-1/2 z-10 p-4 lg:p-0 text-center">
          <h1 className="text-3xl lg:text-6xl mb-4 text-center flex-wrap lg:max-w-xl lg:text-start font-medium tracking-wider" >
            We’re a dynamic team of innovative thinkers.
          </h1>
          <p className="mb-8 lg:max-w-xl lg:text-2xl lg:text-start font-normal">
            At MagicMedia, we connect brands with their audiences using innovative digital marketing strategies, fostering growth through our tailored services that amplify each client’s unique voice and vision.
          </p>
          <Link href="/services/outOfHome">
            <div className="lg:text-start">
              <button className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg lg:text-lg">
                Explore Services
              </button>
            </div>
          </Link>
        </div>
        <div className="lg:hidden lg:w-[48%] top-0 lg:mt-0 flex justify-center z-0 relative bg-[#F1C767]">
          <img src="/About_Us_Mobile.svg" alt="Team Illustration" className="max-w-full h-auto mt-28"/>
        </div>
        <div className="hidden top-0 lg:mt-0 lg:flex justify-center z-0 relative">
          <img src="/About_Us_team.svg" alt="Team Illustration" className="max-w-full h-screen"/>
        </div>
      </div>
      <section className="px-4 py-8 lg:py-16 lg:px-16 lg:m-2">
        <h2 className="text-3xl text-left font-medium lg:text-6xl mb-5 lg:mb-0 tracking-[-0.01em]">Our Vision</h2>
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 w-full">
            <div className="order-1 lg:order-2 flex">
                <img src="/About_Us_vision.svg" alt="Vision Illustration" className="w-full lg:max-w-sm lg:h-auto"/>
            </div>
            <div className="order-2 lg:order-1 flex flex-col lg:max-w-md lg:justify-end lg:self-end lg:mr-10">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 mt-4 lg:mt-0 text-gradient">
                  Marketing so seamless that people don’t realize it’s marketing.
                </h3>
                <p className="lg:text-2xl">
                  Our best work is engaging, authentic, and impeccably delivered, ensuring that consumers feel naturally drawn to it. They’re intrigued, inspired, and eager for more.
                </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between lg:mt-10 w-full">
            <div className="order-1 flex">
              <img src="/About_Us_creative.svg" alt="Creative Minds Illustration" className="w-full lg:max-w-sm lg:h-auto" />
            </div>
            <div className="order-2 flex flex-col lg:max-w-lg lg:justify-end lg:self-end lg:ml-10">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gradient mt-4 lg:mt-0">
                Cultivate thoughtful, curious, creative minds across the globe
              </h3>
              <p className="lg:text-2xl">
                At MagicMedia, we don’t just hire talented individuals; we develop them into the best marketers in the world. Our commitment is to shape new talent into industry-leading experts, fostering creativity and innovation in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 lg:py-16 lg:px-24 text-center">
        <h2 className="text-3xl lg:text-6xl font-medium mb-4 tracking-[-0.01em]">Like What We Do?</h2>
        <Link href="/contactUs">
          <button className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg lg:text-2xl font-normal lg:mt-12 lg:py-3 lg:px-5">
            Let's Talk
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
