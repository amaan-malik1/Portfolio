import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from "react-icons/fi";
import headerImg from './assets/headerImg.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex flex-col md:flex-row items-center justify-center px-6 py-12 space-y-10 md:space-y-0 md:space-x-10 overflow-hidden">

      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl space-y-6"
      >
        <span className="inline-block bg-blue-200 text-blue-700 text-sm px-3 py-1 rounded-full font-semibold shadow">
          👋 Welcome to my profile
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Hi, I'm <span className="text-blue-600">Amaan Malik</span>
        </h1>

        <p className="text-lg text-gray-600">
          A passionate <strong className="text-blue-500">Full-Stack Web Developer</strong> specializing in the <span className="font-medium">MERN stack</span>. I build scalable applications and continuously improve my skills.
        </p>

        <ul className="list-disc ml-5 text-gray-700 text-base space-y-1">
          <li>📖 Building a <strong>Urdu-to-English dictionary</strong> with automated database.</li>
          <li>🚀 Aiming to create <strong>AI products</strong> and <strong>crypto-based projects</strong>.</li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Let’s Connect
          <FiArrowRightCircle className="text-xl group-hover:translate-x-1 transition" />
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-sm"
      >
        <img src={headerImg} alt="Developer" className="w-full h-auto rounded-xl shadow-xl" />
      </motion.div>
    </div>
  );
}
