
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Team from './components/Team';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import Round from './components/Round';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsExiting(true); // Trigger exit animations
      const exitTimer = setTimeout(() => {
        setLoading(false); // Unmount component after animation
      }, 500); // Corresponds to exit animation duration
      return () => clearTimeout(exitTimer);
    }, 3000); // Main loading time

    return () => clearTimeout(loadingTimer);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (loading) {
    return <Loader isExiting={isExiting} />;
  }

  return (
    <div className="bg-black font-sans scroll-smooth">
      {/* Custom Glowing Cursor */}
      <div 
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-100 ease-out"
        style={{
          width: '30px',
          height: '30px',
          border: '2px solid #ff7a00',
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 15px #ff7a00'
        }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Round />
        <Timeline />
        {/* <Team /> */}
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;