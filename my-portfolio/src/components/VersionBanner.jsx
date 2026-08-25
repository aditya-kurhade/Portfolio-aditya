import React, { useState } from 'react';
import { FaTimes, FaRocket } from 'react-icons/fa';

const VersionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white text-xs sm:text-sm py-2 px-4 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center justify-center gap-2 w-full text-center">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
          <span className="font-medium tracking-wide">
            🎉 <strong className="font-bold">Exciting Announcement:</strong> Portfolio <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold text-yellow-300">v2.0</span> will be live in <span className="underline decoration-yellow-400 font-bold">September 2026</span>!
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-semibold transition-all">
            <FaRocket className="text-yellow-300 text-[10px]" /> Major Upgrades Coming
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors flex-shrink-0"
          aria-label="Close banner"
        >
          <FaTimes className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default VersionBanner;
