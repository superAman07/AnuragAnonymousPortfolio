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
       
      <div className="max-w-md">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Who Am I?</h2>
        <p className="text-gray-200 text-lg mb-6">
          I am a dedicated content creator specializing in VFX artistry and video editing. With a passion for creating stunning visuals, I bring your creative ideas to life through innovative video projects and compelling storytelling.
        </p>
        <IntroButton
          href={"mailto:anuragpal63866@gmail.com"}
          className={"relative pl-1 pb-5"}
          name={"Hire Me"}
        />
      </div>
    </section>
  );
};

export default About;
