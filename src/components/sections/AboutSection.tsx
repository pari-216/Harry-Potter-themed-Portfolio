import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import parchmentTexture from '@/assets/parchment-texture.jpg';
import { Scroll, Award, BookOpen, Wand2 } from 'lucide-react';

const badges = [
  { icon: Wand2, label: 'C & C++', description: 'DSA & Problem Solving' },
  { icon: BookOpen, label: 'JavaScript', description: 'Interactive Web Apps' },
  { icon: Award, label: 'Web Development', description: 'HTML & CSS' },
  { icon: Scroll, label: 'Soft Skills', description: 'Communication, Teamwork, Adaptability' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 bg-magical-gradient overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary text-glow-gold mb-4">
            The Wizard's Profile
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A chronicle of magical abilities and enchanted expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Parchment Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative rounded-lg p-8 md:p-12 shadow-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${parchmentTexture})`,
                backgroundSize: 'cover',
              }}
            >
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/60" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/60" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/60" />

              <div className="text-parchment-foreground">
                <h3 className="font-cinzel text-2xl md:text-3xl font-bold mb-2 text-accent">
                  Pari Garg
                </h3>
                <p className="font-cinzel text-sm text-accent/70 mb-6 italic">
                  First-Year B.Tech CSE Student • Aspiring Developer
                </p>

                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    Greetings, fellow traveler! I am a first-year Computer Science Engineering student 
                    with a strong interest in programming and web development.
                  </p>
                  <p>
                    I enjoy solving logical problems using C and C++ and building interactive 
                    web applications using HTML, CSS, and JavaScript.
                  </p>
                  <p>
                    I am constantly learning, exploring new technologies, and working on 
                    improving my development skills to contribute meaningfully to the tech community.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-4 border-t border-accent/30">
                  <p className="font-cinzel italic text-accent/80">
                    "Any sufficiently advanced technology is indistinguishable from magic."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Magical Badges */}
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 border-glow-gold"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-magical/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <badge.icon className="h-10 w-10 text-primary mb-4 group-hover:animate-glow" />
                <h4 className="font-cinzel text-lg font-semibold text-foreground mb-2">
                  {badge.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
