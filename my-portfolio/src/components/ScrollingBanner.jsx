import { FaStar } from 'react-icons/fa'

const ScrollingBanner = () => {
  return (
    <div className="w-full h-12 overflow-hidden bg-white text-black flex items-center shadow-md rounded-lg relative">
      {/* Inner wrapper */}
      <div className="flex whitespace-nowrap animate-marquee">
        
        {/* First Loop */}
        <div className="flex items-center px-6 gap-2 text-sm font-medium">
          <FaStar className="text-yellow-500" />
          Creative Full Stack Developer |
          <FaStar className="text-yellow-500" />
          Data-Driven Thinker |
          <FaStar className="text-yellow-500" />
          Proven Leadership as Peer Counsellor & ACM President |
          <FaStar className="text-yellow-500" />
          Delivering Impact through Code and Compassion
        </div>

      </div>

      {/* Custom animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default ScrollingBanner
