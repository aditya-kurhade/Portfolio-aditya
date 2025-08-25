import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-20">
      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-12 text-center max-w-md sm:max-w-lg"
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl sm:text-8xl mb-6 text-yellow-500 inline-block"
        >
          <FaTools />
        </motion.div>
        
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          🚧 Page Under Development
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 sm:text-lg">
          This page is currently being worked on. Stay tuned!  
          Meanwhile, you can explore other sections of the site.
        </p>
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;
