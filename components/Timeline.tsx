import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock } from 'lucide-react';

const timelineEvents = [
  {
    title: 'Registration Opens',
    time: '09:00 AM',
    date: 'November 3, 2025',
    description: 'Begin your journey by registering for vibe-a-thon by codezy',
    side: 'left',
  },
  {
    title: 'Registration Closes',
    time: '11:59 PM',
    date: 'November 5, 2025',
    description: 'Registration for participating will closes at sharp 12:00 AM',
    side: 'right',
  },
  {
    title: 'Hackathon Kickoff',
    time: '10:00 AM',
    date: 'November 6, 2025',
    description: 'Start building innovative solutions.',
    side: 'left',
  },
  {
    title: 'Resources Live',
    time: '10:00 AM',
    date: 'November 6, 2025',
    description: 'All the resources will be shared with all the participants',
    side: 'right',
  },
  {
    title: 'Round 1 end',
    time: '12:30 PM',
    date: 'November 6, 2025',
    description: 'The round 1 is finally over.',
    side: 'left',
  },
  {
    title: 'Result Announcement',
    time: '01:15 PM',
    date: 'November 6, 2025',
    description: 'Announcement of shortlisted participant for round 2',
    side: 'right',
  },
  {
    title: 'Round 2 ',
    time: '1:30 PM',
    date: 'November 6, 2025',
    description: 'Round 2 starts officially',
    side: 'left',
  },
  {
    title: 'Round 2 end ',
    time: '4:00 PM',
    date: 'November 6, 2025',
    description: 'The round 1 is finally over.',
    side: 'right',
  },
  {
    title: 'Result Announcement',
    time: '5:00 PM',
    date: 'November 6, 2025',
    description: 'Announcement of winners and prize distribution.',
    side: 'left',
  },
];

const TimelineItem = ({ event, index }: { event: typeof timelineEvents[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div
      ref={ref}
      className={`flex items-center mb-16 ${event.side === 'right' ? 'flex-row-reverse' : ''}`}
    >
      <motion.div
        initial={{ opacity: 0, x: event.side === 'left' ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: event.side === 'left' ? -100 : 100 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-5/12 hidden md:block"
      >
        <div className={`${event.side === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-zinc-900 p-6 rounded-lg border border-orange-500/30 group-hover:border-orange-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                {event.title}
              </h3>
              <div className="flex items-center gap-4 mb-3 text-orange-500 text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </span>
              </div>
              <p className="text-gray-400">{event.description}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4 }}
        className="w-2/12 flex justify-center relative z-10"
      >
        <div className="relative">
          <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-black" />
          <motion.div
            className="absolute inset-0 w-6 h-6 bg-orange-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: event.side === 'left' ? 100 : -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: event.side === 'left' ? 100 : -100 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-5/12"
      >
        <div className={`${event.side === 'left' ? 'pl-8' : 'pr-8 md:pr-0 md:pl-0'}`}>
          <div className="md:hidden mb-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-zinc-900 p-6 rounded-lg border border-orange-500/30 group-hover:border-orange-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 mb-3 text-orange-500 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </span>
                </div>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="timeline" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/5 to-black" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Event <span className="text-orange-500">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Mark your calendars for an unforgettable tech journey
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500 to-transparent transform -translate-x-1/2 hidden md:block" />

          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
