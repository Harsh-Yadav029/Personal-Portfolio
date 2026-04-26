import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";
import { fadeUp, viewportSettings } from "../animations/variants";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-16">
          <div className="space-y-6">
            <span className="text-[11px] text-cyan-400 uppercase tracking-[0.4em] font-bold block">Career Path</span>
            <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-none tracking-tighter">
              WORK <span className="text-white/10">HISTORY.</span>
            </h2>
          </div>
          <div className="font-bold text-xs text-cyan-400/20 uppercase tracking-[0.4em] mb-4">
             [ v2.0.4 // Active ]
          </div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-24 space-y-24">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              custom={i}
              variants={fadeUp}
              className="relative group"
            >
              <div className="absolute top-2 -left-[23px] md:-left-[102px] w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 space-y-4">
                  <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest">{exp.period}</div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors leading-none">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-white/30 font-bold uppercase tracking-widest pt-2">
                     <span>{exp.company}</span>
                     <span className="text-white/10">•</span>
                     <span>{exp.type}</span>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-10 space-y-8">
                    <ul className="space-y-6">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-6 group/bullet">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/20 mt-2 shrink-0 group-hover/bullet:bg-cyan-400 transition-all" />
                          <p className="text-[15px] md:text-base text-white/50 leading-relaxed font-medium group-hover/bullet:text-white transition-colors">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}