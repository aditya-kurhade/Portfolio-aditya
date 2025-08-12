import React from 'react';

const Loader = () => (
  <div style={{
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',  // white background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    zIndex: 9999,
  }}>
    <div style={{
      display: 'flex',
      gap: '12px',
    }}>
      {[...Array(4)].map((_, i) => (
        <div key={i} style={{
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          backgroundColor: '#3b82f6',  // modern blue
          animation: 'pulse 1.4s ease-in-out infinite',
          animationDelay: `${i * 0.3}s`,
        }} />
      ))}
    </div>

    <style>{`
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.5);
          opacity: 0.5;
        }
      }
    `}</style>
  </div>
);

export default Loader;
