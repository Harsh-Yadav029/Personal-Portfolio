import { motion } from "framer-motion";
import { fadeUp, viewportSettings } from "../animations/variants";

// --- Skill Data ---
const row1Skills = [
  { label: "React", color: "#61dafb", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#61dafb"/><ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61dafb" stroke-width="1.4" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61dafb" stroke-width="1.4" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61dafb" stroke-width="1.4" fill="none" transform="rotate(120 12 12)"/></svg>` },
  { label: "Node.js", color: "#68a063", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7v10l10 5 10-5V7L12 2Z" stroke="#68a063" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 7v10M7 9.5l5 2.5 5-2.5" stroke="#68a063" stroke-width="1.2"/></svg>` },
  { label: "Next.js", color: "#e8eaf0", svg: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#e8eaf0" stroke-width="1.4"/><path d="M9 8v8l7-8v8" stroke="#e8eaf0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { label: "TypeScript", color: "#3178c6", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#3178c6"/><text x="3.5" y="16.5" font-family="monospace" font-weight="900" font-size="11" fill="white">TS</text></svg>` },
  { label: "Tailwind", color: "#38bdf8", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 12c0-2.67 1.33-4 4-4 2.67 0 3.33 1.33 2 4 1.33-2.67 2.67-4 4-4 1.33 0 2 .67 2 2s-.67 2-2 2c-2.67 0-3.33 1.33-2 4-1.33-2.67-2.67-4-4-4-1.33 0-2-.67-2-2Z" stroke="#38bdf8" stroke-width="1.5"/></svg>` },
  { label: "MongoDB", color: "#4db33d", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3C9 3 7 7 7 12s2 9 5 9 5-4 5-9-2-9-5-9Z" stroke="#4db33d" stroke-width="1.4"/><path d="M12 3v18" stroke="#4db33d" stroke-width="1.4"/></svg>` },
  { label: "Docker", color: "#2496ed", svg: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="11" width="18" height="7" rx="2" stroke="#2496ed" stroke-width="1.4"/><path d="M6 11V8h3V5h3v3h3V8h3" stroke="#2496ed" stroke-width="1.3"/><circle cx="20" cy="12" r="1.5" stroke="#2496ed" stroke-width="1.2"/></svg>` },
  { label: "Firebase", color: "#ffca28", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 20L8 4l5 7 3-5 3 14L12 22 5 20Z" stroke="#ffca28" stroke-width="1.4" stroke-linejoin="round"/></svg>` },
  { label: "Python", color: "#3776ab", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3C9 3 7 5 7 8v2h5v1H6C4.5 11 3 12.5 3 14v3c0 1.5 1.5 3 3 3h1v-2H6c-.5 0-1-.5-1-1v-3c0-.5.5-1 1-1h6v-2H7V8c0-1 .5-2 2-2h1.5c1.5 0 2 1 2 2v.5h2V8c0-2-1.5-5-3-5H12Z" stroke="#3776ab" stroke-width="1.2"/><circle cx="9.5" cy="5.5" r=".8" fill="#ffca28"/></svg>` },
  { label: "LangChain", color: "#22d3ee", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 8l4 4-4 4M21 8l-4 4 4 4M8 3l4 4-4 4m8-8l-4 4 4 4" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="2" stroke="#22d3ee" stroke-width="1.4"/></svg>` },
  { label: "Pinecone", color: "#6ee7b7", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l6 18H6L12 3Z" stroke="#6ee7b7" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 3v18M8 12h8" stroke="#6ee7b7" stroke-width="1.2"/></svg>` },
  { label: "Git", color: "#f05032", svg: `<svg viewBox="0 0 24 24" fill="none"><circle cx="18" cy="6" r="2.5" stroke="#f05032" stroke-width="1.4"/><circle cx="6" cy="18" r="2.5" stroke="#f05032" stroke-width="1.4"/><circle cx="6" cy="9" r="2.5" stroke="#f05032" stroke-width="1.4"/><path d="M8.5 9H15a3 3 0 0 1 3 3v1M6 11.5v4" stroke="#f05032" stroke-width="1.4" stroke-linecap="round"/></svg>` },
];

const row2Skills = [
  { label: "Gemini", color: "#8b5cf6", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 7 7 7 12s5 9 5 9 5-4 5-9-5-9-5-9Z" stroke="#8b5cf6" stroke-width="1.4"/><path d="M3 12h18" stroke="#8b5cf6" stroke-width="1.4"/><ellipse cx="12" cy="12" rx="9" ry="4" stroke="#8b5cf6" stroke-width="1.2"/></svg>` },
  { label: "Groq", color: "#f97316", svg: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#f97316" stroke-width="1.4"/><path d="M8 12h8M12 8v8" stroke="#f97316" stroke-width="1.6" stroke-linecap="round"/></svg>` },
  { label: "Express", color: "#e8eaf0", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M4 12l4-4M4 12l4 4" stroke="#e8eaf0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="8" r="1.5" fill="#e8eaf0"/><circle cx="18" cy="16" r="1.5" fill="#e8eaf0"/></svg>` },
  { label: "Vercel", color: "#e8eaf0", svg: `<svg viewBox="0 0 24 24" fill="#e8eaf0"><path d="M12 3L22 21H2L12 3Z"/></svg>` },
  { label: "AWS", color: "#ff9900", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M6.5 14.5s-2 .5-2 2.5 2 3 4 2.5M17.5 14.5s2 .5 2 2.5-2 3-4 2.5" stroke="#ff9900" stroke-width="1.4" stroke-linecap="round"/><path d="M4 10c0-4 3.6-7 8-7s8 3 8 7c0 2-1 3.5-2.5 4.5" stroke="#ff9900" stroke-width="1.4" stroke-linecap="round"/><path d="M4 10c0 1.5 1 3 2.5 4" stroke="#ff9900" stroke-width="1.4" stroke-linecap="round"/></svg>` },
  { label: "Figma", color: "#a78bfa", svg: `<svg viewBox="0 0 24 24" fill="none"><rect x="8" y="2" width="8" height="6" rx="2" stroke="#a78bfa" stroke-width="1.4"/><rect x="8" y="9" width="8" height="6" rx="2" stroke="#a78bfa" stroke-width="1.4"/><rect x="8" y="16" width="4" height="6" rx="2" stroke="#a78bfa" stroke-width="1.4"/><circle cx="16" cy="12" r="3" stroke="#f472b6" stroke-width="1.4"/></svg>` },
  { label: "Redux", color: "#764abc", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M15 4a8 8 0 0 1 2 10M9 4a8 8 0 0 0-2 10M9 20a8 8 0 0 0 6 0" stroke="#764abc" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="12" r="2" stroke="#764abc" stroke-width="1.4"/></svg>` },
  { label: "C++", color: "#00599c", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#00599c"/><text x="3.5" y="16" font-family="monospace" font-weight="900" font-size="9.5" fill="white">C++</text></svg>` },
  { label: "JWT", color: "#d63aff", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke="#d63aff" stroke-width="1.4" stroke-linecap="round"/><path d="M12 3l3 3-3 3-3-3 3-3ZM12 21l3-3-3-3-3 3 3 3Z" stroke="#d63aff" stroke-width="1.2" stroke-linejoin="round"/></svg>` },
  { label: "Vite", color: "#bd34fe", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 3l10 18L21 3" stroke="#bd34fe" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 3l5 9" stroke="#41d1ff" stroke-width="1.6" stroke-linecap="round"/></svg>` },
  { label: "Mongoose", color: "#cc0000", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3C8 3 5 7 5 12s3 9 7 9 7-4 7-9-3-9-7-9Z" stroke="#cc0000" stroke-width="1.4"/><path d="M12 7v10M9 9l6 0M9 15l6 0" stroke="#cc0000" stroke-width="1.2" stroke-linecap="round"/></svg>` },
  { label: "PostgreSQL", color: "#336791", svg: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="8" rx="8" ry="4" stroke="#336791" stroke-width="1.4"/><path d="M4 8v8c0 2.2 3.6 4 8 4s8-1.8 8-4V8" stroke="#336791" stroke-width="1.4"/><path d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4" stroke="#336791" stroke-width="1.2"/></svg>` },
];

function SkillPill({ label, color, svg }) {
  return (
    <div className="skill-pill-item flex-shrink-0 flex flex-col items-center gap-3 cursor-default group mx-4">
      <div
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center border transition-all duration-300 relative"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderColor: "rgba(255,255,255,0.07)",
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: svg }} className="w-9 h-9 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full" />
      </div>
      <span
        className="font-mono text-[11px] tracking-wider whitespace-nowrap transition-colors duration-300"
        style={{ color: "rgba(232,234,240,0.35)", letterSpacing: "0.06em" }}
      >
        {label}
      </span>
      <style>{`
        .skill-pill-item:hover > div:first-child {
          border-color: rgba(34,211,238,0.45) !important;
          background: rgba(34,211,238,0.07) !important;
          box-shadow: 0 0 28px rgba(34,211,238,0.18), inset 0 0 14px rgba(34,211,238,0.05);
        }
        .skill-pill-item:hover span {
          color: #22d3ee !important;
        }
        .skill-pill-item {
          transform: translateY(0);
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .skill-pill-item:hover {
          transform: translateY(-6px);
        }
      `}</style>
    </div>
  );
}

function MarqueeRow({ skills, direction = "left", speed = 40 }) {
  const doubled = [...skills, ...skills];
  const animX = direction === "left"
    ? { x: ["0%", "-50%"] }
    : { x: ["-50%", "0%"] };

  return (
    <div className="overflow-hidden py-2 relative">
      <motion.div
        className="flex w-max"
        animate={animX}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.label}-${i}`} {...skill} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <span
            style={{
              fontFamily: "'Inter', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#818cf8",
              fontWeight: 600,
              display: "block",
              marginBottom: "0.75rem",
              opacity: 0.85,
            }}
          >
            Arsenal
          </span>
          <h2
            style={{
              margin: 0,
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              display: "flex",
              alignItems: "baseline",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                fontWeight: 900,
                color: "#e8eaf0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              My
            </span>
            <span
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                fontWeight: 800,
                fontStyle: "italic",
                color: "transparent",
                WebkitTextStroke: "1px rgba(232,234,240,0.2)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Skills.
            </span>
          </h2>
          {/* Divider */}
          <div
            style={{
              marginTop: "1.5rem",
              height: 1,
              background: "linear-gradient(to right, rgba(129,140,248,0.35), rgba(34,211,238,0.15), transparent)",
            }}
          />
        </motion.div>
      </div>

      {/* Full-bleed marquee wrapper */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeUp}
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #07080c 30%, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #07080c 30%, transparent)" }} />

        {/* Row 1 — Left */}
        <MarqueeRow skills={row1Skills} direction="left" speed={45} />

        {/* Row 2 — Right */}
        <MarqueeRow skills={row2Skills} direction="right" speed={50} />
      </motion.div>
    </section>
  );
}