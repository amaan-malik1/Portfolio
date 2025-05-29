import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { FiArrowRightCircle, FiGithub, FiLinkedin, FiTwitter, FiCode, FiServer, FiCloud } from "react-icons/fi";

export default function Home() {
  const features = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Frontend Expertise",
      description: "Crafting pixel-perfect UIs with modern React ecosystem",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: "Backend Solutions",
      description: "Building scalable APIs & microservices architecture",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <FiCloud className="w-8 h-8" />,
      title: "AI Integration",
      description: "AI integrations based on requirements.",
      color: "from-green-400 to-teal-400"
    }
  ];

  return (

    <div className="flex flex-col  min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-24 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12 overflow-hidden relative">

      {/* Simple Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center w-full text-center mb-20 md:mb-28  max-sm:pt-10"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-block mb-4 px-4 py-2 bg-blue-900/20 rounded-full text-blue-400 text-sm font-medium"
        >
          Full Stack Developer & Tech Enthusiast
        </motion.span>

        <h1 className="py-2 text-4xl md:text-6xl font-bold mb-6 overflow-y-hidden">
          Building Digital
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Excellence</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Hi! I'm Amaan Malik, specializing in creating full-cycle web solutions that combine
          cutting-edge technology with intuitive design.
        </p>
      </motion.div>

      {/* Right Section - Replaced Image with Feature Cards */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full max-w-2xl mt-12 md:mt-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-transparent transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl z-0" />

              <div className="relative z-10">
                <div className={`mb-4 text-3xl bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/10 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-8 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 flex justify-around"
        >
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              1+
            </div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              99%
            </div>
            <div className="text-sm text-gray-400">Satisfaction</div>
          </div>
        </motion.div>
=======
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
>>>>>>> e3417ca0831ddb9c95b5bb80b3f21c4d310af139
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
<<<<<<< HEAD
}
=======
};

export default Home;
>>>>>>> e3417ca0831ddb9c95b5bb80b3f21c4d310af139
