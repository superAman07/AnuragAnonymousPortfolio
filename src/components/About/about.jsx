import React from 'react';
import IntroButton from '../Button/button';

const About = () => {
  return (
    <section id="about" className="py-20 flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-16 text-center md:text-left">
      <div className="mb-6 md:mb-0">
        <img alt="Anurag" className="rounded-full h-48 w-48 md:h-72 md:w-72" src="/assets/imgs/man.jpg" />
      </div>
      <div className="max-w-md">
        <h2 className="text-3xl mb-4">Who Am I?</h2>
        <p className="mb-6">I am a dedicated content creator specializing in VFX artistry and video editing...</p> 
        <IntroButton href={"mailto:anuragpal63866@gmail.com"}className={"items-center relative pl-1 pb-5"} name={"Hire Me"}/>
      </div>
    </section>
  );
};

export default About;
