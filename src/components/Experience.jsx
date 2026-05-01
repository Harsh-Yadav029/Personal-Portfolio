import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data/portfolioData";

/* ─── Accent colors per entry ─── */
const accents = ["#22d3ee", "#a78bfa", "#f472b6"];

/* ─── Animated SVG branch line ─── */
function BranchLine({ side, accent }) {
  return (
    <svg
      width="80"
      height="2"
      viewBox="0 0 80 2"
      style={{
        position: "absolute",
        top: "50%",
        [side === "left" ? "right" : "left"]: "100%",
        transform: "translateY(-50%)",
        overflow: "visible",
      }}
    >
      <motion.line
        x1={side === "left" ? 80 : 0}
        y1="1"
        x2={side === "left" ? 0 : 80}
        y2="1"
        stroke={accent}
        strokeWidth="1"
        strokeDasharray="80"
        strokeDashoffset="80"
        initial={{ strokeDashoffset: 80 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        strokeOpacity="0.5"
      />
    </svg>
  );
}

/* ─── Tree Node ─── */
function TreeNode({ accent, index }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer ring pulse */}
      <motion.div
        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: index * 0.4 }}
        style={{
          position: "absolute",
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: `1px solid ${accent}`,
          opacity: 0.4,
        }}
      />
      {/* Middle ring */}
      <div
        style={{
          position: "absolute",
          width: 18,
          height: 18,
          borderRadius: "50%",
          border: `1px solid ${accent}55`,
          background: "rgba(7,8,12,0.98)",
        }}
      />
      {/* Core dot */}
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: accent,
          boxShadow: `0 0 12px ${accent}88, 0 0 24px ${accent}44`,
          position: "relative",
          zIndex: 1,
        }}
      />
    </motion.div>
  );
}

/* ─── Experience Card ─── */
function ExperienceCard({ exp, index, accent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="exp-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 60px 1fr",
        alignItems: "center",
        position: "relative",
        minHeight: 200,
      }}
    >
      {/* Left side content or spacer */}
      <div className="exp-left" style={{ position: "relative" }}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            style={{ paddingRight: "2rem" }}
          >
            <CardContent exp={exp} accent={accent} side="left" />
          </motion.div>
        ) : null}
        {isLeft && <div className="branch-line-desktop"><BranchLine side="left" accent={accent} /></div>}
      </div>

      {/* Center node column */}
      <div className="exp-center" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <TreeNode accent={accent} index={index} />
      </div>

      {/* Right side content or spacer */}
      <div className="exp-right" style={{ position: "relative" }}>
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            style={{ paddingLeft: "2rem" }}
          >
            <CardContent exp={exp} accent={accent} side="right" />
          </motion.div>
        ) : (
          /* Mobile content placeholder */
          <div className="exp-mobile-content" style={{ display: "none", paddingLeft: "1.5rem" }}>
             <CardContent exp={exp} accent={accent} side="right" />
          </div>
        )}
        {!isLeft && <div className="branch-line-desktop"><BranchLine side="right" accent={accent} /></div>}
      </div>
    </div>
  );
}

