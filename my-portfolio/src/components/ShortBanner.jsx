import React from 'react'

const ShortBanner = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="bg-white/90 backdrop-blur-sm text-blue-700 font-semibold px-4 py-1.5 rounded-lg shadow-md 
                 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:scale-105 
                 transition-all duration-300 text-sm"
    >
      {text}
    </a>
  );
};

export default ShortBanner