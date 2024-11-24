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

  // Menu items
  const menuItems = ['Projects', 'About', 'Contact'];

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
          // Mobile Hamburger Menu
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen ? 'true' : 'false'}
            className="md:hidden text-white"
          >
            <span className="block w-6 h-0.5 bg-white my-1.5"></span>
            <span className="block w-6 h-0.5 bg-white my-1.5"></span>
            <span className="block w-6 h-0.5 bg-white my-1.5"></span>
          </button>
        )}
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
