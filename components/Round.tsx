import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain } from 'lucide-react';

const rounds = [
  {
    icon: Code2,
    title: 'REPLICATE & INNOVATE',
    description:
      'Build a responsive web page from given assets. Replicate the design and add creative enhancements.',
    date: 'Nov 6, 2025',
    time: '10:00 AM – 12:30 PM',
  },
  {
    icon: Brain,
    title: 'Ready 4 Production',
    description:
      'Turn your front-end into a full-stack, production-ready app with backend and database integration.',
    date: 'Nov 6, 2025',
    time: '1:30 PM – 4:00 PM',
  },
];

const Round = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="round"
      className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Animated glowing dots */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Rounds</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Participate in thrilling competitions across multiple domains
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {rounds.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-orange-600/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative bg-zinc-900 rounded-xl border border-orange-500/30 group-hover:border-orange-500 transition-all duration-300 overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-28 h-28 bg-orange-500/10 rounded-bl-full" />

                <div className="relative p-6 sm:p-8">
                  <div className="mb-5 inline-block p-4 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
                    <event.icon className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-gray-400 mb-4 min-h-[60px] text-sm md:text-base">
                    {event.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-orange-500/30 text-sm md:text-base">
                    <span className="text-orange-500 font-semibold">{event.date}</span>
                    <span className="text-white font-bold">{event.time}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Round;
