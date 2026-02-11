import { FaStar } from 'react-icons/fa'

const ScrollingBanner = () => {
  return (
    <div className="w-full h-12 overflow-hidden bg-gradient-to-r from-white via-blue-50/30 to-white text-slate-700 flex items-center shadow-sm border border-gray-100 rounded-xl relative">
      {/* Inner wrapper */}
      <div className="flex whitespace-nowrap animate-marquee">
        
        {/* First Loop */}
        <div className="flex items-center px-6 gap-2 text-sm font-medium">
          <FaStar className="text-amber-400" />
          <span className="text-blue-700 font-semibold">Creative Full Stack Developer</span> |
          <FaStar className="text-amber-400" />
          <span className="text-emerald-700 font-semibold">Data-Driven Thinker</span> |
          <FaStar className="text-amber-400" />
          <span className="text-purple-700 font-semibold">Proven Leadership</span> as Peer Counsellor & ACM President |
          <FaStar className="text-amber-400" />
          <span className="text-indigo-700 font-semibold">Delivering Impact</span> through Code and Compassion
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
