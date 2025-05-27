import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import headerImg from './assets/headerImg.png';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
      {/* Left Part */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }} 
        className="max-w-xl"
      >
        <span className="inline-block bg-yellow-500 text-black font-semibold px-4 py-1 rounded-full mb-4">Welcome to my profile</span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hi, I'm Amaan Malik</h2>
        <p className="text-lg text-gray-300 mb-6">
          A passionate Full-Stack Web Developer specializing in the MERN stack. I love building scalable applications and continuously enhancing my skills.
          <br /><br />
          📖 Currently working on a Urdu-to-English dictionary website with database automation.
          <br /><br />
          🚀 Future goals: Creating <span className="font-semibold text-white">AI-driven products</span> and <span className="font-semibold text-white">cryptocurrency-based projects</span>.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Let's Connect <FiArrowRightCircle className="text-xl" />
        </motion.button>
      </motion.div>

      {/* Right Part */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 md:mt-0"
      >
        <img src={headerImg} alt="Header-Img" className="w-full max-w-md md:max-w-lg" />
      </motion.div>
    </div>
  );
};

export default Home;
