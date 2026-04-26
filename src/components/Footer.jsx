import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Harsh-Yadav029",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-kumar-yadav-a22092297/",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/HAR5H_YADAV",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/HARSHKUMARYADAV/",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
        <path d="M13.483 0a1.374 1.374 0 00-.961.414l-11.71 11.593a1.384 1.384 0 000 1.981l1.178 1.166a1.391 1.391 0 001.983 0l11.593-11.712a1.384 1.384 0 000-1.981L14.387.414A1.374 1.374 0 0013.483 0zM4.574 13.474a1.384 1.384 0 000 1.981l1.178 1.166a1.391 1.391 0 001.983 0l1.166-1.178a1.384 1.384 0 000-1.981l-1.178-1.166a1.391 1.391 0 00-1.983 0l-1.166 1.178zM22.29 13.474a1.384 1.384 0 000 1.981l-1.178 1.166a1.391 1.391 0 00-1.983 0l-1.166-1.178a1.384 1.384 0 000-1.981l1.178-1.166a1.391 1.391 0 001.983 0l1.166 1.178zM13.483 24a1.374 1.374 0 00.961-.414l11.71-11.593a1.384 1.384 0 000-1.981l-1.178-1.166a1.391 1.391 0 00-1.983 0l-11.593 11.712a1.384 1.384 0 000 1.981l1.178 1.166a1.374 1.374 0 00.904.414z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "3.5rem 2rem 2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "#05070a",
      }}
    >
      {/* Ambient glows — cyan left, violet right */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "-5%",
        width: "45vw", height: "40vw", pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 65%)",
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", right: "-5%",
        width: "45vw", height: "40vw", pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 65%)",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Big name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#e8eaf0",
            lineHeight: 1,
            margin: "0 0 1.2rem 0",
          }}
        >
          Harsh Kumar Yadav
        </motion.h2>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(34,211,238,0.45), rgba(139,92,246,0.45), transparent)",
            margin: "0 auto 1.75rem",
            maxWidth: 280,
            transformOrigin: "center",
          }}
        />

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "1.25rem" }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              style={{
                color: "rgba(232,234,240,0.65)",
                textDecoration: "none",
                transition: "color 0.2s, transform 0.2s",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#22d3ee";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(232,234,240,0.65)";
                e.currentTarget.style.transform = "none";
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontStyle: "italic",
            fontSize: "0.85rem",
            color: "rgba(232,234,240,0.55)",
            letterSpacing: "0.015em",
            margin: "0 0 2rem 0",
          }}
        >
          "Build things that matter. Ship things that last."
        </motion.p>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: "monospace",
            fontSize: "0.68rem",
            color: "rgba(232,234,240,0.45)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          © 2026 Harsh Kumar Yadav. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
