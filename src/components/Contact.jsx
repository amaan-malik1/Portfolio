import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      
      {/* Glowing Backgrounds */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[400px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] max-w-[320px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Contact Content */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-10">
        
        {/* Left Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-white space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-300">Feel free to reach out for collaborations or just a friendly hello!</p>

          <div className="space-y-6">
            {[
              { icon: FiMail, label: 'Email', value: 'ahmadamaan363@gmail.com' },
              { icon: FiPhone, label: 'Phone', value: '+91 8791102179' },
              { icon: FiMapPin, label: 'Address', value: 'Delhi, India' }
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-blue-600 rounded-xl text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{label}</h4>
                  <p className="text-gray-300">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6 text-white"
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2"
          >
            <FiSend />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
