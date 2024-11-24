import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  // Function to handle the scroll
  const handleScroll = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header id="home" className="relative z-0 h-screen">
      <video autoPlay muted loop className="absolute w-full h-full object-cover" id="background-video">
        <source src="/assets/imgs/portfolio-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-36 text-center md:text-left">
        <div className="relative text-white flex flex-col justify-center h-full items-center md:items-start">
          <motion.h1
            className="text-3xl md:text-5xl font-bold tracking-wide"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            HI! I am Anurag Pal
          </motion.h1>

          {['CONTENT CREATOR', 'VFX ARTIST', 'VIDEO EDITOR'].map((text, index) => (
            <motion.p
              key={index}
              className="text-lg md:text-2xl mt-4 font-semibold tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.5 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div> 
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <motion.div
          className="text-3xl md:text-4xl"
          animate={{ y: [0, 20, 0] }}  
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
           
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-10 h-10 mx-auto text-white cursor-pointer"
            onClick={handleScroll}   
          >
            <path d="M12 19l-7-7h14l-7 7z" />
          </svg>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
