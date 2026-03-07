import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col justify-center items-center select-none z-[9999]">

    {/* Signature SVG — hand-drawn path animated stroke */}
    <svg
      viewBox="0 0 520 200"
      className="w-[320px] sm:w-[420px] h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sig-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* "A" */}
      <path
        d="M10,140 L30,40 L50,140 M20,100 L40,100"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '0s', '--len': '280' }}
      />
      {/* "d" */}
      <path
        d="M60,100 Q60,140 80,140 Q100,140 100,100 L100,40 L100,140"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '0.2s', '--len': '260' }}
      />
      {/* "i" */}
      <path
        d="M115,95 L115,140 M115,80 L115,82"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round"
        className="signature-letter" style={{ '--delay': '0.35s', '--len': '50' }}
      />
      {/* "t" */}
      <path
        d="M130,60 L130,140 M120,95 L140,95"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round"
        className="signature-letter" style={{ '--delay': '0.45s', '--len': '110' }}
      />
      {/* "y" */}
      <path
        d="M150,95 L160,130 M170,95 L155,160 Q150,175 140,170"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '0.55s', '--len': '130' }}
      />
      {/* "a" */}
      <path
        d="M185,95 Q185,140 200,140 Q215,140 215,110 Q215,95 200,95 Q185,95 185,110 L215,140"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '0.7s', '--len': '200' }}
      />

      {/* Decorative swoosh between first and last name */}
      <path
        d="M225,120 Q250,80 275,120"
        stroke="url(#sig-gradient)" strokeWidth="2" strokeLinecap="round"
        className="signature-letter" style={{ '--delay': '0.9s', '--len': '80' }}
        opacity="0.5"
      />

      {/* "K" */}
      <path
        d="M280,40 L280,140 M280,95 L310,40 M280,95 L310,140"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '1s', '--len': '250' }}
      />
      {/* "u" */}
      <path
        d="M320,95 L320,130 Q320,140 335,140 L335,95 L335,140"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '1.15s', '--len': '120' }}
      />
      {/* "r" */}
      <path
        d="M350,95 L350,140 M350,110 Q355,95 370,95"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '1.25s', '--len': '80' }}
      />
      {/* "h" */}
      <path
        d="M375,40 L375,140 M375,105 Q375,95 390,95 Q400,95 400,110 L400,140"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '1.35s', '--len': '170' }}
      />
      {/* "a" */}
      <path
        d="M415,95 Q415,140 430,140 Q445,140 445,110 Q445,95 430,95 Q415,95 415,110 L445,140"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '1.5s', '--len': '200' }}
      />
      {/* "d" */}
      <path
        d="M455,100 Q455,140 470,140 Q485,140 485,100 L485,40 L485,140"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '1.65s', '--len': '260' }}
      />
      {/* "e" */}
      <path
        d="M498,115 L515,115 Q515,95 505,95 Q495,95 495,115 Q495,140 510,140"
        stroke="url(#sig-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="signature-letter" style={{ '--delay': '1.8s', '--len': '120' }}
      />

      {/* Underline flourish */}
      <path
        d="M10,160 Q130,175 260,155 Q390,135 510,160"
        stroke="url(#sig-gradient)" strokeWidth="2" strokeLinecap="round"
        className="signature-letter" style={{ '--delay': '2s', '--len': '520' }}
        opacity="0.6"
      />
    </svg>

    {/* Loading dots */}
    <div className="mt-8 flex gap-1.5 items-center">
      <p className="text-xs text-slate-400 tracking-wider font-medium">Loading</p>
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1 h-1 rounded-full bg-slate-400"
          style={{
            animation: 'dotBounce 1.4s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>

    <style>{`
      .signature-letter {
        stroke-dasharray: var(--len);
        stroke-dashoffset: var(--len);
        animation: drawSignature 0.6s ease-out forwards;
        animation-delay: var(--delay);
      }

      @keyframes drawSignature {
        to {
          stroke-dashoffset: 0;
        }
      }

      @keyframes dotBounce {
        0%, 80%, 100% { opacity: 0.3; transform: scale(1); }
        40% { opacity: 1; transform: scale(1.6); }
      }
    `}</style>
  </div>
);

export default Loader;
