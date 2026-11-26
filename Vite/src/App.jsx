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

const SITE_URL = "https://mizaantech.co.in";

const routeSeoMap = {
  "/": {
    title: "Mizaan Technologies | Custom Software, Web, Mobile, ERP & AI Automation",
    description:
      "Mizaan Technologies builds custom software, high-performance websites, mobile apps, ERP & CRM systems, POS platforms, e-commerce stores, and intelligent AI automation.",
    name: "Home",
  },
  "/services": {
    title: "Services & Solutions | Web, Mobile, ERP, POS & AI — Mizaan Technologies",
    description:
      "Explore Mizaan Technologies services: custom software, website development, mobile apps, enterprise ERP, CRM, POS systems, e-commerce, and AI workflow automation.",
    name: "Services",
  },
  "/projects": {
    title: "Products & Case Studies | Mizaan POS, Zafaf Atelier, NFC & AI — Mizaan Technologies",
    description:
      "Browse live products and case studies by Mizaan Technologies including Mizaan POS, Zafaf Atelier, Mizaan NFC + QR, financial SaaS, and logistics apps.",
    name: "Projects",
  },
  "/about": {
    title: "About Us | Engineering Studio & Leadership — Mizaan Technologies",
    description:
      "Learn about Mizaan Technologies in Vaniyambadi, Tamil Nadu—our engineering-first ethos, 100+ delivered systems, and global client partnerships.",
    name: "About Us",
  },
  "/contact": {
    title: "Contact & Discuss Your Project | Mizaan Technologies",
    description:
      "Start a conversation with Mizaan Technologies. Request a custom software, website, mobile app, ERP, POS, or AI automation consultation.",
    name: "Contact",
  },
  "/privacy": {
    title: "Privacy Policy | Mizaan Technologies",
    description:
      "Read how Mizaan Technologies safeguards client data, source code confidentiality, NDA compliance, and intellectual property.",
    name: "Privacy Policy",
  },
  "/terms": {
    title: "Terms of Service | Mizaan Technologies",
    description:
      "Terms of Service governing custom software engagements, milestone billing, 100% client IP ownership, and post-launch warranty.",
    name: "Terms of Service",
  },
  "/sitemap": {
    title: "Sitemap | Mizaan Technologies",
    description:
      "Complete navigation index of Mizaan Technologies pages, engineering capabilities, products, and legal policies.",
    name: "Sitemap",
  },
};

function upsertMeta(selector, attrName, attrValue, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalized = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    const seo = routeSeoMap[normalized] || routeSeoMap["/"];
    const canonicalUrl = `${SITE_URL}${normalized === "/" ? "/" : normalized}`;

    document.title = seo.title;
    upsertMeta('meta[name="title"]', "name", "title", seo.title);
    upsertMeta('meta[name="description"]', "name", "description", seo.description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const breadcrumbItems =
      normalized === "/"
        ? [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }]
        : [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: seo.name, item: canonicalUrl },
          ];

    let breadcrumbScript = document.getElementById("route-breadcrumb-jsonld");
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement("script");
      breadcrumbScript.id = "route-breadcrumb-jsonld";
      breadcrumbScript.type = "application/ld+json";
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });
  }, [pathname]);

  return null;
}

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
      <RouteSeo />
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
