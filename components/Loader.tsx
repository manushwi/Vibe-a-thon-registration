import React from 'react';

interface LoaderProps {
  isExiting: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isExiting }) => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50 overflow-hidden animate-fade-in">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black animate-pulse-bg"></div>
      
      <div className="relative w-64 h-64 flex justify-center items-center">
        {/* Sword SVG Animation */}
        <div className={isExiting ? 'animate-sword-exit' : 'animate-sword-heartbeat'}>
          <img src="../public/sword.png" alt="sword" className="mb-20 h-80 w-40"/>
        </div>
      </div>

      <p className="mt-20 text-primary font-orbitron tracking-widest text-lg animate-glow" style={{ animationDelay: '0.5s' }}>
        FORGING EXPERIENCE...
      </p>
    </div>
  );
};

export default Loader;
