import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: `radial-gradient(at 20% 20%, hsla(217, 91%, 60%, 0.3) 0px, transparent 50%),
                           radial-gradient(at 80% 20%, hsla(285, 91%, 60%, 0.3) 0px, transparent 50%),
                           radial-gradient(at 20% 80%, hsla(333, 91%, 60%, 0.3) 0px, transparent 50%),
                           radial-gradient(at 80% 80%, hsla(39, 91%, 60%, 0.3) 0px, transparent 50%)`,
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;