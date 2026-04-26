import { motion } from "framer-motion";

export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#05070a]">
      {/* Primary Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05]" />
      
      {/* Fine Detail Grid */}
      <div className="absolute inset-0 bg-grid-blueprint-fine opacity-[0.03]" />

      {/* Decorative Corner Markers */}
      <div className="absolute top-10 left-10 w-4 h-4 border-l-2 border-t-2 border-cyan-500/20" />
      <div className="absolute top-10 right-10 w-4 h-4 border-r-2 border-t-2 border-cyan-500/20" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-l-2 border-b-2 border-cyan-500/20" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-r-2 border-b-2 border-cyan-500/20" />

      {/* Dynamic Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-pink-500/5 blur-[150px] rounded-full" />
      
      {/* Scanline Effect — Optimized for GPU */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          background: "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%)",
          backgroundSize: "100% 4px",
          willChange: "transform",
        }}
      />
    </div>
  );
}
