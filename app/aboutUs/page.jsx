import React from 'react';
import Navbar from '../Navbar';


const AboutUs = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="relative text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:-mt-24">
        <div className="absolute top-0 w-full lg:relative lg:w-1/2 z-10 p-4 lg:p-0 lg:text-left text-center">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            We’re a dynamic team of innovative thinkers.
          </h1>
          <p className="mb-8">
            At MagicMedia, we connect brands with their audiences using innovative digital marketing strategies, fostering growth through our tailored services that amplify each client’s unique voice and vision.
          </p>
          <button className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg">
            Explore Services
          </button>
        </div>
        <div className="md:hidden lg:w-[48%] top-0 lg:mt-0 flex justify-center z-0 relative">
          <img src="/About_Us_Mobile.png" alt="Team Illustration" className="max-w-full h-auto" />
        </div>
        <div className="hidden lg:w-[48%] top-0 lg:mt-0 md:flex justify-center z-0 relative">
          <img src="/About_Us_team.png" alt="Team Illustration" className="max-w-full h-auto" />
        </div>
      </div>
      <section className="px-4 py-8 lg:py-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
        <div className="lg:flex lg:justify-between lg:items-start">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-gradient">
              Marketing so seamless that people don’t realize it’s marketing.
            </h3>
            <p className="mb-8">
              Our best work is engaging, authentic, and impeccably delivered, ensuring that consumers feel naturally drawn to it. They’re intrigued, inspired, and eager for more.
            </p>
            <img src="/About_Us_vision.png" alt="Vision Illustration" className="max-w-full h-auto mb-8" />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h3 className="text-xl font-semibold mb-4 text-gradient">
              Cultivate thoughtful, curious, creative minds across the globe
            </h3>
            <p className="mb-8">
              At MagicMedia, we don’t just hire talented individuals; we develop them into the best marketers in the world. Our commitment is to shape new talent into industry-leading experts, fostering creativity and innovation in every project we undertake.
            </p>
            <img src="/About_Us_creative.png" alt="Creative Minds Illustration" className="max-w-full h-auto" />
          </div>
        </div>
      </section>
      <section className="px-4 py-8 lg:py-16 lg:px-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Like What We Do?</h2>
        <button className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg">
          Let's Talk
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
