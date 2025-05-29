import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiSmartphone, FiCpu, FiDatabase, FiLock } from 'react-icons/fi';

const Skills = () => {
  const skillsData = [
    {
      title: "Front-End Development",
      icon: <FiCode className="w-8 h-8" />,
      progress: 90,
      tech: ["React","Framer motion", "Tailwind", "Redux", "JavaScript"],
      color: "bg-blue-500"
    },
    {
      title: "Backend Development",
      icon: <FiServer className="w-8 h-8" />,
      progress: 75,
      tech: ["Node.js", "Express", "MongoDB", "REST API", "AI integration"],
      color: "bg-green-500"
    },
    {
      title: "Responsive Design",
      icon: <FiSmartphone className="w-8 h-8" />,
      progress: 95,
      tech: ["CSS3", "Flexbox", "Grid", "Media Queries"],
      color: "bg-purple-500"
    },
    {
      title: "Emerging Tech",
      icon: <FiCpu className="w-8 h-8" />,
      progress: 60,
      tech: ["Web3", "Blockchain", "AI/ML", "Solidity"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 overflow-y-hidden">
            Technical Capabilities
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Continuously evolving my skillset to build impactful digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 text-4xl text-blue-400">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              
              {/* Animated Progress Bar */}
              <div className="h-2 bg-gray-700 rounded-full mb-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  transition={{ duration: 1 }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
              
              <span className="text-sm text-gray-400">{skill.progress}% Proficiency</span>

              {/* Tech Stack */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-blue-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 max-w-3xl mx-auto grid md:grid-cols-2 gap-8"
        >
          <div className="p-6 bg-gray-800 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <FiDatabase className="w-6 h-6 text-green-400" />
              <h4 className="text-xl font-semibold">Current Project</h4>
            </div>
            <p className="text-gray-400">
              Building an Notes Taking application with automated database 
              management and AI-powered searching and context providing features.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <FiLock className="w-6 h-6 text-purple-400" />
              <h4 className="text-xl font-semibold">Future Focus</h4>
            </div>
            <p className="text-gray-400">
              Developing AI-driven applications and exploring blockchain 
              technology for decentralized solutions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Skills;