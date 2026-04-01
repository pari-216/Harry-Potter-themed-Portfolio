import { motion } from 'framer-motion';
import SpellText from '../SpellText';
import FloatingParticles from '../FloatingParticles';
import heroBg from '@/assets/hero-bg.jpg';
import { Sparkles, Wand2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Starfield overlay */}
      <div className="absolute inset-0 starfield opacity-40" />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6"
        >
          <Sparkles className="mx-auto h-12 w-12 text-primary animate-glow" />
        </motion.div>

        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow-gold">
          <SpellText text="Pari Garg" delay={0.3} staggerDelay={0.08} />
        </h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-8"
        >
          <p className="font-cinzel text-xl md:text-2xl lg:text-3xl text-primary text-glow-gold">
            Turning Ideas into Magic Through Code
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12"
        >
          First-Year B.Tech CSE Student • Aspiring Software Developer • Problem Solver
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="spell-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-cinzel font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Wand2 className="h-5 w-5" />
            View My Spells
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-cinzel font-semibold border-2 border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground border-glow-gold"
          >
            <Sparkles className="h-5 w-5" />
            Send Owl Post
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 2.5, duration: 0.5 },
            y: { delay: 2.5, duration: 2, repeat: Infinity }
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
