import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { personal } from "../data/portfolioData";

/* ─── Icon Components ─── */
const SendIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "none", stroke: "currentColor", strokeWidth: 2 }}>
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "none", stroke: "currentColor", strokeWidth: 2 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ─── 3D Contact Card ─── */
function ContactCard() {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      style={{
        perspective: 1000,
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <motion.div
        animate={{
          rotateY: mousePos.x * 15,
          rotateX: -mousePos.y * 15,
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{
          background: "rgba(10,12,18,0.7)",
          backdropFilter: "blur(20px)",
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "2.5rem",
          boxShadow: hovered 
            ? "0 40px 100px rgba(0,0,0,0.6), 0 0 40px rgba(34,211,238,0.05)"
            : "0 20px 50px rgba(0,0,0,0.4)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${50 + mousePos.x * 100}% ${50 + mousePos.y * 100}%, rgba(34,211,238,0.1), transparent 50%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s",
            pointerEvents: "none",
          }}
        />

        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  border: "1px solid rgba(255,255,255,0.06)", 
                  borderRadius: 12, 
                  padding: "0.8rem 1rem", 
                  color: "#fff", 
                  fontSize: "0.9rem",
                  outline: "none",
                  transition: "border-color 0.3s, background 0.3s",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#22d3ee55"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.06)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  border: "1px solid rgba(255,255,255,0.06)", 
                  borderRadius: 12, 
                  padding: "0.8rem 1rem", 
                  color: "#fff", 
                  fontSize: "0.9rem",
                  outline: "none",
                  transition: "border-color 0.3s, background 0.3s",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#22d3ee55"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.06)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>Message</label>
            <textarea 
              placeholder="How can I help you?"
              rows={4}
              style={{ 
                background: "rgba(255,255,255,0.03)", 
                border: "1px solid rgba(255,255,255,0.06)", 
                borderRadius: 12, 
                padding: "0.8rem 1rem", 
                color: "#fff", 
                fontSize: "0.9rem",
                outline: "none",
                transition: "border-color 0.3s, background 0.3s",
                resize: "none",
              }}
              onFocus={(e) => { e.target.style.borderColor = "#22d3ee55"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.06)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: "0.5rem",
              background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)",
              color: "#000",
              border: "none",
              borderRadius: 12,
              padding: "1rem",
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 20px rgba(34,211,238,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Send Message
            <SendIcon />
          </button>
        </form>
      </motion.div>
    </div>
  );
}

/* ─── Info Row ─── */
function InfoRow({ label, value, icon, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", padding: "1.25rem", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", transition: "border-color 0.3s, background 0.3s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent + "33"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 10, background: accent + "15", border: `1px solid ${accent}33`, display: "flex", alignItems: "center", justifyCenter: "center", color: accent, display: "flex", justifyContent: "center" }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "0.2rem" }}>{label}</div>
        <div style={{ fontSize: "0.95rem", color: "#e8eaf0", fontWeight: 600 }}>{value}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);

  return (
    <section id="contact" ref={sectionRef} style={{ padding: "5rem 2rem", position: "relative", overflow: "hidden" }}>
      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "10%", left: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(ellipse, rgba(34,211,238,0.03) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: "40vw", height: "40vw", background: "radial-gradient(ellipse, rgba(129,140,248,0.03) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "4rem" }}
        >
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
              Get in
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
              Touch.
            </span>
          </h2>
          {/* Divider */}
          <div
            style={{
              marginTop: "1.5rem",
              height: 1,
              background: "linear-gradient(to right, rgba(34,211,238,0.35), rgba(129,140,248,0.15), transparent)",
            }}
          />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "rgba(232,234,240,0.45)", maxWidth: 440 }}>
              Currently open for new opportunities and creative collaborations. Let's build something exceptional together.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <InfoRow 
                label="Email Address" 
                value={personal.email} 
                icon={<MailIcon />} 
                accent="#22d3ee"
              />
              <div style={{ display: "flex", gap: "1rem" }}>
                <a 
                  href={`mailto:${personal.email}`}
                  style={{ 
                    flex: 1, 
                    padding: "1rem", 
                    borderRadius: 12, 
                    background: "rgba(255,255,255,0.03)", 
                    border: "1px solid rgba(255,255,255,0.06)", 
                    color: "#fff", 
                    textDecoration: "none", 
                    fontSize: "0.7rem", 
                    fontWeight: 700, 
                    textTransform: "uppercase", 
                    letterSpacing: "0.1em", 
                    textAlign: "center",
                    transition: "background 0.3s, border-color 0.3s"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(34,211,238,0.05)"; e.currentTarget.style.borderColor = "#22d3ee33"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
                >
                  Send Direct Mail
                </a>
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  style={{ 
                    flex: 1, 
                    padding: "1rem", 
                    borderRadius: 12, 
                    background: "rgba(255,255,255,0.03)", 
                    border: "1px solid rgba(255,255,255,0.06)", 
                    color: "#fff", 
                    textDecoration: "none", 
                    fontSize: "0.7rem", 
                    fontWeight: 700, 
                    textTransform: "uppercase", 
                    letterSpacing: "0.1em", 
                    textAlign: "center",
                    transition: "background 0.3s, border-color 0.3s"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(129,140,248,0.05)"; e.currentTarget.style.borderColor = "#818cf833"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", paddingTop: "1rem" }}>
              {[
                { name: "GitHub", url: personal.links.github },
                { name: "LinkedIn", url: personal.links.linkedin },
                { name: "Instagram", url: personal.links.instagram },
                { name: "LeetCode", url: personal.links.leetcode }
              ].map(social => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: "0.58rem", 
                    color: "rgba(255,255,255,0.25)", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.12em", 
                    fontWeight: 600,
                    padding: "0.4rem 0.8rem",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.04)",
                    background: "rgba(255,255,255,0.01)",
                    textDecoration: "none",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.25)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; e.currentTarget.style.background = "rgba(255,255,255,0.01)"; }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <ContactCard />
          </motion.div>
        </div>

      </div>

      <style>{`
        @keyframes contactPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(34,211,238,0.3); }
          50% { box-shadow: 0 0 20px rgba(34,211,238,0.1); }
        }
        @media (max-width: 900px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}