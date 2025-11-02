import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  
  {
    name: 'Tanishak Tyagi',
    role: 'Society Head',
    image: '../public/tanish.jpg',
    linkedin: 'https://www.linkedin.com/in/tanishak-tyagi-744501319/',

  },
  {
    name: 'Aman',
    role: 'Society Head',
    image: '../public/aman.jpg',
    linkedin: 'https://www.linkedin.com/in/aman-kumar-pal-79b40826b/',
    
  },
  {
    name: 'Manushwi',
    role: 'Technical Lead',
    image: '../public/manushwi.png',
    linkedin: 'https://www.linkedin.com/in/manushwi-raj-bhardwaj/',

  },
  {
    name: 'Bhavya',
    role: 'Marketing Lead',
    image: '../public/bhavya.jpg',
    linkedin: 'https://www.linkedin.com/in/bhavya-yadav-841a3b379/',

  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-500">Team</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The brilliant minds behind Excalibur 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-zinc-900 rounded-lg border border-orange-500/30 group-hover:border-orange-500 transition-all duration-300 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>

                  <div className="flex gap-3">
                    <a
                      href={teamMembers.linkedin}
                      className="p-2 bg-orange-500/10 rounded-lg hover:bg-orange-500 hover:scale-110 transition-all duration-300 group/icon"
                    >
                      <Linkedin className="w-4 h-4 text-orange-500 group-hover/icon:text-black transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
