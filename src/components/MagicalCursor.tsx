import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
}

const MagicalCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const addParticle = useCallback((x: number, y: number) => {
    const newParticle: Particle = {
      id: Date.now() + Math.random(),
      x,
      y,
    };
    setParticles(prev => [...prev.slice(-15), newParticle]);
  }, []);

  useEffect(() => {
    let frameCount = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      frameCount++;
      if (frameCount % 3 === 0) {
        addParticle(e.clientX, e.clientY);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [addParticle]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles(prev => prev.slice(-10));
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Main cursor glow */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 20,
              height: 20,
              background: 'radial-gradient(circle, hsla(45, 85%, 55%, 0.8) 0%, hsla(45, 85%, 55%, 0.4) 40%, transparent 70%)',
              boxShadow: '0 0 15px hsla(45, 85%, 55%, 0.6), 0 0 30px hsla(270, 60%, 50%, 0.3)',
            }}
            animate={{
              x: mousePosition.x - 10,
              y: mousePosition.y - 10,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          />
        )}
      </AnimatePresence>

      {/* Trailing particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: 6,
              height: 6,
              background: 'radial-gradient(circle, hsla(45, 85%, 60%, 0.9) 0%, hsla(270, 60%, 55%, 0.6) 50%, transparent 100%)',
            }}
            initial={{
              x: particle.x - 3,
              y: particle.y - 3,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              opacity: 0,
              scale: 0,
              y: particle.y - 3 + 20,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MagicalCursor;
