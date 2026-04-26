import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { personal } from "../data/portfolioData";
import { fadeUp, viewportSettings } from "../animations/variants";

const SocialIcons = {
  github: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  ),
  leetcode: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M13.483 0a1.374 1.374 0 00-.961.414l-11.71 11.593a1.384 1.384 0 000 1.981l1.178 1.166a1.391 1.391 0 001.983 0l11.593-11.712a1.384 1.384 0 000-1.981L14.387.414A1.374 1.374 0 0013.483 0zM4.574 13.474a1.384 1.384 0 000 1.981l1.178 1.166a1.391 1.391 0 001.983 0l1.166-1.178a1.384 1.384 0 000-1.981l-1.178-1.166a1.391 1.391 0 00-1.983 0l-1.166 1.178zM22.29 13.474a1.384 1.384 0 000 1.981l-1.178 1.166a1.391 1.391 0 00-1.983 0l-1.166-1.178a1.384 1.384 0 000-1.981l1.178-1.166a1.391 1.391 0 001.983 0l1.166 1.178zM13.483 24a1.374 1.374 0 00.961-.414l11.71-11.593a1.384 1.384 0 000-1.981l-1.178-1.166a1.391 1.391 0 00-1.983 0l-11.593 11.712a1.384 1.384 0 000 1.981l1.178 1.166a1.374 1.374 0 00.904.414z"/></svg>
  )
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 px-8 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Professional Summary & Status */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
              className="space-y-10"
            >
              <div className="space-y-6">
                <span className="text-[11px] text-cyan-400 uppercase tracking-[0.4em] font-bold block">Contact_Module</span>
                <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.8] tracking-tighter uppercase">
                  ESTABLISH <br /> 
                  <span className="text-white/10">SYNC.</span>
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-md">
                I'm currently looking for new opportunities and collaborations. If you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                 <a 
                   href={`mailto:${personal.email}`}
                   className="px-8 py-3 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all"
                 >
                   Email Me
                 </a>
                 <a 
                   href="/resume.pdf"
                   className="px-8 py-3 rounded-full border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                 >
                   View Resume
                 </a>
              </div>
            </motion.div>

            {/* System Status Panel */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] space-y-6"
            >
               <div className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">System_Status</div>
               <div className="space-y-6">
                  {[
                    { label: "Communication Channel", val: "ACTIVE", active: true },
                    { label: "Response Time", val: "< 24 HOURS", active: false },
                    { label: "Availability", val: "OPEN TO OPPORTUNITIES", active: true },
                  ].map(stat => (
                    <div key={stat.label} className="flex justify-between items-center group">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</span>
                      <div className="flex items-center gap-3">
                        {stat.active && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                        <span className="text-[10px] font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-widest">{stat.val}</span>
                      </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive Communication Interface */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
              className="rounded-[3rem] border border-white/10 bg-[#05070a] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
            >
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none" />

               {/* Click-to-Copy Header */}
               <div className="relative z-10 mb-12 p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col md:flex-row justify-between items-center gap-6 group/copy cursor-pointer" onClick={handleCopy}>
                  <div className="space-y-1 text-center md:text-left">
                    <div className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-bold">Direct_Link</div>
                    <div className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover/copy:text-cyan-400 transition-colors">{personal.email}</div>
                  </div>
                  <button className="px-6 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all">
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
               </div>

               {/* Interactive Form */}
               <form className="relative z-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold ml-4">Full_Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white focus:border-cyan-400/50 focus:bg-cyan-400/5 outline-none transition-all placeholder:text-white/10 text-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold ml-4">Email_Handle</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white focus:border-cyan-400/50 focus:bg-cyan-400/5 outline-none transition-all placeholder:text-white/10 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold ml-4">Message_Buffer</label>
                    <textarea 
                      rows="4"
                      placeholder="Share your architectural requirements or project sync details..."
                      className="w-full px-6 py-6 rounded-3xl bg-white/[0.03] border border-white/5 text-white focus:border-cyan-400/50 focus:bg-cyan-400/5 outline-none transition-all placeholder:text-white/10 text-sm resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 rounded-full bg-cyan-400 text-black font-black text-sm uppercase tracking-[0.2em] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all active:scale-95"
                    onClick={(e) => e.preventDefault()}
                  >
                    Initiate Connection
                  </button>
               </form>

               {/* Social Footer */}
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 mt-12 pt-8 border-t border-white/5">
                  <div className="text-[9px] text-white/20 font-mono tracking-widest">ESTABLISHING_ENCRYPTED_SYNC...</div>
                  <div className="flex gap-6">
                     {Object.entries(personal.links).map(([key, url]) => (
                       <a 
                         key={key} 
                         href={url} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.01] flex items-center justify-center text-white/30 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all"
                         title={key}
                       >
                         {SocialIcons[key] || key.substring(0, 2)}
                       </a>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}