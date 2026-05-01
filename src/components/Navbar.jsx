import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolling = useRef(false);

  useEffect(() => {
    // ─── Scroll listener for background opacity ───
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // ─── IntersectionObserver for active section tracking (High Performance) ───
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the upper part of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      // Don't update active section while we are manually scrolling from a click
      if (isScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const link = navLinks.find((l) => l.href === `#${id}`);
          if (link) {
            setActiveSection(link.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToSection = (e, href, label) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close menu on click
    const element = document.querySelector(href);
    if (element) {
      isScrolling.current = true;
      setActiveSection(label);

      const offset = 80;

      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -offset,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      // Reset the flag after scroll completes
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "0.8rem 2rem" : "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        background: scrolled ? "rgba(7, 8, 12, 0.4)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent"
      }}
    >
      {/* Premium Logo Design */}
      <a
        href="#hero"
        onClick={(e) => scrollToSection(e, "#hero", "Home")}
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          gap: "1rem",
          position: "relative",
          zIndex: 1002 // Above mobile menu
        }}
        className="group"
      >
        <div style={{
          width: 44,
          height: 44,
          borderRadius: "14px",
          background: "rgba(10,12,18,0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "2px 0",
          transition: "all 0.4s ease",
        }}>
          {/* Animated background accent */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(45deg, transparent, rgba(34,211,238,0.1), transparent)",
            transform: "translateX(-100%)",
            transition: "transform 0.6s ease",
          }} className="group-hover:translate-x-[100%]" />

          <span style={{
            color: "#fff",
            fontSize: "1rem",
            fontWeight: 800,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.05em",
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center"
          }}>
            H
            <span style={{ color: "#22d3ee", marginLeft: "-1px" }}>Y</span>
          </span>

          {/* Corner accents */}
          <div style={{ position: "absolute", top: 4, left: 4, width: 4, height: 4, borderTop: "1px solid rgba(34,211,238,0.4)", borderLeft: "1px solid rgba(34,211,238,0.4)" }} />
          <div style={{ position: "absolute", bottom: 4, right: 4, width: 4, height: 4, borderBottom: "1px solid rgba(34,211,238,0.4)", borderRight: "1px solid rgba(34,211,238,0.4)" }} />
        </div>
      </a>

      {/* Floating Island Nav (Desktop) */}
      <nav
        style={{
          background: scrolled ? "rgba(10,12,18,0.8)" : "rgba(10,12,18,0.4)",
          backdropFilter: "blur(20px)",
          padding: "0.4rem 0.5rem",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(34,211,238,0.05)" : "0 4px 12px rgba(0,0,0,0.1)",
          transition: "all 0.4s ease",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href, link.label)}
            style={{
              padding: "0.6rem 1.25rem",
              borderRadius: "100px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: activeSection === link.label ? "#fff" : "rgba(255,255,255,0.45)",
              textDecoration: "none",
              position: "relative",
              transition: "color 0.3s ease",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.01em"
            }}
          >
            {activeSection === link.label && (
              <motion.div
                layoutId="navActive"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "100px",
                  zIndex: -1,
                }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {link.label}
            {activeSection === link.label && (
              <motion.div
                layoutId="navUnderline"
                style={{
                  position: "absolute",
                  bottom: "0.4rem",
                  left: "1.25rem",
                  right: "1.25rem",
                  height: "1px",
                  background: "linear-gradient(to right, transparent, #22d3ee, transparent)",
                }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Right Action */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", position: "relative", zIndex: 1002 }}>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact", "Contact")}
          className="nav-cta"
          style={{
            padding: "0.65rem 1.4rem",
            borderRadius: "100px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.9)",
            fontSize: "0.72rem",
            fontWeight: 600,
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)",
            letterSpacing: "0.02em"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "rgba(255,255,255,0.9)";
          }}
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          style={{
            display: "none",
            background: mobileMenuOpen ? "#22d3ee" : "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "0.7rem",
            borderRadius: "12px",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center"
          }}
          className="mobile-toggle"
        >
          <motion.div 
            animate={mobileMenuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            style={{ width: 20, height: 2, background: mobileMenuOpen ? "#000" : "#fff", borderRadius: 10 }} 
          />
          <motion.div 
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{ width: 14, height: 2, background: "#fff", borderRadius: 10, alignSelf: "center" }} 
          />
          <motion.div 
            animate={mobileMenuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            style={{ width: 20, height: 2, background: mobileMenuOpen ? "#000" : "#fff", borderRadius: 10 }} 
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "100vh",
              background: "rgba(7, 8, 12, 0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 1001,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
              padding: "2rem"
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={(e) => scrollToSection(e, link.href, link.label)}
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: activeSection === link.label ? "#22d3ee" : "#fff",
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.04em",
                  position: "relative"
                }}
              >
                {link.label}
                {activeSection === link.label && (
                  <motion.div
                    layoutId="mobileNavActive"
                    style={{
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: "#22d3ee",
                      borderRadius: 10
                    }}
                  />
                )}
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={(e) => scrollToSection(e, "#contact", "Contact")}
              style={{
                marginTop: "2rem",
                padding: "1.2rem 3rem",
                background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)",
                borderRadius: "100px",
                color: "#000",
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          header { padding: 1rem !important; }
          .nav-cta { display: none !important; }
        }
        @media (max-width: 900px) {
          nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}