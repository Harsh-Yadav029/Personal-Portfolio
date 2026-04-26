import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#stack" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300"
      style={{
        padding: "1.1rem 3rem",
        background: scrolled ? "rgba(7,8,12,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      {/* Logo — H mark + Harsh */}
      <a href="#" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:opacity-80"
          style={{ background: "#22d3ee" }}
        >
          <span style={{ color: "#07080c", fontWeight: 900, fontSize: "0.9rem", fontFamily: "monospace" }}>H</span>
        </div>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "0.9rem",
            color: "#22d3ee",
            letterSpacing: "0.1em",
            fontWeight: 700,
          }}
        >
          HARSH
        </span>
      </a>

      {/* Center Nav Links */}
      <nav className="hidden lg:flex items-center" style={{ gap: "2.5rem" }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "monospace",
              fontSize: "0.82rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(232,234,240,0.45)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#e8eaf0")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(232,234,240,0.45)")}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA — Get In Touch */}
      <div className="flex items-center gap-4">
        <a
          href="mailto:harshyadav2027@gmail.com"
          className="hidden sm:flex items-center gap-2 transition-all duration-200 hover:opacity-80 hover:-translate-y-px"
          style={{
            padding: "0.55rem 1.25rem",
            background: "#22d3ee",
            color: "#07080c",
            fontFamily: "monospace",
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            fontWeight: 700,
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          {/* Green "available" dot */}
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#07080c",
              flexShrink: 0,
              boxShadow: "0 0 0 0 rgba(7,8,12,0.4)",
              animation: "navDotPulse 2s infinite",
            }}
          />
          Get In Touch
        </a>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5">
          <div className="w-6 h-0.5 bg-white/60 rounded-full" />
          <div className="w-6 h-0.5 bg-white/60 rounded-full" />
        </button>
      </div>

      <style>{`
        @keyframes navDotPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </header>
  );
}