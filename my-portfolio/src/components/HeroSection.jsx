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
      className="hero-section flex flex-col items-center justify-center text-center p-8 w-[400px] mt-[-25px] rounded-[10px] shadow-lg border border-gray-200
                 opacity-0 translate-y-6 animate-fade-slide-up bg-white"
    >
      {/* Profile Image */}
      <div className="w-90 h-92 p-4 overflow-hidden mt-[-25px] ">
        <img 
          src="https://res.cloudinary.com/dbd5zow1e/image/upload/v1738689136/IMG_20240317_195721_2_r1mkd4.jpg" 
          alt="Aditya Kurhade"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Headline */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Hi, I'm <span className="text-blue-600">Aditya Kurhade</span>
      </h1>


      {/* Subheading */}
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        Turning complex problems into efficient, real-world-ready applications.
      </p>

      {/* Specialties */}
      <div className="flex flex-wrap gap-2 mt-5 justify-center">
        {specialties.map((spec) => (
          <span key={spec.name} className={`${spec.color} text-white px-4 py-1 rounded-full text-xs font-medium shadow`}>
            {spec.name}
          </span>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-800">
          📩 <a href="mailto:adityakurhade1000@gmail.com" className="hover:underline">adityakurhade1000@gmail.com</a>
        </p>
      </div>

      {/* Quick Links */}
      {/* <div className="flex gap-4 text-xs text-gray-500 mt-3 flex-wrap justify-center">
        <p className="hover:underline cursor-pointer">View Resume</p>
        <p>•</p>
        <p className="hover:underline cursor-pointer">Why Hire Me?</p>
        <p>•</p>
        <p>Available for Projects</p>
        <p>•</p>
        <p>Fast Delivery</p>
      </div> */}

      {/* Social Icons */}
      <div className="flex justify-center items-center mt-5">
        <ul className="flex gap-6">
          <li><a href="https://github.com/aditya-kurhade" target="_blank"><img src={githubImg} alt="GitHub" className={`w-6 h-6 ${iconHover}`} /></a></li>
          <li><a href="https://www.linkedin.com/in/aditya-kurhade/" target="_blank"><img src={linkedinImg} alt="LinkedIn" className={`w-6 h-6 ${iconHover}`} /></a></li>
          <li><a href="https://twitter.com/" target="_blank"><img src={twitterImg} alt="Twitter" className={`w-6 h-6 ${iconHover}`} /></a></li>
          <li><a href="https://www.instagram.com/_aditya_kurhade_/" target="_blank"><img src={instagramImg} alt="Instagram" className={`w-6 h-6 ${iconHover}`} /></a></li>
          <li><a href="mailto:adityakurhade1000@email.com" target="_blank"><img src={gmailImg} alt="Gmail" className={`w-6 h-6 ${iconHover}`} /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
