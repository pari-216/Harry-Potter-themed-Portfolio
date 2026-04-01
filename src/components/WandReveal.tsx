import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface WandRevealProps {
  onComplete: () => void;
}

const WandReveal = ({ onComplete }: WandRevealProps) => {
  const [phase, setPhase] = useState<'dark' | 'wand' | 'reveal' | 'done'>('dark');

  useEffect(() => {
    // Start with darkness, then show wand
    const timer1 = setTimeout(() => setPhase('wand'), 800);
    // After wand animation, reveal page
    const timer2 = setTimeout(() => setPhase('reveal'), 2500);
    // Complete and remove overlay
    const timer3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Black background that reveals */}
          <motion.div
            className="absolute inset-0 bg-black"
            animate={phase === 'reveal' ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />

          {/* Magical particles during reveal */}
          {(phase === 'wand' || phase === 'reveal') && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary"
                  style={{
                    left: `${50 + (Math.random() - 0.5) * 60}%`,
                    top: `${50 + (Math.random() - 0.5) * 60}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 300,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.02,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>
          )}

          {/* Wand */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, rotate: -45, x: -100 }}
            animate={
              phase === 'dark'
                ? { opacity: 0, rotate: -45, x: -100 }
                : phase === 'wand'
                ? { opacity: 1, rotate: 15, x: 0 }
                : { opacity: 0, rotate: 45, x: 100, y: -50 }
            }
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {/* Wand shape */}
            <div className="relative">
              <div className="w-48 h-3 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 rounded-full shadow-lg transform -rotate-12" />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-600" />
              
              {/* Wand tip glow */}
              <motion.div
                className="absolute -left-4 top-1/2 -translate-y-1/2"
                animate={phase === 'wand' ? {
                  boxShadow: [
                    '0 0 20px 10px hsl(var(--primary))',
                    '0 0 60px 30px hsl(var(--primary))',
                    '0 0 20px 10px hsl(var(--primary))',
                  ],
                } : {}}
                transition={{ duration: 0.5, repeat: 3 }}
              >
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              </motion.div>
            </div>
          </motion.div>

          {/* Lumos text */}
          <motion.p
            className="absolute font-cinzel text-3xl md:text-5xl text-primary text-glow-gold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              phase === 'wand'
                ? { opacity: 1, scale: 1 }
                : phase === 'reveal'
                ? { opacity: 0, scale: 1.5 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.5, delay: phase === 'wand' ? 0.5 : 0 }}
            style={{ top: '60%' }}
          >
            Lumos ✨
          </motion.p>

          {/* Light burst on reveal */}
          {phase === 'reveal' && (
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 3, 5] }}
              transition={{ duration: 1.2 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WandReveal;
