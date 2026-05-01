import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../data/portfolioData";

/* ─── Icon Components ─── */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "currentColor" }}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "none", stroke: "currentColor", strokeWidth: 2 }}>
    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Mockup Images ─── */
const Mockups = {
  lumen: "/lumen.png",
  vidyamitra: "/vidyamitra.png",
  "mern-blog": "/blog.png",
};

/* ─── 3D Perspective Mockup Stack ─── */
function MockupStack({ project, reverse }) {
  const [hovered, setHovered] = useState(false);
  const accent = project.accent;
  const src = Mockups[project.id];

  const cards = [
    { z: -40, x: reverse ? -30 : 30, y: 24, rotate: reverse ? -8 : 8, scale: 0.88, opacity: 0.35 },
    { z: -20, x: reverse ? -16 : 16, y: 12, rotate: reverse ? -4 : 4, scale: 0.94, opacity: 0.6 },
    { z: 0, x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 520,
        height: 340,
        perspective: 1000,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ambient glow behind stack */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          background: `radial-gradient(ellipse at 50% 50%, ${accent}22 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "opacity 0.5s",
          opacity: hovered ? 1 : 0.5,
          zIndex: 0,
        }}
      />

      {cards.map((card, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 20,
            overflow: "hidden",
            border: `1px solid ${i === 2 ? accent + "33" : "rgba(255,255,255,0.05)"}`,
            background: "rgba(10,12,18,0.95)",
            transform: hovered
              ? `translateX(${card.x * (i === 2 ? 0 : 1.3)}px) translateY(${card.y * (i === 2 ? -6 : 1)}px) rotate(${card.rotate * (i === 2 ? 0 : 1.1)}deg) scale(${card.scale + (i === 2 ? 0.02 : 0)}) translateZ(${card.z}px)`
              : `translateX(${card.x}px) translateY(${card.y}px) rotate(${card.rotate}deg) scale(${card.scale}) translateZ(${card.z}px)`,
            opacity: card.opacity,
            transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.4s`,
            zIndex: i + 1,
            boxShadow: i === 2
              ? hovered
                ? `0 32px 80px rgba(0,0,0,0.6), 0 0 60px ${accent}18`
                : `0 20px 60px rgba(0,0,0,0.5)`
              : `0 8px 30px rgba(0,0,0,0.3)`,
          }}
        >
          {src ? (
            <img
              src={src}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                opacity: i === 2 ? 1 : 0.4,
                transform: hovered && i === 2 ? "scale(1.02)" : "scale(1)",
                transition: "opacity 0.5s, transform 0.7s ease",
                display: "block",
                filter: i === 2 ? "none" : "grayscale(0.5) contrast(1.1)",
              }}
            />
          ) : (
            /* Placeholder grid */
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(${accent}08 1px, transparent 1px), linear-gradient(90deg, ${accent}08 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: "monospace", color: accent, fontSize: "1.5rem", opacity: 0.5 }}>
                {project.name[0]}
              </span>
            </div>
          )}

        </div>
      ))}

      {/* Corner bracket decorations */}
      {[
        { top: -8, left: -8, borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` },
        { top: -8, right: -8, borderTop: `2px solid ${accent}`, borderRight: `2px solid ${accent}` },
        { bottom: -8, left: -8, borderBottom: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` },
        { bottom: -8, right: -8, borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` },
      ].map((style, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.4s",
            zIndex: 10,
            ...style,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Project Row ─── */
function ProjectRow({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reverse = index % 2 !== 0;
  const accent = project.accent;

  return (
    <motion.div
      ref={ref}
      className="proj-row"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      style={{
        direction: reverse ? "rtl" : "ltr",
      }}
    >
      {/* ── Text Column ── */}
      <div style={{ direction: "ltr" }}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {/* Project number + year */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                fontFamily: "'Inter', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: accent,
                fontWeight: 700,
                opacity: 0.9,
              }}
            >
              {project.number}
            </span>
            <div style={{ width: 28, height: 1, background: accent, opacity: 0.5 }} />
            <span
              style={{
                fontFamily: "'Inter', monospace",
                fontSize: "0.58rem",
                color: "rgba(255,255,255,0.22)",
                letterSpacing: "0.2em",
                fontWeight: 500,
              }}
            >
              {project.year}
            </span>
          </div>

          {/* Title */}
          <div>
            <h3
              style={{
                fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)",
                fontWeight: 900,
                color: "#e8eaf0",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                fontSize: "0.78rem",
                color: accent,
                fontWeight: 600,
                marginTop: "0.3rem",
                letterSpacing: "0.02em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.75,
              color: "rgba(232,234,240,0.4)",
              maxWidth: 440,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
            }}
          >
            {project.description.slice(0, 160)}...
          </p>

          {/* Metrics */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "0.9rem" }}>
            {project.metrics.map((m) => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 900,
                    color: accent,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', monospace",
                    fontSize: "0.55rem",
                    color: "rgba(255,255,255,0.2)",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    fontWeight: 600,
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
            {project.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'Inter', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.04em",
                  padding: "0.18rem 0.6rem",
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  color: "rgba(232,234,240,0.45)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent + "55";
                  e.currentTarget.style.color = accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "rgba(232,234,240,0.45)";
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", paddingTop: "0.5rem" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                fontWeight: 700,
                color: accent,
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "gap 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.gap = "0.75rem"; }}
              onMouseLeave={(e) => { e.currentTarget.style.gap = "0.5rem"; }}
            >
              <GitHubIcon /> View Code
            </a>
            <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                fontWeight: 600,
                color: "rgba(232,234,240,0.4)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s, gap 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = accent;
                e.currentTarget.style.gap = "0.75rem";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(232,234,240,0.4)";
                e.currentTarget.style.gap = "0.5rem";
              }}
            >
              Live Demo <ArrowIcon />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Mockup Column ── */}
      <motion.div
        className="proj-mock"
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        style={{
          direction: "ltr",
          display: "flex",
          justifyContent: reverse ? "flex-start" : "flex-end",
        }}
      >
        <MockupStack project={project} reverse={reverse} />
      </motion.div>
    </motion.div>
  );
}

/* ─── Floating background number ─── */
function FloatingNumber({ number, accent }) {
  return (
    <div
      style={{
        position: "absolute",
        right: -40,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(8rem, 18vw, 16rem)",
        fontWeight: 900,
        letterSpacing: "-0.06em",
        color: "transparent",
        WebkitTextStroke: `1px ${accent}12`,
        userSelect: "none",
        pointerEvents: "none",
        lineHeight: 1,
        zIndex: 0,
      }}
    >
      {number}
    </div>
  );
}

/* ─── Section ─── */
export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ padding: "5rem 2rem", position: "relative", overflow: "hidden" }}
    >
      {/* Background noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(ellipse, rgba(34,211,238,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* ── Section Header ── */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity, marginBottom: "2rem" }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <h2 style={{ margin: 0, lineHeight: 0.88, letterSpacing: "-0.05em", display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap" }}>
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
                  Projects.
                </span>
              </h2>
            </div>

            {/* Live count badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.6rem 1.2rem",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                background: "rgba(255,255,255,0.02)",
                fontFamily: "monospace",
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 10px rgba(74,222,128,0.7)",
                  animation: "projectPulse 2s infinite",
                }}
              />
              <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {projects.length} Live Projects
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              marginTop: "1.5rem",
              height: 1,
              background: "linear-gradient(to right, rgba(129,140,248,0.35), rgba(34,211,238,0.15), transparent)",
            }}
          />
        </motion.div>

        {/* ── Project Rows ── */}
        <div style={{ position: "relative" }}>
          {projects.map((project, i) => (
            <div key={project.id} style={{ position: "relative" }}>
              <ProjectRow project={project} index={i} />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes projectPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(74,222,128,0.7); }
          50%       { box-shadow: 0 0 20px rgba(74,222,128,0.2); }
        }
        .proj-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
          padding: 2.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          position: relative;
        }
        @media (max-width: 900px) {
          .proj-row {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            direction: ltr !important;
          }
          .proj-row .proj-mock {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}