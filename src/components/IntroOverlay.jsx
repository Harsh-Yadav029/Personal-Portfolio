import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const IntroOverlay = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center p-8"
        >
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-between items-end"
              >
                <span className="font-display text-2xl font-black tracking-tighter text-white">
                  ARCHITECT<span className="text-indigo-500">.</span>AI
                </span>
                <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                  {progress}%
                </span>
              </motion.div>
              
              <div className="h-px w-full bg-white/5 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em]">
                Initializing Neural Infrastructure...
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
