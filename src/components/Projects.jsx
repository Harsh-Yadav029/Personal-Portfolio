import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/portfolioData";

const Mockups = {
  lumen: "/lumen_mockup_1777129062324.png",
  vidyamitra: "/vidyamitra_mockup_1777129077347.png",
  "mern-blog": "/mern_blog_mockup_1777129092544.png",
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "none", stroke: "currentColor", strokeWidth: 2 }}>
    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Featured Card (Large) ─── */
function FeaturedCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const accent = project.accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: "1 / -1",
        position: "relative",
        borderRadius: 28,
        overflow: "hidden",
        border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.07)"}`,
        background: "rgba(10,12,18,0.95)",
        transition: "border-color 0.4s",
        cursor: "default",
      }}
    >
      {/* Accent glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 0% 0%, ${accent}18 0%, transparent 55%)`,
        transition: "opacity 0.4s",
        opacity: hovered ? 1 : 0.4,
      }} />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
        {/* LEFT: Info */}
        <div style={{ flex: "1 1 340px", padding: "3rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {/* Top row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{
              fontFamily: "monospace", fontSize: "0.68rem", letterSpacing: "0.35em",
              textTransform: "uppercase", color: accent, fontWeight: 700,
            }}>
              {project.number} — Featured
            </span>
            <span style={{
              fontFamily: "monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.15em",
            }}>{project.year}</span>
          </div>

          {/* Title */}
          <div>
            <h3 style={{
              fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 900,
              color: "#e8eaf0", letterSpacing: "-0.04em", lineHeight: 1, margin: 0,
            }}>{project.name}</h3>
            <p style={{
              fontSize: "1rem", color: accent, fontWeight: 600,
              marginTop: "0.5rem", letterSpacing: "0.01em",
            }}>{project.subtitle}</p>
          </div>

          {/* Description */}
          <p style={{
            fontSize: "0.95rem", lineHeight: 1.8,
            color: "rgba(232,234,240,0.5)", maxWidth: 500,
          }}>
            {project.description}
          </p>

          {/* Metrics */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {project.metrics.map(m => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: "1.6rem", fontWeight: 900, color: "#e8eaf0", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {m.value}
                </span>
                <span style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tech.map(t => (
              <span key={t} style={{
                fontFamily: "monospace", fontSize: "0.68rem", letterSpacing: "0.06em",
                padding: "0.3rem 0.8rem", borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(232,234,240,0.5)",
              }}>{t}</span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: "0.9rem", marginTop: "auto", paddingTop: "0.5rem" }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.7rem 1.5rem", borderRadius: 10,
                background: accent, color: "#07080c",
                fontFamily: "monospace", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.06em", textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 30px ${accent}40`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <GitHubIcon /> View Code
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.7rem 1.5rem", borderRadius: 10,
                background: "transparent", color: "rgba(232,234,240,0.6)",
                fontFamily: "monospace", fontSize: "0.78rem", fontWeight: 600,
                letterSpacing: "0.06em", textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "border-color 0.2s, color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = accent + "60"; e.currentTarget.style.color = "#e8eaf0"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(232,234,240,0.6)"; e.currentTarget.style.transform = "none"; }}
            >
              Live Demo <ArrowIcon />
            </a>
          </div>
        </div>

        {/* RIGHT: Mockup */}
        <div style={{
          flex: "1 1 360px", minHeight: 360,
          position: "relative", overflow: "hidden",
        }}>
          <img
            src={Mockups[project.id]}
            alt={project.name}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              opacity: hovered ? 0.85 : 0.55,
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "opacity 0.5s, transform 0.6s ease",
              display: "block",
            }}
          />
          {/* Overlay gradient */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(10,12,18,0.9) 0%, rgba(10,12,18,0.2) 100%)",
            pointerEvents: "none",
          }} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Standard Card ─── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const accent = project.accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: 24,
        border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.07)"}`,
        background: "rgba(10,12,18,0.95)",
        overflow: "hidden",
        display: "flex", flexDirection: "column",
        transition: "border-color 0.4s, transform 0.3s",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      {/* Accent glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 80% 0%, ${accent}14 0%, transparent 60%)`,
        opacity: hovered ? 1 : 0.3, transition: "opacity 0.4s",
      }} />

      {/* Mockup */}
      <div style={{ position: "relative", overflow: "hidden", height: 200 }}>
        <img
          src={Mockups[project.id]}
          alt={project.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: hovered ? 0.75 : 0.45,
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "opacity 0.5s, transform 0.6s ease",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 40%, rgba(10,12,18,1) 100%)",
        }} />
        {/* Number badge */}
        <span style={{
          position: "absolute", top: 16, left: 20,
          fontFamily: "monospace", fontSize: "0.65rem",
          letterSpacing: "0.3em", fontWeight: 700,
          color: accent, textTransform: "uppercase",
        }}>{project.number}</span>
      </div>

      {/* Content */}
      <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem", position: "relative", zIndex: 1 }}>
        <div>
          <h3 style={{
            fontSize: "1.6rem", fontWeight: 900, color: "#e8eaf0",
            letterSpacing: "-0.03em", lineHeight: 1, margin: 0,
            transition: "color 0.2s", ...(hovered && { color: accent }),
          }}>{project.name}</h3>
          <p style={{ fontSize: "0.82rem", color: "rgba(232,234,240,0.4)", marginTop: "0.3rem", fontWeight: 500 }}>
            {project.subtitle}
          </p>
        </div>

        <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(232,234,240,0.45)", flex: 1 }}>
          {project.description.slice(0, 140)}...
        </p>

        {/* Tech pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tech.slice(0, 5).map(t => (
            <span key={t} style={{
              fontFamily: "monospace", fontSize: "0.63rem", letterSpacing: "0.05em",
              padding: "0.25rem 0.65rem", borderRadius: 5,
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
              color: "rgba(232,234,240,0.4)",
            }}>{t}</span>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)",
          marginTop: "auto",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 8px rgba(74,222,128,0.6)" }} />
            <span style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Production
            </span>
          </div>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.45rem 0.9rem", borderRadius: 8,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(232,234,240,0.55)", fontSize: "0.7rem", fontFamily: "monospace",
                fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = accent; e.currentTarget.style.borderColor = accent + "44"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(232,234,240,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <GitHubIcon /> Code
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.45rem 0.9rem", borderRadius: 8,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(232,234,240,0.55)", fontSize: "0.7rem", fontFamily: "monospace",
                fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = accent; e.currentTarget.style.borderColor = accent + "44"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(232,234,240,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              Demo <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ─── */
export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" style={{ padding: "7rem 2rem", position: "relative" }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "20%", right: "-10%",
        width: "50vw", height: "50vw", pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 65%)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <span style={{
            fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.45em",
            textTransform: "uppercase", color: "#818cf8", fontWeight: 700, display: "block", marginBottom: "1rem",
          }}>
            Work
          </span>
          <h2 style={{ margin: 0, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
            <span style={{ display: "block", fontSize: "clamp(3.5rem, 7vw, 6rem)", fontWeight: 900, color: "#e8eaf0" }}>
              Selected
            </span>
            <span style={{ display: "block", fontSize: "clamp(3.5rem, 7vw, 6rem)", fontWeight: 900, fontStyle: "italic", color: "rgba(232,234,240,0.15)" }}>
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Featured */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
          {featured.map(p => <FeaturedCard key={p.id} project={p} />)}
        </div>

        {/* Rest */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {rest.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}