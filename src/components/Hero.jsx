import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { WireframeScene } from "./WireframeScene";

const titles = [
  "Web Developer",
  "Full Stack Developer",
  "AI Engineer",
  "System Architect"
];


export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];
      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 pb-8 px-8 overflow-visible">
      {/* Canvas Particles */}
      <div className="absolute inset-0 z-0">
        <WireframeScene />
      </div>

      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, black 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Ambient Glow 1 — cyan top-left */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: "-10%", left: "5%",
          width: "50vw", height: "50vw",
          background: "radial-gradient(ellipse, rgba(34,211,238,0.10) 0%, transparent 65%)",
          animation: "heroGlow 9s ease-in-out infinite",
        }}
      />

      {/* Ambient Glow 2 — violet bottom-right */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          bottom: "-5%", right: "5%",
          width: "40vw", height: "40vw",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 65%)",
          animation: "heroGlow 12s ease-in-out infinite reverse",
        }}
      />

      <style>{`
        @keyframes heroGlow {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.08) translate(2%, 2%); }
        }
      `}</style>

      {/* Main Content — Left Aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Typewriter Titles */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-4 mb-8"
          style={{
            padding: "0.65rem 1.75rem",
            border: "1px solid rgba(34,211,238,0.2)",
            borderRadius: "999px",
            background: "rgba(7,8,12,0.9)",
            fontFamily: "monospace",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#e8eaf0",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            minHeight: "52px",
            minWidth: "320px",
          }}
        >
          <span style={{
            width: 9, height: 9, borderRadius: "50%", background: "#22d3ee",
            flexShrink: 0, display: "inline-block",
            boxShadow: "0 0 12px rgba(34,211,238,0.8)",
            animation: "titleDotPulse 2s infinite",
          }} />
          {text}
          <span style={{
            display: "inline-block", width: 3, height: "1.1em",
            background: "#22d3ee", marginLeft: 2, borderRadius: 1,
            animation: "blink 0.9s step-end infinite",
          }} />
          <style>{`
            @keyframes titleDotPulse {
              0%,100% { opacity: 1; box-shadow: 0 0 12px rgba(34,211,238,0.8); }
              50% { opacity: 0.5; box-shadow: 0 0 20px rgba(34,211,238,0.2); }
            }
            @keyframes blink {
              0%,100% { opacity: 1; } 50% { opacity: 0; }
            }
          `}</style>
        </motion.div>

        {/* Headline */}
        <div className="space-y-0 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <h1 style={{
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "#e8eaf0",
              margin: 0,
            }}>
              Full Stack +
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <h1 style={{
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              margin: 0,
              background: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              AI Engineer
            </h1>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "rgba(232,234,240,0.45)",
            maxWidth: "480px",
            marginBottom: "2.5rem",
          }}
        >
          Building intelligent systems with RAG and autonomous agents.<br />
          Architecting the future of human-computer interaction through<br />
          precise engineering and advanced neural architectures.
        </motion.p>

        {/* Buttons + Social Icons — one row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap items-center gap-4"
        >
          {/* CTA Buttons */}
          <a
            href="#projects"
            style={{
              padding: "0.85rem 2rem",
              background: "#22d3ee",
              color: "#07080c",
              fontFamily: "monospace",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              fontWeight: 700,
              borderRadius: "10px",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(34,211,238,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Show My Work →
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.85rem 2rem",
              background: "transparent",
              color: "#e8eaf0",
              fontFamily: "monospace",
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              fontWeight: 600,
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "none"; }}
          >
            Get In Touch
          </a>

          {/* Divider */}
          <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.08)", margin: "0 4px" }} />

          {/* Social Icons */}
          {[
            { id: "github", url: "https://github.com/Harsh-Yadav029", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg> },
            { id: "linkedin", url: "https://www.linkedin.com/in/harsh-kumar-yadav-a22092297/", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
            { id: "leetcode", url: "https://leetcode.com/u/HARSHKUMARYADAV/", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg> },
            { id: "twitter", url: "https://x.com/HAR5H_YADAV", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
            { id: "instagram", url: "https://www.instagram.com/_harsssh_45?igsh=MW50NmVvN253em90bw==", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
          ].map(s => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.id}
              style={{
                width: 38, height: 38, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(232,234,240,0.35)",
                transition: "color 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#22d3ee";
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(34,211,238,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "rgba(232,234,240,0.35)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

      </div>


    </section>
  );
}