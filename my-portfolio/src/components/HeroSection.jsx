import githubImg from '../assets/Img/github.png';
import linkedinImg from '../assets/Img/linkedin.png';
import twitterImg from '../assets/Img/twitter.png';
import instagramImg from '../assets/Img/instagram.png';
import gmailImg from '../assets/Img/gmail.png';
import ShortBanner from './ShortBanner';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/aditya-kurhade', icon: githubImg },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-kurhade/', icon: linkedinImg },
  { name: 'Twitter', url: 'https://twitter.com/', icon: twitterImg },
  { name: 'Instagram', url: 'https://www.instagram.com/_aditya_kurhade_/', icon: instagramImg },
  { name: 'Gmail', url: 'mailto:adityakurhade1000@gmail.com', icon: gmailImg }
];

const specialties = [
  { name: "Full Stack Development", gradient: "from-blue-500 to-blue-700" },
  { name: "Data Science", gradient: "from-green-400 to-green-600" },
  { name: "AI Tools", gradient: "from-pink-500 to-pink-700" },
  { name: "AI Integration", gradient: "from-orange-400 to-red-600" }
];

const HeroSection = () => {
  return (
    <div
      className="hero-section flex flex-col items-center text-center p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-lg 
                 rounded-lg shadow-md bg-white border border-gray-100
                 opacity-0 translate-y-6 animate-fade-slide-up hover:shadow-lg transition-shadow duration-300"
    >
      {/* Profile Image Container */}
      <div className="w-full relative group">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://res.cloudinary.com/dbd5zow1e/image/upload/v1762866929/aditya_passport_vc5zpy.jpg"
            alt="Aditya Kurhade - Full Stack Developer"
            className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* View Resume Banner */}
        <div className="absolute bottom-3 right-3 z-10">
          <ShortBanner 
            text="View Resume" 
            link="https://drive.google.com/file/d/1CKVGVFeL1hrWc-utguJ7Ey_VUNK54orE/view?usp=drive_link" 
          />
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-6 font-roboto">
        Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Aditya Kurhade</span>
      </h1>

      {/* Subheading */}
      <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed font-medium max-w-xs">
        Full Stack Solutions, Data-Driven Insights
      </p>

      {/* Specialties */}
      <div className="flex flex-wrap gap-2 mt-6 justify-center px-2">
        {specialties.map((spec, index) => (
          <span
            key={spec.name}
            className={`bg-gradient-to-r ${spec.gradient} text-white px-3 sm:px-4 py-1.5 rounded-full 
                       text-xs sm:text-sm font-medium shadow-sm
                       hover:shadow-md hover:scale-105 transform transition-all duration-300
                       cursor-default`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {spec.name}
          </span>
        ))}
      </div>

      {/* Contact Email */}
      <div className="mt-6 px-4">
        <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 
                       hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group">
          <span className="text-xl group-hover:scale-110 transition-transform duration-300">📩</span>
          <a
            href="mailto:adityakurhade1000@gmail.com"
            className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
          >
            adityakurhade1000@gmail.com
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6 pb-2">
        <div className="flex items-center gap-4 sm:gap-5 bg-gray-50 px-6 py-3 rounded-full border border-gray-200">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={social.name}
            >
              <img 
                src={social.icon} 
                alt={social.name} 
                className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 
                          group-hover:scale-125 group-hover:-translate-y-1
                          filter group-hover:drop-shadow-md"
              />
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs 
                             px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             whitespace-nowrap pointer-events-none">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
