'use client';
import React from 'react';
import Navbar from '../Navbar'; // Assuming Navbar is in the same directory
import { IoMdMail } from "react-icons/io";
import { TbClockFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { toast, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, contact, email, message} = formData;
    generateQuery(name, contact, email, message);
  }
  const generateQuery = (name, number, email, message) => {
    var templateParams = {
      name,
      number,
      email,
      message
    };
    emailjs
      .send(
        'service_xk086xv',    // Your service ID
        'template_z55ex0q',   // Your template ID
        templateParams,
        'vnlC9LWW8aJLUlBYL'   // Your user ID
      )
      .then(
        function (response) {
          toast.success('Query Submitted!');
        },
        function (err) {
          toast.error('Query Submission Failed!');
        }
      );
  };

  return (
    <div>
      <Toaster />
      <Navbar />
      <section className="flex flex-col items-center p-4 lg:flex-row lg:justify-between lg:p-16">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl font-bold mb-4 flex-wrap lg:text-5xl">Let’s talk about Your Project!</h1>
          <div className="flex items-center mb-4">
            <div alt="Email Icon">
              <IoMdMail className='text-2xl mr-4 text-[#15243499]'/>
            </div>
            <span >enquire@magicmedia.com</span>
          </div>
          <div className="flex items-center mb-4">
            <div>
              <TbClockFilled className='text-2xl mr-4 text-[#15243499]'/>
            </div>
            <span>Monday – Friday: 9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex items-center mb-4">
            <div>
              <IoLocationSharp className='text-2xl mr-4 text-[#15243499]'/>
            </div>
            <span>WeWork, Residency Road, Bangalore, Karnataka</span>
          </div>
          <div className="flex items-center mb-4">
            <div>
              <FaPhone className='text-xl mr-4 text-[#15243499]'/>
            </div>
            <span>+91 7363493752</span>
            <div>
              <BsInstagram className='text-2xl mr-2 ml-4 text-[#15243499]'/>
            </div>
            <span>@magicMedia</span>
          </div>
          <div>
            <img src='Contact_Us.png' className='flex flex-shrink'/>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <form className="bg-[#F1C7674D] p-6 rounded-lg" onSubmit={handleSubmit}>
            <p className="mb-4 text-xl font-Poppins">Just fill the form and let us know what you need. Your email address will not be published.</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2 border-[#3F3F3F] focus:outline-none focus:border-b-2 focus:border-gray-500 bg-transparent"
            />
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full p-2 mb-4 border-b-2 border-[#3F3F3F] focus:outline-none focus:border-b-2 focus:border-gray-500 bg-transparent"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-2 mb-4 border-b-2 border-[#3F3F3F] focus:outline-none focus:border-b-2 focus:border-gray-500 bg-transparent"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}  
              placeholder="Your Message (If any)"
              className="w-full p-2 mb-4 border-b-2 border-[#3F3F3F] focus:outline-none focus:border-b-2 focus:border-gray-500 bg-transparent"
            ></textarea>
            <button type="submit" className="bg-gradient-to-r from-[#A01122] to-[#ECB54E] text-white py-2 px-4 rounded-lg">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
