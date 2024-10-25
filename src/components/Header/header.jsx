import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="home" className="relative h-screen">
      <video autoPlay muted loop className="absolute w-full h-full object-cover" id="background-video">
        <source src="/assets/imgs/portfolio-video.mp4" type="video/mp4" /> 
      </video>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute top-5 left-10 md:left-24 z-10">
        <a className="text-xl md:text-2xl font-bold text-white" href="#home">
          Anonymous Anurag
        </a>
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden absolute top-5 right-10 z-10">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Content Container with Centering for Small Devices */}
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

        {/* Desktop Navigation */}
        <div className="absolute top-1/2 right-5 md:right-10 transform -translate-y-1/2 text-white hidden md:block">
          <ul className="space-y-6">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ scale: 1.1, y: -5 }}   
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a 
                  href={`#${item}`} 
                  className="hover:text-gray-500 transition duration-300 text-lg"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation (Centered and Conditional Rendering) */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 right-10 bg-black bg-opacity-90 text-white py-5 px-7 rounded-md">
            <ul className="space-y-4 text-center">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href={`#${item}`} 
                    className="hover:text-gray-500 transition duration-300 text-sm"
                    onClick={toggleMenu} // Close menu when clicking a link
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div> 

      {/* Scroll Down Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <motion.a
          href="#about"
          className="underline font-medium text-sm md:text-md hover:text-gray-300 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Scroll down to see more
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
