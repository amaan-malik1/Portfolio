import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import passPage from './assets/passPage.png';
import vrPage from './assets/vrPage.png';
import studyPage from './assets/studyPage.png';
import startupPage from './assets/startupPage.png';
import urduPage from './assets/urduPage.png';
import thinkRift from './assets/thinkRift.png';

const projectData = [
  {
    title: 'ThinkRift',
    url: 'https://thinkrift.onrender.com/',
    description: 'E-learning platform like Udemy where we can host our  courses and students can purchase. Secure credential storage with bcrypt',
    tech: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT','Framer-motion'],
    // Placeholder for missing image
    image: thinkRift
  },
  {
    title: 'Startup Conclave',
    url: 'https://startup-conclave.vercel.app/',
    description: 'Event platform for organizing Startups event in University',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    image: startupPage
  },
  {
    title: 'Urdu Khazana',
    url: 'https://urdu-hub.vercel.app/',
    description: 'A Urdu dictionary application wehre you can find the poetry urdu words in which you stucks while reading poetry',
    tech: ['React', 'Redux', 'Node.js'],
    image: urduPage
  },

  {
    title: 'Password Manager',
    url: 'https://pass-op-rho.vercel.app/',
    description: 'Secure credential storage with AES-256 encryption',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'JWT'],
    image: passPage
  },
  {
    title: 'VR Front-End',
    url: 'https://virtualr-navy.vercel.app/',
    description: 'Immersive virtual reality interface with three.js integration',
    tech: ['React', 'Three.js', 'Tailwind', 'GSAP'],
    image: vrPage
  },
  {
    title: 'Study Sync',
    url: 'https://study-sync-black.vercel.app/',
    description: 'E-learning platform landing page',
    tech: ['HTML', 'CSS3'],
    image: studyPage
  },
  
=======
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
>>>>>>> e3417ca0831ddb9c95b5bb80b3f21c4d310af139
];

const Projects = () => {
  return (
<<<<<<< HEAD
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 overflow-y-hidden">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcasing full-stack solutions with modern technologies and clean architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="relative aspect-video bg-gray-700 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">📱</div>
                        <p className="text-gray-400">Project Preview</p>
                        <p className="text-sm text-gray-500 mt-1">{project.title}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-700/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors">
                      <FiExternalLink className="text-lg" />
                      <span className="font-medium">Live Demo</span>
                    </div>
                    <button
                      className="p-2 hover:bg-gray-700/30 rounded-lg transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        // GitHub link logic would go here
                      }}
                    >
                      <FiGithub className="text-xl" />
                    </button>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/amaan-malik1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-lg font-medium transition-colors"
          >
            <FiGithub className="text-xl" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
=======
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
>>>>>>> e3417ca0831ddb9c95b5bb80b3f21c4d310af139