/* ─── Card Content ─── */
function CardContent({ exp, accent, side }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        border: `1px solid ${hovered ? accent + "33" : "rgba(255,255,255,0.06)"}`,
        background: hovered ? "rgba(10,12,18,0.98)" : "rgba(10,12,18,0.6)",
        padding: "1.75rem",
        transition: "border-color 0.35s, background 0.35s, transform 0.3s, box-shadow 0.35s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${accent}0d` : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent glow corner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          [side === "left" ? "right" : "left"]: 0,
          width: 120,
          height: 120,
          background: `radial-gradient(ellipse at ${side === "left" ? "100% 0%" : "0% 0%"}, ${accent}10 0%, transparent 70%)`,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.4s",
        }}
      />

      {/* Period badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.25rem 0.65rem",
          borderRadius: 6,
          background: `${accent}12`,
          border: `1px solid ${accent}25`,
          marginBottom: "0.9rem",
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: accent, boxShadow: `0 0 6px ${accent}` }} />
        <span
          style={{
            fontFamily: "'Inter', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: accent,
            fontWeight: 700,
          }}
        >
          {exp.period}
        </span>
      </div>

      {/* Role */}
      <h3
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
          fontWeight: 900,
          color: hovered ? "#e8eaf0" : "rgba(232,234,240,0.85)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          margin: "0 0 0.3rem 0",
          transition: "color 0.3s",
        }}
      >
        {exp.role}
      </h3>

      {/* Company + type */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            color: accent,
            fontWeight: 600,
          }}
        >
          {exp.company}
        </span>
        <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "0.6rem" }}>◆</span>
        <span
          style={{
            fontFamily: "'Inter', monospace",
            fontSize: "0.6rem",
            color: "rgba(255,255,255,0.25)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontWeight: 600,
          }}
        >
          {exp.type}
        </span>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: `linear-gradient(to right, ${accent}20, transparent)`, marginBottom: "0.9rem" }} />

      {/* Bullets */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
        {exp.bullets.map((bullet, j) => (
          <li key={j} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: accent,
                opacity: 0.5,
                flexShrink: 0,
                marginTop: "0.45rem",
                boxShadow: `0 0 6px ${accent}60`,
              }}
            />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                lineHeight: 1.65,
                color: "rgba(232,234,240,0.4)",
                margin: 0,
                fontWeight: 400,
              }}
            >
              {bullet}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Animated Trunk ─── */
function AnimatedTrunk() {
  return (
    <div
      className="exp-trunk"
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        transform: "translateX(-50%)",
        width: 1,
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Static base line */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.04)",
        }}
      />
      {/* Animated scroll indicator */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #22d3ee44, #a78bfa33, #f472b622, transparent)",
          transformOrigin: "top",
        }}
      />
    </div>
  );
}

/* ─── Section ─── */
export default function Experience() {
  const sectionRef = useRef(null);

  return (
    <section id="experience" ref={sectionRef} style={{ padding: "5rem 2rem", position: "relative", overflow: "hidden" }}>
      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "20%", left: "-8%", width: "45vw", height: "45vw", background: "radial-gradient(ellipse, rgba(34,211,238,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: "35vw", height: "35vw", background: "radial-gradient(ellipse, rgba(167,139,250,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "3.5rem" }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
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
                Work
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
                History.
              </span>
            </h2>
          </div>


          {/* Divider */}
          <div style={{ marginTop: "1.5rem", height: 1, background: "linear-gradient(to right, rgba(34,211,238,0.3), rgba(167,139,250,0.15), transparent)" }} />
        </motion.div>

        {/* ── Tree ── */}
        <div style={{ position: "relative" }}>
          <AnimatedTrunk />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experience.map((exp, i) => (
              <ExperienceCard
                key={exp.company + exp.role}
                exp={exp}
                index={i}
                accent={accents[i % accents.length]}
              />
            ))}
          </div>

          {/* Root cap */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "backOut", delay: 0.4 }}
            style={{
              position: "absolute",
              bottom: -16,
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              height: 32,
              background: "linear-gradient(to bottom, rgba(244,114,182,0.4), transparent)",
              zIndex: 2,
            }}
          />
        </div>

      </div>

      <style>{`
        @keyframes expPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(74,222,128,0.7); }
          50% { box-shadow: 0 0 16px rgba(74,222,128,0.15); }
        }
        @media (max-width: 850px) {
          .exp-grid {
            grid-template-columns: 40px 1fr !important;
            gap: 1rem !important;
            min-height: auto !important;
            margin-bottom: 2.5rem;
          }
          .exp-trunk {
            left: 20px !important;
          }
          .exp-center {
            justify-content: flex-start !important;
          }
          .exp-left {
            display: none !important;
          }
          .exp-right {
            padding-left: 0.5rem !important;
          }
          .exp-mobile-content {
            display: block !important;
          }
          .branch-line-desktop {
            display: none !important;
          }
          #experience { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}