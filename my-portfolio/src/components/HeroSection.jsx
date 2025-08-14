import React from 'react';
import githubImg from '../assets/Img/github.png';
import linkedinImg from '../assets/Img/linkedin.png';
import twitterImg from '../assets/Img/twitter.png';
import instagramImg from '../assets/Img/instagram.png';
import gmailImg from '../assets/Img/gmail.png';

const iconHover = "transition-transform duration-200 hover:scale-125 hover:rotate-12";

const specialties = [
  { name: "Full Stack Development", color: "bg-blue-600" },
  { name: "AI Tools", color: "bg-purple-600" },
  { name: "Cloud & DevOps", color: "bg-orange-500" }
];

const HeroSection = () => {
  return (
    <div
      className="hero-section flex flex-col items-center justify-center text-center p-6 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg 
                 rounded-[10px] shadow-lg border border-gray-200
                 opacity-0 translate-y-6 animate-fade-slide-up bg-white"
    >
      {/* Profile Image */}
      <div className="w-full max-w-[300px] h-auto p-4 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dbd5zow1e/image/upload/v1738689136/IMG_20240317_195721_2_r1mkd4.jpg"
          alt="Aditya Kurhade"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Headline */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Hi, I'm <span className="text-blue-600">Aditya Kurhade</span>
      </h1>

      {/* Subheading */}
      <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
        Turning complex problems into efficient, real-world-ready applications.
      </p>

      {/* Specialties */}
      <div className="flex flex-wrap gap-2 mt-5 justify-center">
        {specialties.map((spec) => (
          <span
            key={spec.name}
            className={`${spec.color} text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium shadow`}
          >
            {spec.name}
          </span>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-800">
          📩{" "}
          <a
            href="mailto:adityakurhade1000@gmail.com"
            className="hover:underline break-all"
          >
            adityakurhade1000@gmail.com
          </a>
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center mt-5">
        <ul className="flex gap-5 sm:gap-6">
          <li>
            <a href="https://github.com/aditya-kurhade" target="_blank" rel="noreferrer">
              <img src={githubImg} alt="GitHub" className={`w-5 h-5 sm:w-6 sm:h-6 ${iconHover}`} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aditya-kurhade/" target="_blank" rel="noreferrer">
              <img src={linkedinImg} alt="LinkedIn" className={`w-5 h-5 sm:w-6 sm:h-6 ${iconHover}`} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={twitterImg} alt="Twitter" className={`w-5 h-5 sm:w-6 sm:h-6 ${iconHover}`} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_aditya_kurhade_/" target="_blank" rel="noreferrer">
              <img src={instagramImg} alt="Instagram" className={`w-5 h-5 sm:w-6 sm:h-6 ${iconHover}`} />
            </a>
          </li>
          <li>
            <a href="mailto:adityakurhade1000@email.com" target="_blank" rel="noreferrer">
              <img src={gmailImg} alt="Gmail" className={`w-5 h-5 sm:w-6 sm:h-6 ${iconHover}`} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
