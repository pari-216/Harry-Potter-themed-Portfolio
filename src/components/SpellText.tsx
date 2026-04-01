import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SpellTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const SpellText = ({ text, className = '', delay = 0, staggerDelay = 0.05 }: SpellTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShouldAnimate(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const letters = text.split('');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: -30, rotateX: 90 }}
          animate={
            shouldAnimate
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: -30, rotateX: 90 }
          }
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            textShadow: shouldAnimate
              ? '0 0 10px hsla(45, 85%, 55%, 0.6), 0 0 20px hsla(45, 85%, 55%, 0.3)'
              : 'none',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default SpellText;
