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
