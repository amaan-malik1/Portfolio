import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projectData = [
  {
    title: 'VR Front-End',
    url: 'https://virtualr-navy.vercel.app/',
  },
  {
    title: 'Password Manager',
    url: 'https://pass-op-rho.vercel.app/',
  },
  {
    title: 'Coffee App',
    url: 'https://coffee-app-ochre.vercel.app/',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="text-4xl font-bold mb-4 text-center"
      >
        Projects
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.5 }} 
        className="text-center text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        Explore some of my recent work. I’m constantly improving and adding new projects as I grow my skills.
      </motion.p>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {projectData.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-between items-center border border-white/20 hover:border-indigo-500 transition-all p-4 rounded-lg bg-white/5 backdrop-blur-sm"
          >
            <span className="text-lg font-semibold">{project.title}</span>
            <FiExternalLink className="text-xl text-indigo-400" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
