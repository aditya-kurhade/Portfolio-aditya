import React from 'react'

const ShortBanner = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="bg-white text-blue-600 font-semibold px-3 py-1 rounded-md shadow-md 
                 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
    >
      {text}
    </a>
  );
};

export default ShortBanner