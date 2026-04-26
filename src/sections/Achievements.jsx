import { motion } from "framer-motion";
import { achievements, certifications } from "../data/portfolioData";
import { fadeUp, viewportSettings } from "../animations/variants";

export default function Achievements() {
  return (
    <section id="research" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-[10px] text-cyan-500 uppercase tracking-[0.6em] font-bold block mb-6">05 // QUANTIFIED_RESULTS</span>
          <h2 className="font-display text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.8]">
            SYSTEM <br /> <span className="text-white/10">METRICS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-32">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              custom={i}
              className="bg-[#05070a] p-16 space-y-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/5 select-none">
                 METRIC_0{i} // {Math.random().toString(36).substring(7).toUpperCase()}
              </div>
              
              <div className="text-7xl font-black text-white tracking-tighter group-hover:text-cyan-500 transition-colors uppercase italic">
                {ach.countTo ? `${ach.countTo}+` : ach.value}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{ach.label}</h3>
                <p className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-bold">{ach.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-12 py-12 border-y border-cyan-500/10 px-8">
           <span className="text-[10px] text-cyan-500/20 uppercase tracking-[0.4em] font-bold">VERIFIED_HASHES //</span>
           <div className="flex flex-wrap gap-12">
             {certifications.map((cert) => (
               <div key={cert.name} className="flex items-center gap-6 group">
                 <div className="w-8 h-8 border border-white/10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                    <span className="text-xl opacity-20 group-hover:opacity-100 transition-opacity">{cert.icon}</span>
                 </div>
                 <span className="text-[10px] text-white/20 group-hover:text-cyan-400 uppercase tracking-[0.3em] font-bold transition-colors">{cert.name}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}