import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border-t border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Amaan Malik. All rights reserved.
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Building the future of web experiences
            </span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;