import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { TerminalBoot } from "./components/TerminalBoot";
import BackgroundLayer from "./components/BackgroundLayer";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";

function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    // Initialize Lenis for "Apple-smooth" scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo Out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    window.lenis = lenis;
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Ensure scroll height updates on resize
    const onResize = () => lenis.resize();
    window.addEventListener('resize', onResize);

    // Sequence for boot transition
    const timer = setTimeout(() => setIsBooting(false), 2600);

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  if (isBooting) return <TerminalBoot onComplete={() => setIsBooting(false)} />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen selection:bg-cyan-500/30"
    >
      <BackgroundLayer />
      <div className="relative z-10">
        <Navbar />
        <main className="overflow-visible">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </motion.div>
  );
}

export default App;