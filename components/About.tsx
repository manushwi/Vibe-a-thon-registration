
import React from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    icon: '💡',
    title: 'Innovative Workshops',
    description: 'Hands-on sessions with industry experts to sharpen your skills.',
  },
  {
    icon: '🏆',
    title: 'Fierce Competitions',
    description: 'Code, build, and compete for glory and amazing prizes.',
  },
  {
    icon: '🗣️',
    title: 'Inspiring Talks',
    description: 'Listen to tech visionaries share their journey and insights.',
  },
];

const FeatureCard: React.FC<{ feature: typeof features[0]; index: number }> = ({ feature, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-secondary p-8 rounded-lg border border-gray-800 text-center"
    >
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-orbitron font-bold text-primary mb-2">{feature.title}</h3>
      <p className="text-accent">{feature.description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">About <span className="text-primary">CodezY</span></h2>
            <p className="text-lg text-accent max-w-3xl mx-auto mb-16">
            CodezY is more than just a technical society; it's a hub of innovation, a community of creators, and a gateway to the future. We unite students, developers, and tech enthusiasts to learn, collaborate, and grow in an inspiring and dynamic environment.
            </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
