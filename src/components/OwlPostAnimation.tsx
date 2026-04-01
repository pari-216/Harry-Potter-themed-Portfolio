import { motion } from 'framer-motion';
import { Bird } from 'lucide-react';

interface OwlPostAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

const OwlPostAnimation = ({ isVisible, onComplete }: OwlPostAnimationProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 3000);
      }}
    >
      <div className="relative">
        {/* Letter/Parchment */}
        <motion.div
          className="relative"
          initial={{ scale: 1, rotateX: 0 }}
          animate={{
            scale: [1, 0.8, 0.6, 0.4],
            rotateX: [0, 0, 0, 90],
            y: [0, 0, 0, -20],
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.3, 0.6, 1],
            ease: 'easeInOut',
          }}
        >
          {/* Parchment paper */}
          <div className="w-64 h-80 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-2xl p-6 relative">
            {/* Wax seal */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-red-700 flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <span className="text-amber-200 font-cinzel font-bold">HP</span>
            </motion.div>

            {/* Letter content lines */}
            <div className="space-y-3">
              <div className="h-2 bg-amber-800/20 rounded w-3/4" />
              <div className="h-2 bg-amber-800/20 rounded w-full" />
              <div className="h-2 bg-amber-800/20 rounded w-5/6" />
              <div className="h-2 bg-amber-800/20 rounded w-full" />
              <div className="h-2 bg-amber-800/20 rounded w-2/3" />
            </div>

            {/* Decorative quill marks */}
            <div className="absolute bottom-16 right-6 font-cinzel text-amber-800/40 italic text-sm">
              ~ Magical Post ~
            </div>
          </div>
        </motion.div>

        {/* Envelope that wraps the letter */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0, 1, 1, 1],
            scale: [0.5, 0.5, 1, 1, 0.3],
            y: [0, 0, 0, 0, -150],
            x: [0, 0, 0, 0, 200],
          }}
          transition={{
            duration: 3,
            times: [0, 0.4, 0.6, 0.7, 1],
            ease: 'easeInOut',
          }}
        >
          {/* Envelope shape */}
          <div className="relative w-48 h-32">
            {/* Envelope body */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-xl" />
            
            {/* Envelope flap */}
            <motion.div
              className="absolute -top-8 left-0 right-0 h-16 origin-bottom"
              initial={{ rotateX: 180 }}
              animate={{ rotateX: [180, 180, 0] }}
              transition={{ duration: 3, times: [0, 0.6, 0.8] }}
              style={{ perspective: 1000 }}
            >
              <div 
                className="w-full h-full bg-gradient-to-b from-amber-200 to-amber-100"
                style={{
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                }}
              />
            </motion.div>

            {/* Wax seal on envelope */}
            <motion.div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-700 flex items-center justify-center shadow-lg z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1] }}
              transition={{ duration: 3, times: [0, 0.75, 0.85] }}
            >
              <span className="text-amber-200 font-cinzel font-bold text-xs">HP</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Owl that carries the letter away */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          initial={{ opacity: 0, x: -200, y: 50 }}
          animate={{
            opacity: [0, 0, 1, 1, 1, 0],
            x: [-200, -200, 0, 0, 400, 600],
            y: [50, 50, -30, -30, -200, -300],
            rotate: [0, 0, 0, -10, -20, -30],
          }}
          transition={{
            duration: 3.5,
            times: [0, 0.5, 0.65, 0.7, 0.9, 1],
            ease: 'easeInOut',
          }}
        >
          <div className="relative">
            {/* Owl body */}
            <Bird className="h-16 w-16 text-amber-100 drop-shadow-lg" />
            
            {/* Wing flapping effect */}
            <motion.div
              className="absolute -left-2 top-4"
              animate={{ rotate: [-20, 20, -20] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              <div className="w-8 h-4 bg-amber-200/50 rounded-full" />
            </motion.div>
            <motion.div
              className="absolute -right-2 top-4"
              animate={{ rotate: [20, -20, 20] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              <div className="w-8 h-4 bg-amber-200/50 rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Magical sparkles trail */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3.5, times: [0, 0.65, 0.7, 0.9, 1] }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary"
              animate={{
                x: [0, (i - 10) * 30 + Math.random() * 50],
                y: [0, -100 - Math.random() * 100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 2 + i * 0.05,
                ease: 'easeOut',
              }}
            />
          ))}
        </motion.div>

        {/* Success message */}
        <motion.div
          className="absolute top-full mt-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0, 1], y: [20, 20, 0] }}
          transition={{ duration: 3, times: [0, 0.8, 1] }}
        >
          <p className="font-cinzel text-xl text-primary text-glow-gold">
            ✨ Your owl is on its way! ✨
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OwlPostAnimation;
