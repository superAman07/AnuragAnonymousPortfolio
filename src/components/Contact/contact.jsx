import React, { useEffect } from 'react';
import IntroButton from '../Button/button';

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fadeInUp');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      el.classList.add('fade-in-up');
    });
  }, []);

  return (
    <section id="contact" className="py-20 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-10 animate-fadeInUp">Contact Me</h2>
      <form className="w-full max-w-lg mx-auto space-y-6">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 animate-fadeInUp">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight transition duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transform hover:-translate-y-1"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 animate-fadeInUp">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight transition duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transform hover:-translate-y-1"
              type="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <textarea
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 leading-tight mb-6 transition duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transform hover:-translate-y-1 animate-fadeInUp"
          rows="5"
          placeholder="Write Something"
        ></textarea>
        <IntroButton name={"Send Message"} className={"flex justify-center items-center relative pl-1 pb-5"}/>
      </form>
    </section>
  );
};

export default Contact;
