import { motion } from "framer-motion";

export const EditorialBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle Grainy Overlay */}
      <div className="absolute inset-0 silk-bg" />
      
      {/* Extremely Soft Light Leak */}
      <motion.div
        animate={{
          opacity: [0.03, 0.07, 0.03],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#d4af37]/5 rounded-full blur-[150px]"
      />
      
      <motion.div
        animate={{
          opacity: [0.02, 0.05, 0.02],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] left-[-20%] w-[70%] h-[70%] bg-white/5 rounded-full blur-[150px]"
      />
    </div>
  );
};
