import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10 bg-[#ffff] pl-28 pr-28 shadow-md">
      <div className="container pl-10 pr-10 flex justify-between items-center p-5">
        <a className="text-2xl font-bold" href="#home">Anonymous AnuraG</a>
        <ul className="hidden md:flex space-x-6">
          {['about', 'projects', 'contact'].map((item) => (
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
            className="focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-8 h-1 bg-gray-600 mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-8 h-1 bg-gray-600 mb-1 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-8 h-1 bg-gray-600 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
                  onClick={toggleMenu}
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
