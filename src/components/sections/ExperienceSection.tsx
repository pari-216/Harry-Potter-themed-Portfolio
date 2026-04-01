import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'B.Tech – Computer Science Engineering',
    company: 'Currently in First Year',
    location: 'India',
    period: '2024 - Present',
    description: 'Pursuing Computer Science Engineering with a focus on programming, data structures, and web development. Continuously building projects and expanding technical skills.',
    highlights: ['C & C++ Programming', 'Web Development', 'Problem Solving'],
  },
  {
    id: 2,
    title: 'Class 12 (CBSE) – 91%',
    company: 'P.D Model Sr. Sec. School',
    location: 'India',
    period: '2023',
    description: 'Completed senior secondary education with outstanding academic performance, building a strong foundation in science and mathematics.',
    highlights: ['91% Score', 'CBSE Board', 'Science Stream'],
  },
  {
    id: 3,
    title: 'Class 10 (CBSE) – 90%',
    company: 'Jagannath International School',
    location: 'India',
    period: '2021',
    description: 'Completed secondary education with excellent results, developing a passion for technology and problem-solving.',
    highlights: ['90% Score', 'CBSE Board', 'Academic Excellence'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 bg-background overflow-hidden">
      {/* Map-like background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary text-glow-gold mb-4">
            The Marauder's Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            "I solemnly swear that I am up to no good" — Follow my academic journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2">
            <motion.div
              className="h-full timeline-path rounded-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                className="absolute left-8 md:left-1/2 w-6 h-6 -translate-x-1/2 rounded-full bg-background border-4 border-primary z-10 animate-glow"
              >
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              </motion.div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:border-glow-gold"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-cinzel text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <Briefcase className="h-6 w-6 text-primary/60" />
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}

          {/* End of journey marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 -bottom-4"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-glow">
              <span className="text-primary-foreground text-lg">✨</span>
            </div>
          </motion.div>
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center text-muted-foreground font-cinzel italic mt-16"
        >
          "Mischief Managed"
        </motion.p>
      </div>
    </section>
  );
};

export default ExperienceSection;
