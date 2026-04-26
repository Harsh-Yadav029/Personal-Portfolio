import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logLines = [
  "INIT_KERNEL // ARCHITECT_CORE_v2.0",
  "LOADING_VECTORS // [OK]",
  "MOUNTING_FILESYSTEM // /dev/portfolio",
  "CONNECTING_NEURAL_NET // 127.0.0.1",
  "PARSING_SYMBOLS // HARSH_KUMAR_YADAV",
  "ESTABLISHING_GRID // [50x50]",
  "BOOT_SEQUENCE_COMPLETE",
];

export const TerminalBoot = () => {
  const [loading, setLoading] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < logLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 150 + Math.random() * 200);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setLoading(false), 800);
    }
  }, [currentLine]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-[#05070a] p-8 md:p-20 font-mono"
        >
          <div className="max-w-2xl space-y-2">
            {logLines.slice(0, currentLine).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === logLines.length - 1 ? "text-cyan-400 font-bold" : "text-white/40"}
              >
                <span className="mr-4 text-cyan-500/30">[{i}]</span>
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="inline-block w-2 h-4 bg-cyan-500 ml-2 align-middle"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
