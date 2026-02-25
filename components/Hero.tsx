import { motion } from 'framer-motion';
import React from 'react';
import { ChevronLeft, Download, ChevronRight, Code2, Brain, Cpu, Palette, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
   <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            style={{
              width: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: ['-100%', '200%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>


      <motion.div
        className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 w-20 h-20"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="w-full h-full border-2 border-orange-500/30 rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/10 to-black" />

    <div className="relative z-10 px-4 animate-fade-in text-center">
  <h2 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-extrabold text-white mb-6">
    Introducing
  </h2>

  <h1 className="text-3xl md:text-6xl lg:text-7xl font-orbitron font-extrabold text-white mb-4">
    <span className="text-primary animate-glow">Sci -</span>en<span className="text-primary animate-glow">- quest</span>
  </h1>

  <h2 className="text-3xl md:text-6xl lg:text-7xl font-orbitron font-extrabold text-white mb-6">
    by CodezY
  </h2>

  <p className="text-base md:text-lg max-w-2xl mx-auto text-accent mb-10">
    Join the brightest minds for a celebration of technology, creativity, and the future.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
    {/* Register Button */}
    <a
      href="#register"
      className="w-full sm:w-auto inline-block border-2 border-primary text-primary font-semibold py-3 px-6 rounded-full text-sm md:text-base lg:text-lg transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-glow-orange"
    >
      Register Now
    </a>

    {/* Rulebook Button */}
    <a
      href="/Rule.pdf"
      download="Rule.pdf"
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary bg-primary text-black font-semibold py-3 px-6 rounded-full text-sm md:text-base lg:text-lg transition-all duration-300 hover:bg-transparent hover:text-primary hover:shadow-glow-orange"
    >
      <Download className="text-white" strokeWidth={1.5} />
      Rulebook
    </a>
  </div>
</div>

      
      
       
      </div>
    </section>
      
  );
};

export default Hero;
