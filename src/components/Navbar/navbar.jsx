import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // Toggle the menu in mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Change navbar style on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 p-4 md:px-28 transition-all duration-300 ${
        scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center">
        <a className="text-2xl font-bold" href="#home">Anonymous Anurag</a>
        
        {/* Desktop Navbar Links (for large screens) */}
        {isLargeScreen ? (
          <motion.ul className="hidden md:flex space-x-6">
            {['Projects', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </motion.ul>
        ) : (
          <div />
        )}
        
        {/* Hamburger Menu for Large Screen (3 dots) */}
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

      {/* Mobile Menu Dropdown */}
      {isOpen && !isLargeScreen && (
        <motion.div
          className="md:hidden bg-white text-black shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 p-4" id="mobile-menu">
            {['Projects', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  onClick={toggleMenu}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Hamburger Menu for Large Screen */}
      {isOpen && isLargeScreen && (
        <motion.div
          className="absolute left-0 top-16 bg-white text-black shadow-lg w-full p-4 flex justify-between items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button onClick={toggleMenu} className="text-2xl font-bold">X</button>
          <ul className="flex space-x-6">
            {[ 'Projects', 'About','Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-500 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
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
