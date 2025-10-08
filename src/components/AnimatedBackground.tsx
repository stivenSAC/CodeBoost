'use client';

import { motion } from 'framer-motion';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  initialX: (i * 73) % 100,
  initialY: (i * 47) % 100,
  animateX: ((i + 1) * 83) % 100,
  animateY: ((i + 1) * 59) % 100,
  duration: 15 + (i % 10),
}));

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-green-400/20 rounded-full"
          initial={{
            x: `${particle.initialX}vw`,
            y: `${particle.initialY}vh`,
          }}
          animate={{
            x: `${particle.animateX}vw`,
            y: `${particle.animateY}vh`,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "linear" as const,
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-green-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-600/10 to-green-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      />
    </div>
  );
}