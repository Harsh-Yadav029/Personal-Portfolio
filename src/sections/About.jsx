import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [imgError, setImgError] = useState(false);
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "10%", left: "-5%",
        width: "45vw", height: "45vw", pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 65%)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "3rem" }}
        >
          <div>

            <h2
              style={{
                margin: 0,
                lineHeight: 0.88,
                letterSpacing: "-0.05em",
                display: "flex",
                alignItems: "baseline",
                gap: "0.6rem",
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
                About
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
                Me.
              </span>
            </h2>
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

        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "6rem",
          flexWrap: "wrap",
        }}>

          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              flex: 1,
              minWidth: 300,
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              textAlign: "left"
            }}
          >

            {/* Greeting headline */}
            <h2 style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", // Slightly reduced scale for better balance
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "#e8eaf0",
              margin: "0.25rem 0 0.5rem 0",
            }}>
              Hi, I'm{" "}
              <span style={{
                background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Harsh
              </span>
            </h2>

            {/* Role */}
            <p style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "#22d3ee",
              letterSpacing: "0.02em",
              margin: 0,
            }}>
              Full-Stack Developer &amp; AI Engineer
            </p>

            {/* Bio */}
            <p style={{
              fontSize: "1.1rem", // Increased from 1.05rem for better hierarchy
              lineHeight: 1.75,
              color: "rgba(232,234,240,0.6)",
              maxWidth: "540px",
              margin: 0,
            }}>
              I craft intelligent digital solutions that blend robust full-stack
              engineering with cutting-edge AI. Specialising in RAG pipelines,
              autonomous agents, and scalable MERN architectures — let's turn
              your ideas into production-ready systems.
            </p>

            {/* Stats */}
            <div style={{
              display: "flex",
              gap: "2.75rem",
              flexWrap: "wrap",
              padding: "1.5rem 0",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              {[
                { n: "5+", l: "Projects Shipped" },
                { n: "30+", l: "Active Users" },
                { n: "300+", l: "LeetCode" },
              ].map(s => (
                <div key={s.l} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#e8eaf0",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}>{s.n}</span>
                  <span style={{
                    fontFamily: "monospace",
                    fontSize: "0.64rem",
                    color: "rgba(232,234,240,0.28)",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                  }}>{s.l}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  padding: "0.9rem 2.2rem",
                  background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                  color: "#07080c",
                  fontFamily: "monospace",
                  fontSize: "0.82rem",
                  letterSpacing: "0.07em",
                  fontWeight: 700,
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(99,102,241,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Contact Me →
              </a>
              <a
                href="/Resume-Harsh.pdf"
                download
                style={{
                  padding: "0.9rem 2.2rem",
                  background: "transparent",
                  color: "#e8eaf0",
                  fontFamily: "monospace",
                  fontSize: "0.82rem",
                  letterSpacing: "0.07em",
                  fontWeight: 600,
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, transform 0.2s, background 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.background = "rgba(34,211,238,0.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                ↓ Download CV
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Blob Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            style={{ flexShrink: 0, position: "relative" }}
          >
            {/* Glow halo */}
            <div style={{
              position: "absolute", inset: -4,
              borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
              background: "linear-gradient(135deg, rgba(99,102,241,0.45), rgba(34,211,238,0.45))",
              filter: "blur(3px)",
              zIndex: 0,
              animation: "morphBlob 14s ease-in-out infinite",
            }} />

            {/* Blob with Image */}
            <div style={{
              width: 340,
              height: 380,
              borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
              background: "rgba(16,18,26,0.4)",
              border: "1px solid rgba(34,211,238,0.2)",
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
              animation: "morphBlob 14s ease-in-out infinite",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* Profile Image */}
              {!imgError ? (
                <img
                  src="/harsh.png"
                  alt="Harsh Kumar Yadav"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "contrast(1.05) brightness(1.05)",
                  }}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: "#07080c",
                  letterSpacing: "-0.05em",
                  boxShadow: "0 0 40px rgba(34,211,238,0.2)",
                }}>
                  HKY
                </div>
              )}

              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 60%, rgba(7,8,12,0.8) 100%)",
                pointerEvents: "none",
              }} />
            </div>

            {/* Status badge */}
            <div style={{
              position: "absolute",
              bottom: -16, right: -16,
              padding: "0.55rem 1rem",
              background: "rgba(7,8,12,0.98)",
              border: "1px solid rgba(34,211,238,0.2)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              zIndex: 2,
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                boxShadow: "0 0 8px rgba(74,222,128,0.7)",
                animation: "statusPulse 2s infinite",
              }} />
              <span style={{
                fontFamily: "monospace",
                fontSize: "0.68rem",
                color: "rgba(232,234,240,0.8)",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}>
                Open to Opportunities
              </span>
            </div>

            <style>{`
              @keyframes morphBlob {
                0%   { border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%; }
                25%  { border-radius: 50% 50% 40% 60% / 60% 40% 55% 45%; }
                50%  { border-radius: 40% 60% 60% 40% / 50% 50% 45% 55%; }
                75%  { border-radius: 55% 45% 50% 50% / 40% 60% 50% 50%; }
                100% { border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%; }
              }
              @keyframes statusPulse {
                0%,100% { box-shadow: 0 0 8px rgba(74,222,128,0.7); }
                50%     { box-shadow: 0 0 16px rgba(74,222,128,0.2); }
              }
            `}</style>
          </motion.div>

        </div>
      </div>
    </section>
  );
}