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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsExiting(true);
      const exitTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(exitTimer);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // Detect if device is desktop
    const checkDesktop = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsDesktop(window.innerWidth > 768 && !isTouchDevice);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  if (loading) {
    return <Loader isExiting={isExiting} />;
  }

  return (
    <div className="bg-black font-sans scroll-smooth">
      {/* Custom Glowing Cursor (only on desktop) */}
      {isDesktop && (
        <div
          className="pointer-events-none fixed z-50 rounded-full transition-transform duration-100 ease-out"
          style={{
            width: '30px',
            height: '30px',
            border: '2px solid #ff7a00',
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 15px #ff7a00',
          }}
        />
      )}

      <Header />
      <main>
        <Hero />
        <About />
        <Round />
        <Timeline />
        <Team />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
