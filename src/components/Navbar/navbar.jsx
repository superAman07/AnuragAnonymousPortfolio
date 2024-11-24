import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
 
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
 
  const menuItems = ['Projects', 'About', 'Contact'];

  return (
    <nav
      className={`fixed w-full z-10 p-8 md:px-28 transition-all duration-300 ${
        scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center">
        <a className="text-2xl font-bold" href="#home">Anonymous Anurag</a>

        {/* Desktop Navbar Links (for large screens) */}
        {isLargeScreen ? (
          <motion.ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
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
          // Mobile Hamburger Menu with animation
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen ? 'true' : 'false'}
            className="md:hidden text-gray-400"
          >
            {/* Animated hamburger icon */}
            <motion.span
              className="block w-6 h-0.5 bg-gray-400 my-1.5"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <motion.span
              className="block w-6 h-0.5 bg-gray-400 my-1.5"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <motion.span
              className="block w-6 h-0.5 bg-gray-400 my-1.5"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      {isOpen && !isLargeScreen && (
        <motion.div
          className="md:hidden bg-transparent text-gray-400 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 p-4" id="mobile-menu">
            {menuItems.map((item) => (
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
    </nav>
  );
};

export default Navbar;
