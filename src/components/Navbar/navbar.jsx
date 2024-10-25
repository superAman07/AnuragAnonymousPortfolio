import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-5">
        <a className="text-2xl font-bold" href="#home">Anonymous Anurag</a>
        <ul className={`md:flex space-x-6 ${isOpen ? 'flex' : 'hidden'} md:space-x-6`}>
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <motion.a 
                href={`#${item}`} 
                className="hover:text-gray-500 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="hamburger focus:outline-none" 
            aria-expanded={isOpen} 
            aria-controls="mobile-menu"
          >
            <span className={`block w-8 h-1 bg-gray-600 mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-8 h-1 bg-gray-600 mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-8 h-1 bg-gray-600 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 p-4" id="mobile-menu">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <motion.a 
                  href={`#${item}`} 
                  className="hover:text-gray-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
