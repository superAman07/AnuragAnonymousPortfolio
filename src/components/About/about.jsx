import React from 'react';
import IntroButton from '../Button/button';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-5 md:px-10 flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-16 text-center md:text-left bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-lg shadow-lg"
    > 
      <div className="mb-6 md:mb-0 transition-transform transform hover:scale-110">
        <img
          alt="Anurag"
          className="rounded-full border-4 border-white shadow-xl h-48 w-48 md:h-72 md:w-72"
          src="/assets/imgs/man.jpg"
        />
      </div>
       
      <div className="max-w-md flex flex-col content-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-4">Who Am I?</h2>
        <p className="text-gray-200 text-2xl text-center italic mb-6">
          "I'm no one special, just a guy with some skills <br/> trying to be better."
        </p>
        <a className='text-center w-auto py-3 px-8 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-lg rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:from-green-500 hover:to-blue-600' href='#contact'>Text me</a>
      </div>
    </section>
  );
};

export default About;
