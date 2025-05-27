import React from 'react';
import { motion } from 'framer-motion';
import meter1 from './assets/meter1.png';
import meter2 from './assets/meter2.png';
import meter3 from './assets/meter3.png';
import colorSharpe from './assets/colorSharpe.png';

const Skills = () => {
  return (
    <section className="relative py-16 px-6 bg-gray-900 text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center z-10 relative"
      >
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <p className="text-lg text-gray-300 mb-12">
          A passionate Full-Stack Web Developer specializing in the MERN stack. I love building scalable applications and continuously enhancing my skills.
          <br /><br />
          📖 Currently working on a Urdu-to-English dictionary website with database automation.
          <br /><br />
          🚀 Future goals: Creating <span className="text-white font-semibold">AI-driven products</span> and <span className="text-white font-semibold">cryptocurrency-based projects</span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={meter1} alt="Front-End" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Front-End</h4>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={meter2} alt="Backend" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Backend</h4>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={meter3} alt="Responsive" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Responsive</h4>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={meter2} alt="Web3" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Learning Web.3</h4>
          </motion.div>
        </div>
      </motion.div>

      <img 
        src={colorSharpe} 
        alt="Background Shape" 
        className="absolute left-0 bottom-0 w-60 opacity-20 pointer-events-none"
      />
    </section>
  );
};

export default Skills;
