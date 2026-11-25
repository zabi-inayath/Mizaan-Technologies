import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Home from "./routes/index";
import About from "./routes/about";
import Contact from "./routes/contact";
import Privacy from "./routes/privacy";
import Projects from "./routes/projects";
import Services from "./routes/services";
import Sitemap from "./routes/sitemap";
import Terms from "./routes/terms";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      return;
    }
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      infinite: false,
    });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    lenis.scrollTo(0, { immediate: true });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView();
      });
    }
  }, [location.hash, location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}
