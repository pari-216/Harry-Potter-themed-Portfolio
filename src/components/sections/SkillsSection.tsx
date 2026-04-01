import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Wand2, Flame, Zap, Shield, Eye } from 'lucide-react';

const skills = [
  { name: 'C Programming', level: 85, icon: Shield, color: 'from-primary to-ethereal' },
  { name: 'C++ (DSA)', level: 80, icon: Zap, color: 'from-magical to-primary' },
  { name: 'JavaScript', level: 75, icon: Flame, color: 'from-accent to-magical' },
  { name: 'HTML', level: 90, icon: Eye, color: 'from-ethereal to-primary' },
  { name: 'CSS', level: 85, icon: Wand2, color: 'from-primary to-accent' },
  { name: 'Problem Solving', level: 80, icon: Sparkles, color: 'from-magical to-ethereal' },
];

const PotionMeter = ({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:border-glow-gold transition-all">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary opacity-60"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="font-cinzel text-sm font-semibold text-foreground">
              {skill.name}
            </span>
            <span className="text-xs text-primary font-semibold">
              {skill.level}%
            </span>
          </div>
          
          {/* Potion meter */}
          <div className="potion-meter h-3 w-full border border-border/50">
            <motion.div
              className={`potion-fill bg-gradient-to-r ${skill.color}`}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
            >
              {/* Bubbles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
                    style={{ left: `${20 + i * 30}%`, bottom: '20%' }}
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 bg-magical-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-magical/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary text-glow-gold mb-4">
            Magical Abilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each skill has been carefully brewed and mastered through years of practice
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Potion flask decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 flex items-center gap-2 text-muted-foreground">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <Sparkles className="h-5 w-5 text-primary animate-glow" />
              <span className="font-cinzel text-sm">Skill Potions</span>
              <Sparkles className="h-5 w-5 text-primary animate-glow" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </motion.div>

          <div className="space-y-6 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
            {skills.map((skill, index) => (
              <PotionMeter key={skill.name} skill={skill} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Additional magical stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            {[
              { label: 'Projects Built', value: '3+' },
              { label: 'Languages Known', value: '3+' },
              { label: 'Cups of Coffee', value: '∞' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="font-cinzel text-2xl font-bold text-primary text-glow-gold">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
