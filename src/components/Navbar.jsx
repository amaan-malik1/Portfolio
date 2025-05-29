<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/skills', name: 'Skills' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/amaan-malik1' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/amaan-malik' },
    { icon: <FiInstagram />, url: 'https://instagram.com/amaan__.malik' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/70 backdrop-blur-md border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <NavLink
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              AM
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `relative px-4 py-2 text-gray-300 hover:text-white transition-colors
                    ${isActive ? 'text-white' : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400"
                          layoutId="underline"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 items-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2.5 rounded-lg bg-gray-800 hover:bg-gray-700/50 transition-colors text-gray-300 hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden  top-30 left-0 right-0 bg-gray-900/70 backdrop-blur-lg z-40 overflow-hidden"
          >
            <div className="flex flex-col gap-4 mb-8 py-6 px-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-xl text-gray-300 hover:text-white transition-colors
                    ${isActive ? 'bg-gray-800/50' : 'hover:bg-gray-800/30'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-gray-700/50 pb-8 px-4">
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700/50 text-gray-300 hover:text-white"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
=======
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import navIcon1 from './assets/navIcon1.svg';
import navIcon2 from './assets/navIcon2.svg';
import navIcon3 from './assets/navIcon3.svg';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center"
    >
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold text-blue-600">
        Amaan
      </NavLink>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        {['/', '/skills', '/projects'].map((path, idx) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'hover:text-blue-500 transition'
              }
            >
              {['Home', 'Skills', 'Projects'][idx]}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Social Icons & Button */}
      <div className="flex items-center gap-4">
        {[{
          link: 'https://www.instagram.com/amaan__.malik/',
          icon: navIcon1
        }, {
          link: 'https://www.linkedin.com/in/amaan-malik-36753527b/',
          icon: navIcon2
        }, {
          link: 'https://github.com/amaan-malik1',
          icon: navIcon3
        }].map(({ link, icon }) => (
          <a href={link} target="_blank" rel="noopener noreferrer" key={link}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={icon}
              alt="icon"
              className="w-6 h-6"
            />
          </a>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow hover:bg-blue-700 transition"
        >
          Let’s Connect
        </motion.button>
      </div>
    </motion.nav>
  );
}
>>>>>>> e3417ca0831ddb9c95b5bb80b3f21c4d310af139
