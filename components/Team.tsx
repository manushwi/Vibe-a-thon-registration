import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail,ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  
  {
    name: 'Tanishak Tyagi',
    role: 'Society Head',
    image: '/tanish.jpg',
    linkedin: 'https://www.linkedin.com/in/tanishak-tyagi-744501319/',

  },
  {
    name: 'Aman',
    role: 'Society Head',
    image: '/aman.jpg',
    linkedin: 'https://www.linkedin.com/in/aman-kumar-pal-79b40826b/',

  },
  {
    name: 'Manushwi',
    role: 'Technical Head',
    image: '/manushwi.png',
    linkedin: 'https://www.linkedin.com/in/manushwi-raj-bhardwaj/',

  },
  {
    name: 'Bhavya',
    role: 'Executive',
    image: '/bhavya.jpg',
    linkedin: "https://www.linkedin.com/in/bhavya-yadav-841a3b379/",
  },
  {
    name: 'Sachin',
    role: 'Secaratary',
    image: '/sachin.jpg',
    linkedin: 'https://www.linkedin.com/in/sachin-yadav-12702a2a3/',
  },
  {
    name: 'Ratnesh',
    role: 'Secaratary',
    image: '/ratnesh.jpg',
    linkedin: 'https://www.linkedin.com/in/ratnesh-chaturvedi-80ab94289/',
  },
  {
    name: 'Urmi',
    role: 'ICT Team',
    image: '/urmi.jpg',
    linkedin: '#',
  },
  {
    name: 'Vanshika',
    role: 'Technical Team',
    image: '/vanshika.jpg',
    linkedin: '#',
  },
  
  {
    name: 'Vedant',
    role: 'Technical Team',
    image: '/vedant.jpg',
    linkedin: 'https://www.linkedin.com/in/vedantpareek1947/',
  },
  
  {
    name: 'Dhruv',
    role: 'Technical Team',
    image: '/dhruv.jpg',
    linkedin: 'https://www.linkedin.com/in/dhruv-chaudhary-6125ab368/',
  },
  
  {
    name: 'Gaurang',
    role: 'Technical Team',
    image: '/gaurang.jpg',
    linkedin: 'https://www.linkedin.com/in/gaurang-parashar-97026235a/',
  },
  {
    name: 'Vandana',
    role: 'Technical Team',
    image: '/vandana.jpg',
    linkedin: '#',
  },
];

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [membersPerSlide, setMembersPerSlide] = useState(4);

  // Responsive behavior: 1 card on mobile, 4 on desktop
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) setMembersPerSlide(1);
      else if (window.innerWidth < 1024) setMembersPerSlide(2);
      else setMembersPerSlide(4);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const totalSlides = Math.ceil(teamMembers.length / membersPerSlide);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [membersPerSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : (prev - 1) % totalSlides
    );
  };

  const startIndex = currentSlide * membersPerSlide;
  const visibleMembers = teamMembers.slice(
    startIndex,
    startIndex + membersPerSlide
  );

  // Wrap around if at end
  if (visibleMembers.length < membersPerSlide) {
    visibleMembers.push(
      ...teamMembers.slice(0, membersPerSlide - visibleMembers.length)
    );
  }

  return (
    <section
      id="team"
      className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-500">Team</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The brilliant minds behind Excalibur 2026
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    x: dir > 0 ? "100%" : "-100%",
                    opacity: 0,
                  }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir) => ({
                    x: dir > 0 ? "-100%" : "100%",
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`grid gap-8 ${
                  membersPerSlide === 1
                    ? "grid-cols-1"
                    : membersPerSlide === 2
                    ? "grid-cols-2"
                    : "grid-cols-4"
                }`}
              >
                {visibleMembers.map((member, index) => (
                  <div key={index} className="relative group">
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

                        <div className="flex gap-3 justify-center">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            className="p-2 bg-orange-500/10 rounded-lg hover:bg-orange-500 hover:scale-110 transition-all duration-300"
                          >
                            <Linkedin className="w-4 h-4 text-orange-500 group-hover:text-black transition-colors duration-300" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-900/70 hover:bg-orange-500/80 p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-900/70 hover:bg-orange-500/80 p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide
                    ? "bg-orange-500 scale-110"
                    : "bg-gray-600 hover:bg-orange-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;