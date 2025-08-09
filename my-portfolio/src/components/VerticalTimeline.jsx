import React from "react";

const achievements = [
  {
    year: "June 2025",
    title: "President",
    image: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1754726059/WhatsApp_Image_2025-08-09_at_13.23.26_71bf6e6d_pwz8t3.jpg",
    desc: "ACM GHRCEM Student Chapter",
  },
  {
    year: "May 2025",
    title: "✅ Certified Peer Counsellor",
    image: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1754725792/IMG_20250524_123322_zd5oat.jpg",
    desc: "Recognized for providing impactful guidance.",
  },
  {
    year: "Feb 2025",
    title: "State Level UG Project – M-EXHIBIT 2K25",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQGAP0jv6IIwHw/feedshare-shrink_1280/B4DZc2DnFrH4Ak-/0/1748958614893?e=1757548800&v=beta&t=68HuObPEE3qzfQJ8530WBQtOxs4_UKbLR-kTTCc1Dts",
    desc: "Showcased innovative project on IoT & AI.",
  },
  {
    year: "Sep 2024",
    title: "🏆 Best ACM Member – Technical Team",
    image: "https://res.cloudinary.com/dbd5zow1e/image/upload/v1754725779/IMG_20240927_134234_1_qqf9jk.jpg",
    desc: "Honored for exceptional contributions.",
  },
  {
    year: "Jan 2024",
    title: "1st Position – Web Development Competition",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEzJt46QE2lIQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1711968618593?e=1757548800&v=beta&t=SyJ3A_V_7_XdfDEAN8mMekol5tnqN9Q4jG3ja06-hs0",
    desc: "Victory at Maga Career Conclave.",
  },
];

export default function Timeline() {
  return (
    <div className="relative w-full bg-white py-6 px-4 rounded-lg shadow-lg">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          A journey marked by passion, dedication, and innovation.
        </h2>
        <p className="text-[10px] text-gray-500 italic">
          Milestones that define the path forward
        </p>
      </div>

      {/* Zigzag Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {achievements.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow-md p-5 hover:scale-105 transition-transform duration-300 ${
              i % 2 === 0 ? "sm:translate-y-6" : "sm:-translate-y-6"
            }`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
            />

            {/* Text */}
            <p className="text-[12px] text-gray-400">{item.year}</p>
            <h3 className="text-base font-semibold text-gray-800 text-center">
              {item.title}
            </h3>
            <p className="text-[12px] text-gray-600 text-center mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
